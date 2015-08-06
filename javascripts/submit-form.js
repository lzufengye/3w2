var SubmitForm = function(form) {
  this.$element = $(form);
  this.$element.on('click', '.submit', bind(this._bindSubmit, this));
};

SubmitForm.prototype._bindSubmit = function(e) {
  e.preventDefault();
  var text = this.$element.find('textarea').val();
  $(document).trigger('post', ['Kerem', text]);
};

$(document).on('post', function(e, author, content){
  postsObject.addPost(author, content);
});