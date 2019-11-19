// write your CatList component here
import React from "react";

function CatList({ catPics, loading }) {
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {catPics.map(pic => (
        <img src={pic.url} key={pic.id} alt={`Cat Pic - ${pic.id}`} />
      ))}
    </div>
  );
}

export default CatList;
