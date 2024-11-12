import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/model/IProfile';
import { IRepos } from 'src/app/model/IRepos';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  @Input() githubRepos!: IRepos[];
  @Input() githubProfile!: IProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
