import AboutPhoto from '../assets/images/about/about.jpg';

const aboutData = {
  header: {
    title: 'Об отеле',
    photo: AboutPhoto,
  },

  title: {
    title: 'Гостинично – ресторанный комплекс «Стригино»',
    description:
      'Мы предлагаем широкий спектр услуг как для бизнеса, так и для индивидуального отдыха',
  },
};

export function getAboutData() {
  return aboutData;
}
