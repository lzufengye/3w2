$(function() {
  $(".submit").click(function(e) {
    e.preventDefault();

    var content = $("textarea").val();

    newPost('Kerem', content);
  });


});

function newPost(author, content) {
  var post = {author: author, content: content};
  var html = template(post);
  $("#posts-container").prepend(html);
}
