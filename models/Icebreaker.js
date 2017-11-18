'use strict';


class Icebreaker{
  const question =require(./Question.js)
  question(){
    Question.Find()
  }
}

module.exports = Icebreaker;
