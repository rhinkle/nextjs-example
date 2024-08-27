import Link from "next/link";

export type PostListProps = {
  posts: Post[];
};

export type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostList({ posts }: PostListProps) {
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className={
            "rounded px-3.5 py-1.5 text-lg font-semibold hover:bg-slate-200"
          }
        >
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </>
  );
}
