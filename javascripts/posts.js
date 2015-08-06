var Posts = function(element) {
  this.$element = element;
  this.fetchPosts();
  window.postsObject = this;
};

Posts.prototype.fetchPosts = function() {
  $.getJSON('../data/posts.json', function(data) {
    window.posts = data.post;
    templateObject.renderPosts();
  });
};

Posts.prototype.addPost = function(author, content) {
  posts.unshift({author: author, content: content});
  templateObject.renderPosts();
};

Posts.prototype.removePost = function(e) {
  //Need to know post id
};
