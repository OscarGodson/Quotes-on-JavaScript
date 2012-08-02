getQuotes = function(callback) {
  var quotes = [
    {
      "id": "0",
      "added": "08-28-2011 23:38:00",
      "author": "Brendan Eich",
      "quote": "JavaScript had to 'look like Java' only less so, be Java's dumb kid brother or boy-hostage sidekick. Plus, I had to be done in ten days or something worse than JavaScript would have happened."
    },
    {
      "id": "1",
      "added": "08-29-2011 1:03:00",
      "author": "Douglas Crockford",
      "quote": "People will always want to do stupid things, and luckily for those people, there's JSHint"
    },
    {
      "id": "2",
      "added": "08-29-2011 1:05:00",
      "author": "Jens Ohlig",
      "quote": "JavaScript is to Java as hamster is to ham."
    },
    {
      "id": "3",
      "added": "08-29-2011 1:06:00",
      "author": "Tim O'Reilly",
      "quote": "Learning JavaScript used to mean you weren't a serious software developer. Today, not learning Javascript means the same thing."
    },
    {
      "id": "4",
      "added": "08-29-2011 1:08:00",
      "author": "Alan Perlis",
      "quote": "Too much syntactic sugar causes cancer of the semi-colon."
    },
    {
      "id": "5",
      "added": "9-4-2011 18:35:00",
      "author": "Nick Ashley",
      "quote": "JavaScript: where forgetting the occasional semicolon isn't necessarily the end of the world."
    }
  ];
  callback.call(this, quotes);
};
