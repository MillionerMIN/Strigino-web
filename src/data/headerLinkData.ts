export type MenuType = {
  value: string;
  ref: string;
};

const menusLeft: MenuType[] = [
  { value: 'об отеле', ref: '/about' },
  { value: 'спецпредложения', ref: '/special-offers' },
  { value: 'ресторан', ref: '/restaurant' },
];

const menusRight: MenuType[] = [
  { value: 'номера', ref: '/rooms' },
  { value: 'конференц-услуги', ref: '/conference-facilities' },
  { value: 'контакты', ref: '/contacts' },
];

export function getMenuLeft() {
  return menusLeft;
}
export function getMenuRight() {
  return menusRight;
}
