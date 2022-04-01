Rails.application.routes.draw do

  resources :users
  resources :posts

  post '/signup', to: 'users#create'
  post '/update', to: 'users#update'
  post '/delete', to: 'users#delete'
  get "/me", to: "users#show"
  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

end
