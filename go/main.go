package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello")
	arr := Input()
	fmt.Println(arr)

}

//クイックソートを配列で返す
func QuickSort(arr []int) []int {
	if len(arr) < 2 {
		return arr
	}

	pivot := arr[0]
	var left, right []int
	for _, v := range arr[1:] {
		if v <= pivot {
			left = append(left, v)

		} else {
			right = append(right, v)
		}
	}

	return append(append(QuickSort(left), pivot), QuickSort(right)...)

}

//スペースで区切られた整数の入力
func Input() []int {
	var n, tmp int
	fmt.Scan(&n)
	arr := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&tmp)
		arr[i] = tmp
	}
	return arr
}
