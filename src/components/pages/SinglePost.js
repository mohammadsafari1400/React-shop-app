import { useState } from "react";
import { useParams } from "react-router-dom";
import { SideBySideMagnifier } from "react-image-magnifiers";
import data from "../../data";
import Colors from "../shop/Colors";
import Images from "../shop/Images";
import Sizes from "../shop/Sizes";
const SinglePost = ({ addToCart }) => {
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  const { title, images, description, sizes, colors } = data[id];
  return (
    <li className="single-post">
      {/* pic */}
      <div style={{ width: "22vw" }}>
        <SideBySideMagnifier
          className="input-position"
          imageSrc={`.${images[index]}`}
          alt={title}
          alwaysInPlace={true}
          overlayOpacity={0.6}
          switchSides={false}
          zoomPosition="left"
          inPlaceMinBreakpoint={641}
          fillAvailableSpace={false}
          fillAlignTop={false}
          fillGapTop={10}
          fillGapRight={10}
          fillGapBottom={10}
          fillGapLeft={0}
          zoomContainerBorder="1px solid #ccc"
          zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
        />
      </div>
      {/* // info */}
      <div className="info">
        <h5 className="title">{title}</h5>
        <h5 className="description">description : {description}</h5>
        <Colors colors={colors} />
        <Sizes sizes={sizes} />
        <div className="box">
          <Images images={images} setIndex={setIndex} />
        </div>
        <button className="add-btn" onClick={() => addToCart(id)}>
          Add to cart
        </button>
      </div>
    </li>
  );
};
export default SinglePost;
