"use client"

import style from "@/app/ui/pagination/page.module.css"
import { useState } from "react"
import { AllTodos } from "@/app/types/All.types"

type Props = {
  data: any
}

const Pagination = (props: Props) => {
  // pageNumに格納されているページ数がアクティブになるようにスタイルを整える
  const [pageNum, setPageNum] = useState<number>(0)
  // e: React.ChangeEvent<HTMLInputElement> や MouseEvent<HTMLInputElement, MouseEvent> だとエラーが出るのでやむを得ずany
  const handlePageNum = (e: any): void => {
    console.log("hanglePageNum")
    setPageNum(Number(e.target.value)-1)
  }

  // データを取ってきて配列にする
  // 配列の要素数を length で数える
  // x刻みで区切る(10とか)
  // 要素数 / x = ページ数
  // console.log(props.data)
  let lastPage: number = props.data.length / 20
  let pageArr: number[] = []
  for (let i: number = 1; i < lastPage + 1; i ++) {
    pageArr.push(i)
  }

  // 1ページ20件ずつ表示
  // 各ページの数字をクリックして対応するデータを表示していく
  // props.dataの配列を20個ずつに分けたグループにして配列にする

  const dataArrSlice = (arr: any[], num: number): any[] => {
    let copyArr: any[] = arr.slice()
    let tmpArray: any[] = []
    while (copyArr.length > 0) {
      // tmpArray.push(arr.splice(0, num))
      tmpArray.push(copyArr.splice(0, num))
    }

    return tmpArray
  }

  const pageData: any[] = dataArrSlice(props.data, 20)

  // console.log("pagination.tsx", typeof(pageData))

  return (
    <>
      ページ数は{props.data.length / 20}<br />
      現在 = {pageNum}ページ<br />
      {
        pageData[pageNum].map((d: any) => {
          return (
            <p key={d.id}>{d.id}: {d.title}</p>
          )
        })
      }

      {/* 10件ずつ取り出す */}
      {/* ↓のボタンが機能しない */}
      {
        pageArr.map((p: number) => {
          return (
            <input className={style.page} type="button" key={p} value={p} onClick={(e) => handlePageNum(e)} />
          )
        })
      }

    </>
  )
}

export default Pagination