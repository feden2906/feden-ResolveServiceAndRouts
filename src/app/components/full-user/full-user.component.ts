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
    this.activatedRouter.params.subscribe(({id}) => {
      const myUser = this.router.getCurrentNavigation().extras.state as User;
      if (myUser){
        this.chosenUser = myUser;
      }else{
        this.userService.getUserById(id).subscribe(value => {
          this.chosenUser = value;
        });
      }
    });

  }

  ngOnInit(): void {
  }

}
