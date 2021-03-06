import { StadiumTicketsMatchsComponent } from './stadium-tickets-matchs/stadium-tickets-matchs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StadiumTicketsAboutComponent } from './stadium-tickets-about/stadium-tickets-about.component';


export const routes: Routes = [
{ path: '',redirectTo: 'matchs',pathMatch: 'full' },
{ path: 'matchs', component: StadiumTicketsMatchsComponent },
{ path: 'about', component: StadiumTicketsAboutComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
