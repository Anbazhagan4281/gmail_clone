export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }); // Get short month name

  return `${day} ${month}`;
};
