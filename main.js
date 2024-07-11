let WORDS=["azert"];
console.log("eofbr")
console.log(WORDS.length)
var req=new XMLHttpRequest();
req.open("GET","src/words.xml",true);
req.send();
            
req.onreadystatechange = function(){
				
	if (req.readyState==4&&req.status==200) {
  var xdoc=req.responseXML;
  let words=xdoc.querySelectorAll("word");
  console.log(words.length)
    for (let i=0;i<words.length;i++){
      WORDS.push(words[i].textContent);
      console.log(words[i].textContent)
    }
  }
};



let users = [];
let NbUser
let tbadel=true
for (let i = 0; i < 100; i++) {
    users[i] = [];
    for (let j = 0; j < 4; j++) {
        users[i][j] = j;
    }
  }
var re=new XMLHttpRequest();
re.open("GET","src/users.xml",true);
re.send();
            
re.onreadystatechange = function(){
				
	if (re.readyState==4&&re.status==200) {
  var xdo=re.responseXML;
  let usersR=xdo.querySelectorAll("user");
  
  console.log(usersR.length)
  NbUser=usersR.length;
    for (let i=0;i<usersR.length;i++){
    
      users[i][0]=(usersR[i].querySelectorAll("name")[0].textContent);
      users[i][1]=(usersR[i].querySelectorAll("pass")[0].textContent);
      users[i][2]=(usersR[i].querySelectorAll("score")[0].textContent);
      users[i][3]=(usersR[i].querySelectorAll("rank")[0].textContent);
      console.log(users[i][3])
  }
};  
}    
let awelMarra=true
function showtrofies(){
  let scores=[]
  console.log("ayya kifech taw")
  if(awelMarra){
  for(let i=0;i<NbUser+1;i++){
    for(let j=0;j<NbUser;j++){
    if(Number(users[j][3])==i){
      console.log(i)
      var tues=document.createElement("label")
      var trank=document.createElement("label")
      tues.setAttribute("for",String(j))
      trank.setAttribute("name",String(j))
      tues.textContent=users[j][0]
      trank.textContent=users[j][3]+" "
      
      document.getElementById("tabloB").appendChild(trank)
      document.getElementById("tabloB").appendChild(tues)
      document.getElementById("tabloB").appendChild(document.createElement("hr"))
    }
  }
}
  }
  awelMarra=false
  if(document.getElementById("tabloB").style.display=="none"){
    document.getElementById("tabloB").style.display="block"
  }else{
    document.getElementById("tabloB").style.display="none"
  }
}



const tryNb = 6;
let guessesRemaining = tryNb;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];

//let autoCorrect=false;

let index =0;
function login(){
  let usname=document.getElementById("UnL").value;
    let pass=document.getElementById("PwL").value;
    let mawjoud=false

    index =0;
    for(let i=0;i<NbUser;i++){
        if(users[i][0]==usname){
            index=i;
            mawjoud=true;
        }
    }
    if(mawjoud){
        if(users[index][1]==pass){
          document.getElementById("d5oul").style.display="none"
          document.getElementById("det").style.display="block"
          document.getElementById("name").textContent=String(users[index][0])
          document.getElementById("score").textContent=String(users[index][2])
        }else{
          document.getElementById("ktiba").textContent="password is wrong"
        }
      }else{
        document.getElementById("ktiba").textContent="username is wrong"
      }

}

function signin(){
  let usname=document.getElementById("UnS").value;
  let pass=document.getElementById("PwS").value;
  let mawjoud=false

    index =0;
    for(let i=0;i<NbUser;i++){
        if(users[i][0]==usname){
            index=i;
            mawjoud=true;
        }
    }
    if(pass.length<3){
      document.getElementById("ktiba1").textContent="password min length is 3"
    }else{
    if(mawjoud){
      document.getElementById("ktiba1").textContent="username already exist"
    }else{
      var xhttp = new XMLHttpRequest();
      xhttp.open("PUT", "src/users.xml", true);
      xhttp.send();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      
      xmlDoc = xhttp.responseXML;
      var usersT=xmlDoc.getElementsByTagName("users")[0];
      let us =xmlDoc.createElement("user")
      let name1 =xmlDoc.createElement("name")
      name1.textContent=usname
      let pass1 =xmlDoc.createElement("pass")
      pass1.textContent=pass
      let score1 =xmlDoc.createElement("score")
      score1.textContent=0
      us.appendChild(name1)
      us.appendChild(pass1)
      us.appendChild(score1)
      usersT.appendChild(us)
      document.getElementById("ktiba1").textContent="user added"
    }
};

//xhttp.send();

    }
  }


}

function logout(){
  document.getElementById("UnL").value="";
  document.getElementById("PwL").value="";
  index=0;
  document.getElementById("d5oul").style.display="block"
          document.getElementById("det").style.display="none"
          document.getElementById("name").textContent=""
          document.getElementById("score").textContent=""
  


}

let foucus=true

function showup(){
  let champs=document.getElementById("user")
  if(champs.style.display == "none") {
    champs.style.display = "block"
    foucus=false
  }else{
    champs.style.display = "none"
    foucus=true
  }
}

function loginB(){
  let loginDEV=document.getElementById("logInDiv")
  let signinDEV=document.getElementById("signInDiv")
  if(loginDEV.style.display == "none") {
    loginDEV.style.display = "block"
    signinDEV.style.display = "none"
  }else{
    loginDEV.style.display = "none"
  }
}

function signinB(){
  let loginDEV=document.getElementById("logInDiv")
  let signinDEV=document.getElementById("signInDiv")
  if(signinDEV.style.display == "none") {
    signinDEV.style.display = "block"
    loginDEV.style.display = "none"
  }else{
    signinDEV.style.display = "none"
  }
}

function main (){ 

  //foucus=true
  let music = document.getElementById("myAudio");
  music.loop=true;
  music.play();
  rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
  console.log("----------------------------------------");
  console.log(rightGuessString);
  console.log("----------------------------------------");
  let gearIcon = document.getElementById("gearicon");
  let  settingsMenu = document.getElementById("settingsmenu")
  let musicC=document.getElementById("M");

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

  gearIcon.addEventListener("click", () => {
    if(settingsMenu.style.display === "block"){
      settingsMenu.style.display = "none"
    }else{
      settingsMenu.style.display = "block";
    }
  });


  let checkBox=document.getElementById("auto")

  tableCreate(tryNb,5);






  document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target
    
    if (!target.classList.contains("keyboard-button")) {
        return
    }
    let key = target.textContent

    if (key === "Del") {
        key = "Backspace"
    } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
});







  document.addEventListener("keyup", (e) => {

    if (guessesRemaining === 0) {
        return
    }
    let pressedKey = String(e.key)
    
    if (pressedKey === "Backspace" && nextLetter !== 0 && foucus) {
        deleteLetter()
        return
    }
    
    let found = pressedKey.match(/[a-z]/gi)
    
    if (!found || found.length > 1 || !foucus ) {
        
    } else {
        insertLetter(pressedKey)
    }
    

    if ((!checkBox.checked && pressedKey === "Enter" || checkBox.checked && currentGuess.length === 5  )&&foucus) {
        checkGuess()
        //for (let i=0;i<1000000000;i++){}
        return
    }
    

});

}

function restart(){

    let row = document.getElementsByClassName("letter-row")[0]
    let box = row.children[0]
    
    for (let i=6;i>0;i--){
        let row = document.getElementsByClassName("letter-row")[6-i]
        for (let j=0;j<5;j++){
        box = row.children[j]
        box.textContent = ""
        box.style.backgroundColor = 'white'
        box.classList.remove("filled-box")
        currentGuess.pop()
        
    }
}

    for (let elem of document.getElementsByClassName("keyboard-button")) {
        
            elem.style.backgroundColor = "white"
          
        }





guessesRemaining = tryNb;
currentGuess = [];
nextLetter = 0;
rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
document.getElementById("status").textContent="goodluck"
}



function deleteLetter () {
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let box = row.children[nextLetter - 1]
  box.textContent = ""
  box.classList.remove("filled-box")
  currentGuess.pop()
  nextLetter -= 1
}

     
function insertLetter (pressedKey) {
  if (nextLetter === 5) {
      return
  }
  
  pressedKey = pressedKey.toLowerCase()

  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let box = row.children[nextLetter]
  box.textContent = pressedKey
  box.classList.add("filled-box")
  currentGuess.push(pressedKey)
  nextLetter += 1
}


function checkGuess () {
  console.log("d5al")
  console.log("\n")
  let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
  let guessString = ''
  let rightGuess = Array.from(rightGuessString)

  for (const val of currentGuess) {
      guessString += val
  }

  if (guessString.length != 5) {
    //  alert("Not enough letters!")
      return
  }
/*
  if (!WORDS.includes(guessString)) {
      alert("Word not in list!")
      return
  }
*/
  let x=0
  for (let i = 0; i < 5; i++) {
      let letterColor = ''
      let box = row.children[i]
      let letter = currentGuess[i]
      
      let letterPosition = rightGuess.indexOf(currentGuess[i])
      // is letter in the correct guess
      if (letterPosition === -1) {
          letterColor = 'red'
          document.getElementById("score").textContent = String(Number(document.getElementById("score").textContent)-1)
      } else {
          // now, letter is definitely in word
          // if letter index and right guess index are the same
          // letter is in the right position 
          if (currentGuess[i] === rightGuess[i]) {
              // shade green 
              letterColor = 'green'
              document.getElementById("score").textContent = String(Number(document.getElementById("score").textContent) + 2)
          } else {
              // shade box yellow
              letterColor = 'yellow'
              document.getElementById("score").textContent = String(Number(document.getElementById("score").textContent) + 1)
          }

         // rightGuess[letterPosition] = "#"
      }

      
    
       // coloring=true
        delay= i*250
        setTimeout(()=> {
        
          box.style.backgroundColor = letterColor
          shadeKeyBoard(letter, letterColor)
          x=x+1;
          
      }, delay)
         // for (let i=0;i<1000000000;i++){}


        
      
  }
  console.log(x)

  if (guessString === rightGuessString) {
      document.getElementById("status").textContent="rbe7et !!!!"
      guessesRemaining = 0
      return
  } else {
      guessesRemaining -= 1;
      currentGuess = [];
      nextLetter = 0;
      document.getElementById("status").textContent=`mazalek 3endek : "${guessesRemaining}" mo7awlat`
      if (guessesRemaining === 0) {
        document.getElementById("status").textContent="ya 5aser HHHHHHH"

        document.getElementById("status").textContent+=` el kelma s7i7a: "${rightGuessString}"`
      }
  }


  
}



function shadeKeyBoard(letter, color) {
  for (const elem of document.getElementsByClassName("keyboard-button")) {
      if (elem.textContent === letter) {
          let oldColor = elem.style.backgroundColor
          if (oldColor === 'green') {
              return
          } 


          elem.style.backgroundColor = color
          break
      }
  }
}






function tableCreate(r,c) {
  var body = document.getElementById('gameBody');
  var tbl = document.createElement('table');
  //tbl.style.width = '100%';
  //tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < r; i++) {
    var tr = document.createElement('tr');
    tr.classList.add('letter-row');
    for (var j = 0; j < c; j++) {
      
        var td = document.createElement('th');
        //var inp= document.createElement('input');
       // inp.setAttribute('type', 'text');
        //inp.classList.add('letter-box');
        //inp.setAttribute('maxlength',"1");
        //inp.setAttribute('id',String(i)+String(j));
        td.classList.add("letter-box");
       // console.log(inp.id);
        //console.log("\n");

       // td.appendChild(inp);
        tr.appendChild(td);
      
    }
    tbl.appendChild(tr);
  }
 // tbl.appendChild(tbdy);
  body.appendChild(tbl);
}
//tableCreate();
 