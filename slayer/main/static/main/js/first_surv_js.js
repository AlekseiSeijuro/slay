function GetRes(){
    var sub=document.getElementById('sub')
    sub.parentNode.removeChild(sub);

    var answers=document.getElementsByClassName("ans");

    var score=0;

    if(answers.ans1_1.checked){
        score++;
    }
    if(answers.ans2_2.checked){
        score++;
    }
    if(answers.ans3_4.checked){
        score++;
    }
    if(answers.ans4_4.checked){
        score++;
    }
    if(answers.ans5_4.checked){
        score++;
    }
    if(answers.ans6_2.checked){
        score++;
    }
    if(answers.ans7_3.checked){
        score++;
    }
    if(answers.ans8_3.checked){
        score++;
    }
    if(answers.ans9_2.checked){
        score++;
    }
    if(answers.ans10_2.checked){
        score++;
    }

    var result=document.getElementById('result');

    if(score==10){
        result.innerHTML="Великолепный результат! Вы набрали 10 баллов из 10. У вас отличная память. Вы могли бы использовать её чтобы запоминать что-то более полезное. В любом случае, поздравляю с успешным прохождением теста.";
    }else if( score>=7 && score<=9){
        result.innerHTML="Отличный результат! Вы набрали " +score+" из 10 баллов. Возможно, вам просто не повезло и вы не обладали какой-либо информацией впринципе. Однако, у вас все равно очень хорошая память. Возможно, вам следует использовать её более разумно.";
    }else if(score>=4 && score<=6){
        result.innerHTML="Неплохой результат. Вы набрали " +score+" из 10 баллов. Однако, вы запоминаете далеко не всё. Но может это и хорошо, т.к. вы не запоминаете бесполезную информацию, например ту которая используется в этом тесте.";
    }else if(score>=1 && score<=3){
        result.innerHTML="Что ж, результат довольно плох. Вы набрали " +score+" из 10 баллов. Вам следует поработать над своей памятью. Потренировать её, чтобы важная информация не вылетала из головы.";
    }else{
        result.innerHTML="Ого!!! Да вы ничего не помните! Вы набрали 0 баллов. Вам определенно следует тренировать свою память, иначе в будущем вы не сможете вспомнить ваше собственное имя. А это довольно грустно."
    }

    var ref_to_main=document.getElementById('ref_to_main');
    ref_to_main.style.display= "block";
    ref_to_main.style.color= "black";
    ref_to_main.style.textAlign= "center";
    ref_to_main.innerHTML="<p id='to_main'>На главную</p>";
    ref_to_main.style.width="150px";
    ref_to_main.style.height="75px";
    ref_to_main.style.backgroundColor= "#ed05e5";

    ref_to_main.style.border= "2px solid";
    ref_to_main.style.borderRadius= "50%";
    ref_to_main.style.borderColor= "black";
    ref_to_main.style.marginLeft= "43%";
    ref_to_main.style.marginBottom= "5%";
    ref_to_main.style.textDecoration= "none";

    var to_main=document.getElementById('to_main');

    to_main.style.marginTop= "15%";
}