import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
            {/* Basic */}
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Quick testing & learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">€39</p>
                <p className="text-sm text-muted-foreground">one-time</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={process.env.NEXT_PUBLIC_GUMROAD_URL_BASIC || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Basic
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Full – highlighted */}
            <Card className="flex flex-col justify-between border-primary shadow-lg relative overflow-visible">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="default" className="px-4 py-1 text-sm">
                  Most popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>Full</CardTitle>
                <CardDescription>Best value – ready to monetize</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">€69</p>
                <p className="text-sm text-muted-foreground">one-time</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <a
                    href={process.env.NEXT_PUBLIC_GUMROAD_URL_FULL || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Full
                  </a>
                </Button>
              </CardFooter>
            </Card>

            {/* Pro */}
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Lifetime updates & support</CardDescription>
                <Badge variant="secondary" className="mt-2">
                  Lifetime
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">€99</p>
                <p className="text-sm text-muted-foreground">one-time</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={process.env.NEXT_PUBLIC_GUMROAD_URL_PRO || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Pro
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
