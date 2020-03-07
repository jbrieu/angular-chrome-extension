import { Company } from './company';

export interface Owner {
  id: number;
  name: string;
  companies: Company[];
}
