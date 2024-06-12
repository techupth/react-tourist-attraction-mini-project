// import React from "react";
// import "../styles/TripCard.css";

// function TripCard({ trip }) {
//   const { title, description, photos, url, tags } = trip;

//   const shortDescription =
//     description.length > 100
//       ? description.substring(0, 100) + "..."
//       : description;

//   const handleTagClick = (tag) => {
//     document.getElementById("searchInput").value += ` ${tag}`;
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(url);
//   };

//   return (
//     <div className="trip-card">
//       <div className="photos">
//         <img src={photos[0]} alt={title} />
//       </div>
//       <h2>
//         <a href={url} target="_blank" rel="noopener noreferrer">
//           {title}
//         </a>
//       </h2>
//       <p>{shortDescription}</p>
//       <a
//         href={url}
//         className="read-more"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         อ่านต่อ
//       </a>

//       <div className="tags">
//         {tags.map((tag) => (
//           <span key={tag} onClick={() => handleTagClick(tag)}>
//             {tag}
//           </span>
//         ))}
//       </div>

//       <div className="small-photos">
//         {photos.slice(1, 4).map((photo, index) => (
//           <img key={index} src={photo} alt={`${title}-${index}`} />
//         ))}
//       </div>

//       <div className="trip-card-actions">
//         <button onClick={copyToClipboard}>Copy URL</button>
//       </div>
//     </div>
//   );
// }

// export default TripCard;
import React, { useState } from "react";
import "../styles/TripCard.css";

function TripCard({ trip }) {
  const { title, description, photos, url, tags } = trip;

  const [isFullDescription, setIsFullDescription] = useState(false);

  const toggleDescription = () => {
    setIsFullDescription(!isFullDescription);
  };

  const getDescription = () => {
    return isFullDescription
      ? description
      : description.substring(0, 100) + "...";
  };

  const handleTagClick = (tag) => {
    document.getElementById("searchInput").value += ` ${tag}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="trip-card">
      <div className="photos">
        <img src={photos[0]} alt={title} />
      </div>
      <h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p onClick={toggleDescription}>{getDescription()}</p>
      <a
        href={url}
        className="read-more"
        target="_blank"
        rel="noopener noreferrer"
      >
        {isFullDescription ? "อ่านต่อ" : "อ่านต่อ"}
      </a>

      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} onClick={() => handleTagClick(tag)}>
            {tag}
          </span>
        ))}
      </div>

      <div className="small-photos">
        {photos.slice(1, 4).map((photo, index) => (
          <img key={index} src={photo} alt={`${title}-${index}`} />
        ))}
      </div>

      <div className="trip-card-actions">
        <button onClick={copyToClipboard}>Copy URL</button>
      </div>
    </div>
  );
}

export default TripCard;
