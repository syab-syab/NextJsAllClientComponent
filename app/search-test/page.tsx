"use client"
import { useState } from "react"
// 未実装
// 検索機能

const page = () => {
  // 検索ワードを格納するstate
  const [input, setInput] = useState<string>("")

  // 検索結果(候補)を格納するstate
  const [results, setResults] = useState<any>([])

  // https://jsonplaceholder.typicode.com
  const fetchData = (value: string): any => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json: any) => {
        const results = json.filter((user: any) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          )
        })
        // console.log(results)
        setResults(results)
      })
  }

  const handleChange = (value: string): void => {
    setInput(value)
    fetchData(value)
  }


  return (
    <>
      <div style={{
        height: "100vh",
        width: "100vw"
      }}>
        <div
          className="search-bar-container"
        >
          <div>
            <p>検索バー</p>
            <input
              type="text"
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
          <div>
            <p>検索結果</p>
            {
              results.map((result: any, id: any) => {
                return (
                  <div key={id}>{result.name}</div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default page