import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabysittersComponent } from './components/babysitters/babysitters.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { FAQComponent } from './components/faq/faq.component';
import { HistoryComponent } from './components/history/history.component';


const routes: Routes = [
  {path:'babysitters',component:BabysittersComponent},
  {path:'coffee', component:CoffeeComponent},
  {path: 'faq', component:FAQComponent},
  {path: 'history', component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
