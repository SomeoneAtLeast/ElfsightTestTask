import { createUrl } from '../helpers';

const data = {
  page: 1,
  name: 'Rick',
  filters: { status: 'Alive', gender: 'Male', species: 'Alien', type: '' },
};

const result =
  'https://rickandmortyapi.com/api/character?page=1&name=rick&status=alive&gender=male&species=alien';

it('should return the result from the variable above', () => {
  expect(createUrl(data.page, data.name, data.filters)).toMatch(result);
});
