import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowApiService {

  private _urlBase = "https://api.stackexchange.com/2.2";
  private _urlBaseQuestion = "/questions";
  private _urlBaseUser = "/users/"
  private _urlFeaturedQuestion = this._urlBase + this._urlBaseQuestion + "/featured?order=desc&sort=activity&site=stackoverflow";
  private _urlUserProfilesSuffix = "?order=desc&sort=reputation&site=stackoverflow";
  private _urlUserTopTagsSuffix = "/top-tags?page=1&site=stackoverflow";
  private _urlUserTopQuestionSuffix = "/questions?order=desc&sort=activity&site=stackoverflow";

  constructor(private http: HttpClient) { }

  getFeaturedQuestion() : Observable<object> {
    return this.http.get(this._urlFeaturedQuestion);
  }

  getUserProfileDetial(id: string) {
    let finalUrl = this._urlBase + this._urlBaseUser + id + this._urlUserProfilesSuffix;
    return this.http.get(finalUrl);
  }

  getUserTopTags(id: string) {
    let finalTopTagsUrl = this._urlBase + this._urlBaseUser + id + this._urlUserTopTagsSuffix;
    return this.http.get(finalTopTagsUrl);
  }

  getUserTopQuestions(id: string) {
    let finalTopQuestionsUrl = this._urlBase + this._urlBaseUser + id + this._urlUserTopQuestionSuffix;
    return this.http.get(finalTopQuestionsUrl);
  }
}
