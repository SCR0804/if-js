const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class User {
  constructor(prop) {
    this.firstName = prop.firstName;
    this.lastName = prop.lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(prop) {
    super(prop);
    this.admissionYear = prop.admissionYear;
    this.courseName = prop.courseName;
  }
  get course() {
    return new Date().getFullYear() - this.admissionYear;
  }
}

//

class Students {
  constructor(arr) {
    this.arr = arr;
  }
  getInfo() {
    return this.arr
      .sort((a, b) => new Student(a).course - new Student(b).course)
      .map(
        (item) =>
          `${new Student(item).fullName} - ${new Student(item).courseName}, ${
            new Student(item).course
          } курс`,
      );
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
