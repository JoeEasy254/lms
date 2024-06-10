import { db } from "@/utils/db";
import Image from "next/image";
import { CheckIfEnrolled } from "../../_components/action";

interface CourseViewProps {
  params: {
    id: string;
  };
}

export default async function CourseView({ params }: CourseViewProps) {
  const course = await db.room.findFirst({
    where: {
      id: params.id!,
    },
    include: {
      participants: true,
    },
  });

  return (
    <div>
      {/* {params.id}
      {JSON.stringify(course)} */}

      <div className="flex justify-center flex-col space-y-3">
        <h1 className="text-center lg:text-3xl">{course?.title}</h1>

        <p className="text-center">{course?.description}</p>
      </div>

      <div className="flex justify-center flex-col space-y-4">
        <img
          alt="Room Thumbnail"
          src={course?.imageUrl!}
          className="object-cover h-[60vh] object-center rounded-md"
          style={{
            aspectRatio: "400/225",
            objectFit: "cover",
          }}
        />
        <div>{course && <CheckIfEnrolled room={course} />}</div>

        <div>
          <p>{course?.description}</p>
        </div>
      </div>
    </div>
  );
}
