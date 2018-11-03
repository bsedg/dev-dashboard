import { Component, OnInit } from '@angular/core';

import { Project } from '../models/projects.model';
import { PullRequestsService } from '../pull-requests.service';
import { PullRequest } from '../pull-requests.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  prs: PullRequest[];

  constructor(private pullRequestsService: PullRequestsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.pullRequestsService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  getPullRequests(projectId): void {
    this.pullRequestsService.getPullRequestsByProject(projectId)
      .subscribe(prs => this.prs = prs)
  }
}
