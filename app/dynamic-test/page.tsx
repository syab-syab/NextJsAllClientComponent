// "use client"

import Link from 'next/link';

// asyncを忘れない
async function getData() {
  // awaitを忘れない
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const page = async() => {
  const data = await getData()
  // data.map((d: any) => {
  //   console.log(d.title)
  // })
  return (
    <>
      <div>
        <Link href="/dynamic-test/dynamic/123">ダイナミックルーティング([xxx])</Link><hr />
        <Link href="/dynamic-test/dynamic2/123/456">ダイナミックルーティング：階層化([...xxx])</Link><hr />
        <Link href="/dynamic-test/dynamic2/123/456/789">ダイナミックルーティング：階層化([...xxx])</Link><hr />
        <Link href="/dynamic-test/dynamic3">ダイナミックルーティング：パラメータ無し対応([[...xxx]])</Link><hr />
        <Link href="/dynamic-test/dynamic3/123">ダイナミックルーティング：パラメータ無し対応([[...xxx]])</Link><hr />
        <Link href="/dynamic-test/dynamic3/123/456">ダイナミックルーティング：パラメータ無し対応([[...xxx]])</Link><hr />
        <Link href="/dynamic-test/dynamic4/movie/123">ダイナミックルーティング：複数パラメータ([xxx]/[yyy])</Link><hr />
        <Link href="/dynamic-test/dynamic4/music/456">ダイナミックルーティング：複数パラメータ([xxx]/[yyy])</Link><hr />
      </div>
      <div>
        <h1>fetchしたデータでやってみる</h1>
        {
          data.map((d: any) => 
            // <p key={d.id}>{d.title}</p>
            <div key={d.id} >
              <Link href={`/dynamic-test/dynamic5/${d.id}`}>{d.title}</Link>
            </div>
          )
        }
      </div>
      <Link href="/">Topへ戻る</Link>
    </>

  )
}

export default page