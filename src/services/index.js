import http from './api';

/**
 * Get Games
 * @returns {Promise<T | never>}
 */

export const getAllGames = () => {
  return new Promise((resolve, reject) => {
    http
      .get('games')
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getGameDetails = ({ id }) => {
  return new Promise((resolve, reject) => {
    http
      .get(`games/${id}`)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
