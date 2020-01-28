Rails.application.routes.draw do
  # All html traffic goes to "pages#root", our React app.
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  # Handles the special case of the root page, which also routes to the React single page app.
  root to: 'pages#root'
end
