import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatChipsModule } from '@angular/material';
import { ReposComponent } from './repos/repos.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ReposComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ReposComponent, ProjectsComponent]
})
export class AppModule { }
