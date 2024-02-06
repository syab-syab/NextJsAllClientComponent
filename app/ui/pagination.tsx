import React from 'react'

type Props = {
  data: any
}

const Pagination = (props: Props) => {
  // データを取ってきて配列にする
  // 配列の要素数を length で数える
  // x刻みで区切る(10とか)
  // 要素数 / x = ページ数
  console.log(typeof(props.data))
  console.log(props.data.length)

  return (
    <>
      ページ数は{props.data.length / 20}
    </>
  )
}

export default Pagination