"use client"

import React, { useState } from 'react'
// import Image from 'next/image'
import styles from './page.module.css'
import useFetch from './lib/useFetch'
// import getData from './lib/getData'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { Roboto } from 'next/font/google'
const Roboto900 = Roboto({ weight:'900', preload:false })


export default function Home() {

  const router = useRouter()

  return (
    <main className={styles.main}>
      <h1 className={Roboto900.className}>とりあえずすべてをクライアントコンポーネントで作成する</h1>
      <Link href="/client">
        クライアントコンポーネントの状態管理テスト
      </Link>
      <Link href="/dynamic-test">
        ダイナミックルーティングのテスト(next/link)
      </Link>
      <button onClick={() => router.push('/dynamic-test')}>ダイナミックルーティングのテスト(useRouter)</button>
    </main>
  )
}
