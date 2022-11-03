import { FiltersType } from '../types/types';

export const createUrl = (
  page: number,
  name: string,
  { status, gender, species, type }: FiltersType
) => {
  let apiURL = `${process.env.REACT_APP_API_URL}?page=${page}`;
  name && (apiURL += `&name=${name.toLowerCase()}`);
  status && (apiURL += `&status=${status.toLowerCase()}`);
  gender && (apiURL += `&gender=${gender.toLowerCase()}`);
  species && (apiURL += `&species=${species.toLowerCase()}`);
  type && (apiURL += `&type=${type.toLowerCase()}`);

  return apiURL;
};
