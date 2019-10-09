Rails.application.routes.draw do
  get 'project/index'
  resources :about_mes
  resources :projects
  get 'welcome/index'
  get 'welcome/aboutme'
  get 'welcome/projects'

  root 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
