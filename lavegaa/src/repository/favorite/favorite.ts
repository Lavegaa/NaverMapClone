import api from '@src/context/serverContext';
import favoriteType from '@type/favoriteType';

export const getFavorite = (ownerId: string): any => {
  return api().get(`favorite?owner_id=${ownerId}`);
};
