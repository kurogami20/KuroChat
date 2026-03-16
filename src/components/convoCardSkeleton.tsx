import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ConvoCardSkeleton() {
  return (
    <Card className="w-full max-w-xs">
      <CardContent className="flex flex-col gap-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      </CardContent>
    </Card>
  )
}
