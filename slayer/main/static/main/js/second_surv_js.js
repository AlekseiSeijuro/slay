
var answers= [0,0,0,0,0,0,0,0,0,0];

function SetAns(i,el){
    answers[i]=el.value;
}

function GetRes(){

    var sub=document.getElementById('sub')
    sub.parentNode.removeChild(sub);

    var score=0;

    if(answers[0]==2)
        score+=1;
    if(answers[1]==73)
        score+=1;
    if(answers[2]==144)
        score+=1;
    if(answers[3]==3)
        score+=1;
    if(answers[4]==15)
        score+=1;
    if(answers[5]==10)
        score+=1;
    if(answers[6]==20)
        score+=1;
    if(answers[7]==33)
        score+=1;
    if(answers[8]==50)
        score+=2;
    if(answers[9]==7)
        score+=2;


    var result=document.getElementById('result');

    if(score==12){
        result.innerHTML="Невероятно!!! Вы сделали это! Вы смогли! Вы набрали высший балл! Вы очень талантливый и усердный человек. Однако, помните, что всегда есть к чему стремиться и эта победа лишь одна из многих в вашей жизни.";
    }
    else if(score<=11 && score>=9){
        result.innerHTML="Ого! Да вам удалось набрать " + score + " из 12 баллов. Это просто замечательный результат. У вас определенно талант! Однако, это не самый лучший результат на который вы способны. Ещё бы чуть-чуть и... В общем, не останавливайтесь и вы получите то, что хотите.";
    }
    else if(score<=8 && score>=5){
        result.innerHTML="Неплохой результат! Вы набрали " + score + " из 12 баллов. У вас определенно есть неплохие знания в математике и способности к ней. Однако, возможно, вам не хватает упорства. Проявите больше рвения и у вас точно получится добиться поставленной цели.";
    }
    else if(score>=1 && score<=4){
        result.innerHTML="По результатам теста вы смогли набрать "+score+" из 12 баллов. Такой результат означает, что вам недостает довольно большого объема знаний. Однако, если вы постараетесь, то в будущем сможете, добиться чего-то большего.(наверное)";
    }
    else{
        result.innerHTML="Что ж, вам удалось не получить ни 1 балла. Своего рода это тоже достижение. Однако, скорее всего, вы достаточно далеки от математики. Думаю, вам не стоит к ней приближаться.";
    }

    var ref_to_main=document.getElementById('ref_to_main');
    ref_to_main.style.display= "block";
    ref_to_main.style.color= "black";
    ref_to_main.style.textAlign= "center";
    ref_to_main.innerHTML="<p id='to_main'>На главную</p>";
    ref_to_main.style.width="150px";
    ref_to_main.style.height="75px";
    ref_to_main.style.backgroundColor= "#5a49e8";

    ref_to_main.style.border= "2px solid";
    ref_to_main.style.borderRadius= "50%";
    ref_to_main.style.borderColor= "black";
    ref_to_main.style.marginLeft= "43%";
    ref_to_main.style.marginBottom= "5%";
    ref_to_main.style.textDecoration= "none";

    var to_main=document.getElementById('to_main');

    to_main.style.marginTop= "15%";

    return false;
}

