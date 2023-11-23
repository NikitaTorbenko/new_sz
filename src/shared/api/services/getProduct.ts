import { AxiosError } from 'axios';
import { ApiClient } from '../Client';

interface IGetProduct {
  data: {
    current_page: 1;
    data: {
      '38': {
        jk_id: 38;
        jk_address: 'ул. Гайдаш, 170 (ул. Дружная, 6)';
        jk_name: 'ЖК Пульс';
        jk_district: 28;
        dead_line: '1 кв. 2024, есть сданные дома';
        flat_count: 201;
        jk_wall_material: 1;
        jk_status: 1;
        min_square_kitchen: '10,44';
        count_rooms_0: {
          count_rooms: 0;
          min_square: null;
          min_square_kitchen: null;
          min_price: null;
        };
        jk_pic: {
          jk_pic_1: '/img/_uploads/pic_jk38_1.jpg';
          jk_pic_2: '/img/_uploads/pic_jk38_2.jpg';
          jk_pic_3: '/img/_uploads/pic_jk38_3.jpg';
          jk_pic_4: '/img/_uploads/pic_jk38_4.jpg';
          jk_pic_5: '/img/_uploads/pic_jk38_5.jpg';
        };
      };
    };
    first_page_url: 'http://192.168.100.175/api/flat?page=1';
    from: 1;
    last_page: 1;
    last_page_url: 'http://192.168.100.175/api/flat?page=1';
    links: [
      {
        url: null;
        label: '&laquo; Previous';
        active: false;
      },
      {
        url: 'http://192.168.100.175/api/flat?page=1';
        label: '1';
        active: true;
      },
      {
        url: null;
        label: 'Next &raquo;';
        active: false;
      }
    ];
    next_page_url: null;
    path: 'http://192.168.100.175/api/flat';
    per_page: 500;
    prev_page_url: null;
    to: 13;
    total: 13;
  };
  status: 200;
  message: '';
  meta: [];
}

interface IGetProductReq {
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

export const getProduct = async (params: IGetProductReq) => {
  try {
    const response = await ApiClient({
      method: 'POST',
      url: 'api/flat',
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
