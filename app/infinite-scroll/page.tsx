"use client"
import InfiniteScroll from 'react-infinite-scroll-component';
// https://github.com/ankeetmaini/react-infinite-scroll-component
import React, { useState } from 'react'


// 未実装
// 無限スクロール

const style = {
  border: "1px solid green",
  margin: 12,
  padding: 8
}

const page = () => {
  // useStateは型定義した方が良いかも
  const [dataSource, setDataSource] = useState(Array.from({length: 20}))
  const [hasMore, setHasMore] = useState(true)
  const fetchMoreData = () => {
    if (dataSource.length < 200) {
      // making api call
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({length: 20})))
      }, 500)
    } else {
      setHasMore(false)
    }

  }
  
  return (
    <>
      <h1>無限スクロール</h1>
      <p>react-infinite-scroll-component</p>
      <div
        id='parentScrollDiv'
        style={{
          height: 500,
          overflow: 'auto'
        }}
      >
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={<p>You are all set!</p>}
          // height={500}
          scrollableTarget="parentScrollDiv"
        >
          {dataSource.map((item, index) => {
            return (
              <div key={index} style={style}>
                This is a div #{index + 1} inside InfiniteScroll
              </div>
            )
          })}
        </InfiniteScroll>        
      </div>

    </>
  )
}

export default page