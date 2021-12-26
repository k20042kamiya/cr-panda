package model

import (
	"time"
)

type DBTime struct {
	time.Time
}

type ThreadPostRequest struct {
	Title string `json:"title"`
	ID int `json:"id"`     
	Sentence string `json:"Sentence"`
	Date     DBTime `json:"date"`
}

type User struct {
	ID    int
	Token string
	Name  string
}

type Ip struct {
	ID       int
	Ipadress string
	Username string
}

type Tread struct {
	ID   int
	Name time.Time
}

type Ress struct {
	ID      int
	Meesage string
	Treid   int
	ipid    int
}
