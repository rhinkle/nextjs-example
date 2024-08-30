import PostList from "@/components/PostList";

export default async function PostPage() {
  const response = await fetch("https://dummyjson.com/posts?limit=3");
  const data = await response.json();

  return (
    <div>
      <PostList posts={data.posts} />
    </div>
  );
}
