$(function() {
  var source   = $("#post-template").html();
  window.template = Handlebars.compile(source);

  fetchPosts();

  $(".fa-times").click(function(e) {
    console.log(this);
  });
});

function fetchPosts() {
  $.getJSON('../data/posts.json', function(data) {
    window.posts = data.post;
    renderPosts();
  });
}

function renderPosts() {
  $.each(window.posts, function(index, post){
    var html = template(post);
    $("#posts-container").append(html);
  });
}