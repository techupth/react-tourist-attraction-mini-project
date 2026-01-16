import { Link } from "lucide-react";
import { Fragment } from "react";

function PostCard(props) {
  return (
    <div className="flex gap-6 w-4/5 h-52">
      <img
        src={props.post.photos[0]}
        className="flex-1 min-w-0 object-cover rounded-3xl"
      />
      <div className="flex flex-col flex-2 min-w-0 pb-2">
        <a
          href={props.post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          <h2 className="text-2xl line-clamp-1">{props.post.title}</h2>
        </a>
        <p className="truncate text-sm text-gray-400">
          {props.post.description}
        </p>
        <a
          href={props.post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-sm text-blue-500 underline"
        >
          อ่านต่อ
        </a>
        <div className="flex gap-2 text-sm text-gray-400">
          <span>หมวด:</span>
          {props.post.tags.map((tag, index) => {
            if (index === props.post.tags.length - 1) {
              return (
                <Fragment key={tag}>
                  <span>และ</span>
                  <button
                    onClick={() => {
                      props.handleClickTag(tag);
                    }}
                    className="underline cursor-pointer"
                  >
                    {tag}
                  </button>
                </Fragment>
              );
            }
            return (
              <button
                key={tag}
                onClick={() => props.handleClickTag(tag)}
                className="underline cursor-pointer"
              >
                {tag}
              </button>
            );
          })}
        </div>
        <div className="flex flex-1 justify-between items-end mt-1 overflow-hidden">
          <div className="flex gap-6 h-full">
            {props.post.photos.slice(1, 4).map((photo, index) => (
              <img
                key={index}
                src={photo}
                className=" aspect-square object-cover rounded-xl"
              />
            ))}
          </div>
          <div className="p-1 border-2 border-blue-400 rounded-full">
            <Link className="text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
