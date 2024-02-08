"use client"

import style from "@/app/ui/pagination/page.module.css"
import { useState } from "react"
import List from "@/app/ui/pagination/list"

type Props = {
  data: any
}

const Pagination = (props: Props) => {
  // pageNumに格納されているページ数がアクティブになるようにスタイルを整える
  const [pageNum, setPageNum] = useState<number>(1)
  // e: React.ChangeEvent<HTMLInputElement> や MouseEvent<HTMLInputElement, MouseEvent> だとエラーが出るのでやむを得ずany
  const handlePageNum = (e: any): void => {
    setPageNum(Number(e.target.value)-1)
  }

  // データを取ってきて配列にする
  // 配列の要素数を length で数える
  // x刻みで区切る(10とか)
  // 要素数 / x = ページ数
  // console.log(typeof(props.data))
  // console.log(props.data[1])
  console.log(props.data)
  let lastPage: number = props.data.length / 20
  let pageArr: number[] = []
  for (let i: number = 1; i < lastPage + 1; i ++) {
    // console.log(i)
    pageArr.push(i)
  }

  // 1ページ20件ずつ表示
  // 各ページの数字をクリックして対応するデータを表示していく
  // props.dataの配列を20個ずつに分けたグループにして配列にする

  const dataArrSlice = (arr: any[], num: number): any[] => {
    let tmpArray: any[] = []
    while (arr.length > 0) {
      // tmpArray = arr.splice(0, num)
      tmpArray.push(arr.splice(0, num))
      // console.log("test", tmpArray)
    }

    return tmpArray
  }

  const pageData: any[] = dataArrSlice(props.data, 20)

  console.log(pageData[0])

  return (
    <>
      ページ数は{props.data.length / 20}<br />
      現在 = {pageNum}ページ<br />
      <List data={pageData[pageNum]} />
      {/* <div className={style.page}>←</div> */}
      {/* <div className={style.page}>prev</div> */}
      {/* filterで10件ずつ取り出す */}
      {
        pageArr.map(p => {
          return (
              <input className={style.page} type="button" key={p} value={p} onClick={(e) => handlePageNum(e)} />
          )
        })
      }
      {/* <div className={style.page}>→</div> */}
      {/* <div className={style.page}>next</div> */}
    </>
  )
}

export default Pagination