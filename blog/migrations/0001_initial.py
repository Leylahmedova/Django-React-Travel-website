# Generated by Django 3.2 on 2023-07-30 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('created_date', models.CharField(max_length=40)),
                ('image', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('airline', models.CharField(max_length=40)),
                ('price', models.FloatField()),
                ('rating', models.FloatField()),
                ('airportImg', models.URLField()),
                ('image', models.ImageField(upload_to='productImages/')),
                ('passengerClass', models.CharField(max_length=40)),
                ('reviewQuality', models.CharField(max_length=40)),
                ('fromTo', models.CharField(max_length=40)),
                ('departTime', models.CharField(max_length=40)),
                ('departDate', models.DateField()),
                ('arrivalTime', models.CharField(max_length=40)),
                ('durationstring', models.CharField(max_length=40)),
                ('reviewCount', models.IntegerField()),
                ('returnDate', models.DateField()),
                ('froms', models.CharField(max_length=40)),
                ('to', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('rating', models.CharField(max_length=100)),
            ],
        ),
    ]
