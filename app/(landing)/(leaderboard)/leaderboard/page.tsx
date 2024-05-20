import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Leaderboard() {
  const user: any = await currentUser();
  return (
    <div className="container">
      <table className="p-2 m-4 mx-auto overflow-auto md:[w-:600px] flex md:justify-center md:items-center flex-col">
        <thead>
          <tr className="flex flex-row justify-between space-x-[160px] w-[600px] bg-white p-2 rounded">
            <th>Rank</th>
            <th>User</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className="w-[600px] mt-3">
          <tr className="flex justify-between w-[600px] bg-[#ddd] p-2 rounded shadow-md my-3 items-center">
            <td className="flex space-x-2 items-center w-[50px] h-[50px] ">
              <h1>1</h1>
              <div className="border-2 rounded-full border-blue-400">
                <Image
                  className="rounded-full cursor-pointer"
                  alt="user icon"
                  width={40}
                  height={40}
                  src={user?.hasImage && user.imageUrl}
                />
              </div>
            </td>
            <td>JosephMuchene</td>
            <td>20000</td>
          </tr>
          <tr className="flex justify-between w-[600px] bg-[#ddd] p-2 rounded shadow-md my-3 items-center">
            <td className="flex space-x-2 items-center w-[50px] h-[50px] ">
              <h1>1</h1>
              <div className="border-2 rounded-full border-blue-400">
                <Image
                  className="rounded-full cursor-pointer"
                  alt="user icon"
                  width={40}
                  height={40}
                  src={user?.hasImage && user.imageUrl}
                />
              </div>
            </td>
            <td>JosephMuchene</td>
            <td>20000</td>
          </tr>
          <tr className="flex justify-between w-[600px] bg-[#ddd] p-2 rounded shadow-md my-3 items-center">
            <td className="flex space-x-2 items-center w-[50px] h-[50px] ">
              <h1>1</h1>
              <div className="border-2 rounded-full border-blue-400">
                <Image
                  className="rounded-full cursor-pointer"
                  alt="user icon"
                  width={40}
                  height={40}
                  src={user?.hasImage && user.imageUrl}
                />
              </div>
            </td>
            <td>JosephMuchene</td>
            <td>20000</td>
          </tr>
          <tr className="flex justify-between w-[600px] bg-[#ddd] p-2 rounded shadow-md my-3 items-center">
            <td className="flex space-x-2 items-center w-[50px] h-[50px] ">
              <h1>1</h1>
              <div className="border-2 rounded-full border-blue-400">
                <Image
                  className="rounded-full cursor-pointer"
                  alt="user icon"
                  width={40}
                  height={40}
                  src={user?.hasImage && user.imageUrl}
                />
              </div>
            </td>
            <td>JosephMuchene</td>
            <td>20000</td>
          </tr>
          <tr className="flex justify-between w-[600px] bg-[#ddd] p-2 rounded shadow-md my-3 items-center">
            <td className="flex space-x-2 items-center w-[50px] h-[50px] ">
              <h1>1</h1>
              <div className="border-2 rounded-full border-blue-400">
                <Image
                  className="rounded-full cursor-pointer"
                  alt="user icon"
                  width={40}
                  height={40}
                  src={user?.hasImage && user.imageUrl}
                />
              </div>
            </td>
            <td>JosephMuchene</td>
            <td>20000</td>
          </tr>
          <tr className="flex justify-between w-[600px] bg-[#ddd] p-2 rounded shadow-md my-3 items-center">
            <td className="flex space-x-2 items-center w-[50px] h-[50px] ">
              <h1>1</h1>
              <div className="border-2 rounded-full border-blue-400">
                <Image
                  className="rounded-full cursor-pointer"
                  alt="user icon"
                  width={40}
                  height={40}
                  src={user?.hasImage && user.imageUrl}
                />
              </div>
            </td>
            <td>JosephMuchene</td>
            <td>20000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
