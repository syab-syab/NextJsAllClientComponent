// import React from 'react'

// 円(パイ、ドーナツ)グラフ
// 鶏頭図
// レーダーチャート 

// これもめんどうだから後回し

"use client"
import React from "react";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from "victory";

const page = () => {

  const dataA = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];

  const dataB = [
    { x: 1, y: 1 },
    { x: 2, y: 4 },
    { x: 3, y: 4 },
    { x: 4, y: 2 },
    { x: 5, y: 6 },
  ];

  return (
    <>
      <div>
        <h1>Victory</h1>
      </div>
      <div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryLine data={dataA} style={{ data: { stroke: "#c43a31" } }} />
        <VictoryLine data={dataB} style={{ data: { stroke: "#2c3e50" } }} />
      </VictoryChart>
      </div>
    </>
  )
}

export default page