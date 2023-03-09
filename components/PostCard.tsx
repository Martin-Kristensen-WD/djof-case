export default function PostCard(post: any, user: any) {
  return (
    <div className="bg-blue-200 py-5 my-5">
      <h1 className="text-md">{post.title}</h1>
      <p>{user.username}</p>
      
    </div>
  );
}
