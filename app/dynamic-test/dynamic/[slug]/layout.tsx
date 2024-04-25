// import type { Metadata } from 'next'


// export const metadata: Metadata = {
//   title: '静的メタデータテスト',
//   description: 'メタデータテスト',
// }

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `ダイナミックルーティング:${params.slug}`,
  }
}


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}