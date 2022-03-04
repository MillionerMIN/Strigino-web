import './scroll-up.scss';

import { IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';
import setScrollTop from './setScrollTop';

const getTop = () => document.documentElement.scrollTop || window.scrollY;

function ScrollUp() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const offset = 100;
  const classes = isActive ? 'scroll-up__active' : '';
  //onScroll
  window.addEventListener('scroll', () => {
    if (getTop() > offset) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  //Click
  const clickHandler = () => {
    setScrollTop();
  };
  return (
    <div className={`scroll-up ${classes}`} onClick={clickHandler}>
      <IoIosArrowUp className="scroll-up__svg" />
    </div>
  );
}

export default ScrollUp;
