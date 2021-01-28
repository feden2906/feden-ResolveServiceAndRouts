import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  chosenUser: User;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private userService: UserService) {
    this.activatedRouter.params.subscribe(value => {
      this.chosenUser = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  ngOnInit(): void {
    // if (!this.chosenUser) {
    //   console.log(this.chosenUser);
    //   this.activatedRouter.params.subscribe(({id}) => {
    //     this.userService.getUserById(id).subscribe(value => console.log(value));
    //   });
    // }
  }

}
