from django.urls import path

from api import views

urlpatterns = [
    path("", views.home),
    path("getbook", views.getBooks),
    path("getauthor", views.getAllAuthors),
    path("getauthor/<name>", views.getAuthor),
    path("searchauthor/<name>", views.Search),
    path("getbook/<id>", views.getBook),
    path("getbook/<id>/author", views.getBookAuthor),
]
