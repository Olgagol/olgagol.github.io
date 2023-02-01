<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Start Workout</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/myCss.css">
        <link rel="stylesheet" href="css/menu.css">

        <link rel="shortcut icon" href="favicon.ico">
        <link rel="apple-touch-icon" sizes="57x57" href="apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180x180.png">
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#00а0ff">

        <meta property="og:title" content="My Workout">
        <meta property="og:image" content="android-chrome-512x512.png">

        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">

        <link rel="manifest" href="manifest.json">
    </head>
    <body data-value="#7bc9f7" style="background-color:#7bc9f7;font-family: Comic Sans MS, Comic Sans;font-size: xxx-large; ">
        <div id="content">
            <div id="portrait" style="display:none">
                <!-- tester si l'utilisateur est connecté -->
                <?php
                    session_start();
                    if($_SESSION['username'] !== ""){
                        $user = $_SESSION['username'];
                        // afficher un message
                        echo "<div style='color:red'>Bonjour $user, vous êtes connecté</div>";
                    }
                ?>
                <div id="firstPage" class="mobile-container">
                    <nav role="navigation">
                        <div id="menuToggle">
                        <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                        <ul id="menu">
                            <li>
                                <div style="font-size: xxx-large;">Select a background color for this application  </div>
                                <div id="divFavcolor" style="width: 90%;height: 90px;background-color: #B4FB99;margin-top: 30px;">
                                    <input type="color" id="favcolor" style="width: 90%;height: 90px;" value="#B4FB99" data-value="" onchange="backGroundColor(this)" /> 
                                </div>
                            </li>
                            <li><div style="font-size: xxx-large;" > <a href="login.php">My Account </a></div>
                        </ul>
                    </div>
                    </nav>            
                    <div style="text-align:center;">
                        <h1 >Add a new Workout</h1>
                    </div>
                    <div style="text-align: right;bottom: 3%;right: 3%;position: fixed;"> 
                        <input type="image" src="img/IconPlus_BIG.png" alt="add color" width="15%" onclick="goToColorPage()" />
                        <br />
                    </div>
                </div>

                <div id="colorPage" style="display:none;margin: auto;">
                    <h1>Workout parametres</h1>

                    <hr />

                    <div style="font-size: xxx-large;">Select the number of colors</div> <!--On choisit le nombre de couleurs-->
                    <div class="dropdown-container">
                        <SELECT id="nbrColor" name="nom" size="1" onchange="nbrColor()" >
                            <OPTION>1</OPTION>
                            <OPTION>2</OPTION>
                            <OPTION>3</OPTION>
                            <OPTION>4</OPTION>
                            <OPTION>5</OPTION>
                            <OPTION>6</OPTION>
                        </SELECT>
                        <div class="select-icon">
                            <svg focusable="false" viewBox="0 0 104 128" width="100%" height="100%" class="icon">
                                <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
                            </svg>
                        </div>                
                    </div>
                    <table class="tabParamColor">
                        <tr>
                            <td style="font-size: 110%;">Choose a color(s)</td>
                        </tr>
                        <tr>
                            <td style="font-size: 110%;"><span style="vertical-align:super;">1. </span><input id="1color" class="1color primary_color" type="color" value="#FF0000" data-value="#FF0000" onchange="selectedColors(this)" /></td>
                        </tr>
                    </table>                              
                    <div style="text-align: right;bottom: 3%;right: 5%;position: fixed;"> 
                        <input type="image" src="img/maison.png" alt="go to home" width="15%" onclick="goToFirstPage()" />
                        <input type="image" src="img/vide.png" width="40%" />
                        <input type="image" src="img/fleche-bleu-droit.png" alt="add Workout" width="15%" onclick="goToParametresPage()" />
                    </div>                           

                </div>        
                
                <div id="parametresPage" style="display:none;margin: auto;">
                    <!--<h1>Workout parametres</h1>-->

                    <div style="font-size: 150%;text-align: center;top: 0%;right: 1%;position: fixed;">
                        <div style="background-color: black; opacity: 0.7; padding: 1% 0 1% 2%; color:white">
                            <span class="tempsMin"></span><span > min   </span>
                            <span class="tempsSec"></span><span> sec / </span>
                            <span class="interval"></span><span> intervals  / </span>
                            <span class="sets"></span><span> sets</span>
                        </div>
                    </div>
                    
                    <!--On met les parametrages (temps de travail, etc)-->
                    <div class="choise" style="margin-top: 15%;">Prepare</div>
                    <div class="setChoise">
                        <input class="inputPrepaMoins" type="image" src="img/moins.png" alt="moins" width="10%" onclick="moinsZero(this)" />
                        <input class="inputPrepa" id="inputPrepa" type="number" min="0" value="10" onchange="count()"> sec
                        <input class="inputPrepaPlus" type="image" src="img/plus.png" alt="plus" width="10%" onclick="plus(this)" />
                    </div>                                         
                    <hr />
                    <div class="choise">Work</div>
                    <div class="setChoise">
                        <input class="inputWorkMoins" type="image" src="img/moins.png" alt="moins" width="10%" onclick="moins(this)" />
                        <input class="inputWork" id="inputWork" type="number" min="0" value="15" onchange="count()"> sec
                        <input class="inputWorkPlus" type="image" src="img/plus.png" alt="plus" width="10%" onclick="plus(this)" />
                    </div>        
                    <hr />
                    <div class="choise">Frequancy</div>
                    <div class="setChoise">
                        <input class="inputFreqMoins" type="image" src="img/moins.png" alt="moins" width="10%" onclick="moins(this)" />
                        <input class="inputFreq" id="inputFreq" type="number" min="0" value="2"  onchange="count()"> sec
                        <input class="inputFreqPlus" type="image" src="img/plus.png" alt="plus" width="10%" onclick="plus(this)" />
                    </div>                                         
                    
                    <div class="choise">Rest</div>
                    <div class="setChoise">
                        <input class="inputRestMoins" type="image" src="img/moins.png" alt="moins" width="10%" onclick="moinsZero(this)" />
                        <input class="inputRest" id="inputRest" type="number" min="0" value="15"  onchange="count()"> sec
                        <input class="inputRestPlus" type="image" src="img/plus.png" alt="plus" width="10%" onclick="plus(this)" />
                    </div>                                         
                    <hr />
                    <div class="choise">Cycles</div>
                    <div class="setChoise">
                        <input class="inputCyclesMoins" type="image" src="img/moins.png" alt="moins" width="10%" onclick="moins(this)" />
                        <input class="inputCycles" id="inputCycles" type="number" min="0" value="3"  onchange="count()"> pcs
                        <input class="inputCyclesPlus" type="image" src="img/plus.png" alt="plus" width="10%" onclick="plus(this)" />
                    </div>                                         
                    <hr />
                    <div class="choise">Sets</div>
                    <div class="setChoise">
                        <input class="inputSetsMoins" type="image" src="img/moins.png" alt="moins" width="10%" onclick="moins(this)" />
                        <input class="inputSets" id="inputSets" type="number" min="0" value="2"  onchange="count()"> pcs
                        <input class="inputSetsPlus" type="image" src="img/plus.png" alt="plus" width="10%" onclick="plus(this)" />
                    </div>        
                    <hr />
                    <div class="choise">Rest between Sets</div>
                    <div class="setChoise">
                        <input class="inputRestSetsMoins" type="image" src="img/moins.png" alt="moins" width="10%" onclick="moinsZero(this)" />
                        <input class="inputRestSets" id="inputRestSets" type="number" min="0" value="60"  onchange="count()"> sec
                        <input class="inputRestSetsPlus" type="image" src="img/plus.png" alt="plus" width="10%" onclick="plus(this)" />
                    </div>        
                    <hr />
                    <div class="choise">Cool down</div>
                    <div class="setChoise" style="margin-bottom: 15%;">
                        <input class="inputCoolDownMoins" type="image" src="img/moins.png" alt="moins" width="10%" onclick="moinsZero(this)" />
                        <input class="inputCoolDown" id="inputCoolDown" type="number" min="0" value="0"  onchange="count()"> sec
                        <input class="inputCoolDownPlus" type="image" src="img/plus.png" alt="plus" width="10%" onclick="plus(this)" />
                    </div>               
                    
                    <br />

                    <div style="text-align: right;bottom: 0%;right: 2%;position: fixed;">
                        <div style="background-color: black; opacity: 0.7; padding: 1%">
                            <input type="image" src="img/maison.png" alt="go to home" width="15%" onclick="goToFirstPage()" />
                            <input type="image" src="img/IconStart.png" alt="start" width="40%" onclick="start()" />
                            <input type="image" src="img/fleche-bleu-gauche.png" alt="add color" width="15%" onclick="goToColorPage()" />
                        </div>
                    </div>
                </div>

                <div id="workPage" style="height:100%;display: none;color:white;">        
                    <!--Il faudra faire de prepare une variable qui va changer en fonction du temps écoulé ( Prepare/Work/Rest/Rest between sets/Cool down-->
                    <div style="height:100%;text-align:center; opacity:0.6;">
                        <div class="actEnCours" style="font-size:250%; margin-top:20px; background-color:black"></div>
                        <div id="cycleSet" style="font-size:150%; background-color:black"></div>
                        <!--Ici j'ai mis le temps qui va s'écouler et qui va changer le "travail" (Prepare, Work, Rest, Rest between sets, Cool down) -->
                        <div class="countSecDesc" style="font-size:1500%; padding:25% 0;text-shadow: 2px 0 20px #000, -2px 0 20px #000, 0 2px 15px #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 10px #000, -1px 1px 4px #000;"></div>
                    </div>
                    <div style="width:98%;position:fixed;bottom:20%;background-color:black; opacity:0.4;font-size:250%">
                        <div style="width:100%;">
                            <span class="tempsTotalMin"></span><span> min   </span>
                            <span class="tempsTotalSec"></span><span> sec </span>
                        </div>
                    </div>
                    <div style="width:95%;position:fixed;bottom:3%;">
                        <input type="image" src="img/maison.png" alt="go to home" width="15%" onclick="goToFirstPage()" />
                        <input type="image" src="img/stop.png" alt="Stop" class="inputStopPlay" width="15%" onclick="stopPlay()" />
                        <input type="image" src="img/fleche-bleu-gauche.png" alt="Annuler" width="15%" onclick="annuler()" />
                    </div>            
                </div>
            </div>        
            <div id="paysage" style="display:none;font-size: xx-large;"><!--paysage-->
                <!-- tester si l'utilisateur est connecté -->
                <?php
                    session_start();
                    if($_SESSION['username'] !== ""){
                        $user = $_SESSION['username'];
                        // afficher un message
                        echo "<div style='color:red'>Bonjour $user, vous êtes connecté</div>";
                    }
                ?>            
                <div id-value="firstPage" class="mobile-container">
                    <nav role="navigation" style="height: 70px;margin-left: 0%;">
                        <div id-value="menuToggle" style="top: 15px;left: 20px;">
                        <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                        <ul id-value="menu" style="height: 200px;"> <!--paysage-->
                            <li>
                                <div style="font-size: xx-large;">Select a background color for this application  </div><!--paysage-->
                                <div id-value="divFavcolor" style="width: 100%;height: 60px;background-color: #B4FB99;margin-top: 30px;"><!--paysage-->
                                    <input type="color" id-value="favcolor" style="width: 88%;height: 60px;" value="#B4FB99" data-value="" onchange="backGroundColor(this)" /> <!--paysage-->
                                </div>
                            </li>
                            <li><div style="font-size: xxx-large;" > <a href="login.php">My Account </a></div>
                        </ul>
                    </div>
                    </nav>            
                    <div style="text-align:center;">
                        <h1 style="font-size: xx-large;">Add a new Workout</h1>
                    </div>
                    <div style="text-align: right;bottom: 4%;right: 1%;position: fixed;"> <!--paysage-->
                        <input type="image" src="img/IconPlus_BIG.png" alt="add color" width="8%" onclick="goToColorPage()" />
                        <br />
                    </div>
                </div>

                <div id-value="colorPage" style="display:none;margin: auto;">
                    <h1 style="font-size: xx-large;">Workout parametres</h1>

                    <hr />


                    <div class="divTable">
                        <div class="divTableBody">
                            <div class="divTableRow">
                                <div class="divTableCell" style="vertical-align: top;">
                                    <div style="font-size: 140%;width: 100%;">Select the number of colors</div> <!--On choisit le nombre de couleurs-->
                                    <div class="dropdown-container" style="margin: 2% auto;width: 60%;"> <!---->
                                        <SELECT id-value="nbrColor" name="nom" size="1" onchange="nbrColor()" >
                                            <OPTION>1</OPTION>
                                            <OPTION>2</OPTION>
                                            <OPTION>3</OPTION>
                                            <OPTION>4</OPTION>
                                            <OPTION>5</OPTION>
                                            <OPTION>6</OPTION>
                                        </SELECT>
                                        <div class="select-icon" style="height: 50px;">
                                            <svg focusable="false" viewBox="0 0 104 128" width="100%" height="100%" class="icon">
                                                <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
                                            </svg>
                                        </div>                
                                    </div>
                                </div>
                                <div class="divTableCell">
                                    <table class="tabParamColor">
                                        <tr>
                                            <td style="font-size: 140%; vertical-align: top;">Choose a color(s)</td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 110%;"><span style="vertical-align:super;">1. </span><input id-value="1color" class="1color primary_color" style="width: 50px;height: 50px;" type="color" value="#FF0000" data-value="#FF0000" onchange="selectedColors(this)" /></td>
                                        </tr>
                                    </table>     
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="text-align: center;bottom: 3%;right: 1%;position: fixed;"> 
                        <input type="image" src="img/maison.png" alt="go to home" width="8%" onclick="goToFirstPage()" />
                        <input type="image" src="img/vide.png" width="60%" />
                        <input type="image" src="img/fleche-bleu-droit.png" alt="add Workout" width="8%" onclick="goToParametresPage()" />
                        <br />
                    </div>                            
                </div>        
                
                <div id-value="parametresPage" style="display:none;margin: auto;">
                    <!--<h1>Workout parametres</h1>-->
                    
                    <div style="font-size: xx-large;text-align: center;top: 0%;right: 1%;position: fixed;">
                        <div style="background-color: black; opacity: 0.7; padding: 1% 0 1% 2%; color:white">
                            <span class="tempsMin"></span><span style="font-size: large;"> min   </span>
                            <span class="tempsSec"></span><span> sec / </span>
                            <span class="interval"></span><span> intervals / </span>
                            <span class="sets"></span><span> sets</span>
                        </div>
                    </div>                    
                    
                    <!--On met les parametrages (temps de travail, etc)-->
                    <div class="choise" style="margin-top: 8%;">Prepare</div>
                    <div class="setChoise" style="margin:0">
                        <input class="inputPrepaMoins" type="image" src="img/moins.png" alt="moins" width="6%" onclick="moinsZero(this)" />
                        <input class="inputPrepa" id-value="inputPrepa" type="number" min="0" value="10"style="font-size: x-large" onchange="count()"> sec
                        <input class="inputPrepaPlus" type="image" src="img/plus.png" alt="plus" width="6%" onclick="plus(this)" />
                    </div>                                         
                    <hr />
                    <div class="choise">Work</div>
                    <div class="setChoise" style="margin:0">
                        <input class="inputWorkMoins" type="image" src="img/moins.png" alt="moins" width="6%" onclick="moins(this)" />
                        <input class="inputWork" id-value="inputWork" type="number" min="0" value="15"style="font-size: x-large" onchange="count()"> sec
                        <input class="inputWorkPlus" type="image" src="img/plus.png" alt="plus" width="6%" onclick="plus(this)" />
                    </div>        
                    <hr />
                    <div class="choise">Frequancy</div>
                    <div class="setChoise" style="margin:0">
                        <input class="inputFreqMoins" type="image" src="img/moins.png" alt="moins" width="6%" onclick="moins(this)" />
                        <input class="inputFreq" id-value="inputFreq" type="number" min="0" value="2" style="font-size: x-large" onchange="count()"> sec
                        <input class="inputFreqPlus" type="image" src="img/plus.png" alt="plus" width="6%" onclick="plus(this)" />
                    </div>                                         
                    
                    <div class="choise">Rest</div>
                    <div class="setChoise" style="margin:0">
                        <input class="inputRestMoins" type="image" src="img/moins.png" alt="moins" width="6%" onclick="moinsZero(this)" />
                        <input class="inputRest" id-value="inputRest" type="number" min="0" value="15" style="font-size: x-large" onchange="count()"> sec
                        <input class="inputRestPlus" type="image" src="img/plus.png" alt="plus" width="6%" onclick="plus(this)" />
                    </div>                                         
                    <hr />
                    <div class="choise">Cycles</div>
                    <div class="setChoise" style="margin:0">
                        <input class="inputCyclesMoins" type="image" src="img/moins.png" alt="moins" width="6%" onclick="moins(this)" />
                        <input class="inputCycles" id-value="inputCycles" type="number" min="0" value="3" style="font-size: x-large" onchange="count()"> pcs
                        <input class="inputCyclesPlus" type="image" src="img/plus.png" alt="plus" width="6%" onclick="plus(this)" />
                    </div>                                         
                    <hr />
                    <div class="choise">Sets</div>
                    <div class="setChoise" style="margin:0">
                        <input class="inputSetsMoins" type="image" src="img/moins.png" alt="moins" width="6%" onclick="moins(this)" />
                        <input class="inputSets" id-value="inputSets" type="number" min="0" value="2" style="font-size: x-large" onchange="count()"> pcs
                        <input class="inputSetsPlus" type="image" src="img/plus.png" alt="plus" width="6%" onclick="plus(this)" />
                    </div>        
                    <hr />
                    <div class="choise">Rest between Sets</div>
                    <div class="setChoise" style="margin:0">
                        <input class="inputRestSetsMoins" type="image" src="img/moins.png" alt="moins" width="6%" onclick="moinsZero(this)" />
                        <input class="inputRestSets" id-value="inputRestSets" type="number" min="0" value="60" style="font-size: x-large" onchange="count()"> sec
                        <input class="inputRestSetsPlus" type="image" src="img/plus.png" alt="plus" width="6%" onclick="plus(this)" />
                    </div>        
                    <hr />
                    <div class="choise">Cool down</div>
                    <div class="setChoise" style="margin-bottom: 11%;">
                        <input class="inputCoolDownMoins" type="image" src="img/moins.png" alt="moins" width="6%" onclick="moinsZero(this)" />
                        <input class="inputCoolDown" id-value="inputCoolDown" type="number" min="0" value="0" style="font-size: x-large" onchange="count()"> sec
                        <input class="inputCoolDownPlus" type="image" src="img/plus.png" alt="plus" width="6%" onclick="plus(this)" />
                    </div>                 
                    
                    <br />

                    <div style="text-align: center;bottom: 0%;right: 1%;position: fixed;">
                        <div style="background-color: black; opacity: 0.7; padding: 1%">
                            <input type="image" src="img/maison.png" alt="go to home" width="8%" onclick="goToFirstPage()" />
                            <input type="image" src="img/vide.png" width="8%" />
                            <input type="image" src="img/IconStart.png" alt="start" width="30%" onclick="start()" />
                            <input type="image" src="img/vide.png" width="8%" />
                            <input type="image" src="img/fleche-bleu-gauche.png" alt="add color" width="8%" onclick="goToColorPage()" />
                        </div>
                    </div>
                </div>

                <div id-value="workPage" style="height:100%;display: none;color:white;">        


                    <div class="divTable">
                        <div class="divTableBody">
                            <div class="divTableRow">
                                <div class="divTableCell" style="vertical-align: top;">
                                    <!--Il faudra faire de prepare une variable qui va changer en fonction du temps écoulé ( Prepare/Work/Rest/Rest between sets/Cool down-->
                                    <div style="height:100%;text-align:center; opacity:0.6;">
                                        <div class="actEnCours" style="font-size:250%; padding: 8% 0; margin-top:20px; background-color:black"></div>
                                        <div id="cycle" style="font-size: 200%; margin-top: 1px; background-color:black"></div>
                                        <div id="set" style="font-size: 200%; margin-top: 1px; background-color:black"></div>
                                    </div>
                                    <div style="width:97%;position:fixed;bottom:20%;background-color:black; opacity:0.4;font-size:200%">
                                        <div style="width:100%;">
                                            <span class="tempsTotalMin"></span><span> min   </span>
                                            <span class="tempsTotalSec"></span><span> sec </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="divTableCell" style="opacity: 0.6;">
                                    <!--Ici j'ai mis le temps qui va s'écouler et qui va changer le "travail" (Prepare, Work, Rest, Rest between sets, Cool down) -->
                                    <div class="countSecDesc" style="font-size:1300%; text-shadow: 2px 0 20px #000, -2px 0 20px #000, 0 2px 15px #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 10px #000, -1px 1px 4px #000;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="width:95%;position:fixed;bottom:3%;">
                        <input type="image" src="img/maison.png" alt="go to home" width="8%" onclick="goToFirstPage()" />
                        <input type="image" src="img/stop.png" alt="Stop" class="inputStopPlay" width="8%" onclick="stopPlay()" />
                        <input type="image" src="img/fleche-bleu-gauche.png" alt="Annuler" width="8%" onclick="annuler()" />
                    </div>            
                </div>
            </div>        
            <audio id="audioThreeTwoOne" src="audio/bipSonnerie.wav" >
            <audio id="audioStart" src="audio/start.wav" >
            <audio id="audioStop" src="audio/stop.wav" >
            <audio id="audioWork" src="audio/siffle2.wav" >
        </div>
        <script src="js/myScript.js" type="text/javascript"></script>
    </body>
</html>