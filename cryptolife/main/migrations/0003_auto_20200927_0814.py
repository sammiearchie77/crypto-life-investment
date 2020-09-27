# Generated by Django 2.2 on 2020-09-27 08:14

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20200927_0422'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='transaction_id',
            field=models.UUIDField(default=uuid.UUID('9e83caed-dfe7-4b57-b9b3-52249dc0009c'), primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='withdraw',
            name='amount',
            field=models.PositiveIntegerField(),
        ),
    ]
