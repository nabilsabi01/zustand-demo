import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface Todo {
  id: string
  text: string
  done: boolean
}

interface State {
  count: number
  todos: Todo[]
  theme: 'light' | 'dark'

  increment: () => void
  decrement: () => void
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
  toggleTheme: () => void
}

export const useStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        count: 0,
        todos: [],
        theme: 'light' as const,

        increment: () => set((s) => { s.count += 1 }),
        decrement: () => set((s) => { s.count -= 1 }),

        addTodo: (text) =>
          set((s) => {
            s.todos.push({ id: crypto.randomUUID(), text, done: false })
          }),

        toggleTodo: (id) =>
          set((s) => {
            const todo = s.todos.find((t) => t.id === id)
            if (todo) todo.done = !todo.done
          }),

        removeTodo: (id) =>
          set((s) => {
            s.todos = s.todos.filter((t) => t.id !== id)
          }),

        toggleTheme: () =>
          set((s) => ({
            theme: s.theme === 'light' ? 'dark' : 'light'
          })),
      })),
      { name: 'zustand-demo' }
    ),
    { name: 'Zustand Demo Store' }
  )
)