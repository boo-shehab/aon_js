let students = require("./data.json");

let getAllStudents = () => {
  return students;
};
console.log(getAllStudents());

let getFirstStudent = () => {
  return students[0];
};
console.log(getFirstStudent());

let getLastStudent = () => {
  return students[students.length-1]
};
console.log(getLastStudent());


let getStudentById = (id) => {
  return students.find((val) => val.id === id)
};
console.log(getStudentById());

let getStudentsByStage = (stage) => {
  return students.find((val) => val.stage.toLowerCase() === stage.toLowerCase())
};
console.log(getStudentsByStage("Grade 10"));

let addStudent = (newStudent) => {
  students.push(newStudent)
};
console.log(addStudent(
  {
    "id": 21,
    "name": "Ava King",
    "stage": "Grade 11",
    "age": 16
  }));
  
console.log(students);
let removeStudentById = (id) => {
  students = students.filter((val) => val.id !== id)
};
console.log(students);

let updateStudentById = (id, updatedData) => {
  students = students.map((val) => {
    if(val.id === id) {
      val = updatedData;
    }
    return val
  })
};
console.log(updateStudentById(20, 
  {
    "id": 20,
    "name": "Ava2 King",
    "stage": "Grade 11",
    "age": 16
  }));

let getAverageAge = () => {
  return (students.reduce((oldVal, newVal) => oldVal + newVal.age, 0) / students.length);
};
console.log(getAverageAge());

let getStudentsAboveAge = (age) => {
  return students.filter((val) => val.age > age);
};
console.log(getStudentsAboveAge(16));


let getStudentsBelowAge = (age) => {
  return students.filter((val) => val.age < age);
};
console.log(getStudentsBelowAge(16));


let getStudentByName = (name) => {
  return students.find((val => val.name.toLowerCase() === name.toLowerCase()));
};
console.log(getStudentByName('Henry Young'));


let sortStudentsByName = () => {
  return students.sort((a, b) => a.name.localeCompare(b.name))
};
console.log(sortStudentsByName);

let sortStudentsByAge = () => {
  return students.sort((a, b) => a.age - b.age)
};
console.log(sortStudentsByAge());

let filterStudentsByAge = (age) => {
  return students.filter((val) => val.age === age);
};
console.log(filterStudentsByAge(16));

let filterStudentsByStage = (stage) => {
  return students.filter((val) => val.stage.toLowerCase() === stage.toLowerCase());
};
console.log(filterStudentsByStage("Grade 9"));


let countStudents = () => {
  return students.length
};
console.log(countStudents());


let countStudentsByStage = (stage) => {
  return students.reduce((oldVal, newVal) => newVal.stage === stage? oldVal + 1: oldVal, 0)
};
console.log(countStudentsByStage("Grade 9"));


let incrementStudentAgeById = (id) => {
  return students.map((val) => {
    if(val.id === id) {
      val.age += 1
    }
    return val
  })
};
console.log(countStudentsByStage(10));

let decrementStudentAgeById = (id) => {
  return students.map((val) => {
    if(val.id === id) {
      val.age -= 1
    }
    return val
  })
};
console.log(decrementStudentAgeById());

let getStudentsWithIdGreaterThan = (id) => {
  return students.filter((val) => val.id > id)
};
console.log(getStudentsWithIdGreaterThan(10));

let getStudentsWithIdLessThan = (id) => {
  return students.filter((val) => val.id < id)
};
console.log(getStudentsWithIdLessThan(10));

let getStudentsInRangeOfIds = (startId, endId) => {
  return students.filter((val) => val.id >= startId && val.id <= endId)
};
console.log(getStudentsInRangeOfIds(10, 15));

let getTotalAgeOfStudents = () => {
  return students.reduce((oldVal, newVal) => oldVal + newVal.age, 0) 
};
console.log(getTotalAgeOfStudents());

let getAverageAgeByStage = (stage) => {
  return students.filter((val) => val.stage === stage).reduce((oldVal, newVal) => oldVal + newVal.age, 0);
};
console.log(getAverageAgeByStage("Grade 10"));

let getYoungestStudent = () => {
  return students.reduce((oldVal, newVal) => newVal.age < oldVal.age ? newVal : oldVal);
};
console.log(getYoungestStudent());

let getOldestStudent = () => {
  return students.reduce((oldVal, newVal) => newVal.age > oldVal.age ? newVal : oldVal);
};
console.log(getOldestStudent());

let hasStudentWithName = (name) => {
  return students.find((val) => val.name === name)
};
console.log(hasStudentWithName("Henry Young"));

let getNamesOfAllStudents = () => {
  return students.map((val) => val.name)
};
console.log(getNamesOfAllStudents());

let getAllStudentIds = () => {
  return students.map((val) => val.id)
};
console.log(getAllStudentIds());


let getAllStudentStages = () => {
  return students.map((val) => val.stage)
};
console.log(getAllStudentStages());

let getStudentsWithNamesStartingWith = (letter) => {
  return students.filter((val) => val.name[0].toLowerCase() === letter.toLowerCase());
};
console.log(getStudentsWithNamesStartingWith("a"));

let getStudentsWithNamesEndingWith = (letter) => {
  return students.filter((val) => val.name[val.name.length -1].toLowerCase() === letter.toLowerCase());
};
console.log(getStudentsWithNamesEndingWith("a"));

let getStudentsWithNameLengthGreaterThan = (length) => {
  return students.filter((val) => val.name.length > length);
};
console.log(getStudentsWithNameLengthGreaterThan(7));


let getStudentsWithNameLengthLessThan = (length) => {
  return students.filter((val) => val.name.length < length);
};
console.log(getStudentsWithNameLengthLessThan(7));


let getAllStudentsSortedById = () => {
  return students.sort((val1, val2) => val1.id - val2.id);
};
console.log(getAllStudentsSortedById());

let reverseStudentList = () => {
  return students.reverse()
};
console.log(reverseStudentList());

let getRandomStudent = () => {
  return students[Math.floor(Math.random() * students.length)]
};
console.log(getRandomStudent());

let removeStudentsAboveAge = (age) => {
  return students.filter((val) => val.age < age)
};
console.log(removeStudentsAboveAge(20));

let removeStudentsBelowAge = (age) => {
  return students.filter((val) => val.age > age)
};
console.log(removeStudentsBelowAge(10));

let getStudentsBetweenAges = (minAge, maxAge) => {
  return students.filter((val) => val.age > minAge && val.age < maxAge)
};
console.log(getStudentsBetweenAges(10, 20));

let countStudentsAboveAge = (age) => {
  return students.filter((val) => val.age > age).length
};
console.log(countStudentsAboveAge(15));

let countStudentsBelowAge = (age) => {
  return students.filter((val) => val.age < age).length
};
console.log(countStudentsBelowAge(15));

let addMultipleStudents = (newStudents) => {
  students.push(...newStudents)
  return students
};
console.log(addMultipleStudents([
  {
    "id": 22,
    "name": "Henry Young",
    "stage": "Grade 10",
    "age": 15
  },
  {
    "id": 23,
    "name": "Ava King",
    "stage": "Grade 11",
    "age": 16
  }]));


let removeMultipleStudentsById = (ids) => {
  return students.filter(student => !ids.includes(student.id));
};
console.log(removeMultipleStudentsById([22, 23]));

let updateMultipleStudentsById = (ids, updatedData) => {
  return students.map(student => {
    if(ids.includes(student.id)){
      student = updatedData.find(data => data.id === student.id)
    }
    return student
  });
};
console.log(updateMultipleStudentsById([11,12], [
  {
    "id": 11,
    "name": "Lucas2 Scott",
    "stage": "Grade 9",
    "age": 14
  },
  {
    "id": 12,
    "name": "Ella2 Thompson",
    "stage": "Grade 11",
    "age": 16
  },]));


let isAllStudentsAboveAge = (age) => {
  return students.every(student => student.age > age);
};
console.log(isAllStudentsAboveAge(10));


let isAllStudentsBelowAge = (age) => {
  return students.every(student => student.age < age);
};
console.log(isAllStudentsBelowAge(10));

let hasStudentsInStage = (stage) => {
  return students.filter((student) => student.stage === stage)
};
console.log(hasStudentsInStage("Grade 11"));

let getStudentNamesWithIds = (ids) => {
  return students.filter((student) => ids.includes(student.id)).map((student) => student.name)
};
console.log(getStudentNamesWithIds([4,12,14]));

