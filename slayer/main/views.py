from django.shortcuts import render
from .models import Stat

# Create your views here.

def mainp(request):
    data={
        'title': 'Главная страница'
    }
    return render(request, "main/main_page.html", data)

def first_surv(request):
    return render(request, "main/first_surv.html")

def second_surv(request):
    return render(request, "main/second_surv.html")

def third_surv(request):
    return render(request, "main/third_surv.html")

def about_me(request):
    return render(request, "main/about_me.html")

def memory_result(request):

    ans1=request.POST.getlist('quest1')
    ans2 = request.POST.getlist('quest2')
    ans3 = request.POST.getlist('quest3')
    ans4 = request.POST.getlist('quest4')
    ans5 = request.POST.getlist('quest5')
    ans6 = request.POST.getlist('quest6')
    ans7 = request.POST.getlist('quest7')
    ans8 = request.POST.getlist('quest8')
    ans9 = request.POST.getlist('quest9')
    ans10 = request.POST.getlist('quest10')

    score=0

    if ans1==['ans1_1']:
        score+=1
    if ans2==['ans2_2']:
        score+=1
    if ans3==['ans3_4']:
        score+=1
    if ans4==['ans4_4']:
        score+=1
    if ans5==['ans5_4']:
        score+=1
    if ans6==['ans6_2']:
        score+=1
    if ans7==['ans7_3']:
        score+=1
    if ans8==['ans8_3']:
        score+=1
    if ans9==['ans9_2']:
        score+=1
    if ans10==['ans10_2']:
        score+=1

    bd=Stat.objects.all()

    for bdobj in bd:
        if bdobj.title=="Тест на память":
            break

    bdobj.total+=1

    if score == 10:
        bdobj.bests+=1
        result="Великолепный результат! Вы набрали 10 баллов из 10. У вас отличная память. Вы могли бы использовать её чтобы запоминать что-то более полезное. В любом случае, поздравляю с успешным прохождением теста."
    elif ( score >= 7) and (score <= 9):
        result="Отличный результат! Вы набрали " +str(score)+" из 10 баллов. Возможно, вам просто не повезло и вы не обладали какой-либо информацией впринципе. Однако, у вас все равно очень хорошая память. Возможно, вам следует использовать её более разумно."
    elif (score >= 4) and (score <= 6):
        result="Неплохой результат. Вы набрали " +str(score)+" из 10 баллов. Однако, вы запоминаете далеко не всё. Но может это и хорошо, т.к. вы не запоминаете бесполезную информацию, например ту которая используется в этом тесте."
    elif (score >= 1) and (score <= 3):
        result="Что ж, результат довольно плох. Вы набрали " +str(score)+" из 10 баллов. Вам следует поработать над своей памятью. Потренировать её, чтобы важная информация не вылетала из головы."
    else:
        result="Ого!!! Да вы ничего не помните! Вы набрали 0 баллов. Вам определенно следует тренировать свою память, иначе в будущем вы не сможете вспомнить ваше собственное имя. А это довольно грустно."

    bdobj.save()
    return render(request, "main/memory_result.html", {'result':result})




def math_result(request):
    ans1=request.POST['ans1']
    ans2=request.POST['ans2']
    ans3 = request.POST['ans3']
    ans4 = request.POST['ans4']
    ans5 = request.POST['ans5']
    ans6 = request.POST['ans6']
    ans7 = request.POST['ans7']
    ans8 = request.POST['ans8']
    ans9 = request.POST['ans9']
    ans10 = request.POST['ans10']

    score = 0

    if ans1 == '2':
        score += 1
    if ans2 == '73':
        score += 1
    if ans3 == '144':
        score += 1
    if ans4 == '3':
        score += 1
    if ans5 == '15':
        score += 1
    if ans6 == '10':
        score += 1
    if ans7 == '20':
        score += 1
    if ans8 == '33':
        score += 1
    if ans9 == '50':
        score += 2
    if ans10 == '7':
        score += 2

    bd = Stat.objects.all()

    for bdobj in bd:
        if bdobj.title == "Математический тест":
            break

    bdobj.total += 1

    if score==12:
        bdobj.bests+=1
        result = "Невероятно!!! Вы сделали это! Вы смогли! Вы набрали высший балл! Вы очень талантливый и усердный человек. Однако, помните, что всегда есть к чему стремиться и эта победа лишь одна из многих в вашей жизни."
    elif (score <= 11) and (score >= 9):
        result ="Ого! Да вам удалось набрать " + str(score) + " из 12 баллов. Это просто замечательный результат. У вас определенно талант! Однако, это не самый лучший результат на который вы способны. Ещё бы чуть-чуть и... В общем, не останавливайтесь и вы получите то, что хотите."
    elif (score <= 8) and (score >= 5):
        result ="Неплохой результат! Вы набрали " + str(score) + " из 12 баллов. У вас определенно есть неплохие знания в математике и способности к ней. Однако, возможно, вам не хватает упорства. Проявите больше рвения и у вас точно получится добиться поставленной цели."
    elif (score >= 1) and (score <= 4):
        result ="По результатам теста вы смогли набрать "+str(score)+" из 12 баллов. Такой результат означает, что вам недостает довольно большого объема знаний. Однако, если вы постараетесь, то в будущем сможете, добиться чего-то большего.(наверное)"
    else:
        result = "Что ж, вам удалось не получить ни 1 балла. Своего рода это тоже достижение. Однако, скорее всего, вы достаточно далеки от математики. Думаю, вам не стоит к ней приближаться."

    bdobj.save()

    return render(request, "main/math_result.html", {'result':result})


def mind_result(request):
    ans1 = request.POST.getlist('quest1')
    ans2 = request.POST.getlist('quest2')
    ans3 = request.POST.getlist('quest3')
    ans4 = request.POST.getlist('quest4')
    ans5 = request.POST.getlist('quest5')
    ans6 = request.POST.getlist('quest6')
    ans7 = request.POST.getlist('quest7')
    ans8 = request.POST.getlist('quest8')
    ans9 = request.POST.getlist('quest9')
    ans10 = request.POST.getlist('quest10')

    score=0

    if ans1==['ans1_4']:
        score+=1
    if ans2==['ans2_3']:
        score+=1
    if ans3==['ans3_1']:
        score+=1
    if ans4==['ans4_1']:
        score+=1
    if ans5==['ans5_2']:
        score+=1
    if ans6==['ans6_1']:
        score+=1
    if ans7==['ans7_3']:
        score+=1
    if ans8==['ans8_3']:
        score+=1
    if ans9==['ans9_3']:
        score+=1
    if ans10==['ans10_2']:
        score+=1

    bd = Stat.objects.all()

    for bdobj in bd:
        if bdobj.title == "Тест на умственный возраст":
            break

    bdobj.total += 1

    if (score>=8) and (score <= 10):
        bdobj.bests+=1
        result="Ваш умственный возраст: старше 30 лет. У вас за плечами большой опыт. Вы достаточно хорошо развиты в интелектуальном плане и скорее всего имеете высокий социальный статус."
    elif ( score >= 6) and (score <= 7):
        result="Ваш умственный возраст: 21-26 лет. У вас есть достаточно хорошая картина мира и вы обладаете отличными навыками в различных сферах жизни. Однако, возможно, вам просто еще не достаёт опыта."
    elif (score >= 3) and (score <= 5):
        result="Ваш умственный возраст: 14-18 лет. Вы еще учитесь и познаете окружающий мир. Однако, уже сейчас имеете неплохие знания о нём. Не останавливайтесь и продолжайте развиваться."
    else:
        result="Ваш умственный возраст: младше 14 лет. Вы только в начале своего жизненного пути. Приложите хорошие усилия и вы сможете добиться чего-то большего."

    bdobj.save()
    return render(request,"main/mind_result.html", {'result':result})
