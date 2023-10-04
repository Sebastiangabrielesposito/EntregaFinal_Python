from django.urls import path
from .views import (
SearchUserView,
UserLoggedDataView,
update_profile_image, 
)

urlpatterns = [
    path('users-search/', SearchUserView.as_view(), name='users-search'),
    path('user-logged/', UserLoggedDataView.as_view(), name='users-logged'),
    path('update-profile-image/', update_profile_image, name='update_profile_image'),
]