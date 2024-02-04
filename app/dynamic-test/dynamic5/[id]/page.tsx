// fetchしたデータを表示するテスト
import Breadcrumbs from "@/app/ui/breadcrumbs"

// asyncを忘れない
async function getData(url: string) {
  // awaitを忘れない
  const res = await fetch(url)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const page = async({ params }: { params: { id: string } }) => {
  const url = `https://jsonplaceholder.typicode.com/todos/${params.id}`

  const data = await getData(url)
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { index: 1, label: 'home' , href: "/"},
          { index: 2,
            label: 'dynamic-test',
            href: "/dynamic-test",
          },
          { index: 3,
            label: `dynamic-test5 - id: ${data.id}`,
            href: `/dynamic-test/dynamic5/${data.id}`,
            active: true
          },
        ]}
      />
      <p>User id: {data.userId}</p>
      <p>id: {data.id}</p>
      <p>title: {data.title}</p>
      <p>Completed: {data.completed.toString()}</p>
    </div>
  )
}

// ex) localhost:3000/dynamic-test/dynamic5/1

export default page