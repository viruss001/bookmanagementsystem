# Generated by Django 5.0.2 on 2024-03-01 08:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_book'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='book_author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='author', to='api.author'),
        ),
    ]