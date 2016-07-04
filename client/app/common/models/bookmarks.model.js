import {uniqueId, findIndex, remove} from 'lodash';

class BookmarksModel {
  constructor($q) {
    'ngInject';

    this.$q = $q;
    this.bookmarks = [
      {"id":1, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
      {"id":2, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development" },
      {"id":3, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
      {"id":4, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
      {"id":6, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
      {"id":6, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
      {"id":7, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
      {"id":8, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
      {"id":9, "title": "ViralViralVideos", "url": "http://viralviralvideos.com", "category": "Humor" }
    ];
  }

  getBookmarks() {
    return this.$q.when(this.bookmarks);
  }

  createBookmark(bookmark) {
    bookmark.id = uniqueId();
    this.bookmarks.push(bookmark);
  }

  updateBookmark(bookmark) {
    const index = findIndex(this.bookmarks, b => b.id === bookmark.id);
    this.bookmarks[index] = bookmark;
  }

  deleteBookmark(bookmark) {
    remove(this.bookmarks, b => b.id === bookmark.id);
  }
}

export default BookmarksModel;