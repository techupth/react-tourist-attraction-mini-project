import PostCard from "./PostCard";

function PostList() {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <PostCard />
      <PostCard />
    </div>
  );
}

export default PostList;
