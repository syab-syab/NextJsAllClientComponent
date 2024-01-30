function aWait() {
  return new Promise(callback => { setTimeout(callback, 3000) })
}

const Wait = async () => {
  await aWait()
  return (
    <div>Finished!</div>
  )
}

export default Wait