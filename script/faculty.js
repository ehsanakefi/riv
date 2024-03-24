document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/faculty.json")
    .then((response) => response.json())
    .then((data) => {
      faculty = data.faculty;
      const outputDiv = document.getElementById("faculty_box_team");
      facultyResult = "";
      faculty.map((val, index) => {
        const img =
          val.image == ""
            ? `<div class=${
                index % 2 == 0 ? "empty_image_box1" : "empty_image_box2"
              }></div>`
            : ` <img src=${val.image} class="profile_img_team" />`;

        facultyResult += `<div class="card">
              <div class="image_box">
               ${img}
              </div>
              <div class="text_team">
                <p class="name_text_team">${val.name}</p>
                <p class="status_text_team">${val.explan}</p>
                <div class="icons_team">
                  <img src="./image/linkdin.png" class="icons_team_img" />
                  <img src="./image/git.png" class="icons_team_img" />
                  <img src="./image/google.png" class="icons_team_img" />
                  <img src="./image/world.png" class="icons_team_img" />
                </div>
              </div>
            </div>  
      `;
      });
      outputDiv.innerHTML = facultyResult;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
