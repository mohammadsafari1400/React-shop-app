const Sizes = ({ sizes }) => {
  return (
    <div className="sizes">
      {sizes.map((size, index) => (
        <span className="size" key={index}>
          {size}
        </span>
      ))}
    </div>
  );
};

export default Sizes;
