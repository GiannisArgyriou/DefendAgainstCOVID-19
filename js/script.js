$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 4000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
});
//quiz
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
            txt_2.link("#") + "page";
    }
    else if (score == 5) {
        advice = "You are a COVID-19 expert";
    }

    document.getElementById("tip").innerHTML = advice;

}
// e-shop
var price = 0;
var countCap = 0;
var countMask = 0;
var countMug = 0;

function remove_caps() {
    if (countCap == 0) {
        countCap = 0;
    }
    else {
        countCap--;
        price -= 9.99;
    }
total_cost();
}
function remove_masks() {
    if (countMask == 0) {
        countMask = 0;
    }
    else {
        countMask--;
        price -= 4.99;
    }
total_cost();
}
function remove_mugs() {
    if (countMug == 0) {
        countMug = 0;
    }
    else {
        countMug--;
        price -= 7.99;
    }
total_cost();
}
function total_price1() {
    price += 9.99;
    countCap++;
    total_cost();
}
function total_price2() {
    price += 4.99;
    countMask++;
    total_cost();
}
function total_price3() {
    price += 7.99;
    countMug++;
    total_cost();
}
function total_cost() {
    document.getElementById("total").innerHTML = Number(price).toFixed(2);
    document.getElementById("noCaps").innerHTML = countCap;
    document.getElementById("noMasks").innerHTML = countMask;
    document.getElementById("noMugs").innerHTML = countMug;
    
}
function total_items() {
    let summary = " ";
    target = $(".noShow").attr('data-target-custom');
    if (countCap == 0 && countMask == 0 && countMug == 0) {
        alert("Your cart is empty!")
    }
    else {

        $(target).modal('show');
    }
    if (countCap > 0) {
        summary += countCap + "cap(s), "
    }
    if (countMask > 0) {
        summary += countMask + "mask(s), "
    }
    if (countMug > 0) {
        summary += countMug + "mug(s)"
    }
    document.getElementById("items").innerHTML = summary;
}
var today = new Date();
var yyyy = today.getFullYear();
var mm = today.getMonth();
if(mm<10){
    mm='0'+mm
} 
today = yyyy+'-'+mm;
document.getElementById("date").setAttribute("min", today);

//tips
var tip = " "
function random_tip() {
    let x = Math.floor(Math.random() * 5);
    if (x == 0) {
        tip = "... you can wash your hands to the tune of 'Happy Birthday', which should last for about 20 seconds?"
    }
    if (x == 1) {
        tip = "... we still don't know for certain how COVID-19 has been spread to people. One of the theories links it to the pangolins."
    }
    if (x == 2) {
        tip = "... as of 27.07.2020, there have been no pronounced deaths due to COVID-19 on Faroe Islands, despite of 191 confirmed cases"
    }
    if (x == 3) {
        tip = "... Sweden seems to be the only 'major' country whose strategy has relied more (despite some restrictions such as banning all public gatherings and events with more than 50 people) on voluntary social distancing rather than top-down, governmental restrictions"
    }
    if (x == 4) {
        tip = "... at the end of May, the Cypriot government has announced covering the costs of accommodation, medicine and food for tourists who will test positive for the virus after travelling there"
    }
    document.getElementById("randomTip").innerHTML = tip;
}
