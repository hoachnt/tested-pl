package main

import (
	_ "embed"
	"log"
	"sort"
	"strconv"
	"strings"

	"github.com/gorilla/websocket"
	"github.com/hajimehoshi/ebiten/v2"
	"github.com/hajimehoshi/ebiten/v2/ebitenutil"
	"github.com/hajimehoshi/ebiten/v2/text"
	"golang.org/x/image/font"
	"golang.org/x/image/font/opentype"

	"github.com/hoach-linux/multiplayer-game/game"
	"github.com/hoach-linux/multiplayer-game/user"
)

const (
	screenHeight = 640
	screenWidth  = 480
)

type Game struct {
	conn  *websocket.Conn
	runes []rune
	text  string
}

func NewGame(conn *websocket.Conn) *Game {
	return &Game{
		conn: conn,
	}
}

func (g *Game) Update() error {
	if world.Units[world.MyId].Chat {
		g.runes = ebiten.AppendInputChars(g.runes[:0])

		if len(strings.Split(g.text, "")) < 50 {
			g.text += string(g.runes)
		}

		g.conn.WriteJSON(game.Event{
			Type: game.EventTypeAddText,
			Data: game.EventAddText{
				UnitId:   world.MyId,
				UnitText: g.text,
			},
		})

		if player.RepeatingKeyPressed(ebiten.KeyBackspace) {
			if len(g.text) >= 1 {
				g.text = g.text[:len(g.text)-1]

				g.conn.WriteJSON(game.Event{
					Type: game.EventTypeAddText,
					Data: game.EventAddText{
						UnitId:   world.MyId,
						UnitText: g.text,
					},
				})
			}
		}
	}

	return nil
}

func (g *Game) BoundString(face font.Face, text string) {

}

func (g *Game) Draw(screen *ebiten.Image) {
	DrawImage(screen, g.conn, g)
}

func DrawImage(screen *ebiten.Image, conn *websocket.Conn, g *Game) error {
	frame++

	img, _, err := ebitenutil.NewImageFromFile("sprites/background.png")
	if err != nil {
		return err
	}

	screen.DrawImage(img, nil)

	unitList := []*game.Unit{}
	for _, unit := range world.Units {
		unitList = append(unitList, unit)
	}

	sort.Slice(unitList, func(i, j int) bool {
		return unitList[i].Y < unitList[j].Y
	})

	for _, unit := range unitList {
		op := &ebiten.DrawImageOptions{}

		if unit.HorizontalDirection == game.DirectionLeft {
			op.GeoM.Scale(-1, 1)
			op.GeoM.Translate(16, 0)
		}

		op.GeoM.Translate(unit.X, unit.Y)

		spriteIndex := (frame/7 + unit.Frame) % 4
		img, _, _ = ebitenutil.NewImageFromFile(
			"sprites/" + unit.SpriteName + "_" + unit.Action + "_anim_f" + strconv.Itoa(spriteIndex) + ".png",
		)

		textMetaData := text.BoundString(defaultFont, world.Units[unit.ID].Text)

		ebitenutil.DebugPrintAt(screen, world.Units[unit.ID].Text, int(world.Units[unit.ID].X)+8-textMetaData.Dx()*2, int(world.Units[unit.ID].Y-5))
		screen.DrawImage(img, op)
	}

	player.UserInteraction(conn, world)

	return nil
}

func (g *Game) Layout(outsideWidth, outsideHeight int) (screenWidth, screenHeight int) {
	return 320, 240
}

//go:embed SourceCodePro-Medium.ttf
var myFont []byte
var defaultFont font.Face

var world game.World
var frame int
var img *ebiten.Image
var player user.Player

func init() {
	tt, err := opentype.Parse(myFont)
	if err != nil {
		log.Fatal(err)
	}

	world = game.World{
		IsServer: false,
		Units:    game.Units{},
	}
	player = user.Player{}
	defaultFont, err = opentype.NewFace(tt, &opentype.FaceOptions{
		Size:    13.5,
		DPI:     13.5,
		Hinting: font.HintingNone,
	})

}

func main() {
	c, _, _ := websocket.DefaultDialer.Dial("ws://127.0.0.1:3000/ws", nil)

	go func(c *websocket.Conn) {
		defer c.Close()

		for {
			var event game.Event
			c.ReadJSON(&event)
			world.HandleEvent(&event)
		}
	}(c)

	ebiten.SetWindowSize(screenWidth, screenHeight)
	ebiten.SetWindowTitle("Multiplayer game")
	ebiten.SetWindowResizingMode(ebiten.WindowResizingModeEnabled)
	if err := ebiten.RunGame(NewGame(c)); err != nil {
		log.Fatal(err)
	}
}
