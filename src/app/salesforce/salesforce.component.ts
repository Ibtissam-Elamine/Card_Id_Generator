import { Component, OnInit } from '@angular/core';
import { SalesforceService } from '../salesforce.service';

@Component({
  selector: 'app-salesforce',
  template: `
    <div>
      <h1>Contacts</h1>
      <ul>
        <li *ngFor="let contact of contacts">
          {{ contact.FirstName }} {{ contact.LastName }} - {{ contact.Email }}
        </li>
      </ul>
    </div>
  `,
})
export class SalesforceComponent implements OnInit {
  contacts: any[] = [];

  constructor(private salesforceService: SalesforceService) {}

  async ngOnInit() {
    try {
      this.contacts = await this.salesforceService.getContacts();
    } catch (error) {
      console.error('Erreur lors de la récupération des contacts:', error);
    }
  }
}
