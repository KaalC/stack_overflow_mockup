import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowApiService {

  private _urlFeaturedQuestion = "https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow";

  constructor(private http: HttpClient) { }

  getFeaturedQuestion() {
    return this.http.get(this._urlFeaturedQuestion);
  }
}
