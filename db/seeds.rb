# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    Steve_Purple = User.create(username: "steve_purple", password: "password", role: "patient", region: "New York", category: "Anxiety", price: 100, description: "I'm working on my anxiety and moving forward from my past.") 
    Beth_Lenco = User.create(username: "beth_lenco", password: "password", role: "patient", region: "New York", category: "Death", description: "I'm Alexandra and my dog's death is prohibiting me from studying for finals.")
    Jay_Fitz = User.create(username: "jay_fitz", password: "password", role: "patient", region: "New York", category: "Anorexia", description: "I'm having trouble eating properly because my boyfriend left me.")
    Peter_Choi = User.create(username: "peter_choi", password: "password", role: "patient", region: "New York", category: "Anxiety", description: "I'm so nervous!")
    Priscilla_A = User.create(username: "priscilla_a", password: "password", role: "patient", region: "New York", category: "Death", description: "My fish died :(")
    Mr_Browm = User.create(username: "mr_browm", password: "password", role: "patient", region: "New York", category: "Anorexia", description: "I have trouble eating :(")
    Quentin_Ma = User.create(username: "quentin_ma", password: "password", role: "patient", region: "New York", category: "Anxiety", description: "My anxiety is crippling")
    Jeff_Hardy = User.create(username: "jeff_hardy", password: "password", role: "patient", region: "New York", category: "Anorexia", description: "I hate eating!")

    Katie_Lee = User.create(username: "katie_lee", password: "password", role: "patient", region: "New York", category: "Anxiety", description: "I have severe anxiety!")
    Alma_Mater = User.create(username: "alma_mater", password: "password", role: "patient", region: "New York", category: "Anxiety", description: "I have severe anxiety!")
    Will_Winslow = User.create(username: "will_winslow", password: "password", role: "patient", region: "New York", category: "Anxiety", description: "I have severe anxiety!")

    Brennan_Ayres = User.create(username: "brennan_ayres", password: "password", role: "therapist", region: "New York", category: "Anxiety", price: 100, description: "I can help you with anxiety issues. Please reach out.")
    Chelsea_Oro = User.create(username: "chelsea_oro", password: "password", role: "therapist", region: "New York", category: "Death", price: 100, description: "I have experience helping people dealing with death in the family.")
    Tony_White = User.create(username: "tony_white", password: "password", role: "therapist", region: "New York", category: "Anorexia", price: 100, description: "I have great sympathy for people with anorexia. Let me help.")
    Brian_Adams = User.create(username: "brian_adams", password: "password", role: "therapist", region: "New York", category: "Anxiety", price: 100, description: "I've been practicing for 12 years. I can help with anxiety")
    David_Herbert = User.create(username: "david_herbert", password: "password", role: "therapist", region: "New York", category: "Death", price: 100, description: "I've always wanted to be a therapist since I was young. I've been practicing my whole life.")
    Jon_Park = User.create(username: "jon_park", password: "password", role: "therapist", region: "New York", category: "Anorexia", price: 100, description: "I'm trained to talk about sensitive issues like eating disorders")
    Lisa_Collins = User.create(username: "lisa_collins", password: "password", role: "therapist", region: "New York", category: "Anxiety", price: 100, description: "I've personally dealth with anxiety. I might know what you're going through.")
    Lady_Ferris = User.create(username: "lady_ferris", password: "password", role: "therapist", region: "New York", category: "Death", price: 100, description: "Death of someone you know can be a life-changing moment. I'm here to talk about it.")
    Richard_Feynman = User.create(username: "richard_feynman", password: "password", role: "therapist", region: "New York", category: "Anorexia", price: 100, description: "I've dealt with many people who struggle with eating habits. I'm a good person to talk to.")

    Merlin_Ferg = User.create(username: "merlin_ferg", password: "password", role: "therapist", region: "New York", category: "Death", description: "I have experience talking about Death. Almost all of my patients walk away with a more positive outlook.")
    Tim_Book = User.create(username: "tim_book", password: "password", role: "therapist", region: "New York", category: "Anxiety", price: 100, description: "I'm Tim Book and I can help you with anxiety issues. Please reach out.")
    Larry_Gap = User.create(username: "larry_gap", password: "password", role: "therapist", region: "New York", category: "Anxiety", price: 100, description: "I'm Larry Gap and we can work through tactice to reduce anxiety.")    
    Sue_Kim = User.create(username: "sue_kim", password: "password", role: "therapist", region: "New York", category: "Anxiety", description: "Hey, I'm Sue. I've dealt with anxiety my whole life. That's why I decided to be therapist to help others.")
    Heath_Gao = User.create(username: "heath_gao", password: "password", role: "therapist", region: "New York", category: "Anxiety", description: "I'm Heath. I work mostly with people with anxiety. How can I help?")
    #one patient with many requests.
    # request1 = Request.create(patient_id: Steve_Purple.id, therapist_id: Brennan_Ayres.id, description: "Brennan, I'm stressed about being addicted to technology", done: "false");
    # request2 = Request.create(patient_id: Steve_Purple.id, therapist_id: Brian_Adams.id, description: "Brian, I'm feeling so anxious about my kid going to his first sleepover.", done: "false");
    # request3 = Request.create(patient_id: Steve_Purple.id, therapist_id: Lisa_Collins.id, description: "I don't think I can be a father yet Lisa.", done: "false");
    # request4 = Request.create(patient_id: Steve_Purple.id, therapist_id: Tim_Book.id, description: "I'm panicking about my midterms Tim", done: "false");
    # request5 = Request.create(patient_id: Steve_Purple.id, therapist_id: Larry_Gap.id, description: "Do you think she likes me Larry?", done: "false");
    # request6 = Request.create(patient_id: Steve_Purple.id, therapist_id: Sue_Kim.id, description: "I'm anxious about my parents' health", done: "false");
    # request12 = Request.create(patient_id: Steve_Purple.id, therapist_id: Merlin_Ferg.id, description: "Merlin, I'm scared to die.", done: "false");

    #one therapist with many requests.
    request7 = Request.create(patient_id: Peter_Choi.id, therapist_id: Merlin_Ferg.id, description: "Merlin, I'm worried about what's gonna happen when I die.", done: "false");
    request8 = Request.create(patient_id: Quentin_Ma.id, therapist_id: Merlin_Ferg.id, description: "I'm getting old Merlin. I don't know what to do.", done: "false");
    request9 = Request.create(patient_id: Katie_Lee.id, therapist_id: Merlin_Ferg.id, description: "My long time dog passed away last night.", done: "false");
    request10 = Request.create(patient_id: Alma_Mater.id, therapist_id: Merlin_Ferg.id, description: "Should I believe in God?", done: "false");
    request11 = Request.create(patient_id: Will_Winslow.id, therapist_id: Merlin_Ferg.id, description: "My friend has talked about hurting herself. What should I do?", done: "false");
    
    
