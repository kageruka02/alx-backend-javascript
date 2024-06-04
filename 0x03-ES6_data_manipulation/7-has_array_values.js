export default function hasValuesFromArray(set, filter) {
  const setToArray = Array.from(set);
  return filter.every((item) => setToArray.find((items) => items === item));
}
