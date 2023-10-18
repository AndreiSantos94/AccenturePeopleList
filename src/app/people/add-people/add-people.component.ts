import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.scss']
})
export class AddPeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() personAdded = new EventEmitter<any>();

  // Set initial state of the modal in false
  showModal = false;

  // Initialize newPerson object as empty
  newPerson = {
    name: '',
    age: null
  };

  addPerson() {
    // Validate if all the fields are filled
    if (this.newPerson.name && this.newPerson.age) {
      this.personAdded.emit(this.newPerson); // Emits event with the new person
      this.closeModal();
      return;
    }
    
    alert('Please, fill al the required fields.'); // Send an alert if fields are not filled
    
  }

  closeModal() {
    this.newPerson = { name: '', age: null }; // Reset newPerson object
    this.showModal = false; // Close modal
  }

}
