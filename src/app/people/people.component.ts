import { Component, OnInit } from '@angular/core';

// Create an interface used on peopleList
interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  peopleList: Person[] = []; // List of people

  onPersonAdded(newPerson: Person) {
    // Add a new person to the list
    this.peopleList.push(newPerson);
  }

}
