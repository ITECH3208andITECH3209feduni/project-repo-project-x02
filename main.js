// for index
var uploadSection = document.getElementById("upload-section");

if(uploadSection) {
    uploadSection.addEventListener("click", function () {
        document.getElementById("resume").click();
    });
}

// for result
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