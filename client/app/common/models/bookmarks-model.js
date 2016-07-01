class BookmarksModel {
  constructor($q) {
    'ngInject';

    this.$q = $q;
    this.bookmarks = [
      {"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
      {"id":1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development" },
      {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
      {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
      {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
      {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
      {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
      {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
      {"id":8, "title": "ViralViralVideos", "url": "http://viralviralvideos.com", "category": "Humor" }
    ];
  }

  getBookmarks() {
    return this.$q.when(this.bookmarks);
  }
}

export default BookmarksModel;