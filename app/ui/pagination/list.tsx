// これいらないかも

"use client"

type Props = {
  data: any[]
}

const List = (props: Props) => {
  console.log("list.tsx", props.data)

  return (
    <div>
      {/* {
        props.data.map((d: any) => 
          <p key={d.id} >
            {d.id}:{d.title}
          </p>
        )
      } */}
    </div>
  )
}

export default List