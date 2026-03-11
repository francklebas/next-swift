"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { createCheckoutSession } from "@/app/actions/createCheckoutSession";

interface CheckoutButtonProps {
  priceId: string;
  variant?: "default" | "outline";
}

export function CheckoutButton({ priceId, variant = "default" }: CheckoutButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const url = await createCheckoutSession(priceId);
      if (url) {
        window.location.href = url;
      }
    });
  };

  return (
    <Button 
      className="w-full" 
      variant={variant} 
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? "Loading..." : variant === "outline" ? "Buy Basic" : "Buy Full"}
    </Button>
  );
}
