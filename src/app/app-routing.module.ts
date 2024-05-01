import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'questions',
    component: QuestionPageComponent
  },
  {
    path: 'userprofile/:id',
    component: UserProfileComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutedComponent = [LoginPageComponent, QuestionPageComponent, UserProfileComponent, ErrorPageComponent, PageNotFoundComponent]
