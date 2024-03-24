document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/ourTeam.json")
    .then((response) => response.json())
    .then((data) => {
      ourTeam = data.ourTeam;
      const outputDiv = document.getElementById("ourteam_box_team");
      ourTeamResult = "";
      ourTeam.map((val, index) => {
        const img =
          val.image == ""
            ? `<div class=${
                index % 2 == 0 ? "empty_image_box1" : "empty_image_box2"
              }></div>`
            : ` <img src=${val.image} class="profile_img_team" />`;

        ourTeamResult += `<div class="card">
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
      outputDiv.innerHTML = ourTeamResult;
      //   outputDiv.innerHTML =
      //     `  <div class="containe">
      //   <p class="h_aboutus">Our Team</p>
      //   <div class="wrap_box_team">` +
      //     result +
      //     `   </div>
      //   </div> `;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
