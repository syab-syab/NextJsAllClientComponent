"use client"
// クライアントコンポーネントじゃなくてもいけるっぽい

/** ラジオボタンの型 */
interface Radio {
  label: string
  value: string
}

type Props = {
  radioSelected: string
  radioButtons: Radio[]
  changeRadioValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton = (props: Props) => {
  return (
    <div>
      {/* radio button */}
      <div>Radio button's = 「{props.radioSelected}」</div>
      {props.radioButtons.map(radio => {
        return (
          <div key={radio.value}>
            {/* checked属性に式を定義する */}
            <input
              type="radio"
              name="sweets"
              id={radio.value}
              value={radio.value}
              checked={radio.value === props.radioSelected}
              onChange={(e) => props.changeRadioValue(e)}
            />
            <label htmlFor={radio.value}>
              <span>{radio.label}</span>
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default RadioButton