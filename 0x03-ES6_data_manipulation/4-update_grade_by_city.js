export default function updateStudentGradeByCity(list, city, update) {
  const cityFilter = list.filter((student) => student.location === city);
  return cityFilter.map((student) => {
    const toBeAdded = update.filter(
      (newStudent) => newStudent.studentId === student.id,
    );
    console.log(toBeAdded);
    const grade = toBeAdded.length >= 1 ? toBeAdded[0].grade : 'N/A';
    return {
      ...student,
      grade,
    };
  });
}
