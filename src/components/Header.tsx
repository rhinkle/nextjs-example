import Link from "next/link";

export const Header = () => {
  return (
    <div className={"container mx-auto w-full rounded bg-gray-200 py-3.5"}>
      <div className={"mx-auto w-full px-4"}>
        <div className={"flex flex-1 flex-row"}>
          <div>NextJs Examples</div>
          <div className={"flex flex-1 flex-row justify-end"}>
            <div className={"mx-2"}>
              <Link href={"/"}>Home</Link>
            </div>
            <div className={"mx-2"}>
              <Link href={"/posts"}>Posts</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
