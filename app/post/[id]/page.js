import "./post.modules.css";
import Post from "@/app/components/Post";

export async function generateMetadata({params, searchParams}) {
    const post = await fetchPost(params.id)
    return {
        title: post.title,
        description: post.body
    }
}

async function fetchPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
}


const PostPage = async ({ params }) => {
  const { id } = params;
  const data = await fetchPost(id);
  return (
    <>
      <Post data={data} />
    </>
  );
};

export default PostPage;
