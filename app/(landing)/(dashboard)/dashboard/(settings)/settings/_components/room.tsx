import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Room as RoomType } from "@prisma/client";
import axios from "axios";
import { Edit, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import EditDialogName from "./editNameDialog";

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
        description: "course removed",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="grid gap-1">
        <div className="text-lg font-medium">{details.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {details.participants.length} participants
        </div>
      </div>
      <div className="flex items-center gap-x-2 ">
        <Button onClick={removeRoom} size="sm" variant="default">
          <TrashIcon />
        </Button>
        <EditDialogName name={details.name} id={details.id} type="course" />
      </div>
    </div>
  );
}
