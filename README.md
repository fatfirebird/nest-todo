# TODO app

Туду приложение созданное с целью обучения

## Описание переменных окружения

| Переменная        | Описание                         |
| ----------------- | -------------------------------- |
| POSTGRES_USER     | имя пользователя постгреса       |
| POSTGRES_DB       | название бд посгреса             |
| POSTGRES_PASSWORD | пароль бд                        |
| DATABASE_HOST     | DATABASE_HOST                    |
| PGADMIN_EMAIL     | email для входа в постгрес админ |
| PGADMIN_PASSWORD  | пароль от постгрес админ         |

## Запуск проекта

### Перед сборкой

<b>Перед работой необходимо в корне проекта создать файл .env и поместить туда переменные описанные в .env.example</b>

<b>ЗНАЧЕНИЯ ПЕРЕМЕННЫХ УКАЗАНЫ ДЛЯ ПРИМЕРА, НЕ ИСПОЛЬЗУЙТЕ ИХ!</b>

### Команды

```bash
docker-compose build
```

Запуск контейнеров

```bash
docker-compose up
```

Отключение контейнеров

```bash
docker-compose down
```

Для запуска в dev и prod окружении созданы скрипты

```bash
sh ./scripts/dev.sh

sh ./scripts/prod.sh
```

Альтернативно можно запустить контейнеры руками

```bash
docker-compose up -d dev postgres pgadmin

docker-compose up -d prod postgres pgadmin
```
