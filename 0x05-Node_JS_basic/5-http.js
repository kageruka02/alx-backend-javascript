const http = require('http');
const fs = require('fs').promises;

const app = http.createServer();
const file = process.argv.length > 2 ? process.argv[2] : '';
const port = 1245;
const HOST = 'localhost';

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then((data) => {
        if (data.length === 0) {
          reject(new Error('Cannot load the database'));
        }
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
            `Number of students in ${fields[i]}: ${
              division.length
            }. List: ${division.join(', ')}`,
          );
        }
        resolve(divisionall.join('\n'));
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.on('request', (req, res) => {
  if (req.url === '/') {
    const responseText = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
  } else if (req.url === '/students') {
    countStudents(file)
      .then((report) => {
        const responseParts = ['This is the list of our students'];
        responseParts.push(report);
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
        res.end();
      })
      .catch((error) => {
        const errorResponse = ['This is the list of our students'];
        errorResponse.push(
          error instanceof Error ? error.message : error.toString(),
        );
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', errorResponse.length);
        res.statusCode = 200;
        res.write(Buffer.from(errorResponse));
      });
  }
});

app.listen(port, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${port}\n`);
});
module.exports = app;
