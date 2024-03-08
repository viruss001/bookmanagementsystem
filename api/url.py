
from django.urls import path
from api import views
urlpatterns = [
    path('',views.home),
    path('getbook',views.getBooks),
    path('getbook/<id>',views.getBook),
    path('getbook/<id>/author',views.getBookAuthor),
    path('getauthor',views.getAllAuthors),
    path('getauthor/<name>',views.getAuthor),
    
    
]
