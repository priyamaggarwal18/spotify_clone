var loggedInUserName = localStorage.getItem("loggedInUserName");
document.getElementById('name').textContent = loggedInUserName;
document.getElementById('name-circle').textContent=loggedInUserName[0].toUpperCase();

function updateGreeting() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var greeting;
    
    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours < 16) {
        greeting = 'Good Afternoon';
    }
    else {
        greeting = 'Good Evening';
    }
    return greeting;
}

function updateBackground() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var backgroundColor;
    if (hours < 12) {
        backgroundColor = '#61301B'; 
    } else if (hours < 16) {
        backgroundColor = '#5B611B'; 
    } else {
        backgroundColor = '#325212'; 
    }
    return backgroundColor;
}

function updateDateTime() {
    var currentTime = new Date();
    var formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    var day = currentTime.getDate().toString().padStart(2, '0');
    var month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
    var year = currentTime.getFullYear();
    return formattedTime + ' ' + day + '-' + month + '-' + year;
}

function updateContent() {
    document.getElementById('greeting').textContent = updateGreeting();
    document.getElementById('time-date').textContent = updateDateTime();
    document.getElementById('background-gradient').style.background = 'linear-gradient(180deg, ' + updateBackground() + ' 0%, #000 100%)';
    
}

updateContent();
setInterval(updateContent, 60000);
    

function toggleDiv1() {
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var searchdiv = document.getElementById('searchdiv');
    div1.style.display = 'none';
    div2.style.display = 'block';
    searchdiv.style.display='none';
}
function toggleDiv2() {
    var div1 = document.getElementById('div1');
    var div3 = document.getElementById('div3');
    var searchdiv = document.getElementById('searchdiv');
    div1.style.display = 'none';
    div3.style.display = 'block';
    searchdiv.style.display='none';
}

function toggleDiv3() {
    var div1 = document.getElementById('div1');
    var div4 = document.getElementById('div4');
    var searchdiv = document.getElementById('searchdiv');
    div1.style.display = 'none';
    div4.style.display = 'block';
    searchdiv.style.display='none';
}

function toggleDiv4() {
    var div1 = document.getElementById('div1');
    var div5 = document.getElementById('div5');
    var searchdiv = document.getElementById('searchdiv');
    div1.style.display = 'none';
    div5.style.display = 'block';
    searchdiv.style.display='none';
}
function toggleDiv5() {
    var div1 = document.getElementById('div1');
    var div6 = document.getElementById('div6');
    var searchdiv = document.getElementById('searchdiv');
    div1.style.display = 'none';
    div6.style.display = 'block';
    searchdiv.style.display='none';
}
    

function homeClick(){
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var div3=document.getElementById('div3');
    var div4=document.getElementById('div4');
    var div5=document.getElementById('div5');
    var div6=document.getElementById('div6');
    var searchdiv = document.getElementById('searchdiv');
    var homebtn = document.getElementById('homebtn');
    var searchbtn = document.getElementById('searchbtn');
    
    div1.style.display = 'block';
    div2.style.display = 'none';
    div3.style.display='none';
    div4.style.display='none';
    div5.style.display='none';
    div6.style.display='none';
    searchdiv.style.display = 'none';

    homebtn.style.background = '#282828';
    searchbtn.style.background = 'transparent';
    homebtn.style.color = 'white';
    searchbtn.style.color = '#c4c4c4ad';
}

function searchClick(){
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var div3 = document.getElementById('div3');
    var div4=document.getElementById('div4');
    var div5=document.getElementById('div5');
    var div5=document.getElementById('div6');
    var searchdiv = document.getElementById('searchdiv');
    var homebtn = document.getElementById('homebtn');
    var searchbtn = document.getElementById('searchbtn');
    
    searchdiv.style.display = 'block';
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display='none';
    div4.style.display='none';
    div5.style.display='none';
    div6.style.display='none';
    homebtn.style.background = 'transparent';
    searchbtn.style.background = '#282828';
    homebtn.style.color = '#c4c4c4ad';
    searchbtn.style.color = 'white';
    
}