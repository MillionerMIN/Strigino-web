import './blokTitle.scss';

export const BlockTitle = () => {
  return (
    <div className="block-title block-title_pb">
      <div className="container">
        <span className="title title_fs36">Лучшие номера для вас</span>
        <div className="block-delimiter flex">
          <div className="icon icon-line-left"></div>
          <div className="dot"></div>
          <div className="icon icon-line-right"></div>
        </div>
        <div className="block-description">
          Отель «Европа» предоставляет широкий перечень номеров <br /> для
          бизнеса и индивидуального отдыха
        </div>
      </div>
    </div>
  );
};
