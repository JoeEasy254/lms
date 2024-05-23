import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Course() {
  return (
    <div>
      <Card>
        <img
          alt="Course Thumbnail"
          className="rounded-t-lg"
          height={225}
          src="https://i.pinimg.com/736x/3d/d4/fd/3dd4fdcd69a2858b06bd01be9ea3c531.jpg"
          style={{
            aspectRatio: "400/225",
            objectFit: "cover",
          }}
          width={400}
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            Introduction to Web Development
          </h3>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Learn the fundamentals of web development, including HTML, CSS, and
            JavaScript.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage alt="Instructor" src="/instructor-avatar-1.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-700 dark:text-gray-400">
                John Doe
              </span>
            </div>
            <Button size="sm">Enroll</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
