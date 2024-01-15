"use client"

import React, { useState } from 'react'
// import Image from 'next/image'
import styles from './page.module.css'
import useFetch from './_lib/useFetch'


/** ラジオボタンの型 */
interface Radio {
  label: string
  value: string
}

// checkboxの型
interface Check {
  id: number
  item: string
}

export default function Home() {

  // inputタグの状態管理
  const [inputValue, setInputValue] = useState<string>("")

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }


  // selectタグの状態管理
  const [selectValue, setSelectValue] = useState<string>("")

  const changeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectValue(e.target.value)
  }


  // textareaの状態管理
  const [textAreaValue, setTextAreaValue] = useState<string>("テキストエリア")

  const changeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTextAreaValue(e.target.value)
  }


  // radioボタンの状態管理
  const [radioSelected, setRadioSelected] = useState("Beef");

  const changeRadioValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRadioSelected(e.target.value)
  }

  const radioButtons: Radio[] = [
    {
        label: "牛肉",
        value: "Beef"
    },
    {
        label: "鶏肉",
        value: "Chicken"
    },
    {
        label: "豚肉",
        value: "Pork"
    }
  ]


  // checkbox状態管理
  // これは大体がコピペだから後でコード読んで理解する(特にhandleCheckedValueの中身)
  const [checkedValues, setCheckedValues] = useState<string[]>([])

  const handleCheckedValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(
        checkedValues.filter(checkedValue => checkedValue !== e.target.value)
      )
    } else {
      setCheckedValues([...checkedValues, e.target.value]);
    }
  }

  const items: Check[] = [
    {
      id: 1,
      item: "読書"
    },
    {
      id: 2,
      item: "スポーツ"
    },
    {
      id: 3,
      item: "旅行"
    },
    {
      id: 4,
      item: "音楽"
    }
  ];


  // カスタムフックテスト
    const data = useFetch("https://jsonplaceholder.typicode.com/todos")
    console.log(data)

  return (
    <main className={styles.main}>
      <h1>とりあえずすべてをクライアントコンポーネントで作成する</h1>
      <div>
        {/* input */}
        <p>Input's value = 「{inputValue}」</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => changeInputValue(e)}
        />
      </div>
      <div>
        {/* select */}
        <p>Select's value = 「{selectValue}」</p>
        <select
          value={selectValue}
          onChange={(e) => changeSelectValue(e)}
        >
          <option value="">数字を選んでください</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        {/* textarea */}
        <p>Textarea's value = 「{textAreaValue}」</p>
        <textarea
          onChange={(e) => changeTextArea(e)}
          value={textAreaValue}
        />
      </div>
      <div>
        {/* radio button */}
        <div>Radio button's = 「{radioSelected}」</div>
        {radioButtons.map(radio => {
          return (
            <div key={radio.value}>
              {/* checked属性に式を定義する */}
              <input
                type="radio"
                name="sweets"
                id={radio.value}
                value={radio.value}
                checked={radio.value === radioSelected}
                onChange={(e) => changeRadioValue(e)}
              />
              <label htmlFor={radio.value}>
                <span>{radio.label}</span>
              </label>
            </div>
          )
        })}
      </div>
      <div>
        {/* checkbox */}
        <p>Check Box = 「{checkedValues}」</p>
        {
          items.map(item => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  id={item.item}
                  value={item.item}
                  onChange={(e) => handleCheckedValue(e)}
                  checked={checkedValues.includes(item.item)}
                />
                <label htmlFor={item.item}>{item.item}</label>
              </div>
              
            )
          })
        }
      </div>
    </main>
  )
}
