//명언 배열 생성(명언, 저자)
const quotes = [
    {
        quote:"Success is going from failure to failure without a loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote:"There is no use whatever trying to help people who do not help themselves. You cannot push anyone up a ladder unless he be willing to climb himself. ",
        author: "Andrew Carnegie",
    },
    {
        quote:"Always bear in mind that your own resolution to succeed is more important than any other. ",
        author: "Abraham Lincoln",
    },
    {
        quote:"All progress takes place outside the comfort zone. ",
        author: "Michael John Bobak",  
    },
    {
        quote:"I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite. ",
        author: "G. K. Chesterton",
    },
    {
        quote:"Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier; wish you were better. ",
        author: "Jim Rohn",
    },
    {
        quote:"Don’t be afraid to give up the good to go for the great. ",
        author: "John D. Rockefeller",
    },
    {
        quote:"I find that the harder I work, the more luck I seem to have. ",
        author: "Thomas Jefferson",
    },
    {
        quote:"We must believe in luck. For how else can we explain the success of those we don’t like? ",
        author: "Jean Cocteau",
    },
    {
        quote:"Try not to become a man of success but rather try to become a man of value. ",
        author: "Albert Einstein",
    },
];

//div quote의 첫번째 스팬
const quote = document.querySelector("#quote span:first-child");
//div quote의 두번째 스팬
const author = document.querySelector("#quote span:last-child");

//배열 길이: 배열이름.length

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;






















