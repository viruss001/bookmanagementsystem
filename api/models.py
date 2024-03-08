from django.db import models

# Create your models here.
class Author(models.Model):
    author_name=models.CharField(max_length=100)
    author_bio=models.TextField()
    def __str__(self):
        return self.author_name
class Book(models.Model):
    book_name=models.CharField(max_length=100)
    book_price = models.IntegerField()
    book_category = models.CharField(max_length=100)
    book_author= models.ForeignKey(Author,on_delete=models.CASCADE)
    def __str__(self):
        return self.book_name