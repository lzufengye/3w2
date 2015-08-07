describe('SubmitForm', function() {
  var form = $("<ul id='new-post-container'><li><textarea></textarea><a href='' class='submit'></a></li></ul>");
  var submitForm;

  beforeEach(function(){
    submitForm = new SubmitForm(form);
  });

  it('should construct a new form', function() {
    expect(submitForm).toBeDefined();
  });

  it('should trigger post when I click submit', function() {
    $(document).off('post');
    $(document).on('post', function(e, author, content){e.preventDefault();});
    var eventSpy = spyOnEvent(document, 'post');

    form.find('.submit').click();
    expect(eventSpy).toHaveBeenTriggered();
  });
});