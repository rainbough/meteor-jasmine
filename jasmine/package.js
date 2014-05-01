Package.describe({
	summary: "Jasmine testing packaged for meteor"
});

Package.on_use(function(api) {
	api.use(["underscore", "templating"], "client");
	api.add_files(["jasmine.js", "jasmine-html.js", "boot.js", "console.js", "jasmine.css", "jasmine_favicon.png", "SpecRunner.html"], "client");
});

