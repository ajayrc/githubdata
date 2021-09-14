import { of } from 'rxjs';

export const mockActivatedRoute = {
  paramMap: of({
    get(param: string) {
      return param;
    },
  }),
};
