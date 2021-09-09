import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleServiceService } from 'src/app/people-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent implements OnInit {
  friends: any;
  search = '';
  test: string = '';
  constructor(
    private serve: PeopleServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.test = this.serve.test();
    this.friends = this.serve.getPeople(15);
  }
  selectPerson(person: object) {
    this.router.navigate([`friend`],
    {state: { person }, relativeTo: this.activatedRoute });
  }
  find(person: any) {
    return this.search.trim() === ''
      || `${ person.first_name } ${ person.last_name }`.toLowerCase()
      .includes(this.search.toLowerCase());
  }

}
