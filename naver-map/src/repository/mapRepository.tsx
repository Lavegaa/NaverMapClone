import api from './serverContext';

export const getPlaceBySearchWord: any = async (searchword: string) =>
  await api().get(`/search?searchword=${searchword}`);
