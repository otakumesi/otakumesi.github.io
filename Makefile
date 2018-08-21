.PHONY: deploy
deploy:
	git subtree push --prefix public origin master
