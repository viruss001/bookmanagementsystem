from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializer import *


# Create your views here.
def home(request):
    return HttpResponse("hi iam suraj")


@api_view(["GET"])
def getBooks(request):
    obj = Book.objects.all()
    seri = BookSerializer(obj, many=True)

    return Response(seri.data)


@api_view(["GET"])
def getBook(request, id):
    obj = Book.objects.get(id=id)
    seri = BookSerializer(obj)

    return Response(seri.data)


@api_view(["GET"])
def getBookAuthor(request, id):
    obj = Book.objects.get(id=id).book_author.author_name
    author = Author.objects.get(author_name=obj)
    seri = AuthorSerializer(author)

    return Response(seri.data)


@api_view(["GET"])
def getAllAuthors(request):
    obj = Author.objects.all()
    seri = AuthorSerializer(obj, many=True)
    return Response(seri.data)


@api_view(["GET"])
def getAuthor(request, name):
    obj = Author.objects.get(author_name=name.lower())
    obj1 = Book.objects.filter(book_author=obj)
    seri = BookSerializer(obj1, many=True)
    return Response(seri.data)
