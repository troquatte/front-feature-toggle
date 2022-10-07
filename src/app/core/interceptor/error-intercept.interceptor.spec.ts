import { TestBed } from '@angular/core/testing';

import { ErrorInterceptInterceptor } from './error-intercept.interceptor';

describe('ErrorInterceptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorInterceptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorInterceptInterceptor = TestBed.inject(ErrorInterceptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
