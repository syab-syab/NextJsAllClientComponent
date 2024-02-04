import Link from "next/link"
import styles from "@/app/server-comp/page.module.css"
import First from "./components/first"
import Breadcrumbs from "../ui/breadcrumbs"

const page = () => {
  return (
    <main className={styles.main}>
      <div>
        <Breadcrumbs
          breadcrumbs={[
            { index: 1, label: 'home' , href: "/"},
            { index: 2,
              label: 'server-comp',
              href: "/server-comp",
              active: true
            }
          ]}
        />
        <h1>サーバーコンポーネント色々テスト</h1>
        <First value="値渡しその１" />
        <Link href="/">Home に戻る</Link>
      </div>
    </main>
  )
}

export default page