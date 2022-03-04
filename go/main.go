package main

import (
	"log"
	"net/http"

	"github.com/k20042kamiya/cr-panda/apifunc"
)

func main() {

	http.HandleFunc("/thread", apifunc.ThreadFunc)

	log.Fatal(http.ListenAndServe(":3000", nil))

}
