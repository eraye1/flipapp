import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
        <CardDescription>Welcome to your FlipApp dashboard.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your account summary and recent activity will go here.</p>
      </CardContent>
    </Card>
  );
}
