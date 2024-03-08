from rest_framework.serializers import ModelSerializer
from .models import *
class AuthorSerializer(ModelSerializer):
       class Meta:
        model = Author
        fields = "__all__"
class BookSerializer(ModelSerializer):
      author = AuthorSerializer(many= True,read_only=True)
      
      class Meta:
        model = Book
        fields = "__all__"
        depth = 1