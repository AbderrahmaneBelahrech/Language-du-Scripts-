



function displayRandomCourses() {
    // An array of courses
    var courses = [
      {
        title: "Intro to JavaScript",
        image: "../img/courses/js1.png",
        category: "js",
        price:64
      },
      {
        title: "JavaScript Fundamentals",
        image: "../img/courses/js2.png",
        category: "js",
        price:80
      },
      {
        title: "Intro to css",
        image: "../img/courses/css.jpg",
        category: "css",
        price:54
      },
      {
        title: "Intro to html",
        image: "../img/courses/html1.jpeg",
        category: "html",
        price:34
      },
      {
        title: "Intro to php",
        image: "../img/courses/php2.jpg",
        category: "php",
        price:74
      },
      {
        title: "php oop",
        image: "../img/courses/php.jpg",
        category: "php",
        price:4
      },
      {
        title: "css tricks",
        image: "../img/courses/css2.jpg",
        category: "css",
        price:0
      },
      {
        title: "node js ",
        image: "../img/courses/html1.jpeg",
        category: "js",
        price:44
      },
      {
        title: "laravel",
        image: "../img/courses/laravel.png",
        category: "php",
        price:69
      },
    ];
    // Pick 3 random courses
    var randomCourses = [];
    while (randomCourses.length < 8) {
      var randomIndex = Math.floor(Math.random() * courses.length);
      if (!randomCourses.includes(courses[randomIndex])) {
        randomCourses.push(courses[randomIndex]);
      }
    }
  
    // Clear the container
    var container = document.getElementById("courses-container");
    container.innerHTML = "";
  
    // Add the random courses to the container
    for (var i = 0; i < randomCourses.length; i++) {
      var course = randomCourses[i];
      var html = `
        <div class="course">
          <img src="${course.image}" alt="${course.title}">
          <p>${course.title}</p>
          <span>${course.price}</span>
        </div>
      `;
      container.innerHTML += html;
    }
  }
  
  // Call the function when the page loads
  displayRandomCourses();
  function redirectToCourses() {
    window.location.href = "/courses.html";
  }


  // Obtenez l'??l??ment de champ de recherche
  let searchField = document.getElementById("search");

  // Ajoutez un ??couteur d'??v??nement de saisie sur le champ de recherche
  searchField.addEventListener("input", function () {
    // Obtenez la valeur saisie par l'utilisateur
    let searchValue = this.value;

    // Appliquer le filtre de recherche ?? la liste de cours en masquant les ??l??ments qui ne correspondent pas ?? la valeur de recherche
    let courses = document.querySelectorAll(".course");
    courses.forEach(function (course) {
      let courseName = course.querySelector("p").textContent;
      if (courseName.indexOf(searchValue) !== -1) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
  });

  // Obtenez l'??l??ment de s??lecteur de cat??gorie
  let categorySelector = document.getElementById("category");

  // Ajoutez un ??couteur d'??v??nement de changement sur le s??lecteur de cat??gorie
  categorySelector.addEventListener("change", function () {
    // Obtenez la valeur de la cat??gorie s??lectionn??e
    let selectedCategory = this.value;

    // Appliquer le filtre de cat??gorie ?? la liste de cours en masquant les ??l??ments qui ne correspondent pas ?? la cat??gorie s??lectionn??e
    let courses = document.querySelectorAll(".course");
    courses.forEach(function (course) {
      let courseCategory = course.getAttribute("data-category");
      if (selectedCategory === "all" || courseCategory === selectedCategory) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
  });

  // Obtenez l'??l??ment de glissi??re de prix
  let priceSlider = document.getElementById("customRange3");

  // Ajoutez un ??couteur d'??v??nement de changement sur la glissi??re de prix
  priceSlider.addEventListener("input", function () {

    // Obtenez la valeur actuelle de la glissi??re de prix
    let sliderValue = this.value;

    // Appliquer le filtre de prix ?? la liste de cours en masquant les ??l??ments qui d??passent la valeur de la glissi??re de prix
    let courses = document.querySelectorAll(".course");
    courses.forEach(function (course) {
      let coursePrice = course.querySelector("span").textContent;
      coursePrice = coursePrice.replace("$", "");
      if (coursePrice <= sliderValue) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
   


    });
  
