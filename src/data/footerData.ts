export type OrganisationDataType = {
  address: string;
  phones: { phone: string; phoneNumber: number }[];

  certificate: string;
};

const organisationData: OrganisationDataType = {
  address: 'Россия, г.Н. Новгород, Автозаводский район, ул. Гнилицкая, д.139',
  phones: [
    { phone: '+7 (999) 076-36-46', phoneNumber: 79990763646 },
    { phone: '+7 (930) 285-98-66', phoneNumber: 79302859866 },
    { phone: '+7 (831) 269-16-12', phoneNumber: 78312691612 },
  ],
  certificate:
    'Свидетельство о государственной регистрации № 1234 от 6 июня 2002 г. ООО Гостинично - Развлекательный комплекc "Стригино" ИНН 5256041654',
};

export function getOrganisationData() {
  return organisationData;
}
