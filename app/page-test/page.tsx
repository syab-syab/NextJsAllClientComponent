import Pagination from "@/app/ui/pagination/pagination"

// ここにページャーを入れる
// サーバーコンポーネントとクライアントコンポーネントどちらでも試す

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

const page = async () => {
  const data = await getData()

  return (
    <>
      <Pagination data={data} />
    </>
  )
}

export default page