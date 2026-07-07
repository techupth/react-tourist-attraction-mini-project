import { useEffect, useRef, useState } from "react";

const DESCRIPTION_PREVIEW_LENGTH = 100;

function truncateDescription(text) {
  if (!text) return "";
  const singleLine = text.replace(/\n+/g, " ").trim();
  if (singleLine.length <= DESCRIPTION_PREVIEW_LENGTH) return singleLine;
  return `${singleLine.slice(0, DESCRIPTION_PREVIEW_LENGTH)}...`;
}

function DestinationCard({ title, description, photos, tags, url, onTagClick }) {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeoutRef = useRef(null);
  const mainImage = photos?.[0] ?? "";
  const galleryImages = photos?.slice(1, 4) ?? [];

  const handleTagClick = (tag) => {
    onTagClick?.(tag);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);

      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }

      copyTimeoutRef.current = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch {
      setIsCopied(false);
    }
  };

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  return (
    <article className="flex flex-col gap-6 sm:flex-row sm:items-start">
      <div className="w-full shrink-0 sm:w-[320px]">
        <img
          className="aspect-[4/3] w-full rounded-3xl object-cover"
          src={mainImage}
          alt={title}
        />
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-6">
        <div className="min-w-0 flex-1">
          <h2 className="mb-2 text-xl font-bold leading-snug">
            <a
              className="text-gray-900 hover:text-primary"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </h2>

          <p className="mb-3 text-sm leading-relaxed text-gray-500">
            {truncateDescription(description)}{" "}
            <a
              className="text-primary underline hover:text-primary-dark"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              อ่านต่อ
            </a>
          </p>

          <div className="mb-3 text-sm text-gray-600">
            <span>หมวด - </span>
            {tags?.map((tag, index) => (
              <span key={tag}>
                <button
                  type="button"
                  className="underline hover:text-primary"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
                {index < tags.length - 1 && " "}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            {galleryImages.map((image, index) => (
              <img
                key={`${image}-${index}`}
                className="h-[72px] w-[72px] rounded-xl object-cover"
                src={image}
                alt={`${title} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2 transition-colors ${
            isCopied
              ? "border-primary bg-gray-50 text-green-600"
              : "border-primary text-primary hover:bg-primary hover:text-white"
          }`}
          onClick={handleCopyLink}
          aria-label={isCopied ? "คัดลอกลิงก์แล้ว" : `คัดลอกลิงก์ ${title}`}
        >
          {isCopied ? (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
}

export default DestinationCard;
