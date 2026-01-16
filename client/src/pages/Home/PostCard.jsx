import { Link } from "lucide-react";

function PostCard(props) {
  return (
    <div className="flex gap-6 w-4/5 h-52">
      <img
        src="https://www.whiskas.com.ph/sites/g/files/fnmzdf8166/files/2025-05/cat-breeds-25_1920x670_1652359400159.jpg"
        className="flex-1 min-w-0 object-cover rounded-3xl"
      />
      <div className="flex flex-col flex-2 min-w-0 pb-2">
        <h2 className="text-2xl">ร้านกาแฟแนะนำ</h2>
        <p className="truncate text-sm text-gray-400">ร้านกาแฟสบายๆ</p>
        <span className="text-sm">อ่านต่อ</span>
        <div className="flex gap-2 text-sm">
          <span>หมวด:</span>
          <span>คาเฟ่</span>
        </div>
        <div className="flex flex-1 justify-between items-end mt-1 overflow-hidden">
          <div className="flex gap-6 h-full">
            <img
              src="https://www.whiskas.com.ph/sites/g/files/fnmzdf8166/files/2025-05/cat-breeds-25_1920x670_1652359400159.jpg"
              className=" aspect-square object-cover rounded-xl"
            />
            <img
              src="https://www.whiskas.com.ph/sites/g/files/fnmzdf8166/files/2025-05/cat-breeds-25_1920x670_1652359400159.jpg"
              className=" aspect-square object-cover rounded-xl"
            />
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
