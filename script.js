var students = ['Mushira','Bhavna','Vaishali','Rooksar','Ishaan','Kreshen','Melanie','Benoit','Jinakshi','Payal','Samiirah','Arshad','Sharfa','Nidhisha','Ashvin','Nabiiha','Zafiirah','Nooree','Ajmal','Rohan','Geeshni','Moonish','Anupama','Saima','Nirvan','Abhishek','Wasiim','Joshua','Seenan','Sweta','Hanshley','Ramdin','Roopnarain','Silvio','Hans','Devesh','Ittoo','Hemesh','Allas'];

var presented = [];

var next = document.getElementById("next");
var button = document.querySelector("button");
var left = document.getElementById("remaining");
var add = document.getElementById("add");

var numStudents = students.length;
var alreadyPresented = 0;

left.innerHTML = numStudents+" remaining";

button.addEventListener("click", function(){
	if(numStudents != 0) {
		do {
			var x = Math.floor(Math.random()*students.length);
		} while(presented.indexOf(students[x]) != -1);

		numStudents--;

		next.innerHTML = students[x];
		left.innerHTML = numStudents+" remaining";
		presented.push(students[x]);

		if(numStudents == 0) {
			button.innerHTML = "Last presenter";
			left.style.display = "none";
			document.body.style.backgroundColor = "#8BC34A";
			button.style.backgroundColor = "#8BC34A";
			button.style.cursor = "not-allowed";
		}
	}

	if(alreadyPresented != students.length-1) {
		add.innerHTML += "<p>"+presented[alreadyPresented]+"</p>";
		alreadyPresented++;
	}
});