const Colors = ({ colors }) => {
  return (
    <>
      {colors.map((color, index) => (
        <p className="colors" key={index} style={{ background: color }}></p>
      ))}
    </>
  );
};

export default Colors;
