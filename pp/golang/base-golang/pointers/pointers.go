package pointers

import (
	"fmt"
)

func pointers() {
	message := "My name is Hoach"

	printMyName(message)

	fmt.Println(message)

	changeMyName(&message)

	fmt.Println(message)
}
func printMyName(message string) {
	message += "and I'm programmer"

	fmt.Println(message)
}
func changeMyName(message *string) {
	*message += "and I'm programmer"
}
