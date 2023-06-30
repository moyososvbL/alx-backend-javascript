class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateStudents(students, 'students');
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(newName) {
    this._name = this._validateString(newName, 'name');
  }

  set length(newLength) {
    this._length = this._validateNumber(newLength, 'length');
  }

  set students(newStudents) {
    this._students = this._validateStudents(newStudents, 'students');
  }

  // Private helper method to validate string attribute
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`Invalid ${attributeName}. Expected a string.`);
    }
    return value;
  }

  // Private helper method to validate number attribute
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`Invalid ${attributeName}. Expected a number.`);
    }
    return value;
  }

  // Private helper method to validate students attribute
  _validateStudents(value, attributeName) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`Invalid ${attributeName}. Expected an array of strings.`);
    }
    return value;
  }
}

// Test the HolbertonCourse class
const course = new HolbertonCourse('Introduction to Programming', 10, ['Alice', 'Bob', 'Charlie']);
console.log(course.name);      // Output: Introduction to Programming
console.log(course.length);    // Output: 10
console.log(course.students);  // Output: ['Alice', 'Bob', 'Charlie']

course.name = 'Web Development';         // Update name attribute
course.length = 12;                      // Update length attribute
course.students = ['David', 'Emily'];    // Update students attribute

console.log(course.name);      // Output: Web Development
console.log(course.length);    // Output: 12
console.log(course.students);  // Output: ['David', 'Emily']
