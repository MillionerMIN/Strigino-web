type SliderPropsType = {
  data: any;
};

export const Slider = (props: SliderPropsType) => {
  const { data } = props;

  const photo = data.map((item: string, i: number) => (
    <div className="carousel-item active" key={i}>
      <img src={item} className="d-block w-100" alt={item} />
    </div>
  ));

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          {photo}
          {/* <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div> */}
        </div>
      </div>
    </>
  );
};
