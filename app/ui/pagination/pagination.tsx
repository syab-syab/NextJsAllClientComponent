"use client"

import style from "@/app/ui/pagination/page.module.css"

type Props = {
  data: any
}

const Pagination = (props: Props) => {
  // データを取ってきて配列にする
  // 配列の要素数を length で数える
  // x刻みで区切る(10とか)
  // 要素数 / x = ページ数
  // console.log(typeof(props.data))
  // console.log(props.data.length)
  let lastPage: number = props.data.length / 20
  let pageNum: number[] = []
  for (let i: number = 1; i < lastPage + 1; i ++) {
    // console.log(i)
    pageNum.push(i)
  }

  // 1ページ20件ずつ表示
  // 各ページの数字をクリックして対応するデータを表示していく

  return (
    <>
      ページ数は{props.data.length / 20}
      <div className={style.page}>←</div>
      {
        pageNum.map(p => {
          return (
            <>
              <div className={style.page} key={p}>{p}</div>
            </>
          )
        })
      }
      <div className={style.page}>→</div>
    </>
  )
}

export default Pagination