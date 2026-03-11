import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .limit(3);

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-10">
        <h2 className="mb-6 text-3xl font-bold">
          Bienvenue, {user.firstName || user.username} !
        </h2>

        <div className="grid gap-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">Ton profil Clerk</h3>
            <p>Email: {user.emailAddresses[0]?.emailAddress}</p>
            <p>Clerk ID (sub): {user.id}</p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">
              Tes profiles Supabase (RLS protégé)
            </h3>
            {profiles && profiles.length > 0 ? (
              <ul className="list-disc pl-6">
                {profiles.map((p) => (
                  <li key={p.id}>
                    Username: {p.username || "non défini"} | Créé le{" "}
                    {new Date(p.created_at).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Aucun profile encore (RLS actif : tu ne vois que les tiens)</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
