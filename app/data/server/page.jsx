import React from "react";

const fetchData = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
};

const CleintData = async () => {
  const data = await fetchData();

  return (
    <div className="data__main">
      <div className="grid">
        {data.map((each) => {
          const { id, title, body } = each;
          return (
            <div key={id} className="image-card">
              <p>Title: {title}</p>
              <hr />
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const metadata = {
    title: "Server data fetch",
    description: "This component is used to fetch data from server side where client side hooks and nothing is used"
}

export default CleintData;
