"use client"
// クライアントコンポーネントじゃなくてもいけるっぽい

type Props = {
  selectValue: string
  changeSelectValue: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = (props: Props) => {
  return (
    <div>
      <p>Select's value = 「{props.selectValue}」</p>
      <select
        value={props.selectValue}
        onChange={(e) => props.changeSelectValue(e)}
      >
        <option value="">数字を選んでください</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  )
}

export default Select