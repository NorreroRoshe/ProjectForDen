import { CartItem } from "../components/redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);        //Общая сумма -> Здесь мы количество умножаем на цену и прибовляем что было уже и получается общая сумма
};