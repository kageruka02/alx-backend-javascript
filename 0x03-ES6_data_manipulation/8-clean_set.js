export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const stringArray = Array.from(set);
  return stringArray
    .filter((e) => e.startsWith(startString))
    .map((a) => a.replace(startString, ''))
    .join('-');
}
