import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 21631,
  login: 'nlnw@',
};

export const sampleWithPartialData: IUser = {
  id: 13013,
  login: 'i',
};

export const sampleWithFullData: IUser = {
  id: 11277,
  login: '3Zj',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
