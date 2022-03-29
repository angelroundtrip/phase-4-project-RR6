Rails.application.routes.draw do
  resources :sessions
  resources :posts
  resources :users

  post '/signup', to: 'users#create'
  get "/me", to: "users#show"
  # get '/authorization', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  # get '/home', to: 'posts#show'

  get'/authorized_user', to: 'users#show'

  
end
