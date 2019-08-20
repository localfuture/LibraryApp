//jshint esversion:6
var express = require("express");
var app = express();
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

navbar =[{link:"/books",title:"Books"},
{link:"/authors",title:"Authors"},
{link:"/login",title:"Log In"},
{link:"/registration",title:"Register"},
{link:"/addbooks",title:"Add Books"}];

books = [{
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "subtitle": "A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "published": "2014-12-14",
    "publisher": "No Starch Press",
    "pages": 472,
    "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    "website": "http://eloquentjavascript.net/"
  },
  {
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "subtitle": "A JavaScript and jQuery Developer's Guide",
    "author": "Addy Osmani",
    "published": "2012-07-01",
    "publisher": "O'Reilly Media",
    "pages": 254,
    "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
  },
  {
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "subtitle": "An In-Depth Guide for Programmers",
    "author": "Axel Rauschmayer",
    "published": "2014-02-01",
    "publisher": "O'Reilly Media",
    "pages": 460,
    "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "website": "http://speakingjs.com/"
  },
  {
    "isbn": "9781491950296",
    "title": "Programming JavaScript Applications",
    "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
    "author": "Eric Elliott",
    "published": "2014-07-01",
    "publisher": "O'Reilly Media",
    "pages": 254,
    "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
    "website": "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
  },
  {
    "isbn": "9781593277574",
    "title": "Understanding ECMAScript 6",
    "subtitle": "The Definitive Guide for JavaScript Developers",
    "author": "Nicholas C. Zakas",
    "published": "2016-09-03",
    "publisher": "No Starch Press",
    "pages": 352,
    "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
    "website": "https://leanpub.com/understandinges6/read"
  },
  {
    "isbn": "9781491904244",
    "title": "You Don't Know JS",
    "subtitle": "ES6 & Beyond",
    "author": "Kyle Simpson",
    "published": "2015-12-27",
    "publisher": "O'Reilly Media",
    "pages": 278,
    "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
    "website": "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond"
  },
  {
    "isbn": "9781449325862",
    "title": "Git Pocket Guide",
    "subtitle": "A Working Introduction",
    "author": "Richard E. Silverman",
    "published": "2013-08-02",
    "publisher": "O'Reilly Media",
    "pages": 234,
    "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
    "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
  },
  {
    "isbn": "9781449337711",
    "title": "Designing Evolvable Web APIs with ASP.NET",
    "subtitle": "Harnessing the Power of the Web",
    "author": "Glenn Block, et al.",
    "published": "2014-04-07",
    "publisher": "O'Reilly Media",
    "pages": 538,
    "description": "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
    "website": "http://chimera.labs.oreilly.com/books/1234000001708/index.html"
  },
  {
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "subtitle": "A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "published": "2014-12-14",
    "publisher": "No Starch Press",
    "pages": 472,
    "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    "website": "http://eloquentjavascript.net/"
  },
  {
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "subtitle": "A JavaScript and jQuery Developer's Guide",
    "author": "Addy Osmani",
    "published": "2012-07-01",
    "publisher": "O'Reilly Media",
    "pages": 254,
    "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
  }
  ];

  authors = [{
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "/images/8051.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958,
    "description":"Chinua Achebe was a Nigerian novelist, poet, professor, and critic. His first novel Things Fall Apart, often considered his masterpiece, is the most widely read book in modern African literature.",
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "/images/Hans Christian Andersen.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836,
    "description":"Hans Christian Andersen was a Danish author. Although a prolific writer of plays, travelogues, novels, and poems, he is best remembered for his fairy tales. Andersen's popularity is not limited to children; his stories express themes that transcend age and nationality.",

  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "/images/Dante Alighieri.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315,
    "description":"Durante di Alighiero degli Alighieri, commonly known by his pen name Dante Alighieri or simply as Dante, was an Italian poet.",
  },
  {
    "author": "Jane Austen",
    "country": "United Kingdom",
    "imageLink": "/images/jane austen.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    "pages": 226,
    "title": "Pride and Prejudice",
    "year": 1813,
    "description":"Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security.",

  },
  {
    "author": "Honor\u00e9 de Balzac",
    "country": "France",
    "imageLink": "/images/Honoré de Balzac.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    "pages": 443,
    "title": "Le P\u00e8re Goriot",
    "year": 1835,
    "description":"Honoré de Balzac was a French novelist and playwright. The novel sequence La Comédie humaine, which presents a panorama of post-Napoleonic French life, is generally viewed as his magnum opus.",

  },
  {
    "author": "Samuel Beckett",
    "country": "Republic of Ireland",
    "imageLink": "/images/Samuel_Beckett.jpg",
    "language": "French, English",
    "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    "pages": 256,
    "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
    "year": 1952,
    "description":"Samuel Barclay Beckett was an Irish novelist, playwright, short story writer, theatre director, poet, and literary translator. A resident of Paris for most of his adult life, he wrote in both English and French.",

  },
  {
    "author": "Walt Whitman",
    "country": "United States",
    "imageLink": "/images/walt-whitman.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
    "pages": 152,
    "title": "Leaves of Grass",
    "year": 1855,
    "description":"Walt Whitman was an American poet, essayist, and journalist. A humanist, he was a part of the transition between transcendentalism and realism, incorporating both views in his works. Whitman is among the most influential poets in the American canon, often called the father of free verse.",

  },
  {
    "author": "Virginia Woolf",
    "country": "United Kingdom",
    "imageLink": "/images/virginia woolf.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
    "pages": 216,
    "title": "Mrs Dalloway",
    "year": 1925,
    "description":"Adeline Virginia Woolf was an English writer, considered one of the most important modernist 20th-century authors and also a pioneer in the use of stream of consciousness as a narrative device. Woolf was born into an affluent household in South Kensington, London, the seventh child in a blended family of eight.",

  },
  {
    "author": "Marguerite Yourcenar",
    "country": "France/Belgium",
    "imageLink": "/images/marguerite.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
    "pages": 408,
    "title": "Memoirs of Hadrian",
    "year": 1951,
    "description":"Marguerite Yourcenar was a French novelist and essayist born in Brussels, Belgium, who became a US citizen in 1947. Winner of the Prix Femina and the Erasmus Prize, she was the first woman elected to the Académie française, in 1980, and the seventeenth person to occupy seat 3.",

  },
  {
     "author": "Mark Twain",
     "country": "United States",
     "imageLink": "/images/mark.jpg",
     "language": "English",
     "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
     "pages": 224,
     "title": "The Adventures of Huckleberry Finn",
     "year": 1884,
     "description":"Samuel Langhorne Clemens, known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the greatest humorist this country has produced, and William Faulkner called him the father of American literature.",
   }];

app.get("/",(req,res)=>{
    res.render("index",{navbar:navbar,title:"Library"});
});

app.get("/books",(req,res)=>{
    res.render("books",{title:"Books", books:books});
});
app.get("/single/:id",(req,res)=>{
    const x=req.params.id;
    res.render("single",{books:books[x]});
});

app.get("/authors",(req,res)=>{
  res.render("authors",{title:"Authors", authors:authors});
});

app.get("/authorsingle/:i",(req,res)=>{
    const y=req.params.i;
    res.render("authorsingle",{title:"Author Details",authors:authors[y]});
});

app.get("/login",(req,res)=>{
  res.render("login");
});

app.get("/registration",(req,res)=>{
  res.render("registration",{"district":["Thiruvananthapuram","Kollam","Alappuzha","Pathanamthitta","Kottayam","Idukki","Ernakulam","Thrissur","Palakkad","Malappuram","Kozhikode","Wayanadu","Kannur","Kasaragod"]});
});

app.get("/addbooks",(req,res)=>{
  res.render("newbosk");
});



app.listen(process.env.PORT || 3000,()=>{
    console.log("server is up");
});
