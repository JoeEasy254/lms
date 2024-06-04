"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface RoutesProps {
  routes: {
    name: String;
    path: string;
    icon: React.ReactElement;
  }[];
}

export default function SideNav({ routes }: RoutesProps) {
  const pathname = usePathname();
  return (
    <div>
      <div className="md:block hidden min-h-screen  w-[250px] mt-0 pt-0">
        <ul className="relative flex flex-col space-y-[20px] mx-4 my-4">
          <li className="text-xl">Pamoja Learn</li>
          {routes.map((route) => (
            <>
              <li>
                <Link
                  className={`flex items-center  gap-x-2 ${
                    pathname === route.path &&
                    "bg-[#ddd]  rounded-md p-2 dark:bg-[#fff] dark:text-black"
                  } `}
                  href={route.path}
                >
                  {route.icon} {route.name}
                </Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
