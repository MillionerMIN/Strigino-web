import './blokTitle.scss';

type BlockTitleType = {
  data: {
    title: string;
    description: string;
  };
};

export const BlockTitle = (props: BlockTitleType) => {
  const { title, description } = props.data;
  return (
    <div className="block-title block-title_pb">
      <div className="container">
        <h2 className="title title_fs36 text-uppercase">{title}</h2>
        <div className="block-delimiter block-delimiter_mr d-flex justify-content-center">
          <div className="triangle triangle_left"></div>
          <div className="dot"></div>
          <div className="triangle triangle_right"></div>
        </div>
        <div className="block-description block-description_mr">
          {description}
        </div>
      </div>
    </div>
  );
};
