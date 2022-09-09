var level = "entry";
var email = "";
var resume = "";
var base64;

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
	resume = document.getElementById("resume").files[0];
	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) {
		base64 = fileLoadedEvent.target.result;
	};
	fileReader.readAsDataURL(resume);
});

document.getElementById("goToConfirm").addEventListener("click", function () {
	if (resume == "") {
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

		Email.send({
			SecureToken: "b9778db3-66c8-4ac5-9da1-6bf8fec04b03",
			To: "mdaniyalmuz@gmail.com",
			ReplyAddress: email,
			From: "pratiklami15@gmail.com",
			FromName: "Employability",
			Subject: "Resume Review Request",
			Body: emailBody,
			Attachments: [{
				name: username+"-resume.pdf",
				data: base64
			}]
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
	} else {
		document.querySelector('#levelSelected').innerHTML = "NULL";
	}
}