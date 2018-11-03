import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './models/projects.model';
import { PullRequest } from './pull-requests.model';
import { PROJECTS } from './models/mock-projects';
import { PULL_REQUESTS } from './mock-pull-requests';

@Injectable({
  providedIn: 'root'
})
export class PullRequestsService {

  constructor() { }

  getPullRequestsByProject(projectId): Observable<PullRequest[]> {
    return of(PULL_REQUESTS);
  }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
