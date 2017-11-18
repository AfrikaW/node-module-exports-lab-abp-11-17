'use strict';


class Icebreaker{
  const Question =require ("./Question.js")
  question(){
    Question.Find()
  }
}

module.exports = Icebreaker;
