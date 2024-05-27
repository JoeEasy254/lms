import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { db } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";

export default async function ArticlePage({
  params,
}: {
  params: { articleId: string };
}) {
  const article = await db.posts.findFirst({
    where: {
      id: params?.articleId,
    },
  });

  const auth = await currentUser();

  return (
    <>
      <div suppressHydrationWarning className="h-screen overflow-auto ">
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {article?.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
            <Avatar>
              <AvatarImage alt="@shadcn" src={auth?.imageUrl} />
              <AvatarFallback>
                {auth?.firstName?.charAt(0) || auth?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">
                {auth?.firstName || auth?.lastName}
              </div>
              <div>Freelance Writer</div>
            </div>
          </div>
          <div
            className="max-w-screen text-xl"
            dangerouslySetInnerHTML={{ __html: String(article?.content) }}
          ></div>
        </article>
      </div>
    </>
  );
}
