import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { getProduct } from '../../api/services/index';

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

  const productData = ref<any[]>([]);

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

  const newObj = ref({
    // count_room,
    flat_from: flat_from.value,
    flat_to: flat_to.value,
    floors_building_from: floors_building_from.value,
    floors_building_to: floors_building_to.value,
    from_cost: from_cost.value,
    square_kitchen_from: square_kitchen_from.value,
    square_kitchen_to: square_kitchen_to.value,
    flat_square_full_to: flat_square_full_to.value,
    flat_square_full_from: flat_square_full_from.value,
    to_cost: to_cost.value,
    zastroi: zastroi.value,
    // jk_name: jk_name.value,
    count: false,
    district: district.value,
    wall_material: wall_material.value,
  });

  const setparams = (obj: IGetProduct) => (params.value = obj);

  const setcount_room = (value: number[]) => (count_room.value = value);
  const setflat_from = (value: string) => (flat_from.value = value);
  const setflat_to = (value: string) => (flat_to.value = value);
  const setfloors_building_from = (value: string) =>
    (floors_building_from.value = value);
  const setfloors_building_to = (value: string) =>
    (floors_building_to.value = value);
  const setlit_floor_to = (value: number) => (lit_floor_to.value = value);
  const setlit_floor_from = (value: number) => (lit_floor_from.value = value);
  const setsquare_kitchen_from = (value: string) =>
    (square_kitchen_from.value = value);
  const setsquare_kitchen_to = (value: string) =>
    (square_kitchen_to.value = value);
  const setflat_square_full_to = (e: Event) =>
    (flat_square_full_to.value = e.target.value);
  const setflat_square_full_from = (e: Event) =>
    (flat_square_full_from.value = e.target.value);
  const setfrom_cost = (e: Event) => (from_cost.value = e.target.value);
  const setto_cost = (e: Event) => (to_cost.value = e.target.value);
  const setzastroi = (value: string) => (zastroi.value = value);
  const setjk_name = (value: string[]) => (jk_name.value = value);
  const setdistrict = (value: string) => (district.value = value);
  const setwall_material = (value: number) => (wall_material.value = value);

  const getProductStore = async () => {
    newObj.value = {
      // count_room,
      flat_from: flat_from.value,
      flat_to: flat_to.value,
      floors_building_from: floors_building_from.value,
      floors_building_to: floors_building_to.value,
      from_cost: from_cost.value,
      square_kitchen_from: square_kitchen_from.value,
      square_kitchen_to: square_kitchen_to.value,
      flat_square_full_to: flat_square_full_to.value,
      flat_square_full_from: flat_square_full_from.value,
      to_cost: to_cost.value,
      zastroi: zastroi.value,
      // jk_name: jk_name.value,
      count: false,
      district: district.value,
      wall_material: wall_material.value,
    };
    setparams(filterObj(newObj.value));

    const { data } = await getProduct(params.value)
      // .then(res => Object.values(res.data))
      .catch(e => console.error(e));

    console.log('params ', params.value);

    console.log('raw data', data.data);

    productData.value = Object.values(data.data);
    console.log('data in req', productData.value);

    console.log('my data', Object.values(data.data));
  };

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
    productData,

    setparams,
    setcount_room,
    setflat_from,
    setflat_to,
    setfloors_building_from,
    setfloors_building_to,
    setlit_floor_to,
    setlit_floor_from,
    setsquare_kitchen_from,
    setsquare_kitchen_to,
    setflat_square_full_to,
    setflat_square_full_from,
    setfrom_cost,
    setto_cost,
    setzastroi,
    setjk_name,
    setdistrict,
    setwall_material,
    getProductStore,
  };
});
