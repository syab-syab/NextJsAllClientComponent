// "use client"
// クライアントコンポーネントでも問題なし

import { Suspense } from 'react'
import styles from '@/app/loading-test/page.module.css'
import Link from 'next/link'
import Loading from './components/loading'
import Wait from './components/wait'
import Breadcrumbs from '../ui/breadcrumbs'

type Props = {
  index: number
  label: string
  href: string
  active?: boolean
}

const page = () => {
  const breadCrumb: Props[] = [
    { index: 1, label: 'home' , href: "/"},
    { index: 2,
      label: 'loading-test',
      href: "/loading-test",
      active: true
    }
  ]
  return (
    
    <main className={styles.main}>
      <Breadcrumbs breadcrumbs={breadCrumb} />
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