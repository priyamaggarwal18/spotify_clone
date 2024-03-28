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


// SONGS AREA
async function getsongs(){
let a=fetch('file:///C:/Users/priya/Downloads/New%20folder/FEE/spotify_clone/images/songs/')
let response=await a.text();
console.log(response)
let div=document.createElement("div")
    div.innerHTML = response
let tds=div.getElementsByTagName('a')
for(let index=0;index<as.length;index++){
    const element = as[index];
    if(element.href.endsWith(".mp3")){
        sessionStorage.push(element.href)
    }
}
return songs 
}

async function main(){
    //get songs
    let songs=getsongs()
    let songUL=document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs){
        songUL.innerHTML=songUL.innerHTML
    }
    //play the first song
    var audio=new Audio(songs[0])
    audio.play()

    audio.addEventListener('loadeddata',() =>{
        let duration=audio.duration;   
    })
}

main()


function hideCustomAlert() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("customAlert").style.display = "none";
}

function display_alert(){
    var customAlert = document.getElementById("customAlert");
    var customAlertMessage = document.getElementById("customAlertMessage");
    var overlay = document.getElementById("overlay");
    customAlertMessage.innerText = "Login or signup first";
    customAlert.style.display = "block";
    overlay.style.display = "block";
}

function homeClick(){
    var div1 = document.getElementById('div1');
    var div3 = document.getElementById('searchdiv');
    var homebtn = document.getElementById('homebtn');
    var searchbtn = document.getElementById('searchbtn');
    
    div1.style.display = 'block';
    div3.style.display = 'none';
    
    homebtn.style.background = '#282828';
    searchbtn.style.background = 'transparent';
    homebtn.style.color = 'white';
    searchbtn.style.color = '#c4c4c4ad';
}

function searchClick(){
    var div1 = document.getElementById('div1');
    var div3 = document.getElementById('searchdiv');
    var homebtn = document.getElementById('homebtn');
    var searchbtn = document.getElementById('searchbtn');
    div3.style.display = 'block';
    div1.style.display='none';
    homebtn.style.background = 'transparent';
    searchbtn.style.background = '#282828';
    homebtn.style.color = '#c4c4c4ad';
    searchbtn.style.color = 'white';
}

