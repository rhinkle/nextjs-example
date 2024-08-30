export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={"container mx-auto my-3.5 w-full rounded bg-gray-100 py-3.5"}
    >
      <div className={"px-4"}>{children}</div>
    </main>
  );
}
