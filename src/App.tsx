import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { useStore } from '@/store/store'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')

  const {
    count,
    increment,
    decrement,
    todos,
    addTodo,
    toggleTodo,
    theme,
    toggleTheme
  } = useStore()

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input.trim())
      setInput('')
    }
  }

  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container mx-auto p-8 max-w-5xl">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Zustand Demo 2025</h1>
          <Button variant="outline" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Counter */}
          <Card>
            <CardHeader>
              <CardTitle>Counter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-7xl font-bold text-center text-primary">
                {count}
              </div>
              <div className="flex justify-center gap-6">
                <Button size="lg" onClick={decrement}>-</Button>
                <Button size="lg" onClick={increment}>+</Button>
              </div>
            </CardContent>
          </Card>

          {/* Todos */}
          <Card>
            <CardHeader>
              <CardTitle>Todo List (Persisted)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3">
                <Input
                  placeholder="What needs to be done?"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                />
                <Button onClick={handleAdd}>Add</Button>
              </div>

              <ul className="space-y-3">
                {todos.map((todo) => (
                  <li key={todo.id} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <Checkbox
                      checked={todo.done}
                      onCheckedChange={() => toggleTodo(todo.id)}
                    />
                    <span className={`flex-1 ${todo.done ? 'line-through opacity-60' : ''}`}>
                      {todo.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App