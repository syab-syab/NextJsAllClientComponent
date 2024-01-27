"use client"
// クライアントコンポーネントじゃなくてもいけるっぽい

// checkboxの型
interface Check {
  id: number
  item: string
}

type Props = {
  checkedValues: string[]
  items: Check[]
  handleCheckedValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox = (props: Props) => {
  return (
    <div>
      <p>Check Box = 「{props.checkedValues}」</p>
      {
        props.items.map(item => {
          return (
            <div key={item.id}>
              <input
                type="checkbox"
                id={item.item}
                value={item.item}
                onChange={(e) => props.handleCheckedValue(e)}
                checked={props.checkedValues.includes(item.item)}
              />
              <label htmlFor={item.item}>{item.item}</label>
            </div>
            
          )
        })
      }
    </div>
  )
}

export default CheckBox