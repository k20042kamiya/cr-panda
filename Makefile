goContainerName=goapp
DBContainerName=mysql_host

build: #ビルド実行
	docker-compose build

up : #up実行
	docker-compose up

up/d:
	docker-compose up -d
down : #down実行
	docker-compose down

sql:
	docker exec -it $(DBContainerName) sh -c 'mysql -u $$MYSQL_USER -p$$MYSQL_PASSWORD $$MYSQL_DATABASE'
	mysql -u root -p root