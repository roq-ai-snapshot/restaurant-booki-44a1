import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  table_number: number;
  capacity: number;
  location_description?: string;
  restaurant_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface;
  user?: UserInterface;
  _count?: {
    reservation?: number;
  };
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  location_description?: string;
  restaurant_id?: string;
  user_id?: string;
}
