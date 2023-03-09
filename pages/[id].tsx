import Link from 'next/link';

export async function getServerSideProps({ params }) {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}


function Post({ post }) {
  return (
    <div className='h-screen p-12'>
      <h1 className="text-2xl pb-4">{post.title}{post.id}</h1>
      <p className='max-w-3xl'>{post.body}</p>
      <Link href="/" className='p-4 inline-block border rounded-full bg-slate-600 text-white mt-12'>Back to posts</Link>
    </div>
  );
}

export default Post;