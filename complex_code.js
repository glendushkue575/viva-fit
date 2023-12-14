/* filename: complex_code.js */

// Description: This is a sophisticated and elaborate code that simulates a university registration system.
// It includes multiple classes, functions, and complex logic to handle student enrollment, course registration, and grades.

class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.enrolledCourses = [];
  }

  enrollCourse(course) {
    if (!this.enrolledCourses.includes(course)) {
      this.enrolledCourses.push(course);
      console.log(`${this.name} has successfully enrolled in ${course.name}`);
    } else {
      console.log(`${this.name} is already enrolled in ${course.name}`);
    }
  }

  dropCourse(course) {
    const index = this.enrolledCourses.indexOf(course);
    if (index !== -1) {
      this.enrolledCourses.splice(index, 1);
      console.log(`${this.name} has dropped ${course.name}`);
    } else {
      console.log(`${this.name} is not enrolled in ${course.name}`);
    }
  }

  getEnrolledCourses() {
    console.log(`${this.name}'s enrolled courses:`);
    this.enrolledCourses.forEach(course => console.log(course.name));
  }
}

class Course {
  constructor(name, code, capacity) {
    this.name = name;
    this.code = code;
    this.capacity = capacity;
    this.studentsEnrolled = [];
  }

  enrollStudent(student) {
    if (this.studentsEnrolled.length < this.capacity) {
      this.studentsEnrolled.push(student);
      console.log(`${student.name} has successfully enrolled in ${this.name}`);
    } else {
      console.log(`${this.name} is already at maximum capacity`);
    }
  }

  dropStudent(student) {
    const index = this.studentsEnrolled.indexOf(student);
    if (index !== -1) {
      this.studentsEnrolled.splice(index, 1);
      console.log(`${student.name} has been dropped from ${this.name}`);
    } else {
      console.log(`${student.name} is not enrolled in ${this.name}`);
    }
  }

  getStudentsEnrolled() {
    console.log(`Students enrolled in ${this.name}:`);
    this.studentsEnrolled.forEach(student => console.log(student.name));
  }
}

// ... more classes and functions ...

// Usage example:
const student1 = new Student("John Doe", 123456);
const student2 = new Student("Jane Smith", 789012);

const course1 = new Course("Computer Science 101", "CS101", 30);
const course2 = new Course("Mathematics 202", "MATH202", 20);

student1.enrollCourse(course1);
student1.enrollCourse(course2);
student1.getEnrolledCourses();

student2.enrollCourse(course1);
student2.enrollCourse(course2);
student2.dropCourse(course1);
student2.getEnrolledCourses();

course1.enrollStudent(student1);
course1.enrollStudent(student2);
course1.getStudentsEnrolled();

course2.enrollStudent(student1);
course2.enrollStudent(student2);
course2.dropStudent(student1);
course2.getStudentsEnrolled();

// ... more code ...

// This is just a simplified example to demonstrate the complexity of the code.
// In a real-world scenario, the system would handle more features, such as grading, scheduling, prerequisites, etc.