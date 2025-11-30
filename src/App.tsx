import { ThemeToggle } from '@/components/ThemeToggle'
import { Counter } from '@/components/Counter'
import { TodoList } from '@/components/TodoList'
import { useStore } from '@/store/store'

function App() {
  const { theme } = useStore()

  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container mx-auto p-8 max-w-5xl">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Zustand Demo</h1>
          <ThemeToggle />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <Counter />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App