$(function() {

  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('should have a defined URL', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).toBeTruthy();
      }
    });
    /*Loops over allFeeds objects checking that each feed has a name and URL defined and not empty*/

    it('should have a defined name', function() {
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).toBeTruthy();
      }
    });


  });

  describe('The menu', function() {

    /*Checks that menu is hidden as as soon as the site loads*/
    it('should be hidden', function() {
      expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });

    /*Checks the functionality of the menu showing and hiding when we click the menu button*/
    it('should toggle when click the button', function() {

      $('.menu-icon-link').click();
      expect(($('body')).hasClass('menu-hidden')).toBe(false);

      $('.menu-icon-link').click();
      expect(($('body')).hasClass('menu-hidden')).toBe(true);

    });

    describe('Initial Entries', function() {

      beforeEach(function(done) {
        loadFeed(0, done);
      });
      /*Tests that there is at least one entry in the feed container*/
      it('Should not be empty', function() {
        expect($('.feed .entry').length).toBeGreaterThan(0);
      });
    });

    describe('New Feed Selection', function() {

      var firstFeed, secondFeed;

      beforeEach(function(done) {
        loadFeed(0, function(){
          firstFeed = $('.feed').html();
        });
        loadFeed(1, function(){
          secondFeed = $('.feed').html();
          done();
        });
      });

      it('the new feed should be different', function() {
        expect(firstFeed).not.toEqual(secondFeed);
      });

    });
  });

}());
