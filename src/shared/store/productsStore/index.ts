import { defineStore } from 'pinia';
import { ref } from 'vue';

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

export const useProductsStore = defineStore('products', () => {
  function filterObj(obj: IGetProduct) {
    // Фильтруем объект, оставляя только непустые значения полей
    const filteredObj = Object.fromEntries(
      Object.entries(obj).filter(
        ([key, value]) => value !== undefined && value !== null && value !== ''
      )
    );

    return filteredObj;
  }

  const params = ref<IGetProduct>({});

  const count_room = ref<number[]>();
  const flat_from = ref('');
  const flat_to = ref('');

  const floors_building_from = ref('');
  const floors_building_to = ref('');

  const lit_floor_to = ref<number>();
  const lit_floor_from = ref<number>();
  const square_kitchen_from = ref('');
  const square_kitchen_to = ref('');

  const flat_square_full_to = ref('');
  const flat_square_full_from = ref('');

  const from_cost = ref('');
  const to_cost = ref('');

  const zastroi = ref('');
  const jk_name = ref<string[]>();
  const district = ref('');
  const wall_material = ref(1);

  return {
    params,
    count_room,
    flat_from,
    flat_to,
    floors_building_from,
    floors_building_to,
    lit_floor_to,
    lit_floor_from,
    square_kitchen_from,
    square_kitchen_to,
    flat_square_full_to,
    flat_square_full_from,
    from_cost,
    to_cost,
    zastroi,
    jk_name,
    district,
    wall_material,
  };
});
