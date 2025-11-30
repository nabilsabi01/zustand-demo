import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Shadcn + Tailwind v4 Works!</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Click me</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App