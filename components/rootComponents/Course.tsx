import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CourseProp {
  title: string;
  description: string;
  thumbnail: string;
  instructor: {};
  enrollText: string;
}

export default function Course({ course }: { course: CourseProp }) {
  return (
    <div>
      <Card>
        <img
          alt="Course Thumbnail"
          className="rounded-t-lg"
          height={225}
          src={course.thumbnail}
          style={{
            aspectRatio: "400/225",
            objectFit: "cover",
          }}
          width={400}
        />
        <CardContent className="h-[250px] p-4 relative w-[100%]">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {course.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            {course.description}
          </p>
          <div className="flex items-center justify-between absolute  bottom-3  left-3 right-5">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  alt="pamoja learn"
                  src="/instructor-avatar-1.jpg"
                />
                <AvatarFallback>PL</AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-700 dark:text-gray-400">
                Pamoja Learn
              </span>
            </div>
            <Button size="sm">{course.enrollText}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
