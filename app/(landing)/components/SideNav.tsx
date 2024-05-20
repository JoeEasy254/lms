
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";

interface RoutesProps {
  routes: {
    name: String;
    path: string;
  }[];
}

export default function SideNav({ routes }: RoutesProps) {
  return (
    <div>
      <div className="md:block hidden min-h-screen  w-[250px] mt-0 pt-0">
        <ul className="relative flex flex-col space-y-[20px] mx-4 my-4">
          {routes.map((route) => (
            <>
              <li className="flex items-center gap-x-2 ">
                <Link href={route.path}>{route.name}</Link>
              </li>
            </>
          ))}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
}
