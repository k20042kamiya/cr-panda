package model

import(
	"time"
	"crypto/sha256"
	"encoding/hex"
)

type DBTime struct {
	time.Time
}

type ThreadRequest struct {
	Title string `json:"title"`
	Sentence string `json:"Sentence"`
	Date     DBTime `json:"date"`
}

func (t *ThreadRequest) ToTread() *ThreadPost{
	if (t.title == "" || t.Sentence == "" || t.Date == ""){
		return null
	}
	return &ThreadPost{
	Title:t.title,
	Sentence: t.Sentence,
	Date: t.date
	}
}
