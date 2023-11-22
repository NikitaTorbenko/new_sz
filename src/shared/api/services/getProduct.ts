import { AxiosError } from 'axios';
import { ApiClient } from '../Client';

interface IGetProduct {
  count_room?: number[];
  flat_from?: string;
  flat_to?: string;
  floors_building_from?: string;
  floors_building_to?: string;
  from_cost?: string;
  square_kitchen_from?: string;
  square_kitchen_to?: string;
  flat_square_full_to?: string;
  flat_square_full_from?: string;
  to_cost?: string;
  zastroi?: string;
  jk_name?: string;
  count?: boolean;
  district?: string;
  wall_material?: number;
}

export const getProduct = async (params: IGetProduct) => {
  try {
    const response = await ApiClient({
      method: 'POST',
      url: 'api/flat_count',
      data: {
        filters: params,
        // "limit": 5
        // "page":1
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
