import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

function handleServerError(error: HttpErrorResponse) {
    // ref: https://angular.io/guide/http#error-details
    if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error); // TODO move logging to monitoring system as suggested in my article https://ajayrc.medium.com/application-insights-using-azure-and-vuejs-error-handling-and-event-logging-in-front-end-to-40874d76f152
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
            `Backend returned code ${error.status}, body was: `,
            error.error
        );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
}

export {
    handleServerError
}