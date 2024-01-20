// ダイナミックルーティング：パラメータ無し対応([[...xxx]])

const page = ({ params }: { params: { slugs: string[] } }) => {
  if (params.slugs) {
    return <h1>Dynamic3: {params.slugs.join(', ')}</h1>
  } else {
    return <h1>Dynamic3: (None)</h1>
  }
}

// ex1) localhost:3000/dynamic3
// ex2) localhost:3000/dynamic3/123
// ex3) localhost:3000/dynamic3/123/456

export default page