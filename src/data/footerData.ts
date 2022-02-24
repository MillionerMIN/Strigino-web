export type OrganisationDataType = {
  address: string;
  phone: string;
  phoneNumber: number;
  certificate: string;
};

const organisationData: OrganisationDataType = {
  address: 'Россия, г.Н. Новгород, Автозаводский район, ул. Гнилицкая, д.139',
  phone: '+7 999 076-36-46',
  phoneNumber: 79990763646,
  certificate:
    'Свидетельство о государственной регистрации № -------- от 6 июня ---- г. Гостинично - Ресторанный комплекc "Стригино" УНП ----------, Дата регистрации в торговом реестре ----------: 06.07.2008 г.',
};

export function getOrganisationData() {
  return organisationData;
}
