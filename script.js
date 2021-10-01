var r = document.querySelector(':root');

function darkmode() {
    r.style.setProperty('--navitcol', '#f1f1f1');
    r.style.setProperty('--navicol', '#1a1a1a');
    r.style.setProperty('--settingcol', '#E3DCC2');
    r.style.setProperty('--chatcol', '#2c2c2c');
    var element = document.body;
    element.className = "darkmode";
    return show('lightmodee', 'darkmodee')
}
function lightmode() {
    r.style.setProperty('--navicol', '#f1f1f1');
    r.style.setProperty('--navitcol', '#010101');
    r.style.setProperty('--settingcol', '#2e2e2b');
    r.style.setProperty('--chatcol', '#ffffff');
    var element = document.body;
    element.className = "lightmode";
    return show('darkmodee', 'lightmodee')
}

function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function videos() {
    video1()
    video2()
    video3()
    
}function video1() {
    return show('Videos', 'Home');
}function video2() {
    return show('Videos', 'News');
}function video3() {
    return show('Videos', 'About');
}

function home() {
    home1()
    home2()
    home3()
}function home1() {
    return show('Home', 'Videos');
}function home2() {
    return show('Home', 'News');
}function home3() {
    return show('Home', 'About');
}

function news() {
    news1()
    news2()
    news3()
}function news1() {
    return show('News', 'Videos');
}function news2() {
    return show('News', 'Home');
}function news3() {
    return show('News', 'About');
}

function about() {
    about1()
    about2()
    about3()
}function about1() {
    return show('About', 'Videos');
}function about2() {
    return show('About', 'Home');
}function about3() {
    return show('About', 'News');
}

