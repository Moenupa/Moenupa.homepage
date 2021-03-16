#!/bin/sh

rm -rf ./dist/css/*

cd ./node_modules/bootstrap/
sass ./scss/bootstrap.scss ./dist/css/bootstrap.css
sass --style compressed ./scss/bootstrap.scss ./dist/css/bootstrap.min.css

sass ./scss/bootstrap-grid.scss ./dist/css/bootstrap-grid.css
sass --style compressed ./scss/bootstrap-grid.scss ./dist/css/bootstrap-grid.min.css

sass ./scss/bootstrap-reboot.scss ./dist/css/bootstrap-reboot.css
sass --style compressed ./scss/bootstrap-reboot.scss ./dist/css/bootstrap-reboot.min.css

sass ./scss/bootstrap-dark.scss ./dist/css/bootstrap-dark.css
sass --style compressed ./scss/bootstrap-dark.scss ./dist/css/bootstrap-dark.min.css