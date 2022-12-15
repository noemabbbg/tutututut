from django.shortcuts import render
from rest_framework import viewsets
from datetime import date
from .serializers import TitleSerializer
from .models import title
class TitleViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = title.objects.all().order_by('name')
    serializer_class = TitleSerializer  # Сериализатор для модели



