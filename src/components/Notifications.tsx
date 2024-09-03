import { BellRing } from "lucide-react";
import { RiNotification4Fill } from "react-icons/ri";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notifications = [
  {
    id: 1,
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    id: 2,
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    id: 3,
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[250px]", className)} {...props}>
      <CardHeader>
        <CardDescription className="flex justify-center items-center">
          <BellRing className="mr-3" />
          You have 3 unread messages.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2 ">
        <div>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="m-1 grid grid-cols-[25px_1fr] items-start rounded-md p-2  hover:bg-sky-200"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
