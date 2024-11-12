import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/model/IProfile';
import { IRepos } from 'src/app/model/IRepos';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUser: string = ''; // Ensure initialization of githubUser
  public githubProfile!: IProfile;
  public githubRepos: IRepos[] = [];
  public errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void { }

  public submitUser() {
    this.isLoading = true;
    // Search profile
    // this.ngxSpinner.show();
    this.githubService.searchProfile(this.githubUser).subscribe((data) => {
      this.githubProfile = data;
      this.errorMessage = ''; // Clear previous error
    }, (error) => {
      this.errorMessage = `Error fetching profile: ${error.message}`;
    });

    // Search repositories
    this.githubService.searchRepos(this.githubUser).subscribe((data) => {
      this.githubRepos = data;
      // this.ngxSpinner.hide();
      this.isLoading = false;
      this.errorMessage = ''; // Clear previous error
    }, (error) => {
      this.errorMessage = `Error fetching repositories: ${error.message}`;
    });
  }
}
 