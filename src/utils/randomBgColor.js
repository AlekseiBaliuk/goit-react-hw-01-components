export const randomBgColor = id => {
  const colorArray = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
  return `${colorArray[Number(id.replace(/[^0-9]/g, '')) % 5]}`;
};
