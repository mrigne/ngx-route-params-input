import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { users } from './../../../app/users-db';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnChanges {

  public lastChange: SimpleChanges;

  public usersById = users.reduce((userCollection, user) => {
    userCollection[user.id] = user;
    return userCollection;
  }, {});

  @Input()
  public userIdInput: string;

  @Input()
  public content: string;

  ngOnChanges(changes): void {
    this.lastChange = changes;
  }

}
