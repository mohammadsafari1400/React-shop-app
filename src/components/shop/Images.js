const Images = ({ images, setIndex }) => {
  return (
    <>
      {images.map((image, index) => (
        <img
          className="images"
          src={`.${image}`}
          key={index}
          alt="pic"
          onClick={() => setIndex(index)}
        />
      ))}
    </>
  );
};

export default Images;
