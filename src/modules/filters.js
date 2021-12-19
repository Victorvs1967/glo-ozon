export const searchFilter = (goods, value) => {  
  const result = Object.keys(goods).map(key => goods[key]);
  return result.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
};

export const catalogFilter = (goods, value) => {  
  const result = Object.keys(goods).map(key => goods[key]);
  return result.filter(item => item.category.includes(value));
};
