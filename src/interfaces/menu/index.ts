import { RestaurantInterface } from 'interfaces/restaurant';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  price: number;
  ingredients: string;
  restaurant_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  user?: UserInterface;
  _count?: {};
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  ingredients?: string;
  restaurant_id?: string;
  user_id?: string;
}
