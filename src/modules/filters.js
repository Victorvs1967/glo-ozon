export const searchFilter = (goods, value) => {  
  const result = Object.keys(goods).map(key => goods[key]);
  return result.filter(item => item.title.includes(value));
};

export const catalogFilter = (goods, value) => {  
  const result = Object.keys(goods).map(key => goods[key]);
  return result.filter(item => item.category.includes(value));
};
