import { Request } from '../../types';
import { addresses } from '../../constants'

export const data: Array<Request> = [];

for (let i = 2; i < 11; i++) {
  data.push({
    key: i-1,
    name: `Заявка №${i-1}`,
    loading: addresses[i].address,
    unloading: addresses[i+1].address,
    route: {
      loading: addresses[i].coords,
      unloading: addresses[i+1].coords
    }
  });
}