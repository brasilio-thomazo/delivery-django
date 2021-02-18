from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('gui/', include('gui.urls')),
    path('api/', include('api.urls'))
]
