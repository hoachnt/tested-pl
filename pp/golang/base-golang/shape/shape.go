package shape

import "fmt"

type User struct {
	name     string
	lastName string
	age      int
}

func CreateUser(name string, lastName string, age int) User {
	return User{
		name:     name,
		lastName: lastName,
		age:      age,
	}
}
func PrintUser(user User) {
	fmt.Println(user)
}
