package game

import (
	"encoding/json"
	"math/rand"
	"time"

	uuid "github.com/satori/go.uuid"
)

type Unit struct {
	ID                  string  `json:"id"`
	X                   float64 `json:"x"`
	Y                   float64 `json:"y"`
	SpriteName          string  `json:"sprite_name"`
	Action              string  `json:"action"`
	Frame               int     `json:"frame"`
	HorizontalDirection int     `json:"direction"`
	Chat                bool    `json:"chat"`
	Text                string  `json:"text"`
}
type Units map[string]*Unit

type World struct {
	MyId     string `json:"-"`
	IsServer bool   `json:"-"`
	Units    `json:"units"`
}

type Event struct {
	Type string      `json:"type"`
	Data interface{} `json:"data"`
}
type EventConnect struct {
	Unit
}
type EventMove struct {
	UnitId    string `json:"unit_id"`
	Direction int    `json:"direction"`
}
type EventChat struct {
	UnitId   string `json:"unit_id"`
	UnitChat bool   `json:"unit_chat"`
}
type EventIdle struct {
	UnitId string `json:"unit_id"`
}
type EventInit struct {
	PlayerId string `json:"player_id"`
	Units    Units  `json:"units"`
}
type EventDisconnect struct {
	Unit
}
type EventAddText struct {
	UnitId   string `json:"unit_id"`
	UnitText string `json:"unit_text"`
}

const EventTypeConnect = "connect"
const EventTypeMove = "move"
const EventTypeIdle = "idle"
const EventTypeInit = "init"
const EventTypeDisconnect = "disconnect"
const EventTypeChat = "chat"
const EventTypeAddText = "add_text"

const ActionRun = "run"
const ActionIdle = "idle"

const DirectionUp = 0
const DirectionDown = 1
const DirectionLeft = 2
const DirectionRight = 3

func (world *World) HandleEvent(event *Event) {
	switch event.Type {
	case EventTypeConnect:
		str, _ := json.Marshal(event.Data)
		var ev EventConnect
		json.Unmarshal(str, &ev)

		world.Units[ev.ID] = &ev.Unit
	case EventTypeInit:
		str, _ := json.Marshal(event.Data)
		var ev EventInit
		json.Unmarshal(str, &ev)

		if !world.IsServer {
			world.MyId = ev.PlayerId
			world.Units = ev.Units
		}
	case EventTypeMove:
		str, _ := json.Marshal(event.Data)
		var ev EventMove
		json.Unmarshal(str, &ev)

		unit := world.Units[ev.UnitId]
		unit.Action = ActionRun

		switch ev.Direction {
		case DirectionUp:
			unit.Y--
		case DirectionDown:
			unit.Y++
		case DirectionLeft:
			unit.X--
			unit.HorizontalDirection = ev.Direction
		case DirectionRight:
			unit.X++
			unit.HorizontalDirection = ev.Direction
		}
	case EventTypeIdle:
		str, _ := json.Marshal(event.Data)
		var ev EventIdle
		json.Unmarshal(str, &ev)

		unit := world.Units[ev.UnitId]
		unit.Action = ActionIdle
	case EventTypeDisconnect:
		str, _ := json.Marshal(event.Data)
		var ev EventDisconnect
		json.Unmarshal(str, &ev)

		delete(world.Units, ev.ID)
	case EventTypeChat:
		str, _ := json.Marshal(event.Data)
		var ev EventChat
		json.Unmarshal(str, &ev)

		unit := world.Units[ev.UnitId]
		unit.Chat = !unit.Chat
	case EventTypeAddText:
		str, _ := json.Marshal(event.Data)
		var ev EventAddText
		json.Unmarshal(str, &ev)

		unit := world.Units[ev.UnitId]
		unit.Text = ev.UnitText
	}
}
func (world *World) AddPlayer() *Unit {
	skins := []string{
		"elf_f", "elf_m", "knight_f", "knight_m",
		"lizard_f", "lizard_m", "wizzard_f", "wizzard_m",
	}
	id := uuid.NewV4().String()
	rnd := rand.New(rand.NewSource(time.Now().UnixNano()))

	unit := &Unit{
		ID:         id,
		Action:     ActionIdle,
		X:          rnd.Float64() * 320,
		Y:          rnd.Float64() * 240,
		Frame:      rnd.Intn(4),
		SpriteName: skins[rnd.Intn(len(skins))],
		Chat:       false,
		Text:       "",
	}
	world.Units[id] = unit

	return unit
}
