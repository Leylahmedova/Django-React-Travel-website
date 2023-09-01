from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from blog.views import contact_view,register,login,verify_user,send_reset_code_email,reset_password_with_code,update_profile,get_user_data,update_password
from rest_framework_simplejwt.views import TokenVerifyView
urlpatterns = [
    path("admin/", admin.site.urls),
    path("",TemplateView.as_view(template_name='base.html')),
    path('blog/', include('blog.urls')),
    # path('basket/', include('basket.urls')),
     #contact
    path('api/contact/', contact_view, name='contact'),
    #login_register
    path('api/register/', register, name='register'),
    path('api/login/', login, name='login'),
    path('api/verify/<str:verification_code>/', verify_user, name='verify_user'),
    path('api/send-reset-code-email/', send_reset_code_email, name='send-reset-code-email'),
    path('api/reset-password-with-code/',reset_password_with_code, name='reset-password-with-code'),
    path('api/get_user_data/',get_user_data, name='get_user_data'),
    path('api/update_profile/',update_profile, name='update_profile'),
    path('api/update_password/',update_password, name='update_password'),
    path('payments/', include('payments.urls')),
     
    re_path(r'^(?P<path>.*)/$', TemplateView.as_view(template_name='base.html')),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


