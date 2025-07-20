import Link from "next/link";

const Post = ({ data }) => {
  return (
    <>
      <Link href="/" className="back-btn">
        Back
      </Link>
      <div className="post-container">
        <h1 className="title">{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </>
  );
};

export default Post;
