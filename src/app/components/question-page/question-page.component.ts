import { Component, OnInit } from '@angular/core';
import { StackoverflowApiService } from 'src/app/services/stackoverflow-api.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  questionsList: any;
  currentDateTimeLapse: number;
  constructor(private stackOverFlowApi: StackoverflowApiService) { }

  ngOnInit(): void {
    this.stackOverFlowApi.getFeaturedQuestion().subscribe(
      questList => this.handleQuestionRendering(questList),
      error => this.handleFetchError(error)
    );
    this.currentDateTimeLapse = +new Date();
  }

  handleQuestionRendering(questList) {
    this.questionsList = questList.items
    console.log(this.questionsList);
  }

  handleFetchError(error) {
    console.log(error);
  }

  getTitleTextForStatus(count, text) {
    return ( count + " " + text + ( count == 1 ? '' : 's' ) );
  }

  isHotQuestion(count) {
    return Math.round(count/1000) > 0;
  }
}
