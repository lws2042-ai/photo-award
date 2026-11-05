import React, { useState } from "react";
function App() {
  const [photos, setPhotos] = useState([]);
  async function handleClick() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `http://apis.data.go.kr/B551011/PhokoAwrdService/phokoAwrdSyncList?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=C&showflag=1&_type=json`;

    const response = await fetch(url);
    const data = await response.json();
    console.log("포토");
    setPhotos(data.response.body.items.item);
    console.log(data.response.body.items);
  }

  return (
    <>
      <div>
        <h1>관광공모전 수상작 정보</h1>
        <button onClick={handleClick}>불러오기</button>
        {photos.map((photo, index) => (
          <div key={index}>
            <h2>{photo.koTitle}</h2>
            <p>{photo.photoDesc}</p>
            <p>{photo.filmDay}</p>
            <p>{photo.koFilmst}</p>
            <img src={photo.orgImage} alt={photo.koTitle} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
