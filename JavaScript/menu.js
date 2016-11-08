function menu_func() {

    var menu = document.getElementById("menu_button").innerHTML;

    if (menu == "меню →") {
        document.getElementById('menu_button').innerHTML='меню ←';
        document.getElementById('menu_list').style.marginLeft='0';
        document.getElementById('menu_button').style.background='#F44336';
        document.getElementById('menu_button').style.color='#212121';
        document.getElementById('about').style.color='#212121';
        document.getElementById('about').style.background='#9E9E9E';
        document.getElementById('menu-wrapper-shadow').style.marginLeft='0';
        document.getElementById('menu-wrapper-shadow').style.boxShadow='0 0 25px rgba(0,0,0,0.8)';
    }

    else {
        document.getElementById('menu_button').innerHTML='меню →';
        document.getElementById('menu_list').style.marginLeft='-135px';
        document.getElementById('menu_button').style.background='#EF5350';
        document.getElementById('menu_button').style.color='#424242';
        document.getElementById('about').style.color='#BDBDBD';
        document.getElementById('about').style.background='#616161';
        document.getElementById('menu-wrapper-shadow').style.marginLeft='-135px';
        document.getElementById('menu-wrapper-shadow').style.boxShadow='0 0 0 rgba(0,0,0,0)';
    }
    
}