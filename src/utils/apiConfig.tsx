import Config from 'react-native-config';

export const fetchUrl = (url: string) => {
  const baseUrl = `${Config.BASE_URL}${url}`;
  return baseUrl;
};
