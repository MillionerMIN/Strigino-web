import NodFound from '../../../img/not-found/not-found.png';
import './pageError.scss';

const PageError = () => {
  return (
    <div className="pageError">
      <img src={NodFound} alt="NodFound" />
    </div>
  );
};

export default PageError;
