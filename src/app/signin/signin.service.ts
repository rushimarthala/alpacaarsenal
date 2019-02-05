import {Injectable} from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { SignIn} from './signin';
import { catchError } from '../../../node_modules/rxjs/operators';

@Injectable()
export class SignInService {
    username:string;
    constructor(private http: HttpClient) {}
    getUsers(): Observable<SignIn[]>{
        return this.http.get<SignIn[]>('assets/users/users.json').pipe(
                   catchError(this.handleError));
           }
       
            private handleError(err: HttpErrorResponse) {
               console.error(err);
               return Observable.throw(err.error() || 'Server error');
           }
       }
       
