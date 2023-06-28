import students from './data.mjs';


const index = () => {
    console.log('Get All Students');

    students.forEach(student => console.log(student));
}

const store = (student) => {
    students.push(student);
}

export {index, store};