import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  date: any;
  time: any;
  guest_count: number;
  table_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  table?: TableInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  table_id?: string;
  user_id?: string;
}
