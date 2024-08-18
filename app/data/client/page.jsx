"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CleintData = () => {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState(50); // initially show 50 images

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        handleLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleData, data]);

  const handleLoadMore = () => {
    setVisibleData((prev) => prev + 50); // load more images in increments of 50
  };

  return (
    <div className="data__main">
      <div className="grid">
        {data.slice(0, visibleData).map((each) => {
          const { id, title, url } = each;
          return (
            <div key={id} className="image-card">
              <Image
                src={url}
                alt={title}
                width={220}
                height={200}
                loading="lazy"
              />
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      {visibleData < data.length && (
        <p className="loading-text">Loading more images...</p>
      )}
    </div>
  );
};

export default CleintData;
