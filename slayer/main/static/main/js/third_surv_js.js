function GetRes(){
    var sub=document.getElementById('sub')
    sub.parentNode.removeChild(sub);

    var answers=document.getElementsByClassName("ans");

    var score=0;

    if(answers.ans1_4.checked){
        score++;
    }
    if(answers.ans2_3.checked){
        score++;
    }
    if(answers.ans3_1.checked){
        score++;
    }
    if(answers.ans4_1.checked){
        score++;
    }
    if(answers.ans5_2.checked){
        score++;
    }
    if(answers.ans6_1.checked){
        score++;
    }
    if(answers.ans7_3.checked){
        score++;
    }
    if(answers.ans8_3.checked){
        score++;
    }
    if(answers.ans9_3.checked){
        score++;
    }
    if(answers.ans10_2.checked){
        score++;
    }

    console.log(score);
    var result=document.getElementById('result');

    if (score>=8 && score<=10){
        result.innerHTML="Ваш умственный возраст: старше 30 лет. У вас за плечами большой опыт. Вы достаточно хорошо развиты в интелектуальном плане и скорее всего имеете высокий социальный статус.";
    }else if(score>=6 && score<=7){
        result.innerHTML="Ваш умственный возраст: 21-26 лет. У вас есть достаточно хорошая картина мира и вы обладаете отличными навыками в различных сферах жизни. Однако, возможно, вам просто еще не достаёт опыта.";
    }else if(score>=3 && score<=5){
        result.innerHTML="Ваш умственный возраст: 14-18 лет. Вы еще учитесь и познаете окружающий мир. Однако, уже сейчас имеете неплохие знания о нём. Не останавливайтесь и продолжайте развиваться.";
    }else{
        result.innerHTML="Ваш умственный возраст: младше 14 лет. Вы только в начале своего жизненного пути. Приложите хорошие усилия и вы сможете добиться чего-то большего.";
    }






    var ref_to_main=document.getElementById('ref_to_main');
    ref_to_main.style.display= "block";
    ref_to_main.style.color= "black";
    ref_to_main.style.textAlign= "center";
    ref_to_main.innerHTML="<p id='to_main'>На главную</p>";
    ref_to_main.style.width="150px";
    ref_to_main.style.height="75px";
    ref_to_main.style.backgroundColor= "#990fe0";

    ref_to_main.style.border= "2px solid";
    ref_to_main.style.borderRadius= "50%";
    ref_to_main.style.borderColor= "black";
    ref_to_main.style.marginLeft= "43%";
    ref_to_main.style.marginBottom= "5%";
    ref_to_main.style.textDecoration= "none";

    var to_main=document.getElementById('to_main');

    to_main.style.marginTop= "15%";
}