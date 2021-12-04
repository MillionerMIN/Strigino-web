import { Routes, Route } from 'react-router-dom';
import { About } from '../about/About';
import { Home } from '../pages/home/Home';
import './router.scss';

export const Router = () => {
  return (
    <div className="main main_mr-top">
      {/*Switch выбирает первый подходящий роут*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
