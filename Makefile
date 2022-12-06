# How to add more to Git Bash on Windows https://gist.github.com/evanwill/0207876c3243bbb6863e65ec5dc3f058
# Build docker compose conveniently. It removes existing running instances, if any. Note: Manual prune of old images.
docker:
	@(cp -u -p .env.docker .env)
	docker-compose down -v --remove-orphans
	docker-compose rm -vsf
	docker-compose up -d --build
	docker-compose logs -ft shortier-app

undock:
	docker-compose down