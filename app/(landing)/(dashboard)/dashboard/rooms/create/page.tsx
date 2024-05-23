import { CreateForm } from "./_components/Form-create";

export default function CreateRoom() {
  return (
    <div className="mx-auto md:w-[600px]">
      <h2 className="my-4 text-xl">Create your class</h2>

      <CreateForm />
    </div>
  );
}
