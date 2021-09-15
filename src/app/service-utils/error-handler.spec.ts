import { HttpErrorResponse } from '@angular/common/http';
import { handleServerError } from './error-handler';

describe('error-handler', () => {
  describe('#handleServerError', () => {
    it('should handle error with code 0', () => {
      const error: HttpErrorResponse = new HttpErrorResponse({
        status: 0,
        error: 'err',
      });
      expect(handleServerError(error)).toThrowError;
    });

    it('should handle error without code 0', () => {
      const error: HttpErrorResponse = new HttpErrorResponse({
        status: 404,
        error: 'err',
      });
      expect(handleServerError(error)).toThrowError;
    });
  });
});
