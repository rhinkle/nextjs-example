export type SinglePostPageProps = {
  params: { id: string };
};

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
