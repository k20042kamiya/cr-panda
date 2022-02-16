package main

import (
	"io"
	"log"
	"net/http"

	"github.com/k20042kamiya/cr-panda/go/apifunc"
)

func main() {
	
	http.HandleFunc("/thread/post", apifunc.ThreadpostHandler)

	log.Fatal(http.ListenAndServe(":3000", nil))
}

