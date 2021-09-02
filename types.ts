export type TodoItem = {
    id: string,
    task: string,
    completed: boolean
}; 

export type TodoItemProps = {
    todo: TodoItem
}