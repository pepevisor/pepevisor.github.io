function chooserFunc() {
    
    function fadeOutFunc() {
        
        document.getElementById('sign').style.opacity='100';
        
        function textFadeOut() {

            document.getElementById('sign').style.opacity='0';
            
            if (document.getElementById("pepe_select").options[0].selected == true) { 
                
                document.getElementById('sign').style.opacity='100';
                clearTimeout(timeoutId);
            }

            else {
            }
            
        }
    
        var timeoutId = setTimeout(textFadeOut, 3000);
    }
    
    function noiseFunc() {
        
        if (document.getElementById("pepe_select").options[1].selected == true || document.getElementById("pepe_select").options[6].selected == true || document.getElementById("pepe_select").options[7].selected == true || document.getElementById("pepe_select").options[9].selected == true) {
            document.getElementById("noise").style.backgroundImage = "url(images/noise_20.png)";
        }
        else {
            document.getElementById("noise").style.backgroundImage = "url(images/noise_30.png)"
        }
    }
    
        

    if (document.getElementById("pepe_select").options[0].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/default_pepe.gif)";
        document.getElementById("sign").innerHTML = "PEPEVISOR приветствует вас! переключите канал слева →";
        document.getElementById("pepe_select").options[0].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }

    else if 
        (document.getElementById("pepe_select").options[1].selected == true) {   
        document.getElementById("picture").style.backgroundImage = "url(images/sad_pepe.gif)";
        document.getElementById("sign").innerHTML = "Ты на волне \"Грустный Pepe\"";
        document.getElementById("pepe_select").options[1].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }

    
    else if (document.getElementById("pepe_select").options[2].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/recursion_pepe.gif)";
        document.getElementById("sign").innerHTML = "Ты на волне \"Рекурсивный Pepe\"";
        document.getElementById("pepe_select").options[2].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }
    
    else if (document.getElementById("pepe_select").options[3].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/dreamy_pepe.gif)";
        document.getElementById("sign").innerHTML = "Ты на волне \"Мечтательный Pepe\"";
        document.getElementById("pepe_select").options[3].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }
    
    
    else if (document.getElementById("pepe_select").options[4].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/dancing_pepe.gif)";
        document.getElementById("sign").innerHTML = "Ты на волне \"Танцующий Pepe\"";
        document.getElementById("pepe_select").options[4].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }
    
    else if (document.getElementById("pepe_select").options[5].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/cosmic_pepe.gif)";
        document.getElementById("sign").innerHTML = "Ты на волне \"Космический Pepe\"";
        document.getElementById("pepe_select").options[5].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }
    
    else if (document.getElementById("pepe_select").options[6].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/photo_pepe.gif)";
        document.getElementById("sign").innerHTML = "Ты на волне \"Фотогеничный Pepe\"";
        document.getElementById("pepe_select").options[6].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }
    
    else if (document.getElementById("pepe_select").options[7].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/n32.gif)";
        document.getElementById("sign").innerHTML = "Ты на волне \"Задумчивый Pepe\"";
        document.getElementById("pepe_select").options[7].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }
    
    else if (document.getElementById("pepe_select").options[8].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/dudec_pepe.gif)";
        document.getElementById("sign").innerHTML = "Ты на волне \"Pepe Дудец\"";
        document.getElementById("pepe_select").options[8].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }
    
    else if (document.getElementById("pepe_select").options[9].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/kanye_pepe.gif)";
        document.getElementById("sign").innerHTML = "Ты на волне \"Kanye West\"";
        document.getElementById("pepe_select").options[9].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }
    
    else if (document.getElementById("pepe_select").options[10].selected == true) {
        document.getElementById("picture").style.backgroundImage = "url(images/noise_move.gif)";
        document.getElementById("sign").innerHTML = "!@#$%^&*()";
        document.getElementById("pepe_select").options[10].selected = "true";
        noiseFunc();
        fadeOutFunc();
    }
    

    else {

    }
    
}