import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  currentDateTimeLapse: number;
  @Input() quesList: any;

  constructor() { }

  ngOnInit(): void {
    this.currentDateTimeLapse = +new Date();
  }

  getTitleTextForStatus(count, text) {
    return ( count + " " + text + ( count == 1 ? '' : 's' ) );
  }

  isHotQuestion(count) {
    return Math.round(count/1000) > 0;
  }
}
