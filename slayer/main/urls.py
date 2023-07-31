from django.urls import path
from . import views


urlpatterns = [
    path('', views.mainp, name='home'),
    path('main_page', views.mainp),
    path('first_surv', views.first_surv),
    path('second_surv', views.second_surv),
    path('third_surv', views.third_surv),
    path('about_me', views.about_me),
    path('math_result', views.math_result),
    path('memory_result', views.memory_result),
    path('mind_result',views.mind_result)
]
