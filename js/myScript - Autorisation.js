/*
var oktaSignIn = new OktaSignIn({
    baseUrl: "https://militarized-issues.000webhostapp.com/",
    clientId: "0oaai30f5p3mcS8rY4x6",
    authParams: {
      issuer: "default",
      responseType: ['token', 'id_token'],
      display: 'page'
    }
  });


  if (oktaSignIn.token.hasTokensInUrl()) {
    oktaSignIn.token.parseTokensFromUrl(
      // If we get here, the user just logged in.
      function success(res) {
        var accessToken = res[0];
        var idToken = res[1];

        oktaSignIn.tokenManager.add('accessToken', accessToken);
        oktaSignIn.tokenManager.add('idToken', idToken);

        window.location.hash='';
        document.getElementById("messageBox").innerHTML = "Hello, " + idToken.claims.email + "! You just logged in! :)";
      },
      function error(err) {
        console.error(err);
      }
    );
  } else {
    oktaSignIn.session.get(function (res) {
      // If we get here, the user is already signed in.
      if (res.status === 'ACTIVE') {
        document.getElementById("messageBox").innerHTML = "Hello, " + res.login + "! You are *still* logged in! :)";
        return;
      }
      oktaSignIn.renderEl(
        { el: '#okta-login-container' },
        function success(res) {},
        function error(err) {
          console.error(err);
        }
      );
    });
  }
*/



/*  
document.getElementsByTagName("body")[0].style.height = window.screen.availHeigh;
document.getElementsByTagName("body")[0].style.width = window.screen.availWidth;
console.log(document.getElementsByTagName("body")[0].style.height);
*/



//fonction pour lancer l'audio
function playSound(soundObj) { 
    var sound = document.getElementById(soundObj); 
    sound.play(); 
}

//fonction pour arreter l'audio
function pauseAudio() {
    var arrayAudio = document.getElementsByTagName("audio");
    for(var i=0; i < arrayAudio.length; i++){
        arrayAudio[i].pause();
    }
}

var colorRandom = document.getElementsByTagName("body")[0].getAttribute("data-value");

//change de couleur de body avec la valeur d'input sur la 1ere page
function backGroundColor(input){
    document.getElementsByTagName("body")[0].style.backgroundColor = input.value;
    document.getElementById("divFavcolor").style.backgroundColor = input.value;
    document.getElementsByTagName("body")[0].setAttribute("data-value", input.value);  
    colorRandom = input.value;
}  
 
//bouton Menu sur Parametres Page 
function goToFirstPage(){
    document.getElementById("firstPage").style.display = "block";
    document.getElementById("colorPage").style.display = "none";
    document.getElementById("parametresPage").style.display = "none";
    document.getElementById("workPage").style.display = "none";
    //document.getElementById("userAutorisation").style.display = "none";
}
//bouton Plus sur la premiere page
function goToColorPage(){
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("colorPage").style.display = "block";
    document.getElementById("parametresPage").style.display = "none";
    document.getElementById("workPage").style.display = "none";
    //document.getElementById("userAutorisation").style.display = "none";
}

//bouton fleche sur la color page
function goToParametresPage(){
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("colorPage").style.display = "none";
    document.getElementById("parametresPage").style.display = "block";
    document.getElementById("workPage").style.display = "none";
    //document.getElementById("userAutorisation").style.display = "none";
}
/*
function userAutorisationPage(){
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("colorPage").style.display = "none";
    document.getElementById("parametresPage").style.display = "none";
    document.getElementById("workPage").style.display = "none";
    document.getElementById("userAutorisation").style.display = "block";
}
*/
// ajout data-value dans getElementById("nbrColor")
document.getElementById("nbrColor").setAttribute("data-value",document.getElementById("nbrColor").value);
//  Cette fonction ajoute autant de <tr> dans la table avec id="tabParamColor" qu'on a choisi dans le <SELECT>
function nbrColor(){
    // on supprime tous les Rows sauf deux premières
    var nbrRows = document.getElementById("tabParamColor").rows.length;
    for(var i=2; i < nbrRows; i++){
        document.getElementById("tabParamColor").deleteRow(2);
    }              

    var nbrColor = document.getElementById("nbrColor").value;
    document.getElementById("nbrColor").setAttribute("data-value",nbrColor);

    var arrayColors = ["#FFFF00","#0000FF","#00FF00","#00FFDD","#FF00DD"];

    var row, cell1, cell2, span, input;
    for(var i=0; i < nbrColor-1; i++){
        row = document.getElementById("tabParamColor").insertRow(2+i);
       // cell1 = row.insertCell(0);
       // cell1.innerHTML = i+2 + ". Choose a color";
        cell2 = row.insertCell(0);
        cell2.style = "font-size: 110%;";

        span = document.createElement("span");
        span.style = "vertical-align:super;";
        span.innerHTML = i+2 + ". ";
        cell2.appendChild(span);

        input = document.createElement("input");
        input.type = "color";
        input.id = i+2 + "color";
        input.className = "primary_color";
        input.value = arrayColors[i];
        input.setAttribute("data-value",arrayColors[i]);
        input.setAttribute("onchange","selectedColors(this)");

        cell2.appendChild(input);
    }
}

//fonction qui memorise la couleur selectionnée dans "data-value"
function selectedColors(id){
    id.setAttribute("data-value",id.value);
}

//je lance la fonction count() qui fait les calculs de depart
count();

//on ajoute le nombre -1 dans input
function moinsZero(id){
    var nbr = parseInt(id.nextSibling.nextSibling.value);
    id.nextSibling.nextSibling.value = nbr - 1;
    count();
}

//on ajoute le nombre -1 dans input
function moins(id){
    var nbr = parseInt(id.nextSibling.nextSibling.value);
    if(nbr > 1)
        id.nextSibling.nextSibling.value = nbr - 1;
    count();
}

//on ajoute le nombre +1 dans input
function plus(id){
    id.previousSibling.previousSibling.value = parseInt(id.previousSibling.previousSibling.value) + 1;
    count();
}

var min;
var sec;
var resultatTempsMin;
var resultatTempsSec;
var arrayColorsRandom = [];
 
// la fonction qui refait les calcul a chaque change;ent dans input
function count(){   
    // je recupere les valeurs de chaque input     
    var inputPrepa = parseInt(document.getElementById("inputPrepa").value);
    document.getElementById("inputPrepa").setAttribute("data-value",inputPrepa);
    var inputWork = parseInt(document.getElementById("inputWork").value);
    document.getElementById("inputWork").setAttribute("data-value",inputWork);
    var inputFreq = document.getElementById("inputFreq").value;
    document.getElementById("inputFreq").setAttribute("data-value",inputFreq);
    var inputRest = parseInt(document.getElementById("inputRest").value);
    document.getElementById("inputRest").setAttribute("data-value",inputRest);
    var inputCycles = parseInt(document.getElementById("inputCycles").value);
    document.getElementById("inputCycles").setAttribute("data-value",inputCycles);
    var inputSets = parseInt(document.getElementById("inputSets").value);
    document.getElementById("inputSets").setAttribute("data-value",inputSets);
    var inputRestSets = parseInt(document.getElementById("inputRestSets").value);
    document.getElementById("inputRestSets").setAttribute("data-value",inputRestSets);
    var inputCoolDown = parseInt(document.getElementById("inputCoolDown").value);
    document.getElementById("inputCoolDown").setAttribute("data-value",inputCoolDown);

    //je calcul le temps en min, mais j'obtiens le decimal
    var resultatTemps = (inputPrepa + (((inputWork + inputRest) * inputCycles) - inputRest + inputRestSets) * inputSets - inputRestSets  + inputCoolDown)/60;
    
    // je retir l'entier de ;on deci;al et j'obtiens les min
    resultatTempsMin = Math.trunc(resultatTemps);
    
    // Pour obtenir le reste : je subtracte l'entier de décimal. Puis je le multipie par 10, car j'obtiens toujours la valeur comme 0,XX
    // Pour obtenir les sec je multiplie par 6
    resultatTempsSec = Math.round(6 * (resultatTemps - resultatTempsMin)*10);

    // ???
    var resultatIntervals = inputSets * 2 * inputCycles;
    
    // je mets mes resultats dans les spam
    document.getElementById("tempsMin").innerHTML = resultatTempsMin;
    document.getElementById("tempsSec").innerHTML = resultatTempsSec;
    document.getElementById("interval").innerHTML = resultatIntervals;
    document.getElementById("sets").innerHTML = inputSets;     

    document.getElementById("tempsTotalMin").innerHTML = resultatTempsMin;
    min = resultatTempsMin;
    document.getElementById("tempsTotalSec").innerHTML = resultatTempsSec;
    sec = resultatTempsSec;
}

        
var taille = 0;

var countDesc = 0;
var countColor = 0;
var timerCount;
var timer_is_on = 0;

var index = 0;
var indexColor = 0;
var indexSet = 1;

function timedCount() {
    if(countDesc != 0){

        if(document.getElementById("actEnCours").innerHTML == "Work"){
            if(countColor%freq == 0 && countDesc != countColor*freq){
                playSound("audioWork"); 
                document.getElementsByTagName("body")[0].style.backgroundColor = "#ffffff";
                setTimeout(function(){
                    colorRandom = arrayColorsRandom[Math.floor(Math.random() * arrayColorsRandom.length)];
                    document.getElementsByTagName("body")[0].style.backgroundColor = colorRandom;
                }, 100);
            if(indexColor < nbrColors)
                indexColor++;
            }
        }else{
            document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementsByTagName("body")[0].getAttribute("data-value");
        }
        countColor --;


        if(document.getElementById("actEnCours").innerHTML != "Work" && countDesc < 4)
            playSound("audioThreeTwoOne");             

        document.getElementById("countSecDesc").innerHTML = countDesc;
        countDesc --;
        timedTotalCount();
        timerCount = setTimeout(timedCount, 1000);
    }else{
        
    /*  
        if(indexSet <= sets){
           if(index%2 == 0){
                playSound("audioStart");
           }else{
                playSound("audioStop");
            }
        }
    */

        if(indexSet <= sets && index%2 != 0){
            playSound("audioStop");
        }

        //document.getElementById("countSecDesc").innerHTML = "";
        document.getElementById("tempsTotalSec").innerHTML = "0";
        timer_is_on = 0;
        index ++;
        start();
        //stopCount();
    }
}
/* non utilisé
function changeTextColor(color){
    if(parseInt(color.slice(1),16) > parseInt("808080",16) ){
        document.getElementById("countSecDesc").style.color = "black";
    }else{
        document.getElementById("countSecDesc").style.color = "white";
    }
}
*/
function timedTotalCount() {
    if(sec != 0){
        document.getElementById("tempsTotalMin").innerHTML = min;
        document.getElementById("tempsTotalSec").innerHTML = sec;
        sec --;
    }else{
        document.getElementById("tempsTotalSec").innerHTML = sec;
        min --;
        sec = 59;
    }
}
var cycles, sets, freq, nbrColors;
var nCycle = 0;
function start(){

    cycles = parseInt(document.getElementById("inputCycles").getAttribute('data-value'));
    sets = parseInt(document.getElementById("inputSets").getAttribute('data-value'));
    freq = parseFloat(document.getElementById("inputFreq").getAttribute('data-value'));
    nbrColors = document.getElementById("nbrColor").getAttribute("data-value");      

    //var arrayColorsRandom = [];
    for(var i=1; i <= nbrColors; i++){
        arrayColorsRandom.push(document.getElementById(i+"color").getAttribute("data-value"));
    }

    if(index == 0){
        document.getElementById("actEnCours").innerHTML = "Prepare";       
        startCount(document.getElementById('inputPrepa').getAttribute('data-value')); 
    // si index est un nombre impair et moins ou égal à nbr cycles
    }else if (index%2 != 0 && nCycle <= cycles && indexSet <= sets){
        nCycle ++;
        document.getElementById("actEnCours").innerHTML = "Work";
        document.getElementById("cycleSet").innerHTML = " " + nCycle + " cycle / " + indexSet + " set ";         
        playSound("audioWork"); 
        document.getElementsByTagName("body")[0].style.backgroundColor = arrayColorsRandom[Math.floor(Math.random() * arrayColorsRandom.length)];
        startCount(document.getElementById('inputWork').getAttribute('data-value')); 
    // si index est un nombre pair et moins de nbr cycles
    }else if(index%2 == 0 &&  indexSet <= sets){
        if(nCycle < cycles){
            document.getElementById("actEnCours").innerHTML = "Rest";
            document.getElementById("cycleSet").innerHTML = " " + nCycle + " cycle / " + indexSet + " set ";
            startCount(document.getElementById('inputRest').getAttribute('data-value'));
        }else if(indexSet < sets){
            document.getElementById("actEnCours").innerHTML = "Rest between Sets";
            startCount(document.getElementById('inputRestSets').getAttribute('data-value'));
            indexSet ++;
            index = 0;
            nCycle = 0;
        // si indexSet égale à nbr sets
        }else if(indexSet == sets){
            document.getElementById("actEnCours").innerHTML = "Cool down";
            indexSet ++;
            startCount(document.getElementById('inputCoolDown').getAttribute('data-value'));
        }
    }else{
        stopCount();
        document.getElementById("countSecDesc").style.fontSize = "500%";
        document.getElementById("countSecDesc").innerHTML = "BRAVO !";
    }
    
}

function startCount(start) {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("colorPage").style.display = "none";
    document.getElementById("parametresPage").style.display = "none";
    document.getElementById("workPage").style.display = "block";
    //document.getElementById("userAutorisation").style.display = "none";

    countDesc = start;
    countColor = start*freq;
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(timerCount);
    timer_is_on = 0;
    index = 0;
    nCycle = 0;
    indexSet = 1;
    pauseAudio();
}

function stopPlay(input) {
    if(input.getAttribute("src") == "img/stop.png"){
        stopCount();
        input.setAttribute("src","img/play.png");
    }else{
        document.getElementById("actEnCours").innerHTML = "Prepare";
        document.getElementById("cycleSet").innerHTML = " ";
        document.getElementById("tempsTotalMin").innerHTML = document.getElementById("tempsMin").innerHTML;
        document.getElementById("tempsTotalSec").innerHTML = document.getElementById("tempsSec").innerHTML;
        min = resultatTempsMin;
        sec = resultatTempsSec;
        start();
        input.setAttribute("src","img/stop.png");
    }
    document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementsByTagName("body")[0].getAttribute("data-value");
}
function annuler(){
    document.getElementById("actEnCours").innerHTML = "Prepare";
    document.getElementById("cycleSet").innerHTML = " ";
    document.getElementById("tempsTotalMin").innerHTML = document.getElementById("tempsMin").innerHTML;
    document.getElementById("tempsTotalSec").innerHTML = document.getElementById("tempsSec").innerHTML;
    min = resultatTempsMin;
    sec = resultatTempsSec;
    goToParametresPage();
    stopCount();
    document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementsByTagName("body")[0].getAttribute("data-value");
}