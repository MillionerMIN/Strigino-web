import './loader.scss';

import Lottie from 'react-lottie';
import animationData from './loader.json';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSetting: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="loader">
      <Lottie options={defaultOptions} width={150} height={150} />
    </div>
  );
};

export default Loader;
