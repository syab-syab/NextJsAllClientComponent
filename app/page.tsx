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
      <h1 className={Roboto900.className}>とりあえず大体のコンポーネントをクライアントコンポーネントで作成する</h1>
      <Link href="/client">
        クライアントコンポーネントの状態管理テスト
      </Link>
      <Link href="/dynamic-test">
        ダイナミックルーティングのテスト(next/link)
      </Link>
      <Link href="server-comp">
        サーバーコンポーネント色々テスト
      </Link>
      <Link href="loading-test">
        ロード画面テスト
      </Link>
      <Link href="page-test">
        ページネーションテスト
      </Link>
      <Link href="infinite-scroll">
        無限スクロール
      </Link>
      <Link href="search-test">
        検索バー
      </Link>
      <Link href="animation-test">
        アニメーションのテスト
      </Link>
      <Link href="chart">
        グラフライブラリのテスト
      </Link>
      <Link href="font-test">
        フォントのテスト
      </Link>
      <button onClick={() => router.push('/dynamic-test')}>ダイナミックルーティングのテスト(useRouter)</button>
    </main>
  )
}
