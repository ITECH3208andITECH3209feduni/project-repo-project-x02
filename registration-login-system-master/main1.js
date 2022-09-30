var level = "entry";
var email = "";
var resumesJson = [];
var resumeBases = [];
var extensions = [];

levelUpdate(level);
document.querySelector('#upload-page').style.display = "flex";
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

document.getElementById("levelSelect").addEventListener("change", function () {
	level = document.getElementById("levelSelector").value;
	levelUpdate(level);
	document.getElementById("levelSelected").style.display = "inline";
	document.getElementById("changeLevel").style.display = "inline";
	document.getElementById("levelSelect").style.display = "none";
});

document.getElementById("resume").addEventListener("change", function () {
	resumes = document.getElementById("resume").files;
	document.getElementById("uploadedFiles").style.display = "inline";
	document.getElementById("uploadedFiles").innerHTML = resumes.length + " file(s) selected";
	Array.from(resumes).forEach(resume => {
		document.getElementById("uploadedFiles").innerHTML += "<br><a href='" + URL.createObjectURL(resume) + "' target='_blank'>" + resume.name + "</a>";
		extension = resume.name.split('.').pop();
		if(extension == "docx") {
			extension = "doc";
			var reader = new FileReader();
			reader.readAsDataURL(resume);
			reader.onload = function () {
				resumeBases.push(reader.result);
			}
		} else if(extension == "txt") {
			extension = "txt";
			var reader = new FileReader();
			reader.readAsDataURL(resume);
			reader.onload = function () {
				resumeBases.push(reader.result);
			}
		} else {
			extension = extension.toLowerCase();
			var fileReader = new FileReader();
			fileReader.onload = function(fileLoadedEvent) {
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


document.getElementById("confirmResume").addEventListener("click", function () {
	email = document.getElementById("email").value;
	if (email == "") {
		alert("Please enter your email");
	} else if(resume == "") {
		alert("Please go back and upload your resume");
	} else {
		document.getElementById("confirm-page").style.display = "none";
		document.getElementById("sending-page").style.display = "flex";

		var emailBody = "";
		emailBody += "<html><body>";
		emailBody += "<h1>Resume Review Requested</h1>";
		emailBody += "Dear admin, <br><br>";
		emailBody += "A resume review has been requested for the following resume:<br><br>";
		emailBody += "<b>Email:</b> " + email + "<br>";
		emailBody += "<b>Level:</b> " + document.querySelector('#levelSelected').innerHTML + "<br><br>";
		emailBody += "Please review the resume and send a response to this email.<br><br>";
		emailBody += "Thank you,<br>";
		emailBody += "</body></html>";

		var username = email.split("@")[0];

		resumeBases.forEach((resume,i) => {
			resumesJson.push({
				name: username + "_file"+(i+1)+"."+extensions[i],
				data: resume
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
			Attachments: resumesJson
		}).then(function (message) {
			if(message === "OK") {
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


function impactUpdate(impact) {
	document.querySelector('#impactOp').value = impact+"/100";
}

function brevityUpdate(brevity) {
	document.querySelector('#brevityOp').value = brevity+"/100";
}

function sectionUpdate(section) {
	document.querySelector('#sectionOp').value = section+"/100";
}

function softSkillsUpdate(softSkills) {
	document.querySelector('#softSkillsOp').value = softSkills+"/100";
}

function levelUpdate(level) {
	if(level == "intern") {
		document.querySelector('#levelSelected').innerHTML = "Intern Level";
	} else if(level == "entry") {
		document.querySelector('#levelSelected').innerHTML = "Entry Level";
	} else if(level == "mid") {
		document.querySelector('#levelSelected').innerHTML = "Mid Level";
	} else if(level == "senior") {
		document.querySelector('#levelSelected').innerHTML = "Senior Level";
	} else if(level == "senior") {
		document.querySelector('#levelSelected').innerHTML = "Senior Level";
	} else if(level == "senior") {
		document.querySelector('#levelSelected').innerHTML = "Senior Level";
	} else {
		document.querySelector('#levelSelected').innerHTML = "NULL";
	}
}