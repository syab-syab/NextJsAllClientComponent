// ダイナミックルーティング([xxx])
// "use client"
import Breadcrumbs from "@/app/ui/breadcrumbs"


const page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { index: 1, label: 'home' , href: "/"},
          { index: 2,
            label: 'dynamic-test',
            href: "/dynamic-test",
          },
          { index: 3,
            label: params.slug,
            href: `/dynamic-test/dynamic/${params.slug}`,
            active: true
          },
        ]}
      />
      <h1>Dynamic: {params.slug}</h1>
    </>
    
  )
}

// ex) localhost:3000/dynamic-test/dynamic/123

export default page