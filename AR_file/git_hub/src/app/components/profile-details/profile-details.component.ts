import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/model/IProfile';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() githubProfile!: IProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
