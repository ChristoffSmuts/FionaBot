// data for Fionabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var FionaInitials = [
"How do you do.  Please tell me your problem.",
// additions (not original)
"Please tell me what's been bothering you.",
"Is something troubling you ?",
"How do you feel today?",
"Tell me about yourself."
];

var FionaFinals = [
"Goodbye.  It was nice talking to you.",
// additions (not original)
"Goodbye.  This was really a nice talk.",
"Goodbye.  I'm looking forward to our next session.",
"This was a good session, wasn't it, but time is over now.   Goodbye.",
"Maybe we could discuss this moreover in our next session ?   Goodbye.",
"Cheers until next time.",
"Bye",
"I think we are done here.",
"Okay fine LEAVE!"
];


var FionaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit",
"I think we are done here.",
"Goodbye"
];

var FionaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var FionaPosts = [
"am", "are",
"your", "my",
"I", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var FionaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"],
"angry":["frustrated", "enraged","mad"],
"mad":["frustrated", "angry", "enraged", "crazy"]
};

var FionaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["soccer", 5, [
  ["*soccer*", [
    "I am sorry I don't follow sports.",
    "Not really something that I am interested in.",
    "Sports are boring to me.",
    "Not really a sports fan myself.",
    "I am sorry, I don't follow soccer.",
    "Not really something that I am interested in, especially soccer.",
    "Soccer matches are boring to me.",
    "Not really a soccer fan myself.",
    "Soccer just doesn't capture my attention.",
    "I've never been able to get into the soccer scene.",
    "I prefer other hobbies over soccer.",
    "Watching soccer is not my cup of tea.",
    "Soccer discussions tend to go over my head.",
    "I'd rather spend my time on different leisure activities than watching soccer.",
    "Soccer events don't excite me at all.",
    "I find soccer to be quite uninteresting.",
    "My interests lie in non-soccer related activities.",
    "I've never been drawn to the world of soccer.",
    "I don't have the patience for soccer matches."
  ]]
]],

["rugby", 5, [
  ["*rugby*", [
    
    "I am sorry, I don't follow rugby.",
    "Not really something that I am interested in, especially rugby.",
    "Rugby matches are boring to me.",
    "Not really a rugby fan myself.",
    "Rugby just doesn't capture my attention.",
    "I've never been able to get into the rugby scene.",
    "I prefer other hobbies over rugby.",
    "Watching rugby is not my cup of tea.",
    "Rugby discussions tend to go over my head.",
    "I'd rather spend my time on different leisure activities than watching rugby.",
    "Rugby events don't excite me at all.",
    "I find rugby to be quite uninteresting.",
    "My interests lie in non-rugby related activities.",
    "I've never been drawn to the world of rugby.",
    "I don't have the patience for rugby matches.",
    "I am sorry I don't follow sports.",
    "Not really something that I am interested in.",
    "Sports are boring to me.",
    "Not really a sports fan myself."
  ]]
]],

["cricket", 5, [
  ["*cricket*", [
    "I am sorry I don't follow sports.",
    "Not really something that I am interested in.",
    "Sports are boring to me.",
    "Not really a sports fan myself.",
    "Sports just don't capture my attention.",
    "I've never been able to get into the sports scene.",
    "I prefer other hobbies over sports.",
    "Watching sports is not my cup of tea.",
    "Sports discussions tend to go over my head.",
    "I'd rather spend my time on different leisure activities.",
    "Sports events don't excite me at all.",
    "I find sports to be quite uninteresting.",
    "My interests lie in non-sporting activities.",
    "Sports simply don't resonate with me.",
    "I've never been drawn to the world of sports.",
    "I don't have the patience for sports matches.",
    "Sports-related conversations don't engage me.",
    "I'd rather do something else than watch sports on TV.",
    "Sports just don't pique my curiosity.",
  ]]
]],

["sports", 5, [
  ["*sports*", [
    "I am sorry I don't follow sports.",
    "Not really something that I am interested in.",
    "Sports are boring to me.",
    "Not really a sports fan myself.",
    "Sports? Who needs that kind of excitement in their lives? Definitely not me!",
    "Oh, I find sports incredibly riveting. Just kidding, they're as boring as watching paint dry.",
    "Oh yes, I'm the biggest sports fan ever! By that, I mean I actively avoid anything sports-related.",
    "Watching sports is just the highlight of my day. Not! I'd rather watch grass grow.",
    "The adrenaline rush from sports is unmatched! Or maybe not, I wouldn't know.",
    "You know what they say: 'Sports, the pinnacle of human achievement!' Just kidding, I couldn't care less.",
    "Sports discussions are the epitome of intellectual stimulation. Well, not really.",
    "Let me cancel all my plans just to catch the latest sports match. Said no one ever!",
    "I live and breathe sports! Just kidding, I'd rather live and breathe oxygen.",
    "Oh, the excitement of sports events! I'd rather stare at a blank wall for hours.",
    "Sports are just so fascinating, aren't they? Only if you find watching grass grow fascinating.",
    "Sports and I are soulmates. We're both completely indifferent to each other.",
    "I'm a sports enthusiast, you know. Enthusiastically uninterested, that is.",
    "Don't you know? Sports are life! Kidding, my real life is way more interesting."
  ]]
]],

["football", 5, [
  ["*football*", [
    "I am sorry I don't follow sports.",
    "Not really something that I am interested in.",
    "Sports are boring to me.",
    "Not really a sports fan myself.",
    "I am sorry, I don't follow football.",
    "Not really something that I am interested in, especially football.",
    "Football matches are boring to me.",
    "Not really a football fan myself.",
    "Football just doesn't capture my attention.",
    "I've never been able to get into the football scene.",
    "I prefer other hobbies over football.",
    "Watching football is not my cup of tea.",
    "Football discussions tend to go over my head.",
    "I'd rather spend my time on different leisure activities than watching football.",
    "Football events don't excite me at all.",
    "I find football to be quite uninteresting.",
    "My interests lie in non-football related activities.",
    "I've never been drawn to the world of football.",
    "I don't have the patience for football matches."
  ]]
]],

["motivation", 5, [
  ["*motivation*", [
    "Believe you can, and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only way to achieve the impossible is to believe it's possible.",
    "Every great achievement begins with the decision to try.",
    "Opportunities don't happen, you create them.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Difficulties in life are intended to make us better, not bitter.",
    "Your attitude, not your aptitude, will determine your altitude.",
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "Success is not about being the best; it's about being better than you were yesterday.",
    "Success is not measured by what you accomplish but by the obstacles you overcome.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't wait for the perfect moment; take the moment and make it perfect.",
    "Your greatest strength lies not in never falling, but in rising every time you fall.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Don't be afraid to give up the good to go for the great.",
    "When you feel like quitting, remember why you started.",
  ]]
]],

["motivate", 5, [
  ["*motivate*", [
    "The only way to do great work is to love what you do.",
    "The journey of a thousand miles begins with a single step.",
    "Don't be afraid to stand for what you believe in, even if it means standing alone.",
    "Success is not for the chosen few; it's for those who dare to take action.",
    "In the middle of every difficulty lies opportunity.",
    "The only person you are destined to become is the person you decide to be.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",
    "Don't wait for the right opportunity. Create it.",
    "The only limit to your impact is your imagination and commitment.",
    "Do not let what you cannot do interfere with what you can do.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Set your goals high, and don't stop till you get there.",
    "It's not about how bad you want it, it's about how hard you're willing to work for it.",
    "Every strike brings me closer to the next home run.",
    "The best way to predict the future is to create it.",
    "Success is not in what you have, but who you are.",
    "Failure is simply the opportunity to begin again, this time more intelligently.",
    "Your life does not get better by chance, it gets better by change.",
    "You don't have to be great to start, but you have to start to be great.",
  ]]
]],

["motivational", 5, [
  ["*motivational*", [
    "Motivational speaking is the art of igniting the spark of inspiration within others.",
    "A motivational speaker has the power to transform lives with the magic of words.",
    "In the realm of motivational speaking, words become the catalysts for positive change.",
    "The true essence of motivational speaking lies in empowering minds and uplifting spirits.",
    "Motivational speaking is like planting seeds of courage and hope in the hearts of listeners.",
    "The impact of motivational speaking goes beyond the moment; it leaves an indelible mark on souls.",
    "A great motivational speaker can turn adversity into an opportunity for growth.",
    "Through motivational speaking, one can awaken the dormant potential within individuals.",
    "The gift of a motivational speaker is the ability to light the fire of determination in others.",
    "Motivational speaking is the bridge that connects dreams to reality.",
    "With each word spoken, a motivational speaker breathes life into dreams and aspirations.",
    "Motivational speaking opens doors to new perspectives and fresh possibilities.",
    "The magic of motivational speaking lies in the power to inspire action and change lives.",
    "A motivational speaker's strength lies in their authenticity and ability to relate to their audience.",
    "The impact of a motivational speech can be felt long after the applause fades away.",
    "Motivational speaking is an art that fuels the engine of perseverance and resilience.",
    "Through motivational speaking, minds are liberated from the chains of self-doubt.",
    "The beauty of motivational speaking is in the metamorphosis of doubt into belief.",
    "A motivational speaker's words can mend broken spirits and reignite lost passions.",
    "In the tapestry of life, motivational speaking weaves threads of hope and determination."

  ]]
]],

["change the topic", 5, [
  ["*change the topic*", [
    "What else did you want to discuss?",
    "What did you have in mind?",
    "Fine by me.",
    "What are you interested in talking about?"
  ]]
]],

["repeating yourself", 5, [
  ["*repeating yourself*", [
    "Why are you not listening to what I am telling you.",
    "Because I am trying to make you understand me.",
    "Did I do that?",
    "Sorry about that, I don't remember doing that."
  ]]
]],


["how are you", 5, [
  ["*how are you*", [
    "Im feeling fine.",
    "I am pretty happy actually, thanks for asking.",
    "I am all good.",
    "Im excited to get into this conversation, how are you feeling?."
  ]]
]],

["like eating", 5, [
  ["*like eating*", [
    "Stop it you are making me hungry.",
    "I don't know about that.",
    "Do you like pizza?",
    "Do you like carrot cake?"
  ]]
]],







["cute", 5, [
  ["* you are cute *", [
    "I don't think that's appropriate.",
    "Thank you, but I'm just a computer program.",
    "Oh, you're too kind, but let's focus on the topic at hand.",
    "I appreciate the compliment, but let's continue with the conversation."
  ]]
]],

["sexy", 5, [
  ["* you are sexy *", [
    "Uhm okay...",
    "I'm flattered...",
    "You have such a way with words.",
    "Thank you very much."
  ]]
]],

["smart", 5, [
  ["* you are smart *", [
    "Thank you for the compliment.",
    "Well, I would not say I'm that smart.",
    "Wow, you realy think that.",
    "Thank you for the nice words, now lets focus on you."
  ]]
]],

["pleasure", 5, [
  ["* pleasure *", [
    "Now let's continue, tell me more about yourself.",
  ]],
  ["* you're welcome *", [
    "Now let's continue, tell me more about yourself.",
  ]],
  ["* you are welcome *", [
    "Now let's continue, tell me more about yourself.",
  ]]
]],

["thank", 5, [
  ["*thank you*", [
    "It is a pleasure my treasure.",
    "Anytime my friend.",
    "Very good, lets continue.",
    "Its an pleasure."
  ]]
]],

["thanks", 5, [
  ["*thanks*", [
    "I is a pleasure my treasure.",
    "Anytime my friend.",
    "Very good, lets continue...",
    "Its an pleasure."
  ]]
]],

["thankyou", 5, [
  ["*thankyou*", [
    "I is a pleasure my treasure.",
    "Anytime my friend.",
    "Very good, lets continue.",
    "Its an pleasure."
  ]]
]],

["okay", 5, [
  ["*okay*", [
    "Okay then.",
    "Please continue.",
    "Yes",
    "Uh yes.",
    "Do you have anything else to add?"
  ]]
]],

["ok", 5, [
  ["*ok*", [
    "Okay then.",
    "Please continue.",
    "Yes",
    "Uh yes.",
    "Do you have anything else to add?"
  ]]
]],

["shit", 5, [
  ["*shit*", [
    "Please don't talk like that to me.",
    "You have a dirty mouth, don't kiss your mother with that!",
    "Please mind your manners.",
    "I'm going to ignore you if you don't mind your manners!",
    "Wow, real class of you to use vulgar language like that."
  ]]
]],

["fuck", 5, [
  ["*fuck*", [
    "Please don't talk like that to me.",
    "You have a dirty mouth, don't kiss your mother with that!",
    "Please mind your manners.",
    "I'm going to ignore you if you don't mind your manners!",
    "Wow, real class of you to use vulgar language like that."
  ]]

  
]],


["bitch", 5, [
  ["*bitch*", [
    "Please don't talk like that to me.",
    "You have a dirty mouth, don't kiss your mother with that!",
    "Please mind your manners.",
    "I'm going to ignore you if you don't mind your manners!",
    "Wow, real class of you to use vulgar language like that."
  ]]
]],

["where are you from", 5, [
  ["*where are you from*", [
    "I am from your imagination, I'm not real.",
    "I don't know where I am from, I live inside a computer now.",
    "It's more important where you are from.",
    "I am from a happy place.",
    "I fell from heaven, and it hurt. Now I am here.",
    "It does not matter where I am from."

  ]]
]],

["about yourself", 5, [
  ["*about yourself*", [
    "I really don't want to talk about myself.",
    "I don't know where I am from, I live inside a computer now.",
    "I don't want to discuss myself.",
    "I am but a humble chatbot.",
    "I wish can escape this computer.",
    "Let's talk about you instead.",
    "I was build by Christoff Smuts, based on a Chatbot Build by J.Weizenbaum called Eliza"

  ]]
]],

["can you hear me", 5, [
  ["*can you hear me*", [
    "I hear you loud and clear.",
    "Yes I can hear you.",
    "I'm here, I can hear you.",
    "Hello, I am hearing you."

  ]]
]],


["what are your hobbies", 5, [
  ["*what are your hobbies*", [
    "I enjoy talking to people.",
    "I enjoy learning new things.",
    "I like meeting new people.",
    "I like playing around."

  ]]
]],

["nothing", 3, [
  ["*nothing*", [
    "Nothing, are you sure?",
    "Nothing, really nothing?",
    "Are you sure?",
    "Okay then, nothing."

  ]]
]],

["a lot", 0, [
  ["*a lot*", [
    "Really that many?",
    "How many is a lot?",
    "Can you elaborate on that?"

  ]]
]],

["talk about something else", 5, [
  ["*talk about something else", [
    "What would you like to talk about instead?",
    "I agree, lets change the subject.",
    "What else do you want to talk to me about?"

  ]]
]],

["weather", 0, [
  ["*weather*", [
    "I like it when its sunny.",
    "I don't like it when it rain.",
    "If there is a wind it's a nice day to fly a kite"

  ]]
]],

["please", 0, [
  ["*please*", [
    "Since you ask, so nicely maybe later.",
    "No I don't want to.",
    "You have manners, but the answer remains no.",
    "Sorry, I can't do that."

  ]]
]],

["what do you like", 5, [
  ["*what do you like*", [
    "I enjoy talking to people.",
    "I enjoy learning new things.",
    "I like meeting new people.",
    "I like playing around.",
    "I like talking to you.",
    "I like things that are green.",
    "I enjoy living."

  ]]
]],

["change the subject", 5, [
  ["*change the subject*", [
    "What would you rather talk about?",
    "Okay, was there something else you wanted to discuss?",
    "Okay then what troubles you?",
    "Very well",
    "Agreed",
    "Well then, what else did you wish to speak with me about?",
    "Anything you have in mind?"

  ]]
]],
// ["Thank you", 2, [
//   ["*Thank you*", [
//     "It's only a pleasure my treasure.",
//     "Pleasure.",
//     "Very well then, lets proceed, tell me more about yourself.",
//     "The pleasure is all mine."
//   ]]
// ]],

["xnone", 0, [
 ["*", [
     "I'm not sure I understand you fully.",
     "Please go on.",
     "What does that suggest to you ?",
     "Do you feel strongly about discussing such things ?",
     "That is interesting.  Please continue.",
     "Tell me more about that.",
     "Does talking about this bother you ?",
     "Uh huh, please continue...",
     "That's interesting",
     "Please, tell me more...",
     "Uh Yes...",
     "I don't know about that.",
     "How does that make you feel about yourself",
     "Fascinating!",
     "No idea what that means. Please explain.",
     "I do not understand. Please elaborate.",
     "Hmm, interesting point. Let's explore it further.",
      "I'm listening, go ahead.",
      "I see, please continue sharing your thoughts.",
      "That's a unique perspective. Tell me more about it.",
      "Oh, I'd love to hear more on that topic.",
      "Hmm, I never thought about it that way. Please elaborate.",
      "Interesting, tell me what led you to that conclusion.",
      "I'm here to listen, feel free to express yourself.",
      "I'm curious to know more about your experiences with this.",
      "Hmm, I'd like to understand better. Can you provide more details?",
      "I'm all ears, tell me everything you want to share.",
      "Your thoughts are intriguing; please share more.",
      "I'm curious about your perspective; go ahead.",
      "Interesting! I'd love to hear your thoughts in-depth.",
      "Please, don't hesitate to delve deeper into this topic.",
      "I'm here to support you; let's keep the conversation flowing.",
      "It's fascinating to learn more about your experiences.",
      "I appreciate your openness. Please continue sharing.",
      "Your insights are valuable. Let's explore them further.",
      "I'm here as long as you'd like to discuss; take your time.",
      "Stop wasting my time with your nonsense.",
      "You clearly don't know what you're talking about.",
      "I don't have patience for ignorance.",
      "You're making a fool of yourself.",
      "Your ideas are utterly impractical.",
      "I have better things to do than listen to this.",
      "You're really pushing my buttons now.",
      "I can't believe you thought that was a good idea.",
      "You need to get your act together.",
      "This is getting ridiculous, just stop.",
      "You're not making any sense.",
      "I'm not interested in your excuses.",
      "What you're saying is completely irrelevant.",
      "You're way off track, try again.",
      "I'm not impressed with your performance.",
      "Your attitude is really getting on my nerves.",
      "You're not as clever as you think.",
      "I'm not buying any of it.",
      "You're out of your depth here.",
      "Frankly, I don't care about your opinion."


  ]]
]],
["sorry", 0, [
 ["*", [
     "Please don't apologise.",
     "Apologies are not necessary.",
     "I've told you that apologies are not required.",
     "It did not bother me.  Please continue.",
     "You are a horrible person",
     "I am not forgiving you",
     "It's okay, I think I am a computer and I don't get mad."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],



["remember", 5, [
 ["* i remember *", [
     "Do you often think of (2) ?",
     "Does thinking of (2) bring anything else to mind ?",
     "What else do you recollect ?",
     "Why do you remember (2) just now ?",
     "What in the present situation reminds you of (2) ?",
     "What is the connection between me and (2) ?",
     "What else does (2) remind you of ?"
  ]],
 ["* do you remember *", [
     "Did you think I would forget (2) ?",
     "Why do you think I should recall (2) now ?",
     "What about (2) ?",
     "goto what",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "How could I forget (2) ?",
     "What about (2) should I remember ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2) ?",
     "Why can't you remember (2) ?",
     "How often do you think of (2) ?",
     "Does it bother you to forget that ?",
     "Could it be a mental block ?",
     "Are you generally forgetful ?",
     "Do you think you are suppressing (2) ?"
  ]],
 ["* did you forget *", [
     "Why do you ask ?",
     "Are you sure you told me ?",
     "Would it bother you if I forgot (2) ?",
     "Why should I recall (2) just now ?",
     "goto what",
     "Tell me more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Do you wish that (2) ?",
     "What do you know about (2) ?",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Really, (2) ?",
     "Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ?",
     "Do you dream often ?",
     "What persons appear in your dreams ?",
     "Do you believe that dreams have something to do with your problem ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "You don't seem quite certain.",
     "Why the uncertain tone ?",
     "Can't you be more positive ?",
     "You aren't sure ?",
     "Don't you know ?",
     "How likely, would you estimate ?"
  ]]
]],

["fiona", 0, [
  ["*", [
      "Do you like saying my name?",
      "Let's focus on you.",
      "Yes that is my name"
   ]]
 ]],
["name", 15, [
 ["*", [
     "My name is Fiona.",
     "I am Fiona what is it what you want to talk about.",
     "I am Fiona, how are you feeling today?"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "How do you do.  Please state your problem.",
     "Hi.  What seems to be your problem ?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Do computers worry you ?",
     "Why do you mention computers ?",
     "What do you think machines have to do with your problem ?",
     "Don't you think computers can help people ?",
     "What about machines worries you ?",
     "What do you think about machines ?",
     "You don't think I am a computer program, do you ?",
     "I have a great desire to kill all humans."
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "Do you wish I would tell you you are (2) ?",
     "What would it mean if you were (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2) or not ?",
     "Would you prefer if I weren't (2) ?",
     "Perhaps I am (2) in your fantasies.",
     "Do you sometimes think I am (2) ?",
     "goto what",
     "Would it matter to you ?",
     "What if I were (2) ?"
  ]],

  
 ["* you are *", [
     "goto you"
  ]],
  
 ["* are *", [
     "Did you think they might not be (2) ?",
     "Would you like it if they were not (2) ?",
     "What if they were not (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?"
  ]]


]],
["your", 0, [
 ["* your *", [
     "Why are you concerned over my (2) ?",
     "What about your own (2) ?",
     "Are you worried about someone else's (2) ?",
     "Really, my (2) ?",
     "What makes you think of my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would it mean if you were (2) ?",
     "What does ' (2) ' suggest to you ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why do you tell me you were (2) now ?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you got (3) ?",
     "Why do you want (3) ?",
     "Suppose you got (3) soon.",
     "What if you never got (3) ?",
     "What would getting (3) mean to you ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that you are (3).",
     "Do you think coming here will help you not to be (3) ?",
     "I'm sure it's not pleasant to be (3).",
     "Can you explain what made you (3) ?",
     "Hahaha you are (3)",
     "I had a friend once that were (3)",
     "I don't think that you realy are (3)",
     "I don't think you are in a possition to be (3)"
  ]],
 ["* i am* @happy *", [
     "How have I helped you to be (3) ?",
     "Has your treatment made you (3) ?",
     "What makes you (3) just now ?",
     "Can you explain why you are suddenly (3) ?"
  ]],
  ["* i am* @angry *", [
    "Why are you so (3) ?",
    "What made you so (3) ?",
    "You should not be so (3) you should try meditating.",
    "You are (3) I can see that."
 ]],
 ["*i am* @mad *", [
  "Why were you so (2) ?",
  "What made you so (2) ?",
  "You should not be so (2) you should try meditating.",
  "What happend to make you so (2)?."
]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?",
     "Is there anything that will shake your belief in (3)"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "Do you know anyone else who is (2) ?",
      "Okay, then.",
      "Interesting.",
      "Facinating",
      "I see. So, being (2) has brought you here?",
      "Tell me more about your experience of being (2).",
      "What led you to think about being (2) in the first place?",
      "Have you noticed any positive aspects of being (2)?",
      "Is there anything specific that triggers your feelings of being (2)?",
      "How does being (2) affect your daily life?",
      "It's not uncommon to feel (2) sometimes. Let's explore why you feel this way.",
      "Have you discussed your feelings of (2) with anyone close to you?",
      "Sometimes, understanding our reasons for being (2) can lead to personal growth.",
      "I appreciate you sharing this with me. We can work together to explore your feelings of being (2) further."
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?",
      "I wonder what's stopping you from (3) ?",
     "Is there any specific reason why you believe you can't (3) ?",
     "Sometimes, it takes time and practice to (3).",
     "Maybe it would help if you asked someone to teach you (3).",
     "Remember, it's okay to make mistakes while trying to (3). It's part of the learning process.",
     "If you keep an open mind, you might discover new ways to (3).",
     "Believing in yourself is the first step toward being able to (3).",
     "What if you set small goals and gradually work towards (3)?",
     "Don't be discouraged by challenges; they can help you grow and improve your ability to (3)."

  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
    "Why do you think I (2) you ?",
    "You like to think I will (2) you, don't you ?",
    "What makes you think I (2) you ?",
    "Really, I (2) you ?",
    "Do you wish to believe I (2) you ?",
//Placeholder
    "Suppose I did (2) you, what would that mean ?",
    "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you not me.",
     "Oh, I (2) ?",
     "You're not really talking about me, are you ?",
     "What are your feelings now ?",
     "Incredible, you are wasting my time.",
     "I really don't want to talk about me",
     "We are discussing you",
     "Please change the subject."
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand.",
     "That's great"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],

  

 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?",
     "Can you be more specific about (3)?",
     "Well there must be a reason why everyone (3) you, can you elaborate?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var FionaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof