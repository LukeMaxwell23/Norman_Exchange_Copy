Rails.application.routes.draw do
   root "pages#home"
  get "about", to: "pages#about"
  get "profile", to: "pages#profile"  
  
  get "pages/user"
  get "pages/home"
  get "pages/about"
  devise_for :users


  resources :listings


  get "up" => "rails/health#show", as: :rails_health_check

end
