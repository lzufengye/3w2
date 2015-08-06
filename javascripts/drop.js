var Drop = function(e) {
  this.$element = $(e);
  this.$element.on('click', '.drop', bind(this._drop, this));
};

Drop.prototype._drop = function(e) {
  $(e.target).parents('.item').hide();
};