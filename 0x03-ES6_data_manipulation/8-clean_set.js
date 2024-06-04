export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  if (startString === '') {
    return '';
  }
  const stringArray = Array.from(set);
  return stringArray
    .filter((e) => e.startsWith(startString))
    .map((a) => a.replace(startString, ''))
    .join('-');
}
