"use client"

import style from "@/app/ui/pagination/page.module.css"
import { useState } from "react"

type Props = {
  data: any
}

const List = () => {
  // filterで10件ずつ取り出す処理を書く

  return (
    <>
      <div>List</div>
    </>
  )
}

const Pagination = (props: Props) => {
  // pageNumに格納されているページ数がアクティブになるようにスタイルを整える
  const [pageNum, setPageNum] = useState<number>(1)
// e: React.ChangeEvent<HTMLInputElement>
// MouseEvent<HTMLInputElement, MouseEvent>
  const handlePageNum = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPageNum(Number(e.target.value))
  }

  // データを取ってきて配列にする
  // 配列の要素数を length で数える
  // x刻みで区切る(10とか)
  // 要素数 / x = ページ数
  // console.log(typeof(props.data))
  // console.log(props.data.length)
  let lastPage: number = props.data.length / 20
  let pageArr: number[] = []
  for (let i: number = 1; i < lastPage + 1; i ++) {
    // console.log(i)
    pageArr.push(i)
  }

  // 1ページ20件ずつ表示
  // 各ページの数字をクリックして対応するデータを表示していく

  return (
    <>
      ページ数は{props.data.length / 20}<br />
      pageNum = {pageNum}<br />
      {/* <div className={style.page}>←</div> */}
      {/* <div className={style.page}>prev</div> */}
      {/* filterで10件ずつ取り出す */}
      {
        pageArr.map(p => {
          return (
            <>
              <input className={style.page} type="button" key={p} value={p} onClick={(e) => handlePageNum(e)} />
              {/* <div className={style.page} key={p}>{p}</div> */}
            </>
          )
        })
      }
      {/* <div className={style.page}>→</div> */}
      {/* <div className={style.page}>next</div> */}
    </>
  )
}

export default Pagination