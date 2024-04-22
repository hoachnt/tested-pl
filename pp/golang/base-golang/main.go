package main

import (
	"fmt"
	"golang/shape"
)

func main() {
	var name string
	var lastName string
	var age int

	fmt.Print("Print your name: ")

	fmt.Scanln(&name)

	fmt.Print("Print your lastname: ")

	fmt.Scanln(&lastName)

	fmt.Print("Print your age: ")

	fmt.Scanln(&age)

	user := shape.CreateUser(name, lastName, age)

	shape.PrintUser(user)
}
