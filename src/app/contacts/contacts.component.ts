import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MatIcon, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  title = 'Контакти'
}
