# React in Rails: Hello World

## Set Up
- $ rails new hello_world
- $ bundler add react-rails
- $ bundle install
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ rails g react:component HelloWorld

## React Component
- *app/javascript/components/HelloWorld.js*
- add an h1 with Hello World!

## Route and Controller
- $ rails g controller Pages
- add a route to *config/routes.rb*

## View
- add a file to *app/views/pages* index.html.erb
- Add code to render the react component
