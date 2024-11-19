var quote = document.getElementById("quote");
var sayer = document.getElementById("sayer");
var quotes =[
    `“Be yourself, everyone else is already taken.”`,
    `“Two things are infinite: the universe and human stupidity, and I'm not sure about the universe.”`,
    `“A room without books is like a body without a soul.”`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    `“You only live once, but if you do it right, once is enough.”`,
    `“In three words I can sum up everything I've learned about life: it goes on.”`,
    `“If you tell the truth, you don't have to remember anything.”`,
    `“It is better to be hated for what you are than to be loved for what you are not.”`,
];
var sayers = [
`― Oscar Wilde`,
`― Albert Einstein`,
`― Marcus Tullius Cicero`,
`― Bernard M. Baruch`,
`― Mae West`,
`― Robert Frost`,
`― Mark Twain`,
`― Andre Gide`,
]; 
var repeat =[]

 function generateQuote()
 {
   var n = Math.floor(Math.random() *8);
//    for (var i = 0; i <8; i++)
//    {
//     repeat.push(n);
//    }
//    if (repeat.contains(n))
  
 
    quote.innerHTML=quotes[n];
    sayer.innerHTML=sayers[n];
    console.log(n);

 }

