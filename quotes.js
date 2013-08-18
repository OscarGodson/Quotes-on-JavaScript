function App () {
  this.data = [];
}

App.prototype.init = function init () {
  function getHash () { return window.location.hash };
  $(window).on('hashchange', function () {
    this.render(getHash().split('#!/quote/')[1]);
  }.bind(this)).trigger('hashchange');
}

App.prototype.getData = function getData (url, callback) {
  var app = this;
  $.getJSON(url, function (json) {
    this.data = json;
    callback.call(this, json);
  }.bind(this));
}

App.prototype.render = function render (id) {
  id = id || Math.floor(Math.random() * this.data.length);
  var quote = this.findQuoteById(id);
  var quoteEl = $('#quote');
  quoteEl.find('blockquote').text(quote.quote);
  quoteEl.find('cite').text(quote.author);
  quoteEl.find('.permalink').attr('href', '#!/quote/' + id);
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
