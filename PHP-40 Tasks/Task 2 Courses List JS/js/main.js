// Course Class
class Course {
  constructor(title, instructor, date) {
    this.title = title;
    this.instructor = instructor;
    this.date = date;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayCourses() {
    const courses = Store.getCourses();
//    courses.forEach((course) => UI.addCourseToList(course));
  }

  static addCourseToList(course) {
    const list = document.querySelector('#course-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${course.title}</td>
      <td>${course.instructor}</td>
      <td>${course.date}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteCourse(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#course-form');
    container.insertBefore(div, form);

    // Timeout 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#instructor').value = '';
    document.querySelector('#date').value = '';
  }
}

// Store Class: Handles Storage
class Store {
  static getCourses() {
    let courses;
    if(localStorage.getItem('courses') === null) {
      courses = [];
    } else {
      courses = JSON.parse(localStorage.getItem('courses'));
    }

    return courses;
  }

  static addCourse(course) {
    const courses = Store.getCourses();
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
  }

  static removeCourse(isbn) {
    const courses = Store.getCourses();

    courses.forEach((courses, index) => {
      if(course.date === date) {
        courses.splice(index, 1);
      }
    });

    localStorage.setItem('courses', JSON.stringify(courses));
  }
}

// Event: Display courses
document.addEventListener('DOMContentLoaded', UI.displayCourses);

// Event: Add a course
document.querySelector('#course-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const instructor = document.querySelector('#instructor').value;
  const date = document.querySelector('#date').value;

  // Validate
  if(title === '' || instructor === '' || date === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instatiate course
    const course = new Course(title, instructor, date);

    // Add course to UI
    UI.addCourseToList(course);

    // Add course to store
    Store.addCourse(course);

    // Show success message
    UI.showAlert('Course Added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a course
document.querySelector('#course-list').addEventListener('click', (e) => {
  // Remove course from UI
  UI.deleteCourse(e.target);

  // Remove course from store
  Store.removeCourse(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Course Removed', 'success');
});