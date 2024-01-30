import Link from "next/link"
import styles from "@/app/server-comp/page.module.css"
import First from "./components/first"

const page = () => {
  return (
    <main className={styles.main}>
      <div>
        <h1>サーバーコンポーネント色々テスト</h1>
        <First value="値渡しその１" />
        <Link href="/">Home に戻る</Link>
      </div>
    </main>
  )
}

export default page