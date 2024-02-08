type Props = {
  data: any[]
}

const List = (props: Props) => {
  return (
    <div>
      {
        props.data.map((d: any) => 
          <p key={d.id} >
            {d.id}:{d.title}
          </p>
        )
      }
    </div>
  )
}

export default List