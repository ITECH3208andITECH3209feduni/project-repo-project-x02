var level = "entry";
var email = "";
var resumesJson = [];
var resumeBases = [];
var extensions = [];
let personalInfo;
let jobObjective;
let workExperience;
let awards;
let activities;
let skills;
let socialMedia;
let careerLevel;
let resumeStyle;
let totalScore;

if (pageName == "index-page") {
  levelUpdate(level);
  document.querySelector("#upload-page").style.display = "flex";
  document.querySelector("#confirm-page").style.display = "none";
  document.querySelector("#sending-page").style.display = "none";
  document.querySelector("#success-page").style.display = "none";
  document.getElementById("levelSelected").style.display = "inline";
  document.getElementById("changeLevel").style.display = "inline";
  document.getElementById("levelSelect").style.display = "none";

  var uploadSection = document.getElementById("upload-section");
  uploadSection.addEventListener("click", function () {
    document.getElementById("resume").click();
  });

  document.getElementById("changeLevel").addEventListener("click", function () {
    document.getElementById("levelSelected").style.display = "none";
    document.getElementById("changeLevel").style.display = "none";
    document.getElementById("levelSelect").style.display = "inline";
  });

  document
    .getElementById("levelSelect")
    .addEventListener("change", function () {
      level = document.getElementById("levelSelector").value;
      levelUpdate(level);
      document.getElementById("levelSelected").style.display = "inline";
      document.getElementById("changeLevel").style.display = "inline";
      document.getElementById("levelSelect").style.display = "none";
    });

  document.getElementById("resume").addEventListener("change", function () {
    resumes = document.getElementById("resume").files;
    document.getElementById("uploadedFiles").style.display = "inline";
    document.getElementById("uploadedFiles").innerHTML =
      resumes.length + " file(s) selected";
    Array.from(resumes).forEach((resume) => {
      document.getElementById("uploadedFiles").innerHTML +=
        "<br><a href='" +
        URL.createObjectURL(resume) +
        "' target='_blank'>" +
        resume.name +
        "</a>";
      extension = resume.name.split(".").pop();
      if (extension == "docx") {
        extension = "doc";
        var reader = new FileReader();
        reader.readAsDataURL(resume);
        reader.onload = function () {
          resumeBases.push(reader.result);
        };
      } else if (extension == "txt") {
        extension = "txt";
        var reader = new FileReader();
        reader.readAsDataURL(resume);
        reader.onload = function () {
          resumeBases.push(reader.result);
        };
      } else {
        extension = extension.toLowerCase();
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
          resumeBases.push(fileLoadedEvent.target.result);
        };
        fileReader.readAsDataURL(resume);
      }
      extensions.push(extension);
    });
  });

  document.getElementById("goToConfirm").addEventListener("click", function () {
    if (resumeBases == "") {
      alert("Please upload your resume");
    } else {
      document.getElementById("upload-page").style.display = "none";
      document.getElementById("confirm-page").style.display = "flex";
    }
  });

  document.getElementById("goBack").addEventListener("click", function () {
    document.getElementById("upload-page").style.display = "flex";
    document.getElementById("confirm-page").style.display = "none";
  });

  document
    .getElementById("confirmResume")
    .addEventListener("click", function () {
      email = document.getElementById("email").value;
      if (email == "") {
        alert("Please enter your email");
      } else if (resume == "") {
        alert("Please go back and upload your resume");
      } else {
        document.getElementById("confirm-page").style.display = "none";
        document.getElementById("sending-page").style.display = "flex";

        var emailBody = "";
        emailBody += "<html><body>";
        emailBody += "<h1>Resume Review Requested</h1>";
        emailBody += "Dear admin, <br><br>";
        emailBody +=
          "A resume review has been requested for the following resume:<br><br>";
        emailBody += "<b>Email:</b> " + email + "<br>";
        emailBody +=
          "<b>Level:</b> " +
          document.querySelector("#levelSelected").innerHTML +
          "<br><br>";
        emailBody +=
          "Please review the resume and <a href='http://localhost/registeration-login-system-master/Admin_login/index.php'>Click here</a> to evaluate the resume.<br><br>";
        emailBody += "Thank you! <br> Regards, <br> PROJECT X02<br>";
        emailBody += "</body></html>";

        var username = email.split("@")[0];

        resumeBases.forEach((resume, i) => {
          resumesJson.push({
            name: username + "_file" + (i + 1) + "." + extensions[i],
            data: resume,
          });
        });

        Email.send({
          SecureToken: "b9778db3-66c8-4ac5-9da1-6bf8fec04b03",
          To: "mdaniyalmuz@gmail.com",
          ReplyAddress: email,
          From: "pratiklami15@gmail.com",
          FromName: "Employability",
          Subject: "Resume Review Request",
          Body: emailBody,
          Attachments: resumesJson,
        }).then(function (message) {
          if (message === "OK") {
            document.getElementById("sending-page").style.display = "none";
            document.getElementById("success-page").style.display = "flex";
          } else {
            document.getElementById("sending-page").style.display = "none";
            document.getElementById("confirm-page").style.display = "flex";
            alert(message);
          }
        });
      }
    });
} else if (pageName == "admin-page") {
  document.querySelector("#point-page").style.display = "flex";
  document.querySelector("#sending-page").style.display = "none";
  document.querySelector("#confirm-page").style.display = "none";

  document
    .getElementById("evaluateConfirmButton")
    .addEventListener("click", function () {
      personalInfo = document.getElementById("personal-info").value;
      jobObjective = document.getElementById("job-objective").value;
      workExperience = document.getElementById("work-experience").value;
      awards = document.getElementById("awards").value;
      activities = document.getElementById("activities").value;
      skills = document.getElementById("skills").value;
      socialMedia = document.getElementById("social-media").value;
      careerLevel = document.getElementById("career-level").value;
      resumeStyle = document.getElementById("resume-style").value;
      email = document.getElementById("email").value;
      console.log(personalInfo);
      if (
        personalInfo == 0 ||
        jobObjective == 0 ||
        workExperience == 0 ||
        awards == 0 ||
        activities == 0 ||
        skills == 0 ||
        socialMedia == 0 ||
        careerLevel == 0 ||
        resumeStyle == 0 ||
        email == ""
      ) {
        alert("Please fill all the fields");
      } else {
        totalScore =
          parseInt(personalInfo) +
          parseInt(jobObjective) +
          parseInt(workExperience) +
          parseInt(awards) +
          parseInt(activities) +
          parseInt(skills) +
          parseInt(socialMedia) +
          parseInt(careerLevel) +
          parseInt(resumeStyle);

        document.getElementById("point-page").style.display = "none";
        document.getElementById("confirm-page").style.display = "flex";

        document.getElementById("personal-info-span").innerHTML = personalInfo;
        document.getElementById("job-objective-span").innerHTML = jobObjective;
        document.getElementById("work-experience-span").innerHTML =
          workExperience;
        document.getElementById("awards-span").innerHTML = awards;
        document.getElementById("activities-span").innerHTML = activities;
        document.getElementById("skills-span").innerHTML = skills;
        document.getElementById("social-media-span").innerHTML = socialMedia;
        document.getElementById("career-level-span").innerHTML = careerLevel;
        document.getElementById("resume-style-span").innerHTML = resumeStyle;
        document.getElementById("total-score-span").innerHTML = totalScore;
        document.getElementById("rank-span").innerHTML = rankSpan(totalScore);
        document.getElementById("email-span").innerHTML = email;
      }
    });
	
  document
    .getElementById("confirmButton")
    .addEventListener("click", function () {
      document.getElementById("confirm-page").style.display = "none";
      document.getElementById("sending-page").style.display = "flex";

      var emailBody = "";
      emailBody += "<html><body>";
      emailBody += "<h1>Resume Review Completed</h1>";
      emailBody += "Dear " + email + ", <br><br>";
      emailBody +=
        "Your resume has been reviewed by our team. Please find the details below:<br><br>";
      emailBody += "<b>Personal Information:</b> " + personalInfo + "<br>";
      emailBody += "<b>Job Objective:</b> " + jobObjective + "<br>";
      emailBody += "<b>Work and Related Experience:</b> " + workExperience + "<br>";
      emailBody += "<b>Awards and Honours:</b> " + awards + "<br>";
      emailBody += "<b>Activities and Hobbies:</b> " + activities + "<br>";
      emailBody += "<b>Skills:</b> " + skills + "<br>";
      emailBody += "<b>Social Media Information:</b> " + socialMedia + "<br>";
      emailBody += "<b>Career Level:</b> " + careerLevel + "<br>";
      emailBody += "<b>Resume Style:</b> " + resumeStyle + "<br>";
      emailBody += "<b>Total Score:</b> " + totalScore + "<br>";
      emailBody += "<b>Rank:</b> " + rankSpan(totalScore) + "<br><br>";
      emailBody += "Thank you,<br>";
      emailBody += "</body></html>";

      Email.send({
        SecureToken: "b9778db3-66c8-4ac5-9da1-6bf8fec04b03",
        To: email,
        ReplyAddress: "mdaniyalmuz@gmail.com",
        From: "pratiklami15@gmail.com",
        FromName: "Employability",
        Subject: "Resume Reviewed",
        Body: emailBody,
      }).then(function (message) {
        if (message === "OK") {
          document.getElementById("sending-page").style.display = "none";
          document.getElementById("success-page").style.display = "flex";
        } else {
          document.getElementById("sending-page").style.display = "none";
          document.getElementById("confirm-page").style.display = "flex";
          alert(message);
        }
      });
    });
}

function levelUpdate(level) {
  if (level == "intern") {
    document.querySelector("#levelSelected").innerHTML = "Intern Level";
  } else if (level == "entry") {
    document.querySelector("#levelSelected").innerHTML = "Entry Level";
  } else if (level == "mid") {
    document.querySelector("#levelSelected").innerHTML = "Mid Level";
  } else if (level == "senior") {
    document.querySelector("#levelSelected").innerHTML = "Senior Level";
  } else {
    document.querySelector("#levelSelected").innerHTML = "NULL";
  }
}


function rankSpan(totalScore) {
	if (totalScore >= 90) {
	  return "Outstanding";
	} else if (totalScore >= 80) {
	  return "Excellent";
	} else if (totalScore >= 70) {
	  return "Good";
	} else if (totalScore >= 50) {
	  return "Fair";
	} else {
	  return "Failed";
	}
  };