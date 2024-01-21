// ダイナミックルーティング：複数パラメータ([xxx]/[yyy])

const page = ({ params }: { params: { category: string, slug: string } }) => {
  return (
    <h1>Dynamic4: {params.category} / {params.slug}</h1>
  )
}

// ex) localhost:3000/dynamic4/movie/123

export default page