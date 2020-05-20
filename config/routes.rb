Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create,:show] 
    resource :session, only: [:create, :destroy]
    resources :watch_lists, only: [:create, :index, :destroy]
    resources :transactions, only: [:index, :create, :show, :destroy]
    resources :stocks, only: [:show, :index] 
    resources :portfolios, only: [:index]
  end 
  

  root to: "static_pages#root"
end
