const express = require('express');
const fs = require('fs').promises;

const port = 1245;
const app = express();
const file = process.argv.length > 2 ? process.argv[2] : '';
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
      const divisionall = [];

      divisionall.push(`Number of students: ${objectLine.length}`);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < fields.length; i++) {
        const division = objectLine
          .filter((e) => e.field === fields[i])
          .map((e) => e.firstname);
        divisionall.push(
          `Number of students in ${fields[i]}. ${
            division.length
          }. List:${division.join(', ')}`,
        );
      }
      return divisionall.join('\n');
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
app.get('/', (_, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.get('/students', (_, res) => {
  countStudents(file)
    .then((report) => {
      const responseParts = ['This is the list of our students'];
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.status(200).send(responseText);
    })
    .catch((error) => {
      res.status(200).send(error);
    });
});
app.listen(port, (error) => {
  if (error) {
    console.log('something went wrong');
  }
});
module.exports = app;
