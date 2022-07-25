import './modalWindow.scss';

type ModalWindowType = {
  children: React.ReactNode;
};

const ModalWindow = (props: ModalWindowType) => {
  const { children } = props;
  return <>{children}</>;
};

export default ModalWindow;
