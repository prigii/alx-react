import { Seq } from 'immutable';

export default function printBestStudents(grades) {
    const filteredGrades = Seq(grades)
        .filter(student => student.score >= 70)
        .map(student => ({
            ...student,
            firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
            lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1)
        }))
        .toObject();

    const formattedGrades = JSON.stringify(filteredGrades)
        .replace(/"(\w+)":/g, '$1:')
        .replace(/"(\d+)":/g, '"$1":');

    console.log(formattedGrades);
}
