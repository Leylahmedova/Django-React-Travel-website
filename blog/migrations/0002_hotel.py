# Generated by Django 3.2 on 2023-07-30 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('type', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=200)),
                ('destination', models.CharField(max_length=100)),
                ('price', models.FloatField()),
                ('rating', models.FloatField()),
                ('amenities', models.JSONField()),
                ('reviewCount', models.IntegerField()),
                ('reviewQuality', models.CharField(max_length=50)),
                ('freebies', models.JSONField()),
                ('checkIn', models.DateField()),
                ('checkOut', models.DateField()),
                ('roomsGuests', models.CharField(max_length=50)),
                ('image', models.URLField()),
                ('room1price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('room2price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('room3price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('room4price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('overview', models.TextField()),
                ('iframe', models.URLField()),
                ('staysImages', models.JSONField()),
            ],
        ),
    ]
