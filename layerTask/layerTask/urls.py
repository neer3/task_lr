from django.contrib import admin
from django.urls import path, include
from details.models import FormDetails
from rest_framework import routers
from details import views as v1

router = routers.DefaultRouter()
router.register(r'det', v1.formViewSet, base_name='FormDetails')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
