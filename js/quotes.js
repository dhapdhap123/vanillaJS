const quotes = [
{
    quotes: "Seek not every quality in one individual.", 
    author: "Confucius"
},
{
    quotes: "Be silent as to services you have rendered, but speak of favours you have received.", 
    author: "Seneca"
},
{
    quotes: "Dream as if you'll live forever. Live as if you'll die today.", 
    author: "James Byron Dean"
},
{
    quotes: "The merit of an action lies in finishing it to the end.", 
    author: "Chingiz Khan"
},
{
    quotes: "Whenever you are asked if you can do a job, tell 'em, 'Certainly I can!' Then get busy and find out how to do it.", 
    author: "Theodore Roosevelt"
},
{
    quotes: "The greatest lesson in life is to know that even fools are right sometimes.", 
    author: "Winston Leonard Spencer Churchill"
},
{
    quotes: "Strive for excellence, not perfection.", 
    author: "H. Jackson Brown Jr."
},
{
    quotes: "No great man ever complains of want of opportunity.",
    author: "Ralph Waldo Emerson"
},
{
    quotes: "Have no friends not equal to yourself.", 
    author: "Confucius"
},
{
    quotes: "Surround yourself with only people who are going to lift you higher.", 
    author: "Oprah Winfrey"
},
{
    quotes: "Just the knowledge that a good book is awaiting one at the end of a long day makes that day happier.", 
    author: "Kathleen Norris"
},
{
    quotes: "Let no one ever come to you without leaving better and happier.", 
    author: "Mother Teresa"
},
{
    quotes: "A single day is enough to make us a little larger.", 
    author: "Paul Klee"
},
{
    quotes: "Nothing is permanent in this wicked world - not even our troubles.", 
    author: "Charles Chaplin"
},
{
    quotes: "A good plan, violently executed now, is better than a perfect plan next week.",
    author: "George S. Patton"
},
{
    quotes: "What we dwell on is who we become.",
    author: "Oprah Winfrey"
},
{
    quotes: "Do not spoil what you have by desiring what you have not; but remember that what you now have was once among the things you only hoped for.",
    author: "Epikouros"
},
{
    quotes: "Respect yourself and others will respect you. ",
    author: "Confucius"
}
];

const quote = document.querySelector("#quote-quote")
const author = document.querySelector("#quote span:last-child")


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = `- ${todaysQuote.author} -`;