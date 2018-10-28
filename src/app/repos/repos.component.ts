import { Component, OnInit } from '@angular/core';
import { Repo } from '../models/repo';
import { ReposService } from "../repos.service";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: Repo[];

  constructor(private reposService: ReposService) { }

  ngOnInit() {
    this.getRepos();
  }

  getRepos(): void {
    this.reposService.getRepos()
      .subscribe(repos => this.repos = repos);
  }
}
