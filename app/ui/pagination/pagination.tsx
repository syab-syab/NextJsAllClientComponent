"use client"

import style from "@/app/ui/pagination/page.module.css"
import { useState } from "react"
import { AllTodos } from "@/app/types/All.types"
import { spawn } from "child_process"

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

  const handlePrevPageNum = (): void => {
    if (pageNum > 0) {
      setPageNum(pageNum-1)
    }
  }

  const handleNextPageNum = (): void => {
    if (pageNum < (props.data.length / 20) - 1) {
      setPageNum(pageNum+1)
    }
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

  const allPageLength: number = props.data.length / 20

  return (
    <>
      総ページ数は{allPageLength}<br />
      現在 = {pageNum+1}ページ<br />
      {
        pageData[pageNum].map((d: any) => {
          return (
            <p key={d.id}>{d.id}: {d.title}</p>
          )
        })
      }
      {
        pageNum+1 === 1 ?
        <span></span> :
        <input type="button" className={style.page} value="◀" onClick={handlePrevPageNum} />
      }
      {/* <input type="button" className={style.page} value="◀" onClick={handlePrevPageNum} /> */}
      {/* 20件ずつ取り出す */}
      {/* 1ページ目と10ページ目は必ず表示 */}
      {/* 選ばれたページの1つ前と1つ先のページは表示する */}
      {/* {
        pageArr.map((p: number) => {
          switch(p) {
            case pageNum + 1: // これが本当のページ数
            case pageNum: // 前ページ
            case pageNum + 2: // 次ページ
            case 1:
            case 10:
              return (
                <input className={style.page} type="button" key={p} value={p} onClick={(e) => handlePageNum(e)} />
              )
              break;
            default:
              return (
                ""
              )
          }
        })
      } */}
      {
        pageNum+1 === allPageLength ?
        <span></span> :
        <input type="button" className={style.page} value="▶" onClick={handleNextPageNum} />
      }
      
    </>
  )
}

export default Pagination