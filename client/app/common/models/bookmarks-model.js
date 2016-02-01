import _ from 'lodash';

class BookmarksModel {
  constructor($http, $q) {
    'ngInject';

    this.$http = $http;
    this.$q = $q;

    this.URLS = {
      FETCH: 'data/bookmarks.json'
    }
  }

  extract(result) {
    return result.data;
  }

  cacheBookmarks(result) {
    this.bookmarks = this.extract(result);
    return this.bookmarks;
  }

  findBookmark(bookmarkId) {
    return _.find(this.bookmarks, (bookmark) => {
      return bookmark.id === parseInt(bookmarkId, 10);
    })
  }

  getBookmarks() {
    return (this.bookmarks) ? this.$q.when(this.bookmarks) : this.$http.get(this.URLS.FETCH).then(this.cacheBookmarks.bind(this));
  };

  getBookmarkById(bookmarkId) {
    let deferred = this.$q.defer(),
        service = this;

    if (service.bookmarks) {
      deferred.resolve(service.findBookmark(bookmarkId))
    } else {
      service.getBookmarks().then(() => {
        deferred.resolve(service.findBookmark(bookmarkId))
      })
    }
    return deferred.promise;
  };

  createBookmark(bookmark) {
    bookmark.id = this.bookmarks.length;
    this.bookmarks.push(bookmark);
  };

  updateBookmark(bookmark) {
    let index = _.findIndex(this.bookmarks, (b) => {
      return b.id == bookmark.id
    });

    this.bookmarks[index] = bookmark;
  };

  deleteBookmark(bookmark) {
    _.remove(this.bookmarks, (b) => {
      return b.id == bookmark.id;
    });
  };
}

export default BookmarksModel;
