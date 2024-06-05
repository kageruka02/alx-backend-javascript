/// <reference path="./crud.d.ts" />
import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";


const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}
const newRoowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 }
CRUD.updateRow(newRoowID, updatedRow);

CRUD.deleteRow(125);