import React, { useState, useEffect } from "react";
import ImageCard from "./component/ImageCard";
import SearchImage from "./component/SearchImage";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      });
  }, [term]);

  return (
    <div className="mx-auto container">
      <SearchImage setSearch={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-center text-3xl">Not Image Found</h1>
      )}
      {isLoading ? (
        <h1 className="text-center text-4xl">Loading...</h1>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
