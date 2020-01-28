# React in Rails: Single Page Application

## Set Up
- $ rails new single_page_app
- $ bundle add react-rails
- $ bundle install
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ rails g react:component App

## Route and Controller
- $ rails g controller Pages
- remove unnecessary controller pages (helpers and stylesheets)
- Add a route to *config/routes.rb* root to: 'pages#root'

## React Component
- *app/javascript/components/App.js*
- add an h1 to provide something to see in the browser

## View
- add a file to *app/views/pages* root.html.erb
- Add code to render the react component
- $ rails s
- See the erb and component render

## Passing Info from Rails to React with Props
- add an index method to the *app/controllers/pages_controller.rb*
- add an instance variable @name
- pass the instance variable into the component call in the view { name: @name}
- call the variable in App.js { this.props.name }

## Add Bootstrap and Reactstrap
- $ bundle add bootstrap
- restart rails server if running!!
- change application.css to be named application.scss:
- $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- add an import to the file  @import 'bootstrap'
- $ yarn add reactstrap


## Add Router
- $ yarn add react-router-dom
- update the config file to define what will route to the react components
- the root view file will call the react App.js component which will render all the other components

## Add Pages to Navigate Between
- add a directory called pages to *app/javascript/components*
- add a file to *app/javascript/components/pages/Home.js* ??????
- add enough code to have something render on the page
- add a file to *app/javascript/components/pages/AboutMe.js*
- add enough code to have something render on the page
- add a file to *app/javascript/components/pages/LearnMore.js*
- add enough code to have something render on the page
- add wrap the return content in Router tags
- update the NavLink to appropriate route and link name
- add a route and component call

## Styling the React Components
- add a file in *app/javascript/components* called styles.css
- import the file to App.js import './styles.css'
