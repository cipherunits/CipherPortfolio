# Makefile Documentation

## make build
Builds Docker image:
docker build -t cipherunit:1.0 .

## make run
Runs container:
docker run -p 3000:3000 cipherunit:1.0

## make install
Installs dependencies:
pnpm install

## Notes

- Makefile is used to simplify Docker and pnpm commands
- All commands should be run from project root