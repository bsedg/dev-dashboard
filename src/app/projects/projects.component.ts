import { Component, OnInit } from '@angular/core';

import { Project } from '../models/projects.model';
import { ReposService } from '../repos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private reposService: ReposService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.reposService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}
