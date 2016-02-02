import CategoriesModel from './categories-model';

describe('CategoriesModel', () => {
  let service, $httpBackend

  beforeEach(inject(($http, $q, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    service = new CategoriesModel($http, $q);
  }));

  afterEach(inject(($httpBackend) => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('has a `FETCH` URL', () => {
    expect(service.URLS.FETCH).toBeDefined();
  });

  it('#getCategories returns categories', () => {
    let mockResponse = ['Development'];

    $httpBackend.when('GET', 'data/categories.json').respond(mockResponse);

    let promise = service.getCategories();

    $httpBackend.flush();

    promise.then((result) => {
      expect(result).toEqual(mockResponse);
    });
  });
});
