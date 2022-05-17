import './loader.scss';

import Lottie from 'react-lottie';
import animationData from './loader.json';

type LoaderType = {
  className?: string;
};

const Loader = (props: LoaderType) => {
  const { className } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSetting: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={`loader ${className}`}>
      <Lottie options={defaultOptions} width={150} height={150} />
    </div>
  );
};

export default Loader;
