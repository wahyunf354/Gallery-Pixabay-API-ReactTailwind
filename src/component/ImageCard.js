import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="card max-w-sm overflow-hidden shadow-lg">
      <img className="w-full" src={image.previewURL} alt="" />
      <div className="px-6 py-3 text-orange-500">
        <h1 className="text-base font-semibold">Photo by {image.user}</h1>
      </div>
      <div className="px-6 py-2">
        <ul>
          <li className="text-xs font-medium">Views : {image.views}</li>
          <li className="text-xs font-medium">Downloads : {image.downloads}</li>
          <li className="text-xs font-medium">Likes :{image.likes}</li>
        </ul>
      </div>
      <div className="px-6 py-3 flex justify-start">
        {tags.map((tag, id) => (
          <span
            key={id}
            className="rounded-full bg-gray-200 text-xs px-2 py-1 mr-3"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
