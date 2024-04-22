package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

var id int
var firstname string
var lastname string

func main() {
	database, _ := sql.Open("sqlite3", "./gopher.db")
	statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY, firstname TEXT, lastname TEXT)")
	statement.Exec()

	statement, _ = database.Prepare("INSERT INTO people (firstname, lastname) VALUES (?, ?)")
	statement.Exec("Anton", "Nguyen")

	rows, _ := database.Query("SELECT id, firstname, lastname FROM people")

	for rows.Next() {
		rows.Scan(&id, &firstname, &lastname)
		fmt.Printf("%d: %s %s\n", id, firstname, lastname)
	}
}
