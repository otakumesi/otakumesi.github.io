.PHONY: update
update:
	git show develop:public/CNAME > CNAME
	git show develop:public/reset.css > reset.css
	git show develop:public/index.html > index.html
	git show develop:public/app.bundle.js > app.bundle.js
	git show develop:public/vendors.bundle.js > vendors.bundle.js
