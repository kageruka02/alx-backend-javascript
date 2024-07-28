const fs = require('fs').promises;

function countStudents(filePath) {
  return fs
    .readFile(filePath, 'utf-8')
    .then((data) => {
      if (data.length === 0) throw new Error('Cannot load the database');
      const lineArray = data
        .split('\n')
        .map((e) => e.trim())
        .filter((e) => e !== '');
      const objectLine = lineArray.slice(1).map((line) => {
        const word = line.split(',');
        return {
          firstname: word[0],
          lastname: word[1],
          age: word[2],
          field: word[3],
        };
      });
      const fields = Array.from(new Set(objectLine.map((e) => e.field)));
      console.log(`Number of students: ${objectLine.length}`);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < fields.length; i++) {
        const division = objectLine
          .filter((e) => e.field === fields[i])
          .map((e) => e.firstname);
        console.log(
          `Number of students in ${fields[i]}. ${
            division.length
          }. List:${division.join(', ')}`,
        );
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = countStudents;
