package main

import (
	"bufio"
	"fmt"
	"log"
	"net"
	"sync"
)

var (
	clients       []net.Conn
	clientsLock   sync.Mutex
	messages      []string
	messagesLock  sync.Mutex
)

func handleConnection(conn net.Conn) {
	defer conn.Close()

	// Add the new client to the clients list
	clientsLock.Lock()
	clients = append(clients, conn)
	clientsLock.Unlock()

	reader := bufio.NewReader(conn)
	writer := bufio.NewWriter(conn)
	welcomeMessage := "Welcome to the IRC server!\r\n"
	writer.WriteString(welcomeMessage)
	writer.Flush()

	for {
		message, err := reader.ReadString('\n')
		if err != nil {
			if err.Error() == "EOF" {
				log.Println("Client disconnected:", conn.RemoteAddr())
				break
			}
			log.Println("Error reading message:", err)
			break
		}

		trimmedMessage := message[:len(message)-2] // Remove '\r\n' characters at the end of the message

		// Process the incoming message and generate a response
		// Implement the appropriate IRC protocol logic here

		response := fmt.Sprintf("Received: %s\r\n", trimmedMessage)

		// Add the message to the shared messages list
		messagesLock.Lock()
		messages = append(messages, response)
		messagesLock.Unlock()

		// Broadcast the message to all connected clients
		broadcastMessage(response, conn)
	}

	// Remove the client from the clients list
	clientsLock.Lock()
	for i, client := range clients {
		if client == conn {
			clients = append(clients[:i], clients[i+1:]...)
			break
		}
	}
	clientsLock.Unlock()
}

func broadcastMessage(message string, sender net.Conn) {
	clientsLock.Lock()
	defer clientsLock.Unlock()

	for _, client := range clients {
		if client != sender {
			client.Write([]byte(message))
		}
	}
}

func main() {
	listener, err := net.Listen("tcp", ":6667")
	if err != nil {
		log.Fatal("Error starting the server:", err)
	}
	defer listener.Close()

	fmt.Println("IRC server is running on port 6667")

	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Println("Error accepting connection:", err)
			continue
		}

		go handleConnection(conn)
	}
}