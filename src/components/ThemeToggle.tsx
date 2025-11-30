import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useEffect } from 'react'
import { useStore } from '@/store/store'

export function ThemeToggle() {
  const { theme, toggleTheme } = useStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}