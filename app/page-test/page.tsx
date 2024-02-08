// "use client"

import Pagination from "@/app/ui/pagination/pagination"
import Breadcrumbs from "@/app/ui/breadcrumbs"
// import { AllTodos } from "@/app/types/All.types"
// import useFetch from "@/app/lib/useFetch"

// ここにページャーを入れる
// サーバーコンポーネントとクライアントコンポーネントどちらでも試す

// asyncを忘れない
// awaitを忘れない
const getData = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/todos')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
 
  return res.json()
}

const page = async () => {
// const page = () => {
  const data = await getData()
  // const data = useFetch("https://jsonplaceholder.typicode.com/todos")
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