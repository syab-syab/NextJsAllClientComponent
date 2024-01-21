// ダイナミックルーティング：階層化([...xxx])

const page = ({ params }: { params: { slugs: string[]}}) => {
  return (
    <h1>Dynamic2: {params.slugs.join(', ')}</h1>
  )
}

// ex) localhost:3000/dynamic2/123/456
// ex) localhost:3000/dynamic2/123/456/789

export default page