package main

import (
<<<<<<< Updated upstream
	"io"
	"log"
	"net/http"
)

func main() {
	h1 := func(w http.ResponseWriter, _ *http.Request) {
		io.WriteString(w, "Hello from a HandleFunc #1!\n")
	}
	h2 := func(w http.ResponseWriter, _ *http.Request) {
		io.WriteString(w, "Hello from a HandleFunc #2!\n")
	}

	http.HandleFunc("/", h1)
	http.HandleFunc("/endpoint", h2)

	log.Fatal(http.ListenAndServe(":8080", nil))
=======
	"log"
	"net/http"

	"github.com/k20042kamiya/cr-panda/apifunc"
)

func main() {
	// // 8080ポートで起動
	http.HandleFunc("/", apifunc.ThreadFunc)
	http.ListenAndServe(":8080", nil)
	log.Fatal(http.ListenAndServe(":8080", nil))
	// // POSTのみ許可.
	// http.HandleFunc("/onlyPost",handleOnlyPost)

>>>>>>> Stashed changes
}
