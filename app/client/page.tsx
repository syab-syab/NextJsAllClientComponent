"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import useFetch from '@/app/lib/useFetch';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { Roboto } from 'next/font/google'
const Roboto900 = Roboto({ weight:'900', preload:false })
import Input from '@/app/component/input';
import Select from "@/app/component/select";
import Textarea from '@/app/component/textarea';
import RadioButton from '@/app/component/radiobutton';
import CheckBox from '@/app/component/checkbox';
import Datalist from '@/app/component/datalist';


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

  // awaitを忘れない
  // const data = getData()

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
  // console.log(data)

  const router = useRouter()

  return (
    <main className={styles.main}>
      <h1 className={Roboto900.className}>とりあえずすべてをクライアントコンポーネントで作成する</h1>
      <Link href="/">
        ホームへ戻る(next/link)
      </Link>
      <button onClick={() => router.push('/')}>ホームへ戻る(useRouter)</button>
      <h1>このページがクライアントコンポーネントであれば良くて</h1>
      <h1>個々のコンポーネントはサーバーコンポーネントでも大丈夫っぽい</h1>
      <div>
        {/* input */}
        <Input styleName='Roboto900.className' inputValue={inputValue} changeInputValue={changeInputValue} />
      </div>
      <div>
        {/* select */}
        <Select selectValue={selectValue} changeSelectValue={changeSelectValue} />
      </div>
      <div>
        {/* textarea */}
        <Textarea textAreaValue={textAreaValue} changeTextArea={changeTextArea} />
      </div>
      <div>
        {/* radio button */}
        <RadioButton radioSelected={radioSelected} radioButtons={radioButtons} changeRadioValue={changeRadioValue} />
      </div>
      <div>
        {/* checkbox */}
        <CheckBox checkedValues={checkedValues} items={items} handleCheckedValue={handleCheckedValue} />
      </div>
      <div>
        {/* fetch */}
        <Datalist styleName='Roboto900.className' data={data} />
      </div>
    </main>
  )
}
