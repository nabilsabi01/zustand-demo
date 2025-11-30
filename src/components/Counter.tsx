import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useStore } from '@/store/store'

export function Counter() {
  const { count, increment, decrement } = useStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Counter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="text-7xl font-bold text-center text-primary">{count}</div>
        <div className="flex justify-center gap-6">
          <Button size="lg" onClick={decrement}>-</Button>
          <Button size="lg" onClick={increment}>+</Button>
        </div>
      </CardContent>
    </Card>
  )
}