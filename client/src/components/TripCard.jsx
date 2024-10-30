import React, { useState } from "react";

import "../styles/TripCard.css";
import linkButtonIcon from "../assets/link-button.svg";

function TripCard({ trip }) {
  const { title, description, photos, url, tags } = trip;

  const [showBigPhoto, setShowBigPhoto] = useState(false);
  const [bigPhotoIndex, setBigPhotoIndex] = useState(0);

  const shortDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  const handleTagClick = (tag) => {
    document.getElementById("searchInput").value += ` ${tag}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  const toggleBigPhoto = (index) => {
    setShowBigPhoto(!showBigPhoto);
    setBigPhotoIndex(index);
  };

  const handleSmallPhotoClick = (index) => {
    toggleBigPhoto(index + 1);
  };

  return (
    <div className="trip-card">
      <div className="photos">
        <img src={photos[0]} alt={title} onClick={() => toggleBigPhoto(0)} />
      </div>
      <div>
        {/*กล่องแดง */}
        <div>
          {/*กล่องเขียว1 */}
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p>{shortDescription}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            อ่านต่อ
          </a>

          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} onClick={() => handleTagClick(tag)}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/*กล่องเขียว1 */}
        <div className="box2">
          {/*กล่องเขียว2 */}
          <div className="small-photos">
            {photos.slice(1, 4).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${title}-${index}`}
                onClick={() => handleSmallPhotoClick(index)}
              />
            ))}
          </div>

          <div className="trip-card-actions">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <img src={linkButtonIcon} alt="Copy URL" width="20" height="20" />
            </a>
          </div>

          {showBigPhoto && (
            <div
              className="big-photo-overlay"
              onClick={() => toggleBigPhoto(0)}
            >
              <div className="big-photo-container">
                <img src={photos[bigPhotoIndex]} alt={title} />
              </div>
            </div>
          )}
        </div>
        {/*กล่องเขียว2 */}
      </div>

      {/*กล่องแดง */}
    </div>

    // <div className="trip-card">
    //   <div className="photos">
    //     <img src={photos[0]} alt={title} onClick={() => toggleBigPhoto(0)} />
    //   </div>

    //   <div className="small-photos">
    //     {photos.slice(1, 4).map((photo, index) => (
    //       <img
    //         key={index}
    //         src={photo}
    //         alt={`${title}-${index}`}
    //         onClick={() => handleSmallPhotoClick(index)}
    //       />
    //     ))}
    //   </div>

    //   <div className="trip-card-actions">
    //     <a
    //       href={url}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="link-button"
    //     >
    //       <img src={linkButtonIcon} alt="Copy URL" width="20" height="20" />
    //     </a>
    //   </div>

    //   {showBigPhoto && (
    //     <div className="big-photo-overlay" onClick={() => toggleBigPhoto(0)}>
    //       <div className="big-photo-container">
    //         <img src={photos[bigPhotoIndex]} alt={title} />
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}

export default TripCard;
