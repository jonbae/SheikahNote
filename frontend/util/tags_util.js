export const sortTagsByAlphabeticalOrder = tags => {
  let tagsArr = Object.values(tags);
  tagsArr.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    if (b.name.toLowerCase() > a.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });
  return tagsArr;
};
