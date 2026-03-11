import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const buf = await req.arrayBuffer();
  const rawBody = Buffer.from(buf);
  const sig = req.headers.get("stripe-signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: "Webhook signature failed" }, { status: 400 });
  }

  console.log(`Webhook reçu: ${event.type}`);

  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("====================================");
      console.log("PAIEMENT RÉUSSI (TEST) !");
      console.log("Session ID:", session.id);
      console.log("Customer ID:", session.customer);
      console.log("Email client:", session.customer_details?.email);
      console.log("Montant:", session.amount_total / 100, session.currency?.toUpperCase());
      console.log("Clerk user ID (metadata):", session.metadata?.clerkUserId);
      console.log("====================================");
      break;
    default:
      console.log(`Event non géré: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
