import { useQuery } from 'react-query';
import { getFavorite } from '@repository/favorite/favorite';
import favoriteType from '@type/favoriteType';

const getPostById = async (ownerId: string): Promise<[favoriteType]> => {
  const { data } = await getFavorite(ownerId);
  return data;
};

export const useFavorite = (ownerId: string) => {
  return useQuery('favorite', () => getPostById(ownerId), {
    enabled: !!ownerId,
  });
};
