
export const addresses = [
  {
    address: "Москва, ​площадь Тверская Застава, 7"
  },
  {
    address: "Москва, Софийская набережная, к1"
  },
  {
    address: "Москва, ​улица Ильинка, 6/1 ст1"
  },
  {
    address: "Москва, Шарикоподшипниковская, 3"
  },
  {
    address: "Москва, Симферопольский бульвар, 20 к1"
  },
  {
    address: "Москва, ​площадь Тверская Застава, 7"
  },
  {
    address: "Москва, Софийская набережная, к1"
  },
  {
    address: "Москва, ​улица Ильинка, 6/1 ст1"
  },
  {
    address: "Москва, Шарикоподшипниковская, 3"
  },
  {
    address: "Москва, Симферопольский бульвар, 20 к1"
  },
  {
    address: "Москва, ​площадь Тверская Застава, 7"
  },
  {
    address: "Москва, Софийская набережная, к1"
  },
  {
    address: "Москва, ​улица Ильинка, 6/1 ст1"
  },
  {
    address: "Москва, Шарикоподшипниковская, 3"
  },
  {
    address: "Москва, Симферопольский бульвар, 20 к1"
  },
  {
    address: "Москва, ​площадь Тверская Застава, 7"
  },
  {
    address: "Москва, Софийская набережная, к1"
  },
  {
    address: "Москва, ​улица Ильинка, 6/1 ст1"
  },
  {
    address: "Москва, Шарикоподшипниковская, 3"
  },
  {
    address: "Москва, Симферопольский бульвар, 20 к1"
  },
]

export type Request = {
  key: number,
  name: string,
  loading: string,
  unloading: string,
}

export const data: Array<Request> = [];

for (let i = 2; i < 11; i++) {
  data.push({
    key: i-1,
    name: `Заявка №${i-1}`,
    loading: `${addresses[i].address}`,
    unloading: `${addresses[i+1].address}`,
  });
}

