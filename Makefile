build:
	docker build -t cipherunit:1.0 .

run:
	docker run --name cipherportfolio --env-file .env -p 3000:3000 cipherunit:1.0

stop:
	docker stop cipherportfolio

restart:
	docker restart cipherportfolio

logs:
	docker logs cipherportfolio

delete:
	docker rm -f cipherportfolio