const CarouselItem = ({ item }) => {
  return (
    <div className="item">
      <img src={item.img} alt="" />
      <div className="carousel-text-wrap">
        <div className="container">
          <h2>{item.heading}</h2>
          <p>{item.para}</p>
        </div>
      </div>
    </div>
  );
};
export default CarouselItem;
