LightsOut::Application.routes.draw do
  root to: 'home#index'
  
  get '/profile' => 'user#profile'
  get '/logout' => 'user#logout'

  post '/sign_up' => 'user#sign_up'
  post '/login' => 'user#login'
end