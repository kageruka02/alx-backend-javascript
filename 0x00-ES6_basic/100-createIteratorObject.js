export default function createIteratorObject(report) {
  const goodReport = report.allEmployees;
  const listOfWorkers = [];
  for (const keys in goodReport) {
    if (Object.prototype.hasOwnProperty.call(goodReport, keys)) {
      listOfWorkers.push(...goodReport[keys]);
    }
  }
  return listOfWorkers;
}
