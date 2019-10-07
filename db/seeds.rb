# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all

demo = User.create!( {username: 'demo123', email: 'demo@mail.com', password: 'password'} )
zelda = User.create!(  {username: 'zelda', email: 'zelda@mail.com', password: 'password'} )

ot_notebook = Notebook.create!(  {title: 'Ocarina of Time', author_id: demo.id} )
mm_notebook = Notebook.create!(  {title: "Majora's Mask", author_id: demo.id} ) 
botw_notebook = Notebook.create!(  {title: 'Breath of the Wild', author_id: zelda.id} ) 
ww_notebook = Notebook.create!(    {title: 'Wind Waker', author_id: demo.id} )


diary1 = Note.create!( {title: "zelda's diary entry 1", content:"After meeting with the Champions, 
I left to research the ancient technology, but nothing of note came of my research. 
The return of Ganon looms—a dark force taunting us from afar. 
I must learn all I can about the relics so we can stop him. 
If the fortune-teller's prophecy is to be believed, there isn't much time left... 
Ah, but turning over these thoughts in my head puts me ill at ease. 
I suppose I should turn in for the night.

P.S. Tomorrow my father is assigning HIM as my appointed knight...", author_id: zelda.id, notebook_id: botw_notebook.id })

diary2 = Note.create!( {title: "zelda's diary entry 2", content:"I set out for Goron City today to make some adjustments to Divine Beast Vah Rudania. 
I still recall feeling his eyes on me as I walked ahead. 
The feeling stayed with me so long, I grew anxious and weary. 
It is the same feeling I've felt before in his company... 
And still, not a word passes his lips. I never know what he's thinking! 
It makes my imagination run wild, guessing at what he is thinking but will not say. 
What does the boy chosen by the sword that seals the darkness think of me? Will I ever truly know? Then, I suppose it's simple. 
A daughter of Hyrule's royal family yet unable to use sealing magic... He must despise me." ,author_id: zelda.id, notebook_id: botw_notebook.id })

note3 = Note.create!( {title: "navi", content: "hey listen" , author_id: demo.id, notebook_id: ot_notebook.id})

