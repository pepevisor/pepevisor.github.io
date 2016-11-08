/* #easy_func */


/* #background_fade */

function backgroundFadeFunc() {
    
    document.getElementById('pop-container').style.zIndex='1';
    document.getElementById('pop-container').style.opacity='100';
    
}

/* #background_fade */


/* #pure_call */

function pureCallFunc() {

    document.getElementById("bg_wrapper").style.background="rgba(23, 19, 19, 0.87)";
    document.getElementById("container").style.opacity="0";
    document.getElementById('popup').style.zIndex='2';
    document.getElementById('popup').style.opacity='100';
    document.getElementById('popup').style.marginTop='-282px';
    document.getElementById('text').style.opacity='100';

    setTimeout(backgroundFadeFunc, 50);

}

/* #pure_call */


/* #deploy */

function deployFunc() {
    
    document.getElementById("bg_wrapper").style.background="rgba(23, 19, 19, 0.87)";
    document.getElementById("container").style.opacity="0";
    document.getElementById('roll-deploy').innerHTML = 'Свернуть';
    document.getElementById('popup').style.width='840px';
    document.getElementById('popup').style.height='564px';
    document.getElementById('popup').style.top='50%';
    document.getElementById('popup').style.left='50%';
    document.getElementById('popup').style.marginTop='-282px';
    document.getElementById('popup').style.marginLeft='-420px';
    document.getElementById('popup').style.boxShadow='0 0 30px rgba(0,0,0,1)';
    document.getElementById('nav-bar').style.width='800px';
    document.getElementById('nav-bar').style.height='40px';
    document.getElementById('nav-bar').style.padding='0 20px 0 20px';
    document.getElementById('header').style.lineHeight='37px';
    document.getElementById('header').style.width='540px';
    document.getElementById('header').style.height='40px';
    document.getElementById('header').style.textAlign='left';
    document.getElementById('header').style.fontSize='120%';
    //document.getElementById('header').style.whiteSpace='nowrap'
    document.getElementById('buttons').style.top='';
    document.getElementById('buttons').style.right='20px';
    document.getElementById('buttons').style.height='40px';
    document.getElementById('buttons').style.width='170px';
    document.getElementById('buttons').style.fontSize='';
    document.getElementById('close').style.height='24px';
    document.getElementById('close').style.width='';
    document.getElementById('close').style.marginLeft=''
    document.getElementById('close').style.marginTop='7px';
    document.getElementById('roll-deploy').style.height='24px';
    document.getElementById('roll-deploy').style.width='';
    document.getElementById('roll-deploy').style.marginTop='7px';

    setTimeout(backgroundFadeFunc, 150);  

    function text() {
        document.getElementById('text').style.opacity='1';
    }

    setTimeout(text, 400);  
}

/* #deploy */


/* #roll */

function rollFunc() {
    
    document.getElementById("bg_wrapper").style.background="rgba(23, 19, 19, 0.97)";
    document.getElementById("container").style.opacity="100";
    document.getElementById('roll-deploy').innerHTML = 'Развернуть';
    document.getElementById('text').style.opacity='0';
    document.getElementById('pop-container').style.zIndex='-3';
    document.getElementById('pop-container').style.opacity='0';
    document.getElementById('popup').style.width='200px';
    document.getElementById('popup').style.height='60px';
    document.getElementById('popup').style.top='100%';
    document.getElementById('popup').style.left='15%';
    document.getElementById('popup').style.marginTop='-60px';
    document.getElementById('popup').style.marginLeft='-100px';
    document.getElementById('popup').style.boxShadow='5px 6px 30px rgba(0,0,0,0.6)';
    document.getElementById('nav-bar').style.padding='4px 5px 5px 5px';
    document.getElementById('nav-bar').style.width='200px';
    document.getElementById('nav-bar').style.height='60px';
    document.getElementById('header').style.width='200px';
    document.getElementById('header').style.height='25px';
    document.getElementById('header').style.textAlign='center';
    document.getElementById('header').style.fontSize='82%';
    document.getElementById('header').style.lineHeight='23px';
    document.getElementById('buttons').style.top='33px';
    document.getElementById('buttons').style.right='-5px';
    document.getElementById('buttons').style.height='25px';
    document.getElementById('buttons').style.width='202px';
    document.getElementById('buttons').style.fontSize='80%';
    document.getElementById('close').style.height='21px';
    document.getElementById('close').style.width='90px';
    document.getElementById('close').style.marginLeft='12px'
    document.getElementById('close').style.marginTop='0';
    document.getElementById('close').style.marginRight='4px';
    document.getElementById('roll-deploy').style.height='21px';
    document.getElementById('roll-deploy').style.width='90px';
    document.getElementById('roll-deploy').style.marginTop='0';
    
}

/* #roll */


/* #pure_close */

function pureCloseFunc() {

    document.getElementById("bg_wrapper").style.background="rgba(23, 19, 19, 0.97)";
    document.getElementById("container").style.opacity="100";
    document.getElementById('pop-container').style.opacity='0';
    document.getElementById('pop-container').style.zIndex='-3';
    document.getElementById('popup').style.zIndex='-3';
    document.getElementById('popup').style.opacity='0';
    document.getElementById('text').style.boxShadow='0 0 0 0 rgba(256.256.256.0.1)';
    document.getElementById('popup').style.marginTop="-120px";
    document.getElementById('text').style.opacity='0';

}
      
/* #pure_close */


/* #roll_close */

function rollCloseFunc() {

    document.getElementById('popup').style.marginTop='10px';
    document.getElementById('popup').style.opacity='0';

    function rollReturnFunc() {
    document.getElementById('roll-deploy').innerHTML = 'Свернуть'
    document.getElementById('popup').style.width='840px';
    document.getElementById('popup').style.height='564px';
    document.getElementById('popup').style.top='50%';
    document.getElementById('popup').style.left='50%';
    document.getElementById('popup').style.marginTop='-120px';
    document.getElementById('popup').style.marginLeft='-420px';
    document.getElementById('popup').style.boxShadow='0 0 30px rgba(0,0,0,0.6)';
    document.getElementById('nav-bar').style.width='710px';
    document.getElementById('nav-bar').style.height='40px';
    document.getElementById('nav-bar').style.padding='0 20px 0 20px';
    document.getElementById('header').style.lineHeight='40px';
    document.getElementById('header').style.width='540px';
    document.getElementById('header').style.height='40px';
    document.getElementById('header').style.textAlign='left';
    document.getElementById('header').style.fontSize='120%';
    document.getElementById('header').style.whiteSpace='nowrap'
    document.getElementById('buttons').style.top='';
    document.getElementById('buttons').style.right='20px';
    document.getElementById('buttons').style.height='40px';
    document.getElementById('buttons').style.width='170px';
    document.getElementById('buttons').style.fontSize='';
    document.getElementById('close').style.height='24px';
    document.getElementById('close').style.width='';
    document.getElementById('close').style.marginLeft=''
    document.getElementById('close').style.marginTop='7px';
    document.getElementById('roll-deploy').style.height='24px';
    document.getElementById('roll-deploy').style.width='';
    document.getElementById('roll-deploy').style.marginTop='7px';
    document.getElementById('popup').style.zIndex='-3';
    }

    setTimeout (rollReturnFunc, 500);   
    
}

/* #roll_close  */


/* #easy_func */



/* #complex_func */


/* #call_from_button */
   
function callFromButtonFunc() {
    
    var roll_deploy_string = document.getElementById("roll-deploy").innerHTML;
    
    if (roll_deploy_string == "Свернуть") {
        pureCallFunc();
    }
    
    else {
        deployFunc();
    }
    
}

/* #call_from_button */


/* #button_roll */

function buttonRollDeployFunc() {
    
    var roll_deploy_string = document.getElementById("roll-deploy").innerHTML;

    if (roll_deploy_string == "Свернуть") {   
        rollFunc();
    }
    
    else  {
        deployFunc();
    }
    
}

/* #button_roll */


/* #button_close */

function buttonCloseFunc() {
    
    var roll_deploy_string = document.getElementById("roll-deploy").innerHTML;

    if (roll_deploy_string == "Свернуть") {   
        pureCloseFunc();
    }

    else  {
        rollCloseFunc();
    }
    
}

/* #button_close */


/* #complex_func */