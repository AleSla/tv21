import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LiveComponent } from './live/live.component';
import { NewsComponent } from './news/news.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShowsComponent } from './shows/shows.component';


export const routes: Routes = [
    { path: 'about', component: AboutComponent, title: 'TV21 - За нас' },
    { path: 'contacts', component: ContactsComponent, title: 'TV21 - Контакти' },
    { path: '', component: HomeComponent, title: 'TV21 - Начало' },
    { path: 'live', component: LiveComponent, title: 'TV21 - На живо'},
    { path: 'news', component: NewsComponent, title: 'TV21 - Новини'},
    { path: 'schedule', component: ScheduleComponent, title: 'TV21 - Програма' },
    { path: 'shows', component: ShowsComponent, title: 'TV21 - Предавания'},
  ];

