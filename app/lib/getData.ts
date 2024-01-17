import React from 'react'

// asyncを忘れない
async function getData() {
  // awaitを忘れない
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  console.log(res.json())
  return res.json()
}

export default getData