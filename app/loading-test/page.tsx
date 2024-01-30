// "use client"
// クライアントコンポーネントでも問題なし

import { Suspense } from 'react'
import styles from '@/app/loading-test/page.module.css'
import Link from 'next/link'
import Loading from './components/loading'
import Wait from './components/wait'

const page = () => {
  return (
    <main className={styles.main}>
      <h1>ローディングテスト</h1>
      <p>クライアントコンポーネントでも問題なし</p>
      <Suspense fallback={<Loading />}>
        <Wait />
      </Suspense>
      <Link href="/">Home へ戻る</Link>
    </main>
  )
}

export default page