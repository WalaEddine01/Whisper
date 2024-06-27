export const arrayToHashMap = (array, key) => {
  return array.reduce((map, item) => {
    map[item[key]] = item;
    return map;
  }, {});
};

