import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

const quoteData = [
{ text: "“If you want to be sucessful, put EXTRA EFFORT.”", author: "Sai Vamshi" }, 
{ text: "“The purpose of our lives is to be happy.”", author: "Dalai Lama" },
{ text: "“Life is what happens when you're busy making other plans.”", author: "John Lennon" },
{ text: "“Get busy living or get busy dying.”", author: "Stephen King" },
{ text: "“If you want to live a happy life, tie it to a goal, not to people or things.”", author: " Albert Einstein" },
{ text: "“Never let the fear of striking out keep you from playing the game.”", author: "Babe Ruth" },
{ text: "“Money and success don’t change people; they merely amplify what is already there.”", author: "Will Smith" },
{ text: "“Not how long, but how well you have lived is the main thing.”", author: "Seneca" },
{ text: "“If life were predictable it would cease to be life, and be without flavor.”", author: "Eleanor Roosevelt" },
{ text: " “The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”", author: "Henry Ford" },
  { text: " “To live is the rarest thing in the world. Most people exist, that is all.”", author: "Oscar Wilde" },
  { text: " “That it will never come again is what makes life so sweet.”", author: "Emily Dickinson" },
  { text: " “It is never too late to be what you might have been.”", author: "George Eliot" },
{ text: "“In order to write about life first you must live it.”", author: "Ernest Hemingway" }];


const QuoteBox = ({ quote, handleNewQuote }) => /*#__PURE__*/
React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
React.createElement("p", { id: "text" }, quote.text), /*#__PURE__*/
React.createElement("h2", { id: "author" }, quote.author), /*#__PURE__*/
React.createElement("div", { class: "actions" }, /*#__PURE__*/
React.createElement("button", { id: "new-quote", class: "button", onClick: handleNewQuote }, " New Quote "), /*#__PURE__*/
React.createElement("a", { href: "twitter.com/intent/tweet", id: "tweet-quote", target: "_blank" }, " Tweet ")));




const getRandomIndex = () =>
Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()]);
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
  };
  return /*#__PURE__*/(
    React.createElement("div", { class: "main" }, /*#__PURE__*/
    React.createElement(QuoteBox, { quote: quote, handleNewQuote: handleNewQuote })));


};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));
