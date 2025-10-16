 document.addEventlistener("DOMContentLoaded",()=>{
const LoginFrom=doucement.gelElementbyid("loginform");
if(loginform){
loginform.addEventlistener("submit",funtion(e){
e.preventdefault();

const name = doucement.getElementByld("studentName").value;
const name = doucement.getElementByld("studentId").value;
const name = doucement.getElementByld("teacherName").value;
const name = doucement.getElementByld("exampassword").value;

if(Password==="exam123"){
	sessionStorage.setItem("studentName",name);window.location.href="exam.html";
}else{
	alert("Invalid exam password!");
}
});
const examForm=doucement.getElementById("examForm);
if(examForm){
	eamform.addEventlistener("submit",function(e){
		e.preventDefault();
		let score = 0;
		if(document.querySelector('input[name="q1"checket')?.value==="paris"score++;
	if(document.querySelector('input[name="q1"checket')?.value==="javaScript")
		score++;
	window.location.herf=result.html?score=${score};
	});
}
});