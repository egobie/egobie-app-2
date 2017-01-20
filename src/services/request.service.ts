import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {
    constructor(
        private http: Http,
    ) {

    }

    request(method, url, body?: any): Observable<Response> {
        return this.http.request(url, new RequestOptions({
            method: method,
            body: body,
            responseType: ResponseContentType.Json,
        }));
    }
}
