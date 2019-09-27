Rails.application.routes.draw do
  resources :about_mes
  get 'welcome/index'
  get 'welcome/aboutme'

  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
