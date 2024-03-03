// バブルチャート
// 円グラフ
// 鶏頭図
// レーダーチャート


import PieChart from './components/pie';
import DoughnutChart from './components/doughnut';
import PolarChart from './components/polar';
import RaderGraph from './components/radar';

const page = () => {
  return (
    <>
      <div>
        <h1>React-chartjs-2</h1>
      </div>
      <div>
        <h1>パイ</h1>
        <PieChart />
      </div>
      <div>
        <h1>ドーナッツ</h1>
        <DoughnutChart />
      </div>
      <div>
        <h1>鶏頭図</h1>
        <PolarChart />
      </div>
      <div>
        <h1>レーダーチャート</h1>
        <RaderGraph />
      </div>
    </>
  )
}

export default page