var r = document.querySelector(':root');

function darkmode() {
    r.style.setProperty('--navitcol', '#f1f1f1');
    r.style.setProperty('--navicol', '#1a1a1a');
    r.style.setProperty('--settingcol', '#E3DCC2');
    r.style.setProperty('--chatcol', '#2c2c2c');
    r.style.setProperty('--rancol', '#2e2e2b');
    var element = document.body;
    element.className = "darkmode";
    return show('lightmodee', 'darkmodee')
}
function lightmode() {
    r.style.setProperty('--navicol', '#f1f1f1');
    r.style.setProperty('--navitcol', '#010101');
    r.style.setProperty('--settingcol', '#2e2e2b');
    r.style.setProperty('--chatcol', '#ffffff');
    r.style.setProperty('--rancol', '#E3DC95');
    var element = document.body;
    element.className = "lightmode";
    return show('darkmodee', 'lightmodee')
}

//Javascript Navigation
function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function page1() {
    page11()
    page12()
    page13()
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
    document.getElementById("switchcus").checked = false;
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
     document.getElementById("right-click") 
             .style.display = "none" 
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