import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProfile } from '../model/IProfile';
import { IRepos } from '../model/IRepos';
import { CLIENT_ID, CLIENT_SECRET } from '../credentials/githubCredentials';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private httpClient: HttpClient) { }
 
  // search for UserProfile
  public searchProfile(githubUser:any): Observable<IProfile> {
    const dataUrl = `https://api.github.com/users/${githubUser}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<IProfile>(dataUrl).pipe(
      retry(1),
      
      catchError(this.handleError)
    );
    console.log(this.searchProfile);
  }

  // search for UserRepos
  public searchRepos(githubUser: any): Observable<IRepos[]> {
    const dataUrl = `https://api.github.com/users/${githubUser}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<IRepos[]>(dataUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
    console.log(this.searchRepos);
  }

  // Error handling
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = `Error: ${error.error.message}`;
    } else {
     
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
