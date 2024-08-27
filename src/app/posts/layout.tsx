export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={"container mx-auto my-3.5 w-10/12 rounded bg-gray-100 py-3.5"}
    >
      <div className={"px-4"}>{children}</div>
    </main>
  );
}
