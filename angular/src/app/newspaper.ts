import { Owner } from './owner';

export interface Newspaper {
  id: number;
  name: string;
  owners: Owner[];
}
