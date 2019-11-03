Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy] 
    resources :requests, only: [:index, :create, :destroy, :update]
  end

  get 'api/therapists', to: 'api/users#fetchTherapists', defaults: { format: :json } 
  get 'api/patients', to: 'api/users#fetchPatients', defaults: { format: :json } 

  resources :calls, only: :create
  mount ActionCable.server, at: '/cable'
  
end
