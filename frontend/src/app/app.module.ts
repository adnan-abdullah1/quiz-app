import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuizComponent } from './admin/components/add-quiz/add-quiz.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './home/components/home.component';
import { ToastrModule} from 'ngx-toastr';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AttemptQuizComponent } from './shared/attempt-quiz/attempt-quiz/attempt-quiz.component'
import {MatRadioModule} from '@angular/material/radio';
import { AddTeamComponent } from './admin/components/add-team/add-team.component';
import { QuizInfoComponent } from './shared/quiz-info/quiz-info/quiz-info.component'
import {MatDialogModule} from '@angular/material/dialog';
import { ViewMultimediaComponent } from './shared/attempt-quiz/attempt-quiz/view-multimedia/view-multimedia.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
 
    AppComponent,
    HomeComponent,
    AddQuizComponent,
    TopNavComponent,
    SideNavComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    AttemptQuizComponent,
    AddTeamComponent,
    QuizInfoComponent,
    ViewMultimediaComponent,



  ],
  imports: [
    MatSlideToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
