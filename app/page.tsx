import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckoutButton } from '@/components/checkout-button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold">NextSwift Starter</h1>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <a href="/sign-in">Login</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/sign-up">Sign up</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-bold tracking-tight">
            Launch Your SaaS in Hours, Not Weeks
          </h2>
          <p className="mb-10 text-xl text-muted-foreground">
            Next.js 16 • TypeScript • Clerk Auth • Supabase • Stripe • shadcn/ui
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>For quick tests</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">€39</p>
                <p className="text-sm text-muted-foreground">one-time</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/sign-in">Buy Basic</a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary shadow-lg">
              <CardHeader>
                <CardTitle>Full</CardTitle>
                <CardDescription>Best value</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">€69</p>
                <p className="text-sm text-muted-foreground">one-time</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a href="/sign-in">Buy Full</a>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Lifetime updates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">€99</p>
                <p className="text-sm text-muted-foreground">one-time</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/sign-in">Buy Pro</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
