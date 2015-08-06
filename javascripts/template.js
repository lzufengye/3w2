var Template = function() {
  var source   = $("#post-template").html();
  window.template = Handlebars.compile(source);
  window.templateObject = this;
};

Template.prototype.renderPosts = function() {
  $("#posts-container").empty();
  $.each(window.posts, function(index, post){
    var html = template(post);
    $("#posts-container").append(html);
  });
};