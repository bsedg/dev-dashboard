import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Repo } from './models/repo';
import { REPOS } from './models/mock-repos';

import { Project } from './models/projects.model';
import { PROJECTS } from './models/mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor() { }

  getRepos(): Observable<Repo[]> {
    return of(REPOS);
  }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
