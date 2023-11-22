import { AxiosError } from 'axios';
import { ApiClient } from '../Client';

interface FlatLinkResult {
  active_count: number[] | boolean;
  flat_furnished: number[] | boolean;
  flat_not_furnished: number[] | boolean;
  installment: number[] | boolean;
  count_room_0: number[] | boolean;
  count_room_1: number[] | boolean;
  count_room_2: number[] | boolean;
  count_room_3: number[] | boolean;
  count_room_4: number[] | boolean;
  new_flat: number[] | boolean;
  new_jk: number[] | boolean;
  all_jk: number[] | boolean;
  all_zastroi_count: number[] | boolean;
  news: number[] | boolean;
  wall_materials: number[] | boolean;
}

export const FlatLinks = async () => {
  try {
    const response = await ApiClient({
      method: 'POST',
      url: 'api/flat_count',
      data: {
        active_count: {
          filters: {
            city: 1,
            count: true,
          },
        },
        flat_furnished: {
          filters: {
            city: 1,
            flat_furnished: 'Чистовая отделка',
            count: true,
          },
        },
        flat_not_furnished: {
          filters: {
            city: 1,
            flat_not_furnished: 'Без отделки',
            count: true,
          },
        },
        installment: {
          filters: {
            city: 1,
            installment: 1,
            count: true,
          },
        },
        count_room_0: {
          filters: {
            city: 1,
            count_room: [0],
            count: true,
          },
        },
        count_room_1: {
          filters: {
            city: 1,
            count_room: [1],
            count: true,
          },
        },
        count_room_2: {
          filters: {
            city: 1,
            count_room: [2],
            count: true,
          },
        },
        count_room_3: {
          filters: {
            city: 1,
            count_room: [3],
            count: true,
          },
        },
        count_room_4: {
          filters: {
            city: 1,
            count_room: [4],
            count: true,
          },
        },
        all_zastroi_count: {
          filters: {
            city: 2,
            all_zastroi_count: 'all',
          },
        },
        news: {
          filters: {
            news: '3',
          },
        },
      },
    });

    const { data, status } = response;
    if (status === 200) {
      return { data, status };
    } else {
      console.error(`Ошибка при получении данных. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
