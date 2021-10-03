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

function randomphoto() {
    var x = document.getElementById("test")
    y = Math.floor((Math.random() * 45) + 1);
    document.getElementById("image").src="kpop/" + y + ".jpg";
  }

var hideVideo = document.getElementsByClassName("hideVideo")[0];
hideVideo.style.display = "none";