import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

async function fetchData() {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await postsResponse.json();

  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await usersResponse.json();

  return { posts, users };
}

const Home: NextPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const { posts, users } = await fetchData();
      const newData = posts.map((post: any) => {
        const user = users.find((user: any) => user.id === post.userId);
        return { ...post, username: user.username };
      });
      setData(newData);
    }
    getData();
  }, []);
  
  return (
    <div>
      <Head>
        <title>Djøf Blog</title>
      </Head>
      <main>
        <div className="grid mx-5 my-10 gap-6 md:grid-cols-2 lg:mx-20 ">
          {data.map((post: any) => (
            <div className="bg-slate-200 p-5 border border-black" key={post.id}>
              <Link href={`${post.id}`}>
                <h3 className="font-bold">{post.title}</h3>
                <p>Written by: {post.username}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
