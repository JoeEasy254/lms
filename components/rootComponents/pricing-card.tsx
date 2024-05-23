import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";

export default function PricingCard() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>Get started with our basic plan.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-extrabold tracking-tight">$9</span>
            <span className="text-xl font-semibold">/month</span>
          </div>
          <ul className="space-y-2 my-8">
            <li className="flex items-center">
              <CheckIcon className="w-5 h-5 mr-2 text-primary" />
              Access to all courses
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-5 h-5 mr-2 text-primary" />
              Quizzes and assessments
            </li>
            <li className="flex items-center">
              <CheckIcon className="w-5 h-5 mr-2 text-primary" />
              Certificate of completion
            </li>
            <li className="flex items-center">
              <XIcon className="w-5 h-5 mr-2 text-red-500" />
              Leaderboard and achievements
            </li>
          </ul>
          <Button className="w-full">Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
}
