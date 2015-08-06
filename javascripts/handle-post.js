$(function() {
  $(".submit").on("click", function(e) {
    e.preventDefault();

    var content = $("textarea").val();

    newPost('Kerem', content);
  });

  $("#posts-container").on("click", ".drop", function(e) {
    console.log(this);
    $(this).parents(".item").hide();
  });
});

function newPost(author, content) {
  var post = {author: author, content: content};
  var html = template(post);
  $("#posts-container").prepend(html);
}
