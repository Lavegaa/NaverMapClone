import naverApi from './naverContext';

export const getGeocodeBySearchText: any = async () =>
  await naverApi().get('/geocode');
