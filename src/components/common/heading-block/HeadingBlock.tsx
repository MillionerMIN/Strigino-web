import './headingBlock.scss';

type HeadingBlockType = {
  data: {
    title: string;
    photo: string;
  };
};

export const HeadingBlock = (props: HeadingBlockType) => {
  const { photo, title } = props.data;
  return (
    <div className="heading-block">
      <div className="heading-block__background">
        <img className="heading-block__image" src={photo} alt="ImagePhoto" />
      </div>
      <div className="heading-block__wrapper">
        <div className="heading-wrapper">
          <div className="container">
            <div className="heading">
              <h1 className="title title_fs50 title_background title_pd t">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
