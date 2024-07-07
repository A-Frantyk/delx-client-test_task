export const openLocation = (city: string) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city)}`;
};
