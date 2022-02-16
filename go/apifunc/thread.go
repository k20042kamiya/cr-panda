package apifunc

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/k20042kamiya/cr-panda/tree/main/model"
)

func ThreadFunc(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		fmt.Fprint(w, "helloworld")

	case http.MethodPost:
		postHandler(w, r)

	case "DELETE":
	}
}

func postHandler(w http.ResponseWriter, r *http.Request) {
	// レスポンスヘッダーとデータをhttp.ResponseWriterに書きこみ
	// ioutilのReadAll関数を使って全てのbodyのデータを全て読み取る。
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		// http.StatusInternalServerErrorレスポンスを返す
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	var requestJSON model.ThreadPostRequest
	// json.Unmarshal= json -> 構造体
	if err := json.Unmarshal(body, &requestJSON); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	
	

}

// func test() (int, int) {
// 	a := 1
// 	b := 2
// 	return a, b
// }
