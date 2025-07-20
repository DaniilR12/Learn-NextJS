import Link from "next/link";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await fetchData();
  return (
    <>
      <h1>Main page</h1>
      <div className="container">
        {data.map((value, index) => (
          <div key={index} className="post">
            <h2 className="card-title">{value.title}</h2>
            <p>{value.body}</p>
            <Link href={`/post/${value.id}`}>Detail</Link>
          </div>
        ))}
      </div>
    </>
  );
}
