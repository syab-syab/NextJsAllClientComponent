"use client"
// クライアントコンポーネントじゃなくてもいけるっぽい

type Props = {
  styleName: string
  inputValue: string
  changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: Props) => {
  return (
    <div>
      <p className={props.styleName}>Input's value = 「{props.inputValue}」</p>
      <input
        type="text"
        value={props.inputValue}
        onChange={(e) => props.changeInputValue(e)}
      />
    </div>
  )
}

export default Input