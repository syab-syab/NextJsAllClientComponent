import { Lato } from 'next/font/google'
import { DotGothic16 } from 'next/font/google'

const Lato700 = Lato({
  weight: '700',
  preload: false,
})

const DotFonts = DotGothic16({
  weight: "400",
  preload: false,
})

const page = () => {
  return (
    <>
      <main>
        <p>ここはFontが反映されません。</p>
        <h1 className={Lato700.className}>ここはFontが反映されます。</h1>
        <h1 className={DotFonts.className}>ドットフォントのテスト</h1>
      </main>
    </>
  )
}

export default page