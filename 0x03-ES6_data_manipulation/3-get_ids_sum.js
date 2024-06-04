export default function getStudentIdsSum(list) {
  return list.reduce((currentTotal, student) => currentTotal + student.id, 0);
}
