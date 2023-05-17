var body = document.getElementsByTagName("body")[0];
var divs = document.getElementsByTagName("div");
var inputs = document.getElementsByTagName("input");
var spans = document.getElementsByTagName("span");
var uls = document.getElementsByTagName("ul");
var selects = document.getElementsByTagName("select");
var tables = document.getElementsByTagName("table");
var arrayTags = [divs,inputs,spans,uls,selects,tables];
var portraitOrientation = window.matchMedia("(orientation:portrait)"); 
var classPrimaryColor = document.getElementsByClassName("primary_color");

//valeurs par défaut
localStorage.setItem("bodyColor", localStorage.getItem("bodyColor") != null ? localStorage.getItem("bodyColor") : "#B4FB99");

localStorage.setItem("nbrColor", localStorage.getItem("nbrColor") != null ? localStorage.getItem("nbrColor") : "1");

localStorage.setItem("1color", localStorage.getItem("1color") != null ? localStorage.getItem("1color") : "#FF0000");
localStorage.setItem("2color", localStorage.getItem("2color") != null ? localStorage.getItem("2color") : "#FFFF00");
localStorage.setItem("3color", localStorage.getItem("3color") != null ? localStorage.getItem("3color") : "#0000FF");
localStorage.setItem("4color", localStorage.getItem("4color") != null ? localStorage.getItem("4color") : "#00FF00");
localStorage.setItem("5color", localStorage.getItem("5color") != null ? localStorage.getItem("5color") : "#00FFDD");
localStorage.setItem("6color", localStorage.getItem("6color") != null ? localStorage.getItem("6color") : "#FF00DD");

localStorage.setItem("inputPrepa", localStorage.getItem("inputPrepa") != null ? localStorage.getItem("inputPrepa") : "10");
localStorage.setItem("inputWork", localStorage.getItem("inputWork") != null ? localStorage.getItem("inputWork") : "15");
localStorage.setItem("inputFreqMin", localStorage.getItem("inputFreqMin") != null ? localStorage.getItem("inputFreqMin") : "2");
localStorage.setItem("inputFreqMax", localStorage.getItem("inputFreqMax") != null ? localStorage.getItem("inputFreqMax") : "5");
localStorage.setItem("inputRest", localStorage.getItem("inputRest") != null ? localStorage.getItem("inputRest") : "15");
localStorage.setItem("inputCycles", localStorage.getItem("inputCycles") != null ? localStorage.getItem("inputCycles") : "3");
localStorage.setItem("inputSets", localStorage.getItem("inputSets") != null ? localStorage.getItem("inputSets") : "2");
localStorage.setItem("inputRestSets", localStorage.getItem("inputRestSets") != null ? localStorage.getItem("inputRestSets") : "60");
localStorage.setItem("inputCoolDown", localStorage.getItem("inputCoolDown") != null ? localStorage.getItem("inputCoolDown") : "0");



body.style.backgroundColor = localStorage.getItem("bodyColor");
//pour 2 affichages (portrait et paysage)
for(var i = 0; i < 2; i++){
    document.getElementsByClassName("divFavcolor")[i].style.backgroundColor = localStorage.getItem("bodyColor");

    document.getElementsByClassName("nbrColor")[i].value = localStorage.getItem("nbrColor");

    document.getElementsByClassName("1color")[i].value = localStorage.getItem("1color");

    document.getElementsByClassName("inputPrepa")[i].value = localStorage.getItem("inputPrepa");
    document.getElementsByClassName("inputWork")[i].value = localStorage.getItem("inputWork");
    document.getElementsByClassName("inputFreqMin")[i].value = localStorage.getItem("inputFreqMin");
    document.getElementsByClassName("inputFreqMax")[i].value = localStorage.getItem("inputFreqMax");
    document.getElementsByClassName("inputRest")[i].value = localStorage.getItem("inputRest");
    document.getElementsByClassName("inputCycles")[i].value = localStorage.getItem("inputCycles");
    document.getElementsByClassName("inputSets")[i].value = localStorage.getItem("inputSets");
    document.getElementsByClassName("inputRestSets")[i].value = localStorage.getItem("inputRestSets");
    document.getElementsByClassName("inputCoolDown")[i].value = localStorage.getItem("inputCoolDown");
}
nbrColor();


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

/*
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
        if(!arrayAudio[i].paused){            
            arrayAudio[i].pause();
        }
        //arrayAudio[i].src = '';
        //arrayAudio[i].load();
    }
}


var colorRandom = localStorage.getItem("bodyColor") != null ? localStorage.getItem("bodyColor") : localStorage.setItem("bodyColor", "#B4FB99");

//change de couleur de body avec la valeur d'input sur la 1ere page
function backGroundColor(input){
    body.style.backgroundColor = input.value;
    document.getElementById("divFavcolor").style.backgroundColor = input.value;
   // body.setAttribute("data-value", input.value);  
    localStorage.setItem("bodyColor", input.value);
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
   // body.style.backgroundColor = body.getAttribute("data-value");
    body.style.backgroundColor = localStorage.getItem("bodyColor");
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
//document.getElementById("nbrColor").setAttribute("data-value",document.getElementById("nbrColor").value);
localStorage.setItem("nbrColor", document.getElementById("nbrColor").value);
//  Cette fonction ajoute autant de <tr> dans la table avec id="tabParamColor" qu'on a choisi dans le <SELECT>

function nbrColor(){
    var arrayColors = [localStorage.getItem("2color"),localStorage.getItem("3color"),localStorage.getItem("4color"),localStorage.getItem("5color"),localStorage.getItem("6color")];

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
   // document.getElementById("nbrColor").setAttribute("data-value",nbrColor);
    localStorage.setItem("nbrColor", document.getElementById("nbrColor").value);


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
            localStorage.setItem(input.id, arrayColors[i]);
           // input.setAttribute("data-value", arrayColors[i]);
            input.setAttribute("onchange","selectedColors(this)");

            cell.appendChild(input);
        }
    }
}

//fonction qui memorise la couleur selectionnée dans "data-value"
function selectedColors(input){
    var id = input.id != "" ? input.id : input.getAttribute("id-value");
    localStorage.setItem(id, input.value);
   // input.setAttribute("data-value",input.value);

    /*if(portraitOrientation.matches){
        //document.getElementsByClassName(input.id)[1].setAttribute("data-value",input.value);
        document.getElementsByClassName(input.id)[1].value = localStorage.getItem(input.id);
    }else{
        //document.getElementsByClassName(input.id)[0].setAttribute("data-value",input.value);
        document.getElementsByClassName(input.id)[0].value = localStorage.getItem(input.id);
    }*/
    for(var i = 0; i < 2; i++){
        document.getElementsByClassName(id)[i].value = localStorage.getItem(id);
    }
   
}

//je lance la fonction count() qui fait les calculs de depart
count();

//on ajoute le nombre -1 dans input
function changeValue(input, isPlus, isAcceptZero){
    var inputValue = input.parentElement.querySelector('input[type="number"]');
    if(isPlus)
        inputValue.value ++;
    else if(parseInt(inputValue.value) > 1 || (isAcceptZero && parseInt(inputValue.value) == 1))
        inputValue.value --;

    //on mémorise la nouvelle valeur dans localStorage
    localStorage.setItem(inputValue.className, inputValue.value);

    //on met à jour la nouvelle valeur dans 2 affichages
    for(var i=0; i<2; i++){
        var inputValueAffichage = document.getElementsByClassName(inputValue.className)[i].parentElement.querySelector('input[type="number"]');
        inputValueAffichage.value = localStorage.getItem(inputValue.className);
    }
    count();
}


var min;
var sec;
var resultatTempsMin;
var resultatTempsSec;
var arrayColorsRandom = [];
 
// la fonction qui refait les calcul a chaque changement dans input
function count(){   
    // je recupere les valeurs de chaque input     
    var inputPrepa = parseInt(document.getElementById("inputPrepa").value);
    localStorage.setItem("inputPrepa", inputPrepa);
   // document.getElementsByClassName("inputPrepa")[0].setAttribute("data-value",inputPrepa);
   // document.getElementsByClassName("inputPrepa")[1].setAttribute("data-value",inputPrepa);

    var inputWork = parseInt(document.getElementById("inputWork").value);
    localStorage.setItem("inputWork", inputWork);
   // document.getElementsByClassName("inputWork")[0].setAttribute("data-value",inputWork);
   // document.getElementsByClassName("inputWork")[1].setAttribute("data-value",inputWork);

    var inputFreqMin = parseFloat(document.getElementById("inputFreqMin").value);
    localStorage.setItem("inputFreqMin", inputFreqMin);
   // document.getElementsByClassName("inputFreqMin")[0].setAttribute("data-value",inputFreqMin);
   // document.getElementsByClassName("inputFreqMin")[1].setAttribute("data-value",inputFreqMin);

    var inputFreqMax =  parseFloat(document.getElementById("inputFreqMax").value);
    localStorage.setItem("inputFreqMax", inputFreqMax);
  //  document.getElementsByClassName("inputFreqMax")[0].setAttribute("data-value",inputFreqMax);
   // document.getElementsByClassName("inputFreqMax")[1].setAttribute("data-value",inputFreqMax);

    var inputRest = parseInt(document.getElementById("inputRest").value);
    localStorage.setItem("inputRest", inputRest);
   // document.getElementsByClassName("inputRest")[0].setAttribute("data-value",inputRest);
   // document.getElementsByClassName("inputRest")[1].setAttribute("data-value",inputRest);

    var inputCycles = parseInt(document.getElementById("inputCycles").value);
    localStorage.setItem("inputCycles", inputCycles);
   // document.getElementsByClassName("inputCycles")[0].setAttribute("data-value",inputCycles);
  //  document.getElementsByClassName("inputCycles")[1].setAttribute("data-value",inputCycles);

    var inputSets = parseInt(document.getElementById("inputSets").value);
    localStorage.setItem("inputSets", inputSets);
  //  document.getElementsByClassName("inputSets")[0].setAttribute("data-value",inputSets);
  //  document.getElementsByClassName("inputSets")[1].setAttribute("data-value",inputSets);

    var inputRestSets = parseInt(document.getElementById("inputRestSets").value);
    localStorage.setItem("inputRestSets", inputRestSets);
   // document.getElementsByClassName("inputRestSets")[0].setAttribute("data-value",inputRestSets);
  //  document.getElementsByClassName("inputRestSets")[1].setAttribute("data-value",inputRestSets);

    var inputCoolDown = parseInt(document.getElementById("inputCoolDown").value);
    localStorage.setItem("inputCoolDown", inputCoolDown);
  //  document.getElementsByClassName("inputCoolDown")[0].setAttribute("data-value",inputCoolDown);
  //  document.getElementsByClassName("inputCoolDown")[1].setAttribute("data-value",inputCoolDown);

    //je calcul le temps en min, mais j'obtiens le decimal
    var resultatTemps = (inputPrepa + (((inputWork + inputRest) * inputCycles) - inputRest + inputRestSets) * inputSets - inputRestSets  + inputCoolDown)/60;
    
    // je retir l'entier de ;on deci;al et j'obtiens les min
    resultatTempsMin = Math.trunc(resultatTemps);
    
    // Pour obtenir le reste : je subtracte l'entier de décimal. Puis je le multipie par 10, car j'obtiens toujours la valeur comme 0,XX
    // Pour obtenir les sec je multiplie par 6
    resultatTempsSec = Math.round(6 * (resultatTemps - resultatTempsMin)*10);

    // ???
    var resultatIntervals = inputSets * 2 * inputCycles;
    
    // je mets mes resultats dans les spam pour 2 affichages
    for(var i = 0; i < 2; i++){
        document.getElementsByClassName("tempsSec")[i].innerHTML = resultatTempsSec;    
        document.getElementsByClassName("tempsMin")[i].innerHTML = resultatTempsMin;    
        document.getElementsByClassName("interval")[i].innerHTML = resultatIntervals;    
        document.getElementsByClassName("sets")[i].innerHTML = inputSets;    
        document.getElementsByClassName("tempsTotalMin")[i].innerHTML = resultatTempsMin;
        min = resultatTempsMin;
        document.getElementsByClassName("tempsTotalSec")[i].innerHTML = resultatTempsSec;
    }
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
                freqRandom = randomFrequency(parseFloat(localStorage.getItem("inputFreqMin")), parseFloat(localStorage.getItem("inputFreqMax")));
                playSound("audioWork"); 
                body.style.backgroundColor = "#ffffff";
                setTimeout(function(){
                    colorRandom = arrayColorsRandom[Math.floor(Math.random() * arrayColorsRandom.length)];
                    body.style.backgroundColor = colorRandom;
                }, 100);
                if(indexColor < nbrColors)
                    indexColor++;
            }
        }else{
           // body.style.backgroundColor = body.getAttribute("data-value");
            body.style.backgroundColor = localStorage.getItem("bodyColor");
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

    cycles = parseInt(localStorage.getItem("inputCycles")); //parseInt(document.getElementById("inputCycles").getAttribute('data-value'));
    sets = parseInt(localStorage.getItem("inputSets")); // parseInt(document.getElementById("inputSets").getAttribute('data-value'));
    freqRandom = randomFrequency(parseFloat(localStorage.getItem("inputFreqMin")), parseFloat(localStorage.getItem("inputFreqMax")));
    nbrColors = parseInt(localStorage.getItem("nbrColor")); // document.getElementById("nbrColor").getAttribute("data-value");      

    //var arrayColorsRandom = [];
    for(var i=1; i <= nbrColors; i++){
      //  arrayColorsRandom.push(document.getElementById(i+"color").getAttribute("data-value"));
        arrayColorsRandom.push(localStorage.getItem(i+"color"));
    }

    if(index == 0){
        document.getElementsByClassName("actEnCours")[0].innerHTML = "Prepare";       
        document.getElementsByClassName("actEnCours")[1].innerHTML = "Prepare";       
        //startCount(document.getElementById('inputPrepa').getAttribute('data-value')); 
        startCount(localStorage.getItem("inputPrepa"));
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
        body.style.backgroundColor = arrayColorsRandom[Math.floor(Math.random() * arrayColorsRandom.length)];
        //startCount(document.getElementById('inputWork').getAttribute('data-value')); 
        startCount(localStorage.getItem("inputWork"));
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
            //startCount(document.getElementById('inputRest').getAttribute('data-value'));
            startCount(localStorage.getItem("inputRest"));
        }else if(indexSet < sets){
            document.getElementsByClassName("actEnCours")[0].innerHTML = "Rest between Sets";
            document.getElementsByClassName("actEnCours")[1].innerHTML = "Rest between Sets";
           // startCount(document.getElementById('inputRestSets').getAttribute('data-value'));
            startCount(localStorage.getItem("inputRestSets"));
            indexSet ++;
            index = 0;
            nCycle = 0;
        // si indexSet égale à nbr sets
        }else if(indexSet == sets){
            document.getElementsByClassName("actEnCours")[0].innerHTML = "Cool down";
            document.getElementsByClassName("actEnCours")[1].innerHTML = "Cool down";
            indexSet ++;
           // startCount(document.getElementById('inputCoolDown').getAttribute('data-value'));
            startCount(localStorage.getItem("inputCoolDown"));
        }
    }else{
        console.log("index "+ index);
        console.log("indexSet "+ indexSet);
        console.log("sets "+ sets);
        stopCount();
        //  body.style.backgroundColor = body.getAttribute("data-value");
        body.style.backgroundColor = localStorage.getItem("bodyColor");
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
   // body.style.backgroundColor = body.getAttribute("data-value");
   body.style.backgroundColor = localStorage.getItem("bodyColor");
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
   // body.style.backgroundColor = body.getAttribute("data-value");
    body.style.backgroundColor = localStorage.getItem("bodyColor");
}