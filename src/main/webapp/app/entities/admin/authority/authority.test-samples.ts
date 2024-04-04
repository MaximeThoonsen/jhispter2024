import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'e5f224a8-214f-4f90-9929-f265af3e7fec',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f18a3f7c-70c8-4ea0-b68d-2764cf4478da',
};

export const sampleWithFullData: IAuthority = {
  name: 'b8603805-feac-423e-b2a8-9a77d92b5911',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
