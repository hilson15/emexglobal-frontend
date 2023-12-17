function showDescription(courseNumber) {
    // Hide all descriptions
    var descriptions = document.getElementsByClassName('description');
    for (var i = 0; i < descriptions.length; i++) {
      descriptions[i].style.display = 'none';
    }

    // Remove 'selected' class from all courses
    var courses = document.getElementsByClassName('course');
    for (var i = 0; i < courses.length; i++) {
      courses[i].classList.remove('selected');
    }

    // Show the selected description
    var selectedDescription = document.getElementById('description' + courseNumber);
    selectedDescription.style.display = 'block';

    // Add 'selected' class to the clicked course
    var selectedCourse = document.querySelector('.course:nth-child(' + courseNumber + ')');
    selectedCourse.classList.add('selected');
  }