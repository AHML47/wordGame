function cridi(){
  var lktiba=document.getElementById("klamB")
  if(lktiba.style.display=="none"){
    lktiba.style.display="block"
  }else{
    lktiba.style.display="none"
  }
}


function main(){


let music = document.getElementById("Audio");
music.loop=true;
music.play();


let settingsB = document.getElementById("set");
let  settingsMenu = document.getElementById("settingsmenu")
let musicC=document.getElementById("M");

let playB=document.getElementById("Bplay");
let logB=document.getElementById("BLog");
let signB=document.getElementById("Bsign")



musicC.addEventListener("click", () => {
  if(musicC.style.backgroundColor === "red"){
    musicC.style.backgroundColor = "green"
    music.load();
    music.play();
  }else{
    musicC.style.backgroundColor = "red";
    music.pause();
  }
});

settingsB.addEventListener("click", () => {
  if(settingsMenu.style.display === "block"){
    settingsMenu.style.display = "none"
  }else{
    settingsMenu.style.display = "block";
  }
});

}

function play(){
  window.location.href ="../index.html";
}

/*
function login() {
    let usname=document.getElementById("UnL").value;
    let pass=document.getElementById("PwL").value;
    let mawjoud=false

    let index =0;
    for(let i=0;i<NbUser;i++){
        if(users[i][0]==usname){
            index=i;
            mawjoud=true;
        }
    }
    if(mawjoud){
        if(users[index][1]==pass){
            var ro = new XMLHttpRequest();
            ro.open("GET", "enterValue.xml", true);
            ro.send();
            
            ro.onreadystatechange = function() {
                if (ro.readyState == 4 && ro.status == 200) {
                    var xdc = ro.responseXML;
                    xdc.getElementsByTagName("name")[0].textContent = users[index][0];
                    xdc.getElementsByTagName("score")[0].textContent = users[index][2];
                    xdc.getElementsByTagName("rank")[0].textContent = users[index][3];
            
                    var xs = new XMLSerializer();
                    var modifiedXML = xs.serializeToString(xdc);
            
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", "enterValue.xml", true);
                    xhr.setRequestHeader("Content-Type", "text/xml");
                    xhr.send(modifiedXML);
                }
            };


         /*   
            var ro=new XMLHttpRequest();
            ro.open("GET","../src/enterValue.xml",true);
            ro.send();

            ro.onreadystatechange = function(){
            
              if (ro.readyState==4&&ro.status==200) {
              var xdc=ro.responseXML;
              xdc.getElementsByTagName("name")[0].textContent=users[index][0];
              xdc.getElementsByTagName("score")[0].textContent=users[index][2];
              xdc.getElementsByTagName("rank")[0].textContent=users[index][3];
              console.log(xdc.getElementsByTagName("name")[0].textContent)
              console.log(xdc.getElementsByTagName("score")[0].textContent)
              console.log(xdc.getElementsByTagName("rank")[0].textContent)

              var xs = new XMLSerializer();
              var modifiedXML = xs.serializeToString(xdc);
              var xhr = new XMLHttpRequest();
              xhr.open("POST", "../src/enterValue.xml", true);
        //      xhr.setRequestHeader("Content-Type", "text/xml");
              xhr.send(modifiedXML);

            }
            };*/
             
           // window.location.href ="../index.html";
/*
        }else{
            document.getElementById("ktiba").textContent="password is wrong"
        }
    }else{
        document.getElementById("ktiba").textContent="username is wrong"
    }
    
}
*/