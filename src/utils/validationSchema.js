import * as yup from 'yup';

const phoneRegex = /^\+?375((\s\(33\)\s\d{7})|(\s\(29\)\s\d{7})|(\s\(44\)\s\d{7}|)|(\s\(25\)\s\d{7}))\s*$/;
const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
const countryRegex = /^[\wа-яё]{3,}$/gi;
const cityRegex = /^[\wа-яё\s]{3,}$/gi;
const streetRegex = /^[\wа-яё]{3,}$/gi;
const houseRegex = /^\d{1,3}$/gi;
const apartmentRegex = /^\d{1,3}$/gi;
const postcodeRegex = /^BY\s\d{6}$/gi;

const countryStoreRegex = /^[а-яё]{0,}$/gi;
const adressStoreRegex = /^[а-яё]{0,}$/gi;

const cardRegex = /^(\d{4}\s?){4}$/gi;
const cardDateRegex = /^\d{2}\/\d{2}$/gi;
const cardCVVRegex = /^\d{3}$/gi;

export const validatoinSchemaMethodPickupFromPostOffices = yup.object().shape({
  phone: yup.string()
    .matches(phoneRegex, "Поле должно быть заполнено")
    .required('Поле должно быть заполнено'),
  email: yup.string()
    .matches(emailRegex, "Неверный формат email")
    .required('Поле должно быть заполнено'),
  country: yup.string()
    .matches(countryRegex, "Неверный формат данных")
    .required('Поле должно быть заполнено'),
  city: yup.string()
    .matches(cityRegex, "Неверный формат данных")
    .required('Поле должно быть заполнено'),
  street: yup.string()
    .matches(streetRegex, "Неверный формат данных")
    .required('Поле должно быть заполнено'),
  house: yup.string()
    .matches(houseRegex, "Неверный формат данных")
    .required('Поле должно быть заполнено'),
  apartment: yup.string()
    .matches(apartmentRegex, "Неверный формат данных"),
  postcode: yup.string()
    .matches(postcodeRegex, "Неверный формат данных")
    .required('Поле должно быть заполнено'),
  agree: yup.boolean()
    .oneOf([true], 'Вы должны согласиться на обработку личной информации')
});

export const validatoinSchemaMethodExpressDelivery = yup.object().shape({
  phone: yup.string()
    .matches(phoneRegex, "Поле должно быть заполнено")
    .required('Поле должно быть заполнено'),
  email: yup.string()
    .matches(emailRegex, "Неверный формат email")
    .required('Поле должно быть заполнено'),
  country: yup.string()
    .matches(countryRegex, "Неверный формат данных")
    .required('Поле должно быть заполнено'),
  city: yup.string()
    .matches(cityRegex, "Неверный формат данных")
    .required('Поле должно быть заполнено'),
  street: yup.string()
    .matches(streetRegex, "Неверный формат данных")
    .required('Поле должно быть заполнено'),
  house: yup.string()
    .matches(houseRegex, "Неверный формат данных")
    .required('Поле должно быть заполнено'),
  apartment: yup.string()
    .matches(apartmentRegex, "Неверный формат данных"),
  agree: yup.boolean()
    .oneOf([true], 'Вы должны согласиться на обработку личной информации')
});

export const validatoinSchemaMethodStorePickup = yup.object().shape({
  phone: yup.string()
    .matches(phoneRegex, "Поле должно быть заполнено")
    .required('Поле должно быть заполнено'),
  email: yup.string()
    .matches(emailRegex, "Неверный формат email")
    .required('Поле должно быть заполнено'),
  countryStore: yup.string()
    .matches(countryStoreRegex, "Поле должно быть заполнено")
    .required('Поле должно быть заполнено'),
  adressStore: yup.string()
    .matches(adressStoreRegex, "Поле должно быть заполнено кирилицей")
    .required('Поле должно быть заполнено'),
  agree: yup.boolean()
    .oneOf([true], 'Вы должны согласиться на обработку личной информации')
});

export const validatoinSchemaMethodPayPal = yup.object().shape({
  cashEmail: yup.string()
    .matches(emailRegex, "Неверный формат email")
    .required('Поле должно быть заполнено'),
});

export const validatoinSchemaMethodCard = yup.object().shape({
  card: yup.string()
    .matches(cardRegex, "Неверные данные")
    .required('Поле должно быть заполнено'),
  cardDate: yup.string()
    .matches(cardDateRegex, "Неверные данные")
    .required('Поле должно быть заполнено'),
  cardCVV: yup.string()
    .matches(cardCVVRegex, "Неверные данные")
    .required('Поле должно быть заполнено'),
});