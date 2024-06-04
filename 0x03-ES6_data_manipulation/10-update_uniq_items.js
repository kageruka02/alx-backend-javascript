export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const duplicateMap = map;
  for (const [key, value] of duplicateMap) {
    if (value === 1) map.set(key, 100);
  }
}
