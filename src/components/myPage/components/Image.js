const Image = ({ path, width, height, alt }) => {
  return (
    <div>
      <img src={path} width={width} height={height} alt={alt}></img>
    </div>
  );
};

export default Image;
