from rest_framework import serializers
from .models import Todo
from .models import title

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'



class TitleSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = title
        # Поля, которые мы сериализуем
        fields = ["genre_id", "pk", "name", "pg", "release", "price"]