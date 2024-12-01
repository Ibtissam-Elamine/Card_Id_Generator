import { Injectable } from '@angular/core';
// @ts-ignore
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SalesforceService {
  private baseUrl = 'https://ensa37-dev-ed.develop.my.salesforce.com/services/apexrest/contacts';
  private accessToken = '00DWU00000A5RJZ!AQEAQND42dteFMg74Jm8y82EHC8jDFPZscAOsRtgsnms5QkbAnDvmU0xiAoZMc46_AdRR2MEbLl2eiCWzni30kASnLHNGMgL'; // Remplacez par votre token d'accès OAuth

  async getContacts() {
    try {
      const response = await axios.get(this.baseUrl, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des contacts:', error);
      throw error;
    }
  }

  async createContact(firstName: string, lastName: string, email: string) {
    try {
      const response = await axios.post(
        this.baseUrl,
        { firstName, lastName, email },
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du contact:', error);
      throw error;
    }
  }
}
