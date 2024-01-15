// "use client"

import React, { useEffect, useState } from 'react'

interface Props {
  "userId": number
  "id": number
  "title": string
  "completed": boolean
}

// fetch自体はできてるけどdataに値が上手く入っていない

const useFetch = (url: string) => {
  // anyは後で修正
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const abortCont = new AbortController();

    // const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url, { signal: abortCont.signal })
      .then(data => {
        console.log("fetch start")
        setData(data)
        console.log("fetch end")
      })
      .catch(err => {
        if (err.name == 'AbortError') {
          console.log('fetch aborted')
        } else {
          console.log(err.message)
        }
      })
    // return () => abortCont.abort();
  }, [url])

  return data
}

export default useFetch