export default function getListStudents() {
    function createArray(firstName, id, location) {
        return {id, firstName, location}
    }
    return[createArray('Guillaume',1,'San Francisco'), createArray('James',2,'Columbia'), createArray('Serena', 5, 'San Francisco')]
    
}