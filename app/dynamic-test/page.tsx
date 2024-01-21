import Link from 'next/link';


const page = () => {
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
      <Link href="/">Topへ戻る</Link>
    </>

  )
}

export default page