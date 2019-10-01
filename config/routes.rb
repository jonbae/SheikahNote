Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
  
  # nest tags in notes 
  # and nest notes in tags 

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create,:destroy]
    
    resources :notebooks, except: [:new, :edit] 
    
    resources :notes, except: [:new, :edit] 
    
    # do tags have show? or is this the jbuilder stuff? 
    resources :tags, only: [:show] do 
      resources :notes, only: [:index]
    end

    resources :notes, only: [:show] do 
      resources :tags, only: [:create, :destroy] 
    end
    
    resources :taggings, only: [:create, :destroy, :index]
  end
end
