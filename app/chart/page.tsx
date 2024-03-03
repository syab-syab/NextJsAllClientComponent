// import React from 'react'
import Link from "next/link"


// バブルチャート ReactCharts React-chartjs-2
// 円(パイ, ドーナツ)グラフ Victory React-chartjs-2 Recharts
// 鶏頭図 Victory React-chartjs-2 Recharts(SimpleRadialBarChart)
// 帯グラフ ReactCharts
// レーダーチャート Victory React-chartjs-2 ReactCharts
// 統計地図 
const page = () => {
  return (
    <main>
      <div>
        <Link href="react-charts">ReactCharts</Link>
      </div>
      <div>
        <Link href="victory">Victory</Link>
      </div>
      <div>
        <Link href="chartjs2">React-chartjs-2</Link>
      </div>
      <div>
        <Link href="recharts">Recharts</Link>
      </div>

    </main>
  )
}

export default page