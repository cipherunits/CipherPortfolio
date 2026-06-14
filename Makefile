build:
	docker build -t cipherunit:1.0 .

run:
	docker run --env-file .env -p 3000:3000 cipherunit:1.0
	
install:
	pnpm install
