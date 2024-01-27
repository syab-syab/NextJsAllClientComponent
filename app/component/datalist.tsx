"use client"
// クライアントコンポーネントじゃなくてもいけるっぽい

type Props = {
  styleName: string
  data: any
}

const Datalist = (props: Props) => {
  return (
    <div className={props.styleName}>
      {/* fetch */}
      {/* data の後に ? を付けないとエラーになる */}
      {/* https://zenn.dev/kantafukazawa/articles/742ae144c2f43e */}
      {
        props.data?.map((d: any) => 
          <p key={d.id}>{d.title}</p>
        )
      }
  </div>
  )
}

export default Datalist