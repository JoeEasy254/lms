import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  id: number;
  plan: string;
  duration: string;
  amount: number;
  description: string;
  stripe_link: string;
  access: string[];
}

export default function PricingCard({
  pricing,
}: {
  pricing: PricingCardProps;
}) {
  return (
    <div>
      <Card className="h-full relative">
        <CardHeader>
          <CardTitle>{pricing.plan}</CardTitle>
          <CardDescription>{pricing.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-extrabold tracking-tight">
              ${pricing.amount}
            </span>
            <span className="text-xl font-semibold">/{pricing.duration}</span>
          </div>
          <ul className="space-y-2 my-8">
            {pricing.access.map((option, index) => (
              <li key={index} className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                {option}
              </li>
            ))}
          </ul>
          <Link
            className="absolute bottom-4 left-3 right-3"
            href={pricing.stripe_link}
          >
            <Button className="w-full p-3">Get Started</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
