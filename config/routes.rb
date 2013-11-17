LightsOut::Application.routes.draw do
  root to: 'home#index'
  
  get '/profile' => 'user#profile'
  get '/logout' => 'user#logout'

  post '/sign_up' => 'user#sign_up'
  post '/login' => 'user#login'

  get '/games/:id' => 'game#show'
  post '/games/:id' => 'game#end'

  get '/leaderboard' => 'game#leader'
  get '/level/:id' => 'game#top_scores'
end
