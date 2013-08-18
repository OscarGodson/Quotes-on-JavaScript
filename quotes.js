function App () {
  this.data = [];
}

App.prototype.init = function init () {
  function getHash () { return window.location.hash };
  $(window).on('hashchange', function () {
    this.render(getHash().split('#!/quote/')[1]);
  }.bind(this));

  // If no hash exists, make one, if it does manually trigger hashchange so the app runs
  getHash().indexOf('#!/') == -1 ? window.location.hash = '#!/' : $(window).trigger('hashchange');
}

App.prototype.getData = function getData (url, callback) {
  var app = this;
  $.getJSON(url, function (json) {
    this.data = json;
    callback.call(this, json);
  }.bind(this));
}

App.prototype.render = function render (page) {
  page = page || Math.floor(Math.random() * this.data.length);
  var quote = this.findQuoteById(page);
  var quoteEl = $('#quote');
  quoteEl.find('blockquote').text(quote.quote);
  quoteEl.find('cite').text(quote.author);
};

App.prototype.findQuoteById = function findQuoteById (id) {
  for (var i = 0; i < this.data.length; i++) {
    if (id == this.data[i].id) return this.data[i];
  }
};

var app = new App();

app.getData('/quotes.json', function () {
  this.init();
});
