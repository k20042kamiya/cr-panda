package apifunc

import (
	"database/sql"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
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
	// body, err := ioutil.ReadAll(r.Body)
	// if err != nil {
	// 	// http.StatusInternalServerErrorレスポンスを返す
	// 	w.WriteHeader(http.StatusInternalServerError)
	// 	return
	// }
	// var requestJSON model.ThreadRequest
	// // json.Unmarshal= json -> 構造体
	// if err := json.Unmarshal(body, &requestJSON); err != nil {
	// 	w.WriteHeader(http.StatusBadRequest)
	// 	return
	// }

	// thread :=  requestJSON.ToThread()
	// if err := dboperation.CreateThread(thread); err != nil {
	// 	panic(err)
	// }

	db, err := sql.Open("mysql", "root:root@tcp(127.0.0.1:3306)/test_database")

	if err != nil {
		panic(err)
	}

	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	} else {
		println("接続完了")
	}

}
