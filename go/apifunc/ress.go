package apifunc

import (
	"net/http"
)

func ThredPost(){

    // POSTのみ許可.
    http.HandleFunc("/onlyPost", handleOnlyPost)

    // 8080ポートで起動
    http.ListenAndServe(":3000", nil)
}

func handleOnlyPost(w http.ResponseWriter, r *http.Request) {

    // HTTPメソッドをチェック（POSTのみ許可）
    if r.Method != http.MethodPost {
        w.WriteHeader(http.StatusMethodNotAllowed) // 405
        w.Write([]byte("POSTだけだよー"))
        return
    }

    w.Write([]byte("OK"))
}