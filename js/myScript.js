var divs = document.getElementsByTagName("div");
var inputs = document.getElementsByTagName("input");
var spans = document.getElementsByTagName("span");
var uls = document.getElementsByTagName("ul");
var selects = document.getElementsByTagName("select");
var tables = document.getElementsByTagName("table");
var arrayTags = [divs,inputs,spans,uls,selects,tables];

var portraitOrientation = window.matchMedia("(orientation:portrait)"); 

var classPrimaryColor = document.getElementsByClassName("primary_color");

if(!portraitOrientation.matches) {
    // si on est en paysage en demarrage, alors on supprime des Id en mode portrait et les ajout en mode paysage. par défaut les Id son en mode Portrait
    removeSetId();
    document.getElementById("paysage").style.display = "block";
    document.getElementById("portrait").style.display = "none";
    //dataValueIntoValue("paysage");
    //pour la taille des input des couleurs en mode paysage
    for(var i = 0; i < classPrimaryColor.length; i++){
        classPrimaryColor[i].style.width = "50px";
        classPrimaryColor[i].style.height = "50px";
    }    
}else {
    document.getElementById("portrait").style.display = "block";
    document.getElementById("paysage").style.display = "none";    
    //dataValueIntoValue("portrait");
    for(var i = 0; i < classPrimaryColor.length; i++){
     //pour la taille des input des couleurs en mode portrait
        classPrimaryColor[i].style.width = "100px";
        classPrimaryColor[i].style.height = "100px";
    }
}   

window.onorientationchange = function(){    
    if(portraitOrientation.matches) {
        document.getElementById("portrait").style.display = "none";
        document.getElementById("paysage").style.display = "block";
        isPage("portrait","paysage");
        //dataValueIntoValue("paysage");
        //pour la taille des input des couleurs en mode paysage
        for(var i = 0; i < classPrimaryColor.length; i++){
            classPrimaryColor[i].style.width = "50px";
            classPrimaryColor[i].style.height = "50px";
        }
    }else{
        document.getElementById("paysage").style.display = "none";
        document.getElementById("portrait").style.display = "block";
        isPage("paysage","portrait");
        //dataValueIntoValue("portrait");
        //pour la taille des input des couleurs en mode portrait
        for(var i = 0; i < classPrimaryColor.length; i++){
            classPrimaryColor[i].style.width = "100px";
            classPrimaryColor[i].style.height = "100px";
        }
    } 
    //document.getElementById(idPage).style.display = "block";
    removeSetId();
}

// si id est rempli, on sauvegarde les valeurs d'Id dans id-value, puis les supprime depuis id, sinon on ajoute les id depuis id-value
function removeSetId(){
    for(var i = 0; i < arrayTags.length; i++){
        for(var j = 0; j < arrayTags[i].length; j++){
            if(arrayTags[i][j].id != "portrait" && arrayTags[i][j].id != "paysage" && arrayTags[i][j].id != "cycleSet" && arrayTags[i][j].id != "cycle" && arrayTags[i][j].id != "set"){
                if(arrayTags[i][j].id != "" && arrayTags[i][j].getAttribute("id") != null){
                    if(arrayTags[i][j].getAttribute("id-value") == null || arrayTags[i][j].getAttribute("id-value") == ""){
                        arrayTags[i][j].setAttribute("id-value", arrayTags[i][j].id);
                        arrayTags[i][j].id = "";
                    }
                }else{
                    if(arrayTags[i][j].getAttribute("id-value") != null || arrayTags[i][j].getAttribute("id-value") != ""){
                        arrayTags[i][j].id = arrayTags[i][j].getAttribute("id-value");
                        //arrayTags[i][j].setAttribute("id-value","");
                    }
                }
            }
        }
    }
}

// on ajoute dans id des pages en orientation en cours les mêmes style.display que on a eu en orientation précédente 
function isPage(orient1, orient2){
    var divsPageOrient1 = document.getElementById(orient1).children;
    var divsPageOrient2 = document.getElementById(orient2).children;
    for(var i = 0; i < divsPageOrient1.length; i++){
        divsPageOrient2[i].style.display = divsPageOrient1[i].style.display;
    }
}

function dataValueIntoValue(orient){
    var inputDataValue = document.getElementsByTagName("input");
    for(var i = 0; i < inputDataValue.length/2; i++){
        for(var j = inputDataValue.length/2; j < inputDataValue.length; j++){
            if(orient == "paysage"){
                if(inputDataValue[i].id == inputDataValue[j].getAttribute("id-value")){
                    inputDataValue[j].setAttribute("data-value",inputDataValue[i].value);
                }
            }else{
                if(inputDataValue[j].id == inputDataValue[i].getAttribute("id-value")){
                    inputDataValue[i].setAttribute("data-value",inputDataValue[j].value);
                }
            }
        }
    }
}

//fonction pour lancer l'audio
function playSound(soundObj) { 
    var sound = document.getElementById(soundObj); 
    sound.play(); 
}

//fonction pour arreter l'audio
function pauseAudio() {
    var arrayAudio = document.getElementsByTagName("audio");
    for(var i=0; i < arrayAudio.length; i++){
        if(!arrayAudio[i].paused){            
            arrayAudio[i].pause();
        }
        //arrayAudio[i].src = '';
        //arrayAudio[i].load();
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
    
    stopCount();
    document.getElementsByClassName("inputStopPlay")[0].setAttribute("src","img/stop.png");
    document.getElementsByClassName("inputStopPlay")[1].setAttribute("src","img/stop.png");
    document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementsByTagName("body")[0].getAttribute("data-value");
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

// ajout data-value dans getElementById("nbrColor")
document.getElementById("nbrColor").setAttribute("data-value",document.getElementById("nbrColor").value);
//  Cette fonction ajoute autant de <tr> dans la table avec id="tabParamColor" qu'on a choisi dans le <SELECT>
var arrayColors = ["#FFFF00","#0000FF","#00FF00","#00FFDD","#FF00DD"];

function nbrColor(){

    // on supprime tous les Rows sauf deux premières
    if(portraitOrientation.matches){
        var nbrRows = document.getElementsByClassName("tabParamColor")[0].rows.length;            
    }else{
        var nbrRows = document.getElementsByClassName("tabParamColor")[1].rows.length;
    }

    for(var i=2; i < nbrRows; i++){
        arrayColors[i-2] = document.getElementsByClassName("tabParamColor")[0].rows[2].firstElementChild.firstElementChild.nextElementSibling.value;
        document.getElementsByClassName("tabParamColor")[0].deleteRow(2);
        document.getElementsByClassName("tabParamColor")[1].deleteRow(2);
    } 
    var nbrColor = document.getElementById("nbrColor").value;
    document.getElementById("nbrColor").setAttribute("data-value",nbrColor);


    for(var orient = 0; orient < 2; orient++){
        var row, cell, span, input;
        for(var i=0; i < nbrColor-1; i++){
            row = document.getElementsByClassName("tabParamColor")[orient].insertRow(2+i);

            cell = row.insertCell(0);
            cell.style = "font-size: 110%;";

            span = document.createElement("span");
            span.style = "vertical-align:super;";
            span.innerHTML = i+2 + ". ";
            cell.appendChild(span);

            input = document.createElement("input");
            input.type = "color";

            if(portraitOrientation.matches){    
                if(orient == 0){
                    input.id = i+2 + "color";
                    input.setAttribute("id-value", "");
                }else{
                    input.id = "";
                    input.setAttribute("id-value", i+2 + "color");
                }        
            }else{
                if(orient == 1){
                    input.id = i+2 + "color";
                    input.setAttribute("id-value", "");
                }else{
                    input.id = "";
                    input.setAttribute("id-value", i+2 + "color");
                }        
            }

            input.className = i+2 + "color primary_color";
            if(!portraitOrientation.matches) {
                input.style.width = "50px";
                input.style.height = "50px";
            }

            input.value = arrayColors[i];
            input.setAttribute("data-value", arrayColors[i]);
            input.setAttribute("onchange","selectedColors(this)");

            cell.appendChild(input);
        }
    }
}

//fonction qui memorise la couleur selectionnée dans "data-value"
function selectedColors(input){
    input.setAttribute("data-value",input.value);

    if(portraitOrientation.matches){
        document.getElementsByClassName(input.id)[1].setAttribute("data-value",input.value);
        document.getElementsByClassName(input.id)[1].value = input.value;
    }else{
        document.getElementsByClassName(input.id)[0].setAttribute("data-value",input.value);
        document.getElementsByClassName(input.id)[0].value = input.value;
    }
   
}

//je lance la fonction count() qui fait les calculs de depart
count();

//on ajoute le nombre -1 dans input
function moinsZero(input){
    var nbr = parseInt(input.nextSibling.nextSibling.value);
    input.nextSibling.nextSibling.value = nbr - 1;

    document.getElementsByClassName(input.className)[0].nextSibling.nextSibling.setAttribute("data-value",input.nextSibling.nextSibling.value);
    document.getElementsByClassName(input.className)[0].nextSibling.nextSibling.value = input.nextSibling.nextSibling.value;

    document.getElementsByClassName(input.className)[1].nextSibling.nextSibling.setAttribute("data-value",input.nextSibling.nextSibling.value);
    document.getElementsByClassName(input.className)[1].nextSibling.nextSibling.value = input.nextSibling.nextSibling.value;

    count();
}

//on ajoute le nombre -1 dans input
function moins(input){
    var nbr = parseInt(input.nextSibling.nextSibling.value);
    if(nbr > 1){
        input.nextSibling.nextSibling.value = nbr - 1;

        document.getElementsByClassName(input.className)[0].nextSibling.nextSibling.setAttribute("data-value",input.nextSibling.nextSibling.value);
        document.getElementsByClassName(input.className)[0].nextSibling.nextSibling.value = input.nextSibling.nextSibling.value;
    
        document.getElementsByClassName(input.className)[1].nextSibling.nextSibling.setAttribute("data-value",input.nextSibling.nextSibling.value);
        document.getElementsByClassName(input.className)[1].nextSibling.nextSibling.value = input.nextSibling.nextSibling.value;

    }

    count();
}

//on ajoute le nombre +1 dans input
function plus(input){
    input.previousSibling.previousSibling.value = parseInt(input.previousSibling.previousSibling.value) + 1;
    
    document.getElementsByClassName(input.className)[0].previousSibling.previousSibling.setAttribute("data-value",input.previousSibling.previousSibling.value);
    document.getElementsByClassName(input.className)[0].previousSibling.previousSibling.value = input.previousSibling.previousSibling.value;

    document.getElementsByClassName(input.className)[1].previousSibling.previousSibling.setAttribute("data-value",input.previousSibling.previousSibling.value);
    document.getElementsByClassName(input.className)[1].previousSibling.previousSibling.value = input.previousSibling.previousSibling.value;

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
    document.getElementsByClassName("inputPrepa")[0].setAttribute("data-value",inputPrepa);
    document.getElementsByClassName("inputPrepa")[1].setAttribute("data-value",inputPrepa);
    var inputWork = parseInt(document.getElementById("inputWork").value);
    document.getElementsByClassName("inputWork")[0].setAttribute("data-value",inputWork);
    document.getElementsByClassName("inputWork")[1].setAttribute("data-value",inputWork);
    var inputFreqMin = document.getElementById("inputFreqMin").value;
    document.getElementsByClassName("inputFreqMin")[0].setAttribute("data-value",inputFreqMin);
    document.getElementsByClassName("inputFreqMin")[1].setAttribute("data-value",inputFreqMin);
    var inputFreqMax = document.getElementById("inputFreqMax").value;
    document.getElementsByClassName("inputFreqMax")[0].setAttribute("data-value",inputFreqMax);
    document.getElementsByClassName("inputFreqMax")[1].setAttribute("data-value",inputFreqMax);
    var inputRest = parseInt(document.getElementById("inputRest").value);
    document.getElementsByClassName("inputRest")[0].setAttribute("data-value",inputRest);
    document.getElementsByClassName("inputRest")[1].setAttribute("data-value",inputRest);
    var inputCycles = parseInt(document.getElementById("inputCycles").value);
    document.getElementsByClassName("inputCycles")[0].setAttribute("data-value",inputCycles);
    document.getElementsByClassName("inputCycles")[1].setAttribute("data-value",inputCycles);
    var inputSets = parseInt(document.getElementById("inputSets").value);
    document.getElementsByClassName("inputSets")[0].setAttribute("data-value",inputSets);
    document.getElementsByClassName("inputSets")[1].setAttribute("data-value",inputSets);
    var inputRestSets = parseInt(document.getElementById("inputRestSets").value);
    document.getElementsByClassName("inputRestSets")[0].setAttribute("data-value",inputRestSets);
    document.getElementsByClassName("inputRestSets")[1].setAttribute("data-value",inputRestSets);
    var inputCoolDown = parseInt(document.getElementById("inputCoolDown").value);
    document.getElementsByClassName("inputCoolDown")[0].setAttribute("data-value",inputCoolDown);
    document.getElementsByClassName("inputCoolDown")[1].setAttribute("data-value",inputCoolDown);

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
    document.getElementsByClassName("tempsSec")[0].innerHTML = resultatTempsSec;
    document.getElementsByClassName("tempsSec")[1].innerHTML = resultatTempsSec;

    document.getElementsByClassName("tempsMin")[0].innerHTML = resultatTempsMin;
    document.getElementsByClassName("tempsMin")[1].innerHTML = resultatTempsMin;

    document.getElementsByClassName("interval")[0].innerHTML = resultatIntervals;
    document.getElementsByClassName("interval")[1].innerHTML = resultatIntervals;

    document.getElementsByClassName("sets")[0].innerHTML = inputSets;     
    document.getElementsByClassName("sets")[1].innerHTML = inputSets;     

    document.getElementsByClassName("tempsTotalMin")[0].innerHTML = resultatTempsMin;
    document.getElementsByClassName("tempsTotalMin")[1].innerHTML = resultatTempsMin;
    min = resultatTempsMin;
    document.getElementsByClassName("tempsTotalSec")[0].innerHTML = resultatTempsSec;
    document.getElementsByClassName("tempsTotalSec")[1].innerHTML = resultatTempsSec;
    sec = resultatTempsSec;
}

        
var taille = 0;

var countDescending = 0;
var multipleOfFreq = 0;
var timerCount;
var timer_is_on = 0;

var index = 0;
var indexColor = 0;
var indexSet = 1;
var freqRandom;
var reStart;
var countInteger;
function timedCount() {
    countInteger = isInt(countDescending) ? countDescending : countInteger;
    if(countDescending != 0){
        if(document.getElementsByClassName("actEnCours")[0].innerHTML == "Work" || document.getElementsByClassName("actEnCours")[1].innerHTML == "Work"){
            if((reStart - freqRandom) == countDescending || reStart == countDescending){
                reStart = countDescending;
                freqRandom = randomFrequency(parseFloat(document.getElementById("inputFreqMin").getAttribute('data-value')), parseFloat(document.getElementById("inputFreqMax").getAttribute('data-value')));
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
        //multipleOfFreq --;


        if(parseInt(document.getElementsByClassName("countSecDesc")[0].innerHTML) != countInteger &&
            (document.getElementsByClassName("actEnCours")[0].innerHTML != "Work" && countDescending < 4 
            || document.getElementsByClassName("actEnCours")[1].innerHTML != "Work" && countDescending < 4)
        ){
            playSound("audioThreeTwoOne");             
        }

        if(parseInt(document.getElementsByClassName("countSecDesc")[0].innerHTML) != countInteger)
            timedTotalCount();

        document.getElementsByClassName("countSecDesc")[0].innerHTML = countInteger;
        document.getElementsByClassName("countSecDesc")[0].style.fontSize = "1500%";
        document.getElementsByClassName("countSecDesc")[1].innerHTML = countInteger;
        document.getElementsByClassName("countSecDesc")[1].style.padding = "";
        document.getElementsByClassName("countSecDesc")[1].style.fontSize = "1300%";
        countDescending = countDescending-0.5;

        timerCount = setTimeout(timedCount, 500);
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

        document.getElementsByClassName("tempsTotalSec")[0].innerHTML = "0";
        document.getElementsByClassName("tempsTotalSec")[1].innerHTML = "0";
        timer_is_on = 0;
        index ++;
        start();
        //stopCount();
    }
}

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function timedTotalCount() {
    if(sec != 0){
        document.getElementsByClassName("tempsTotalMin")[0].innerHTML = min;
        document.getElementsByClassName("tempsTotalMin")[1].innerHTML = min;

        document.getElementsByClassName("tempsTotalSec")[0].innerHTML = sec;
        document.getElementsByClassName("tempsTotalSec")[1].innerHTML = sec;
        sec --;
    }else{
        document.getElementsByClassName("tempsTotalSec")[0].innerHTML = sec;
        document.getElementsByClassName("tempsTotalSec")[1].innerHTML = sec;
        min --;
        sec = 59;
    }
}

function randomFrequency(min, max){
   // var min = min == null ? 1 : min; 
   // var max = max == null ? 4 : max;

    var valueRandom = Math.random() * (max - min) + min;
    //arrondissement jusqu'à 0.5
    valueRandom = Math.round(valueRandom / 0.5) * 0.5;

    return valueRandom;
}

var cycles, sets, freq, nbrColors;
var nCycle = 0;
function start(){

    cycles = parseInt(document.getElementById("inputCycles").getAttribute('data-value'));
    sets = parseInt(document.getElementById("inputSets").getAttribute('data-value'));
    freqRandom = randomFrequency(parseFloat(document.getElementById("inputFreqMin").getAttribute('data-value')), parseFloat(document.getElementById("inputFreqMax").getAttribute('data-value')));
    nbrColors = document.getElementById("nbrColor").getAttribute("data-value");      

    //var arrayColorsRandom = [];
    for(var i=1; i <= nbrColors; i++){
        arrayColorsRandom.push(document.getElementById(i+"color").getAttribute("data-value"));
    }

    if(index == 0){
        document.getElementsByClassName("actEnCours")[0].innerHTML = "Prepare";       
        document.getElementsByClassName("actEnCours")[1].innerHTML = "Prepare";       
        startCount(document.getElementById('inputPrepa').getAttribute('data-value')); 
        document.getElementById("cycle").style.padding = "0";
        document.getElementById("set").style.padding = "0";
    // si index est un nombre impair et moins ou égal à nbr cycles
    }else if (index%2 != 0 && nCycle <= cycles && indexSet <= sets){
        nCycle ++;
        document.getElementsByClassName("actEnCours")[0].innerHTML = "Work";
        document.getElementsByClassName("actEnCours")[1].innerHTML = "Work";
        document.getElementById("cycleSet").innerHTML = " " + nCycle + " cycle / " + indexSet + " set ";         
        document.getElementById("cycle").innerHTML = " " + nCycle + " cycle" ;         
        document.getElementById("cycle").style.padding = "3% 0";         
        document.getElementById("set").innerHTML = " " + indexSet + " set ";         
        document.getElementById("set").style.padding = "3% 0";        
        playSound("audioWork"); 
        document.getElementsByTagName("body")[0].style.backgroundColor = arrayColorsRandom[Math.floor(Math.random() * arrayColorsRandom.length)];
        startCount(document.getElementById('inputWork').getAttribute('data-value')); 
    // si index est un nombre pair et moins de nbr cycles
    }else if(index%2 == 0 && indexSet <= sets){
        if(nCycle < cycles){
            document.getElementsByClassName("actEnCours")[0].innerHTML = "Rest";
            document.getElementsByClassName("actEnCours")[1].innerHTML = "Rest";
            document.getElementById("cycleSet").innerHTML = " " + nCycle + " cycle / " + indexSet + " set ";
            document.getElementById("cycle").innerHTML = " " + nCycle + " cycle " ;
            document.getElementById("cycle").style.padding = "3% 0";
            document.getElementById("set").innerHTML = " " + indexSet + " set ";
            document.getElementById("set").style.padding = "3% 0";
            startCount(document.getElementById('inputRest').getAttribute('data-value'));
        }else if(indexSet < sets){
            document.getElementsByClassName("actEnCours")[0].innerHTML = "Rest between Sets";
            document.getElementsByClassName("actEnCours")[1].innerHTML = "Rest between Sets";
            startCount(document.getElementById('inputRestSets').getAttribute('data-value'));
            indexSet ++;
            index = 0;
            nCycle = 0;
        // si indexSet égale à nbr sets
        }else if(indexSet == sets){
            document.getElementsByClassName("actEnCours")[0].innerHTML = "Cool down";
            document.getElementsByClassName("actEnCours")[1].innerHTML = "Cool down";
            indexSet ++;
            startCount(document.getElementById('inputCoolDown').getAttribute('data-value'));
        }
    }else{
        console.log("index "+ index);
        console.log("indexSet "+ indexSet);
        console.log("sets "+ sets);
        stopCount();
        document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementsByTagName("body")[0].getAttribute("data-value");
        document.getElementsByClassName("countSecDesc")[0].style.fontSize = "500%";
        document.getElementsByClassName("countSecDesc")[1].style.fontSize = "500%";
        document.getElementsByClassName("countSecDesc")[1].style.padding = "25% 0";
        document.getElementsByClassName("countSecDesc")[0].innerHTML = "BRAVO !";
        document.getElementsByClassName("countSecDesc")[1].innerHTML = "BRAVO !";
    }
    
}

function startCount(start) {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("colorPage").style.display = "none";
    document.getElementById("parametresPage").style.display = "none";
    document.getElementById("workPage").style.display = "block";
    //document.getElementById("userAutorisation").style.display = "none";

    reStart = parseFloat(start);
    countInteger = reStart; //valeur entière de départ qui va descendre caque 1
    countDescending = reStart; //valeur de départ qui va décendre chaque 0.5
    multipleOfFreq = reStart*freq; //pour savoir le multiple (кратное) de freq
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
    countDescending = 0;
    pauseAudio();
}

function stopPlay() {
    if(document.getElementsByClassName("inputStopPlay")[0].getAttribute("src") == "img/stop.png" || document.getElementsByClassName("inputStopPlay")[1].getAttribute("src") == "img/stop.png"){
        stopCount();
        document.getElementsByClassName("inputStopPlay")[0].setAttribute("src","img/play.png");
        document.getElementsByClassName("inputStopPlay")[1].setAttribute("src","img/play.png");
    }else{
        document.getElementsByClassName("actEnCours")[0].innerHTML = "Prepare";
        document.getElementsByClassName("actEnCours")[1].innerHTML = "Prepare";
        document.getElementById("cycleSet").innerHTML = " ";
        document.getElementById("cycle").innerHTML = " ";
        document.getElementById("cycle").style.padding = "0";
        document.getElementById("set").innerHTML = " ";
        document.getElementById("set").style.padding = "0";
        document.getElementsByClassName("tempsTotalMin")[0].innerHTML = document.getElementsByClassName("tempsMin")[0].innerHTML;
        document.getElementsByClassName("tempsTotalMin")[1].innerHTML = document.getElementsByClassName("tempsMin")[1].innerHTML;

        document.getElementsByClassName("tempsTotalSec")[0].innerHTML = document.getElementsByClassName("tempsSec")[0].innerHTML;
        document.getElementsByClassName("tempsTotalSec")[1].innerHTML = document.getElementsByClassName("tempsSec")[1].innerHTML;
        min = resultatTempsMin;
        sec = resultatTempsSec;
        start();
        document.getElementsByClassName("inputStopPlay")[0].setAttribute("src","img/stop.png");
        document.getElementsByClassName("inputStopPlay")[1].setAttribute("src","img/stop.png");
    }
    document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementsByTagName("body")[0].getAttribute("data-value");
}
function annuler(){
    document.getElementsByClassName("actEnCours")[0].innerHTML = "Prepare";
    document.getElementsByClassName("actEnCours")[1].innerHTML = "Prepare";
    document.getElementById("cycleSet").innerHTML = " ";
    document.getElementById("cycle").innerHTML = " ";
    document.getElementById("cycle").style.padding = " padding: 0;";
    document.getElementById("set").innerHTML = " ";
    document.getElementById("set").style.padding = " padding: 0;";
    document.getElementsByClassName("tempsTotalMin")[0].innerHTML = document.getElementsByClassName("tempsMin")[0].innerHTML;
    document.getElementsByClassName("tempsTotalMin")[1].innerHTML = document.getElementsByClassName("tempsMin")[1].innerHTML;

    document.getElementsByClassName("tempsTotalSec")[0].innerHTML = document.getElementsByClassName("tempsSec")[0].innerHTML;
    document.getElementsByClassName("tempsTotalSec")[1].innerHTML = document.getElementsByClassName("tempsSec")[1].innerHTML;
    min = resultatTempsMin;
    sec = resultatTempsSec;
    goToParametresPage();
    stopCount();
    document.getElementsByClassName("inputStopPlay")[0].setAttribute("src","img/stop.png");
    document.getElementsByClassName("inputStopPlay")[1].setAttribute("src","img/stop.png");
    document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementsByTagName("body")[0].getAttribute("data-value");
}