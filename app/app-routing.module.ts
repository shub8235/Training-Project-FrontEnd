import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectDetailComponent } from './components/admin/subject-detail/subject-detail.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { IndexComponent } from './components/pages/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { InstructionsComponent } from './components/student/instructions/instructions.component';
import { LevelsComponent } from './components/student/levels/levels.component';
import { ExamComponent } from './components/student/exam/exam.component';
import { ResultComponent } from './components/student/result/result.component';
import { SearchStudentComponent } from './components/admin/search-student/search-student.component';
import { SeeReportComponent } from './components/see-report/see-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' }, // redirect to `index component`
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'subject/:id', component: SubjectDetailComponent },
  { path: 'instructions/:id', component: InstructionsComponent },
  { path: 'level/:id', component: LevelsComponent },
  { path: 'exam/:id/:levelId', component: ExamComponent },
  { path: 'result', component: ResultComponent },
  { path: 'search', component: SearchStudentComponent },
  { path: 'reports', component: SeeReportComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page..needs to be at the bottom of the page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
