import { AxiosError } from 'axios';
import { ApiClient } from '../Client';

export const getDistricts = async () => {
  try {
    const response = await ApiClient({
      method: 'POST',
      url: 'api/flat_count',
      data: {
        districts: {
          filters: {
            districts: 'all',
            city: 1,
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
