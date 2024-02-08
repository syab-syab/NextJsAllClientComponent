export type JsonPlaceholderTodos = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export type AllTodos = {
  data: JsonPlaceholderTodos[]
}