// src/utils/getCount.js
export const getCountFromResponse = (response) => {
  if (Array.isArray(response.data)) return response.data.length;
  if (Array.isArray(response.data?.payload)) return response.data.payload.length;
  if (Array.isArray(response.data?.data)) return response.data.data.length;
  return 0;
};
