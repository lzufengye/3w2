$(function() {
  var source   = $("#post-template").html();
  var template = Handlebars.compile(source);

  $.getJSON('../data/posts.json', function(data) {
    $.each(data.post, function(index, post){
      var html = template(post);
      $(".msg-list").append(html);
    });
  });

});