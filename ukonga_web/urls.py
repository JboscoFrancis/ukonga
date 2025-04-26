from django.urls import path
from ukonga_web import views


urlpatterns = [
    path('', views.home, name='home')
]