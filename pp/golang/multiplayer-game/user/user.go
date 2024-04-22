package user

import (
	"github.com/gorilla/websocket"
	"github.com/hajimehoshi/ebiten/v2"
	"github.com/hajimehoshi/ebiten/v2/inpututil"

	"github.com/hoach-linux/multiplayer-game/game"
)

type Player struct {
}
type Game struct {
	conn  *websocket.Conn
	runes []rune
	text  string
}

func (player *Player) UserInteraction(conn *websocket.Conn, world game.World) {
	if player.RepeatingKeyPressed(ebiten.KeyEnter) {
		conn.WriteJSON(game.Event{
			Type: game.EventTypeChat,
			Data: game.EventChat{
				UnitId:   world.MyId,
				UnitChat: world.Units[world.MyId].Chat,
			},
		})
	}
	if ebiten.IsWindowBeingClosed() {
		conn.WriteJSON(game.Event{
			Type: game.EventTypeDisconnect,
			Data: game.EventDisconnect{
				Unit: *world.Units[world.MyId],
			},
		})
	}
	if !world.Units[world.MyId].Chat {
		if ebiten.IsKeyPressed(ebiten.KeyD) || ebiten.IsKeyPressed(ebiten.KeyRight) {
			conn.WriteJSON(game.Event{
				Type: game.EventTypeMove,
				Data: game.EventMove{
					UnitId:    world.MyId,
					Direction: game.DirectionRight,
				},
			})
		}
		if ebiten.IsKeyPressed(ebiten.KeyA) || ebiten.IsKeyPressed(ebiten.KeyLeft) {
			conn.WriteJSON(game.Event{
				Type: game.EventTypeMove,
				Data: game.EventMove{
					UnitId:    world.MyId,
					Direction: game.DirectionLeft,
				},
			})
		}
		if ebiten.IsKeyPressed(ebiten.KeyW) || ebiten.IsKeyPressed(ebiten.KeyUp) {
			conn.WriteJSON(game.Event{
				Type: game.EventTypeMove,
				Data: game.EventMove{
					UnitId:    world.MyId,
					Direction: game.DirectionUp,
				},
			})
		}
		if ebiten.IsKeyPressed(ebiten.KeyS) || ebiten.IsKeyPressed(ebiten.KeyDown) {
			conn.WriteJSON(game.Event{
				Type: game.EventTypeMove,
				Data: game.EventMove{
					UnitId:    world.MyId,
					Direction: game.DirectionDown,
				},
			})
		}

		if world.Units[world.MyId].Action == game.ActionRun {
			conn.WriteJSON(game.Event{
				Type: game.EventTypeIdle,
				Data: game.EventIdle{
					UnitId: world.MyId,
				},
			})
		}
	}
}

func (player *Player) RepeatingKeyPressed(key ebiten.Key) bool {
	const (
		delay    = 30
		interval = 3
	)

	d := inpututil.KeyPressDuration(key)

	if d == 1 {
		return true
	}
	if d >= delay && (d-delay)%interval == 0 {
		return true
	}

	return false
}