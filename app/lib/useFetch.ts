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
  const [fetchData, setFetchData] = useState<any>(null)

  useEffect(() => {
    // const abortCont = new AbortController();

    // fetch(url, { signal: abortCont.signal })
    //   .then(data => {
    //     console.log("fetch start")
        
    //     setFetchData(data.json())
    //     // setFetchData(data.text())
    //     console.log("fetch end")
    //   })
    //   .catch(err => {
    //     if (err.name == 'AbortError') {
    //       console.log('fetch aborted')
    //     } else {
    //       console.log(err.message)
    //     }
    //   })
    // return () => abortCont.abort();

    const access_api = async () => {
      const response = await fetch(url);
      const body = await response.json();
      setFetchData(body);
    };
    access_api();
  }, [url])

  return fetchData
}

export default useFetch