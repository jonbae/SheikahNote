# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Notebook.destroy_all

demo = User.create!( {username: 'demo123', email: 'demo@mail.com', password: 'password'} )
zelda = User.create!(  {username: 'zelda', email: 'zelda@mail.com', password: 'password'} )

ot_notebook = Notebook.create!(  {title: 'Ocarina of Time', author_id: demo.id} )
mm_notebook = Notebook.create!(  {title: "Majora's Mask", author_id: demo.id} ) 
botw_notebook = Notebook.create!(  {title: 'Breath of the Wild', author_id: zelda.id} ) 
ww_notebook = Notebook.create!(    {title: 'Wind Waker', author_id: demo.id} )

# user_list = [
#     {username: 'test123', email: 'test@mail.com', password: 'password'},
   
#     { email: 'nousername@mail.com', password: 'password'}, 
  
#     {username: 'green_tunic_link', email: 'link@mail.com', password: 'password'}
# ]

# notebook_list = [
     
   
  
# ]

# user_list.each do |attributes| #|username, email, password|
#     User.create(attributes)
# end

# notebook_list.each do |attributes| 
#     Notebook.create(attributes)
# end


