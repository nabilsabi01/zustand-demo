import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type Todo = {
  id: string
  text: string
  done: boolean
}

type State = {
  count: number
  todos: Todo[]
  theme: 'light' | 'dark'

  increment: () => void
  decrement: () => void
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  toggleTheme: () => void
}

export const useStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        count: 0,
        todos: [],
        theme: 'light' as const,

        increment: () => set((state) => { state.count += 1 }),
        decrement: () => set((state) => { state.count -= 1 }),

        addTodo: (text) =>
          set((state) => {
            state.todos.push({
              id: crypto.randomUUID(),
              text,
              done: false
            })
          }),

        toggleTodo: (id) =>
          set((state) => {
            const todo = state.todos.find(t => t.id === id)
            if (todo) todo.done = !todo.done
          }),

        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light'
          }))
      })),
      { name: 'zustand-demo' }
    ),
    { name: 'Demo Store' }
  )
)