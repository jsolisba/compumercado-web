dev:
	docker compose -f docker-compose.dev.yml up --build

down:
	docker compose -f docker-compose.dev.yml down

logs:
	docker compose -f docker-compose.dev.yml logs -f

build:
	docker compose -f docker-compose.prod.yml build

lint:
	npm run lint

format:
	npm run format