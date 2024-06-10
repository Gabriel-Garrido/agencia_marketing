from django.db import models

class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True) #este es el nombre que aparecerá en la url especifica de esta categoria
    views = models.IntegerField(default=0, blank=True) #para contar las visitas a la categoria
    parent = models.ForeignKey('self', related_name = 'children', on_delete=models.CASCADE, blank=True, null=True)
    
    def __str__(self):
        return self.name
    
    def get_view_count(self):
        views = ViewCount.objects.filter(category=self).count()
        return views

class ViewCount(models.Model):
    category = models.ForeignKey(Category, related_name='category_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)
    
    def __str__(self):
        return f"{self.ip_address}"