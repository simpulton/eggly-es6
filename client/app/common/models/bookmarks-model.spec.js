import BookmarksModel from './bookmarks-model';

describe('BookmarksModel', () => {
  let service, $httpBackend;

  beforeEach(inject(($http, $q, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    service = new BookmarksModel($http, $q);
  }));

  afterEach(inject(($httpBackend) => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('has a `FETCH` URL', () => {
    expect(service.URLS.FETCH).toBeDefined();
  });

  it('#getBookmarks returns bookmarks', () => {
    let mockResponse = ['AngularJS'];

    $httpBackend.when('GET', 'data/bookmarks.json').respond(mockResponse);

    let promise = service.getBookmarks();

    $httpBackend.flush();

    promise.then((result) => {
      expect(result).toEqual(mockResponse);
    });
  });
});
