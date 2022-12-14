import { TestBed } from '@angular/core/testing';

import { ErrorIntercept } from './error-intercept.interceptor';

describe('ErrorIntercept', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ErrorIntercept],
    })
  );

  it('should be created', () => {
    const interceptor: ErrorIntercept = TestBed.inject(ErrorIntercept);
    expect(interceptor).toBeTruthy();
  });
});
