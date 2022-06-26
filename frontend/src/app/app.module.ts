import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {QuizListComponent} from './shared/quiz-list/quiz-list.component'
import {QuizInfoComponent} from './shared/quiz-info/quiz-info.component'
import { HttpClientModule } from '@angular/common/http';
import { MatCommonModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { QuizAttemptComponent } from './shared/quiz-attempt/quiz-attempt.component'
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { AddQuizComponent } from './admin/add-quiz/add-quiz.component';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ManageQuizsComponent } from './admin/manage-quizs/manage-quizs.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AddQuizComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    QuizInfoComponent,
    QuizListComponent,
    AppComponent,
    QuizAttemptComponent,
    NavbarComponent,
    ManageQuizsComponent
  ],
  imports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatSelectModule,
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatCommonModule ,
    HttpClientModule ,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
