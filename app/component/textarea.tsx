"use client"
// クライアントコンポーネントじゃなくてもいけるっぽい

type Props = {
  textAreaValue: string
  changeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea = (props: Props) => {
  return (
    <div>
      <p>Textarea's value = 「{props.textAreaValue}」</p>
      <textarea
        onChange={(e) => props.changeTextArea(e)}
        value={props.textAreaValue}
      />
    </div>
  )
}

export default Textarea