var i = 0;

var user_a = [];
var score = 0;

var advice = "";

const txt_1 = "Home page";
const txt_2 = "Tips";

const correct_a = ["False", "Wuhan", "True", "Respiratory", "False"];


function start_Quiz() {
    document.getElementById("quiz_header").innerHTML = "Question 1";
    document.getElementById("instructions").classList.add("hide");
    document.getElementById("first_q").classList.remove("hide");
}



function f_a() {
    score = score;
}
function t_a() {
    score += 1;
}

function next_Button_1() {
    document.getElementById("quiz_header").innerHTML = "Question 2";
    document.getElementById("first_q").classList.add("hide");
    document.getElementById("second_q").classList.remove("hide");
   
}

function next_Button_2() {
    document.getElementById("quiz_header").innerHTML = "Question 3";
    document.getElementById("second_q").classList.add("hide");
    document.getElementById("third_q").classList.remove("hide");
}

function next_Button_3() {
    document.getElementById("quiz_header").innerHTML = "Question 4";
    document.getElementById("third_q").classList.add("hide");
    document.getElementById("fourth_q").classList.remove("hide");
}

function next_Button_4() {
    document.getElementById("quiz_header").innerHTML = "Question 5";
    document.getElementById("fourth_q").classList.add("hide");
    document.getElementById("fifth_q").classList.remove("hide");
}

for (i = 0; i < 5; i++) {
    if (user_a[i] == correct_a[i]) {
        score += 1;
    }
    else if (user_a[i] != correct_a[i]) {
        score = score;
    }
}

function show_Results() {
    document.getElementById("fifth_q").classList.add("hide");
    document.getElementById("results").classList.remove("hide");
    document.getElementById("quiz_header").innerHTML = "Your Result";
    document.getElementById("final_score").innerHTML = "You sumbitted " + score + " correct answers";

    if (score >= 0 && score <= 2) {
        advice = "You should get more informed about COVID-19" + "<br>" + "You can read more information about the virus on the " + 
        txt_1.link("#");
    }
    else if (score > 2 && score <= 4) {
        advice = "You have some knowledge on COVID-19" + "<br>" + "Be sure to check the  " + 
        txt_2.link("#") + " page";
    }
    else if (score == 5) {
        advice = "You are a COVID-19 expert";
    }

    document.getElementById("tip").innerHTML = advice;

}
