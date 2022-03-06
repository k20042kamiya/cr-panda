package model

type ThreadRequest struct {
	Title    string `json:"title"`
	Sentence string `json:"Sentence"`
	Date     DBTime `json:"date"`
}

func (t *ThreadRequest) ToTread() *ThreadPost {
	if t.Title == "" || t.Sentence == "" {
		return nil
	}
	return &ThreadPost{
		Title:    t.Title,
		Sentence: t.Sentence,
		Date:     t.Date,
	}
}
