import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";
import { Posts } from "@prisma/client";
import { truncateString } from "./helpers/truncateString";
import { Badge } from "@/components/ui/badge";
import TimeAgo from "javascript-time-ago";
import MDEditor from "@uiw/react-md-editor";
// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");
export default function Article({ post }: { post: Posts }) {
  return (
    <div className="md:w-[800px]">
      <Card>
        <CardContent className="p-4">
          <h3 className="mb-2 text-xl font-bold">{post.title}</h3>

          {post && (
            <MDEditor.Markdown
              source={truncateString(post.content, 200)}
              style={{ whiteSpace: "pre-wrap" }}
            />
          )}
          <Link
            className="mt-4 inline-flex items-center "
            href={`/dashboard/blog/article/${post.id}`}
          >
            Read More
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </CardContent>
        <div className="flex justify-between items-center mx-1">
          <Badge variant={"outline"} className="h-5">
            {timeAgo.format(new Date(post.createdAt))}
          </Badge>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Avatar>
              <AvatarImage alt="Author" src="/placeholder-user.jpg" />
              <AvatarFallback>PL</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Pamoja Learn</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
