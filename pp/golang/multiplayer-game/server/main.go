package main

import (
	"github.com/gin-gonic/gin"

	"github.com/hoach-linux/multiplayer-game/game"
)

func main() {
	world := &game.World{
		IsServer: true,
		Units:    game.Units{},
	}
	hub := newHub()
	go hub.run()

	r := gin.New()
	r.GET("/ws", ginWsServe(hub, world))
	r.Run(":3000")
}
func ginWsServe(hub *Hub, world *game.World) gin.HandlerFunc {
	return gin.HandlerFunc(func(c *gin.Context) {
		serveWs(hub, world, c.Writer, c.Request)
	})
}
