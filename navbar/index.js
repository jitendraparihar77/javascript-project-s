var navstatus=0;
function navbar(){
    if(!navstatus){
      $('.maindiv').css('width','100%');
      $('ul').css('display','block');
      navstatus=1;
    }
    else{
        $('.maindiv').css('width','0');
        $('ul').css('display','none');
        navstatus=0;
    }
}