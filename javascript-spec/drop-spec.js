describe('Drop', function() {
  var postContainer = $("<ul id='posts-container'><li><div class='drop'></div></li></ul>");
  var drop;

  beforeEach(function(){
    spyOn(Drop.prototype, '_drop');
    drop = new Drop(postContainer);
  });

  it('should construct a new form', function() {
    expect(drop).toBeDefined();
  });

  it('should trigger drop when I click drop', function() {
    postContainer.find('.drop').click();
    expect(Drop.prototype._drop).toHaveBeenCalled();
  });
});