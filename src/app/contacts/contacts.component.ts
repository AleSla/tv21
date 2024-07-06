import { Component } from '@angular/core';
import { MaterialModule} from '../material.module';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  title = 'Контакти'
}
