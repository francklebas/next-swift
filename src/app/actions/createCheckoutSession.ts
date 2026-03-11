"use server";

import { stripe } from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function createCheckoutSession(priceId: string) {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    customer_email: user.emailAddresses[0]?.emailAddress,
    metadata: {
      clerkUserId: user.id,
    },
    success_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/dashboard?canceled=true`,
  });

  return session.url;
}
