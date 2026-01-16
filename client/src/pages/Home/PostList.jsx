import PostCard from "./PostCard";

function PostList(props) {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {props.posts.map((post) => (
        <PostCard key={post.eid} post={post} />
      ))}
    </div>
  );
}

export default PostList;
