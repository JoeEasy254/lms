import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Room as RoomType } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Room({
  details,
}: {
  details: RoomType & { participants: any };
}) {
  const router = useRouter();
  const removeRoom = async () => {
    try {
      const obj = {
        creatorId: details.userId,
        roomId: details.id,
      };

      await axios({
        method: "delete",
        url: "/api/room",
        data: {
          ...obj,
        },
      });
      router.refresh();
      toast({
        title: "Alert",
        description: "room removed",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <div className="grid gap-1">
        <div className="text-lg font-medium">{details.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {details.participants.length} participants
        </div>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <Button onClick={removeRoom} size="sm" variant="outline">
          Delete Room
        </Button>
        <Button size="sm" variant="outline">
          Edit Room
        </Button>
      </div>
    </div>
  );
}
