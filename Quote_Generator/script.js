let button = document.querySelector('#new_quote');
let text = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote:`“If you don’t take risks, you can’t create a future.”`,
        person:`Monkey D Luffy`
    },
    {
        quote:`“The strong should aid and protect the weak. Then, the weak will become strong, and they in turn will aid and protect those weaker than them. That is the law of nature.”`,
        person:`Kamado Tanjiro`
    },
    {
        quote:`“Hard work is worthless for those that don’t believe in themselves.”`,
        person:`Naruto Uzumaki`
    },
    {
        quote:`If you never listen to anyone, you can't give proper advice.”`,
        person:`Boy and Beast`
    },
    {
        quote:`“When you give up, that’s when the game ends.”`,
        person:`Slam Dunk`
    },
    {
        quote:`“You're gonna care what other people think and be someone you're not your whole life? You’re fine as you are.”`,
        person:`Ymir - AOT`
    },
    {
        quote:`“Searching for someone to blame is such a pain.”`,
        person:`Gojo Satoru`
    },
    {
        quote:`“Even if we’re not confident that we’ll win, even if others tell us we don’t stand a chance, we must never tell ourselves that.”`,
        person:`Daichi`
    },
    {
        quote:`“Motivation? What more do you need than pride!” `,
        person:`Yamaguchi - Haikyuuu`,
    },
    {
        quote:`"If you are too worried about the present, what will you do about tomorrow"`,
        person:`Haikyuuu`
    }];
button.addEventListener('click',function(e){
    let random = Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
});
