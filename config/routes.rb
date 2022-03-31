Rails.application.routes.draw do
  resources :users
  # resources :sessions
  resources :posts

  post '/signup', to: 'users#create'
  get "/me", to: "users#show"
  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  post '/update', to: 'users#create'
  # get '/authorization', to: 'users#show'

  # get '/home', to: 'posts#show'

  # get'/authorized_user', to: 'users#show'

end
