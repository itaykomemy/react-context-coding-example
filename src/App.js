import { places } from "./data.js";
import { getImageUrl } from "./utils.js";
import { ImageSizeContext } from "./Context.js";
import { useContext } from "react";

function Switch() {
  const { isLarge, setIsLarge } = useContext(ImageSizeContext);
  return (
    <label>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={(e) => {
          setIsLarge(e.target.checked);
        }}
      />
      Use large images
    </label>
  );
}

export default function App() {
  return (
    <>
      <Switch />
      <hr />
      <List />
    </>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  console.log("place is rendered");
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const { imageSize } = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
