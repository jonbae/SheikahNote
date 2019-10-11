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


diary1 = Note.create!( {title: "Zelda's diary entry 1", content:"After meeting with the Champions, 
I left to research the ancient technology, but nothing of note came of my research. 
The return of Ganon looms—a dark force taunting us from afar. 
I must learn all I can about the relics so we can stop him. 
If the fortune-teller's prophecy is to be believed, there isn't much time left... 
Ah, but turning over these thoughts in my head puts me ill at ease. 
I suppose I should turn in for the night.

P.S. Tomorrow my father is assigning HIM as my appointed knight...", author_id: zelda.id, notebook_id: botw_notebook.id })

diary2 = Note.create!( {title: "Zelda's diary entry 2", content:"I set out for Goron City today to make some adjustments to Divine Beast Vah Rudania. 
I still recall feeling his eyes on me as I walked ahead. 
The feeling stayed with me so long, I grew anxious and weary. 
It is the same feeling I've felt before in his company... 
And still, not a word passes his lips. I never know what he's thinking! 
It makes my imagination run wild, guessing at what he is thinking but will not say. 
What does the boy chosen by the sword that seals the darkness think of me? Will I ever truly know? Then, I suppose it's simple. 
A daughter of Hyrule's royal family yet unable to use sealing magic... He must despise me.",
author_id: zelda.id, notebook_id: botw_notebook.id })

diary3 = Note.create!( {title: "Zelda's diary entry 3", content:"I said something awful to him today... My research was going nowhere. I was feeling depressed, and I had told him repeatedly not to accompany me. But he did anyway, as he always does, and so I yelled at him without restraint. He seemed confused by my anger. I feel terribly guilty...and that guilt only makes me more agitated then I was before.",
author_id: zelda.id, notebook_id: botw_notebook.id})

diary4 = Note.create!( {title: "Zelda's diary entry 4" , content: "I am unsure how to put today's events into words. Words so often evade me lately, and now more than ever. He saved me. Without a thought for his own life, he protected me from the ruthless blades of the Yiga Clan. Though I've been cold to him all this time...taking my selfish and childish anger out on him at every turn... Still, he was there for me. I won't ever forget that. Tomorrow, I shall apologize for all that has transpired between us. And then...I will try talking to him. To Link. It's worth a shot.",
author_id: zelda.id, notebook_id: botw_notebook.id})

diary5 = Note.create!( {title: "Zelda's diary entry 5", content: "Bit by bit, I've gotten Link to open up to me. It turns out he's quite a glutton. He can't resist a delicious meal! When I finally got around to asking why he's so quiet all the time, I could tell it was difficult for him to say. But he did. With so much at stake, and so many eyes upon him, he feels it necessary to stay strong and to silently bear any burden. A feeling I know all too well... For him, it has caused him to stop outwardly expressing his thoughts and feelings. I always believed him to be simply a gifted person who had never faced a day of hardship. How wrong I was... Everyone has struggles that go unseen by the world... I was so absorbed with my own problems, I failed to see his. I wish to talk with him more and to see what lies beneath those calm waters, to hear him speak freely and openly... And perhaps I, too, will be able to bare my soul to him and share the demons that have plagued me all these years.",
author_id: zelda.id, notebook_id: botw_notebook.id})

diary6 = Note.create!( {title: "Zelda's diary entry 6", content: "Father scolded me again today. He told me I am to have nothing more to do with researching ancient technology. He insisted that I focus instead on training that will help me awaken my sealing magic. I was so frustrated and ashamed I could not even speak. I've been training since I was a child, and yet... Mother passed the year before my training was to begin. In losing her, I lost not just a mother, but a teacher. Mother used to smile and tell me, \"Zelda, my love, all will be well in the end. You can do anything.\" But she was wrong. No matter how I try or how much time passes...the sealing power that is my birthright evades me. Tomorrow I journey with Link to the Spring of Power to train. But this, too, will end in failure. Such is my curse.",
author_id: zelda.id, notebook_id: botw_notebook.id })


note1 = Note.create!( {title: "navi", content: "hey listen" , author_id: demo.id, notebook_id: ot_notebook.id})

note2 = Note.create!( {title: "skull kid", content: "...", author_id: demo.id, notebook_id: mm_notebook.id})

note3 = Note.create!( {title: "King of Red Lions", content: "Did I startle you? I suppose that is only natural. As wide as the world is, I am the only boat upon it who can speak the words of men. I am the King of Red Lions. Do not fear... I am not your enemy.", 
author_id: demo.id, notebook_id: ww_notebook.id})
