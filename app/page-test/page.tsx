import Pagination from "@/app/ui/pagination/pagination"
import Breadcrumbs from "@/app/ui/breadcrumbs"

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
            <Breadcrumbs
        breadcrumbs={[
          { index: 1, label: 'home' , href: "/"},
          { index: 2,
            label: 'page-test',
            href: "/page-test",
          }
        ]}
      />
      <Pagination data={data} />
    </>
  )
}

export default page