export type SocialType = {
  name: string;
  img: string;
  link: string;
};

export const socialsData: SocialType[] = [
  {
    name: 'Facebook',
    img: 'icon-facebook-icon',
    link: 'https://www.facebook.com/hotelstrigino',
  },
  {
    name: 'Instagram',
    img: 'icon-instagram-icon',
    link: 'https://instagram.com/strigino_restaurant_hotel?utm_medium=copy_link',
  },
  {
    name: 'Viber',
    img: 'icon-viber-icon',
    link: 'viber://add?number=79990763646',
  },
  {
    name: 'Whatsapp',
    img: 'icon-whatsapp-icon',
    link: 'https://api.whatsapp.com/send?phone=79990763646',
  },
  {
    name: 'Telegram',
    img: 'icon-telegram-icon',
    link: 'https://telegram.im/@Strigino139',
  },
];

export function getSocialsData() {
  return socialsData;
}
