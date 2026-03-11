import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", clerkUser.id)
    .limit(5);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    clerkUserId: clerkUser.id,
    profiles: data || [],
  });
}
