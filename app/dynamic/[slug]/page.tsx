// ダイナミックルーティング([xxx])

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <h1>Dynamic: {params.slug}</h1>
  )
}

// ex) localhost:3000/123

export default page