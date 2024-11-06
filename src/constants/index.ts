// export const baseUrl = "http://127.0.0.1:8000/api/v0/";
export const baseUrl = "https://motoshop-backend.onrender.com/api/v0/";

export const currencies = [
  { value: "uzs", label: "So'm" },
  { value: "eu", label: "€ euro" },
  { value: "usd", label: "$ dollar" },
];
export const bikeTypes = [
  { value: "sportbayk", label: "Sportbayk" },
  { value: "streetbayk", label: "Streetbayk" },
  { value: "enduro", label: "Enduro" },
  { value: "dirtbayk", label: "Dirtbayk" },
  { value: "chopper", label: "Chopper" },
  { value: "bobber", label: "Bobber" },
  { value: "benzin-skuter", label: "Benzin-skuter" },
  { value: "eletkro-skuter", label: "Eletkro-skuter" },
  { value: "elektro-sportbayk", label: "Elektro-sportbayk" },
  { value: "bolalar-uchun", label: "Bolalar-uchun" },
];
export const engineCC = [
  { value: "50-250", label: "50 - 250 cm³" },
  { value: "250-600", label: "250 - 600 cm³" },
  { value: "600-1000", label: "600 - 1000 cm³" },
];
export const condition = [
  { value: "yangi", label: "Yangi" },
  { value: "ishlatilgan", label: "Ishlatilgan" },
];
export const mileage = [
  { value: "0-1000", label: "0 km - 1 000 km" },
  { value: "1000-10000", label: "1 000 km - 10 000 km" },
  { value: "11000", label: "10 000 kmdan ko'p" },
];
export const bikeColors = [
  { value: "qora", label: "Qora" },
  { value: "oq", label: "Oq" },
  { value: "yashil", label: "Yashil" },
  { value: "qizil", label: "Qizil" },
  { value: "sariq", label: "Sariq" },
  { value: "kok", label: "Ko'k" },
  { value: "kulrang", label: "Kulrang" },
];
export const gearSizes = [
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
  { value: "2xl", label: "2XL" },
  { value: "3xl", label: "3XL" },
];
export const adTypes = [
  {
    value: "moto",
    label: "Mototsikl",
  },
  {
    value: "helmet",
    label: "Shlem va kiyimlar",
  },
  {
    value: "gear",
    label: "Ehtiyot qismlar",
  },
];
export const carouselOptions = [
  {
    breakpoint: 320,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 1224,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
];
