var r = document.querySelector(':root');

//Javascript Navigation
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function active(activec, notactivec, notactivec2, notactivec3) {
    document.getElementById(activec).classList.add("active")
    document.getElementById(notactivec).classList.remove("active")
    document.getElementById(notactivec2).classList.remove("active")
    document.getElementById(notactivec3).classList.remove("active")
}


var page = localStorage.getItem("page")
if(page === "1") {
    page11()
    page12()
    page13()
    active('p1', 'p2', 'p3', 'p4')
}
else if(page === "2") {
    page21()
    page22()
    page23()
    active('p2', 'p1', 'p3', 'p4')
}
else if(page === "3") {
    page31()
    page32()
    page33()
    active('p3', 'p2', 'p1', 'p4')
}
else if(page === "4") {
    page41()
    page42()
    page43()
    active('p4', 'p2', 'p3', 'p1')
}


function page1() {
    page11()
    page12()
    page13()
    localStorage.setItem("page", "1")
    active('p1', 'p2', 'p3', 'p4')
}function page11() {
    return show('page1', 'page2');
}function page12() {
    return show('page1', 'page3');
}function page13() {
    return show('page1', 'page4');
}

function page2() {
    page21()
    page22()
    page23()
    localStorage.setItem("page", "2")
    active('p2', 'p1', 'p3', 'p4')
}function page21() {
    return show('page2', 'page1');
}function page22() {
    return show('page2', 'page3');
}function page23() {
    return show('page2', 'page4');
}

function page3() {
    page31()
    page32()
    page33()
    localStorage.setItem("page", "3")
    active('p3', 'p2', 'p1', 'p4')
}function page31() {
    return show('page3', 'page2');
}function page32() {
    return show('page3', 'page1');
}function page33() {
    return show('page3', 'page4');
}

function page4() {
    page41()
    page42()
    page43()
    localStorage.setItem("page", "4")
    active('p4', 'p2', 'p3', 'p1')
}function page41() {
    return show('page4', 'page2');
}function page42() {
    return show('page4', 'page3');
}function page43() {
    return show('page4', 'page1');
}

//Random Photo Part
function randomphoto() {
    y = Math.floor((Math.random() * 45) + 1);
    document.getElementById("image").src="kpop/" + y + ".jpg";
  }

function showvid(shownvid) {
    document.getElementById(shownvid).style.display='block';
}

//Video Toggle Buttons
var hideVideo = document.getElementsByClassName("6-8-hangout")[0];
hideVideo.style.display = "none";
function hangout() {
    var x = document.getElementById("6-8-hangout");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

var hideVideo = document.getElementsByClassName("subunit")[0];
hideVideo.style.display = "none";
function subunit() {
    var x = document.getElementById("subunit");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//Save Checkbox State
function save() {	
	var checkbox = document.getElementById("switch");
    localStorage.setItem("switchstate", checkbox.checked);
    document.getElementById("switchcus").checked = false;
}

var checked = JSON.parse(localStorage.getItem("switchstate"));
    document.getElementById("switch").checked = checked;

//Save Custom Theme Button Checkbox 
function savecus() {	
	var checkboxcus = document.getElementById("switchcus");
    localStorage.setItem("switchstatecus", checkboxcus.checked);
    document.getElementById("switch").checked = false;
}

var checkedcus = JSON.parse(localStorage.getItem("switchstatecus"));
    document.getElementById("switchcus").checked = checkedcus;

//Save Theme in localStorage
let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById("switch");
function changeThemeToDark(){
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
}

function changeThemeToLight(){
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", 'light');
}

checkbox.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight();
    }else{
        changeThemeToDark();
    }
});

//Custom Theme Part
////Custom Theme Toggle Button Part
const checkboxcus = document.getElementById("switchcus");
function changeThemeToCustom() {
    document.documentElement.setAttribute("data-theme", "custom");
    localStorage.setItem("data-theme", 'custom');
}

if(theme === 'dark') {
    changeThemeToDark()
}

checkboxcus.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='custom'){
        changeThemeToLight();
    }else{
        changeThemeToCustom();
    }
});

function resetter() {
    localStorage.setItem("data-theme", "light");
    localStorage.setItem("customthemebg", "");
    localStorage.setItem("customthemet", "");
    localStorage.setItem("customthemenb", "");
    localStorage.setItem("customthemetb", "");
    // document.getElementById("vaswitch").checked = false;  
    // document.getElementById("vava").style.setProperty("display", "none")  
    // valocalvalue = 3;
    location.reload();
}

////Custom Theme Input Custom colors Part
var custo = document.querySelector(":root");


let cbgget = localStorage.getItem("customthemebg");
let ctget = localStorage.getItem("customthemet");
let cnbget = localStorage.getItem("customthemenb");
let ctbget = localStorage.getItem("customthemetb");
let ctbtget = localStorage.getItem("customthemetbt");

var inputbg = document.getElementById("themebgid");
var inputt = document.getElementById("themetid");
var inputnb = document.getElementById("themenbid");
var inputtb = document.getElementById("themetbid");
var inputtbt = document.getElementById("themetbtid");

inputbg.setAttribute("placeholder", cbgget);
inputt.setAttribute("placeholder", ctget);
inputnb.setAttribute("placeholder", cnbget);
inputtb.setAttribute("placeholder", ctbget);
inputtbt.setAttribute("placeholder", ctbtget);

if(theme === "custom") {
    changeThemeToCustom();
    custo.style.setProperty("--custobgcol", cbgget);
    custo.style.setProperty("--custotcol", ctget);
    custo.style.setProperty("--custonbcol", cnbget);
    custo.style.setProperty("--custotbcol", ctbget);
    custo.style.setProperty("--custotbtcol", ctbtget);
}

function themebgcol(){

    var themebgcolval = document.getElementById("themebgid").value;

    custo.style.setProperty("--custobgcol", themebgcolval);
    localStorage.setItem("customthemebg", themebgcolval);
    inputbg.setAttribute("placeholder", cbgget);
}

function themetcol(){

    var themetcolval = document.getElementById("themetid").value;

    custo.style.setProperty("--custotcol", themetcolval);
    localStorage.setItem("customthemet", themetcolval);
    inputt.setAttribute("placeholder", ctget);
}

function themenbcol(){

    var themenbcolval = document.getElementById("themenbid").value;

    custo.style.setProperty("--custonbcol", themenbcolval);
    localStorage.setItem("customthemenb", themenbcolval);
    inputnb.setAttribute("placeholder", cnbget);
}

function themetbcol(){

    var themetbcolval = document.getElementById("themetbid").value;

    custo.style.setProperty("--custotbcol", themetbcolval);
    localStorage.setItem("customthemetb", themetbcolval);
    inputtb.setAttribute("placeholder", ctbget);
}

function themetbtcol(){

    var themetbtcolval = document.getElementById("themetbtid").value;

    custo.style.setProperty("--custotbtcol", themetbtcolval);
    localStorage.setItem("customthemetbt", themetbtcolval);
    inputtbt.setAttribute("placeholder", ctbtget);
}

//Right click menu
function rightclick() {
    rc = document.getElementById("right-click");
    rc.style.setProperty("display", "block")
}

document.onclick = hideMenu; 
document.oncontextmenu = rightClick; 

 function hideMenu() { 
     document.getElementById("right-click").style.display = "none" 
 } 

 function rightClick(e) { 
     e.preventDefault(); 

     if (document.getElementById("right-click") .style.display == "block"){ 
         hideMenu(); 
     }else{ 
         var menu = document.getElementById("right-click")      
         menu.style.display = 'block'; 
         menu.style.left = e.pageX + "px"; 
         menu.style.top = e.pageY + "px"; 
     } 
 } 

////Right click reload option
function o1() {
    window.location.reload();
}

function o2(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
 }
//Lessons part
// var sub = localStorage.getItem("subject")
// if(sub === "maths"){
//     submath()
// }
// else if(sub === "cs"){
//     subcs()
// }
// else if(sub === "physics"){
//     subphysics()
// }
// else if(sub === "morse"){
//     submc()
// }else if(sub === "ict"){
//     subict()
// }

// function submath() {
//     lessonsq = mathquestions;
//     lessonsa = mathanswers;
//     que = lessonsa[arr];
//     document.getElementById("question").innerHTML = lessonsq[arr];
//     arr = Math.floor(Math.random() * lessonsq.length);
//     document.getElementById("qtitle").innerHTML = "Maths"
//     document.getElementById("morsecodetable").style.setProperty("display", "none");
//     document.getElementById("morsecodetabletoggle").style.setProperty("display", "none");
//     localStorage.setItem("subject", "maths")
// } 
// //View Answer Keyboard shortcut
// document.addEventListener("keydown", function(event) {
//     if (event.ctrlKey && event.code === "KeyV")
//     {
//         va()
//         event.preventDefault();
//     }
// });

// function subcs() {
//     lessonsq = csquestions;
//     lessonsa = csanswers;
//     que = lessonsa[arr];
//     document.getElementById("question").innerHTML = lessonsq[arr];
//     document.getElementById("qtitle").innerHTML = "CS"
//     document.getElementById("morsecodetable").style.setProperty("display", "none");
//     document.getElementById("morsecodetabletoggle").style.setProperty("display", "none");
//     localStorage.setItem("subject", "cs")
// }

// function subphysics() {
//     lessonsq = physicsquestions;
//     lessonsa = physicsanswers;
//     que = lessonsa[arr];
//     document.getElementById("question").innerHTML = lessonsq[arr];
//     document.getElementById("qtitle").innerHTML = "Physics"
//     document.getElementById("morsecodetable").style.setProperty("display", "none");
//     document.getElementById("morsecodetabletoggle").style.setProperty("display", "none");
//     localStorage.setItem("subject", "physics")
// }

// function subict() {
//     lessonsq = ictquestions;
//     lessonsa = ictanswers;
//     que = lessonsa[arr];
//     document.getElementById("question").innerHTML = lessonsq[arr];
//     document.getElementById("qtitle").innerHTML = "ICT"
//     document.getElementById("morsecodetable").style.setProperty("display", "none");
//     document.getElementById("morsecodetabletoggle").style.setProperty("display", "none");
//     localStorage.setItem("subject", "ict")
// }
// //Morse Code Table Toggler
// function submc() {
//     lessonsq = mcquestions;
//     lessonsa = mcanswers;
//     que = lessonsa[arr];
//     document.getElementById("question").innerHTML = lessonsq[arr];
//     document.getElementById("qtitle").innerHTML = "Morse Code";
//     document.getElementById("morsecodetabletoggle").style.setProperty("display", "block");
//     localStorage.setItem("subject", "morse")
// }

// mctable = document.getElementById("morsecodetable").style;
// mctable.display = "none"
// function mctog() {
//     if (mctable.display === "none"){
//         mctable.display = "block"
//     }
//     else{
//         mctable.display = "none"
//     }
// }

// var lessonsq = csquestions;
// var lessonsa = csanswers;

// var arr = Math.floor(Math.random() * lessonsq.length)
// ans = "correct"
// que = lessonsa[arr];
// ansd = document.getElementById("answer").value;

// function question() {
//     ansd = document.getElementById("answer").value;
//     if(ansd === que) {
//         var arr = Math.floor(Math.random() * lessonsq.length)
//         document.getElementById("question").innerHTML = lessonsq[arr];
//         que = lessonsa[arr];
//         document.getElementById("aaa").innerHTML = "";
//         document.getElementById("wrong").style.setProperty("display", "none");
//         document.getElementById("va").style.setProperty("display", "none");
//         document.getElementById("answer").value = "";
//     }
//     else {
//         document.getElementById("wrong").style.setProperty("display", "block");
//         document.getElementById("va").style.setProperty("display", "block");
//         ans = "wrong";
//     }
// }

// //Enter key pressed in q&a 
// function qnaa(event) {
//     event.preventDefault();
//     question();
// }

// //View answers 
// function va() {
//     document.getElementById("aaa").innerHTML = que;
//     document.getElementById("answer").value = que;
//     setTimeout(function(){
//         question()
//     }, 2200); 
// }

//Enter key press settings
function bg(event) {
    event.preventDefault();
    themebgcol();
}

function txt(event) {
    event.preventDefault();
    themetcol();
}

function nav(event) {
    event.preventDefault();
    themenbcol();
}

function topbar(event) {
    event.preventDefault();
    themetbcol();
}

function topbartxt(event) {
    event.preventDefault();
    themetbtcol();
}