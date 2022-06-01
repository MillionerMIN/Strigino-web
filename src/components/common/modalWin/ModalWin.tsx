import './modalWin.scss';

import { CloseButton } from 'react-bootstrap';
import { ReactElement } from 'react';

type ModalWinType = {
  show: boolean;
  setModalShow: (e: boolean) => void;
  children: ReactElement;
};

const ModalWin = (props: ModalWinType) => {
  const { show, setModalShow, children } = props;
  const clazz = show ? ' modal-win modal-win__show' : 'modal-win';

  return (
    <div className={`modal-win ${clazz}`}>
      <div className="modal-win__wrapper">
        {children}
        <div className="modal-win__buttonClose">
          <CloseButton onClick={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default ModalWin;
