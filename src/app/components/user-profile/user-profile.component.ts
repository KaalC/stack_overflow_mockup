import { Component, OnInit } from '@angular/core';
import { StackoverflowApiService } from 'src/app/services/stackoverflow-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userId: string;
  userData: any;
  userTopTag: any;
  userTopQuestions: any;
  constructor(private _stackOverFlowApi: StackoverflowApiService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(
      params => { this.userId = params.get('id') },
      error => { console.log(error) }
    );

    if(this.userId) {
      this._stackOverFlowApi.getUserProfileDetial(this.userId).pipe(
        map((res1: any) => this.handleUserData(res1)),
        mergeMap(() => forkJoin([this._stackOverFlowApi.getUserTopTags(this.userId), this._stackOverFlowApi.getUserTopQuestions(this.userId)]))
      ).subscribe(
        ([res2, res3]: [any, any]) => {
          this.handleUserTopTags(res2);
          this.handleUserTopQuestions(res3);
        },
        error => this.handleError(error)
      );
    }
  }

  handleUserData(data) {
    if(data) {
      this.userData = data.items[0];
      console.log(this.userData);
    }
  }

  handleUserTopTags(data) {
    if(data) {
      this.userTopTag = data.items;
      console.log(this.userTopTag);
    }
  }

  handleUserTopQuestions(data) {
    if(data) {
      this.userTopQuestions = data.items;
      console.log(this.userTopQuestions);
    }
  }

  handleError(error) {
    console.log(error.error.error_message);
    this._router.navigate(['/error']);
  }
}
