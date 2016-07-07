#!/bin/bash

#NPM packages
echo "Install NPM packages"

echo '{
  "name": "ruspackage",
  "version": "1.0.0",
  "description": "Standard package with gulp, bower and NPM",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
  }
}' > package.json

npm install
npm install del --save
npm install gulp --save
npm install gulp-concat --save
npm install gulp-flatten --save
npm install gulp-clean-css --save
npm install gulp-notify --save
npm install gulp-plumber --save
npm install gulp-rename --save
npm install gulp-sass --save
npm install gulp-uglify --save
npm install merge-stream --save
npm install run-sequence --save


#Bower packages
echo "Install bower packages"

echo '{
  "name": "ruspackageBower",
  "authors": [
    "Guido <G.rus@de-rus.nl>"
  ],
  "description": "",
  "main": "",
  "license": "MIT",
  "homepage": "http://www.de-rus.nl",
  "private": true,
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
  }
}' > bower.json

bower install
bower install jquery --save
bower install font-awesome --save
bower install bootstrap-sass --save
bower install angular --save
bower install Hover --save
bower install bourbon --save
# bower install datatables.net --save
# bower install datatables.net-bs --save
# bower install ckeditor --save
# bower install sweetalert2 --save
# bower install flatpickr-calendar --save
# bower install hint.css --save
# bower install magic --save
# bower install fullpage.js --save


#Run Gulp
echo "Run main Gulp task"
gulp

echo "Create index.html"
echo '<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>First page</title>
        <link href="dist/css/styles.css" rel="stylesheet">
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>   

        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand">Project name</a>
                </div>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <h1>Hello Worldje</h1>
                </div>
            </div>  
        </div>

        <script src="dist/js/concat.js"></script>
    </body>
</html>' > index.html
