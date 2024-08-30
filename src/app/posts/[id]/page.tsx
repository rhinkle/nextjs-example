export type SinglePostPageProps = {
  params: { id: string };
};

interface Post {
  id: number;
  title: string;
  body: string;
}

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts?limit=3");
  const data = await response.json();

  return data.posts.map((post: Post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
}

export default async function SinglePostPage({ params }: SinglePostPageProps) {
  const postId = params.id;
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const postData = await response.json();

  return (
    <>
      {postData.title ? (
        <div className={"mx-auto w-6/12"}>
          <h1 className={"pb-2 text-xl font-bold"}>{postData.title}</h1>
          <p>{postData.body}</p>
        </div>
      ) : (
        <div>Post not found</div>
      )}
    </>
  );
}
