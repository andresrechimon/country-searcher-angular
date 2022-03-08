import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerCapitalComponent } from "./countries/pages/per-capital/per-capital.component";
import { PerCountryComponent } from "./countries/pages/per-country/per-country.component";
import { PerRegionComponent } from "./countries/pages/per-region/per-region.component";
import { SeeCountryComponent } from "./countries/pages/see-country/see-country.component";

const routes:Routes = [
    {path: '', component: PerCountryComponent, pathMatch: 'full'},
    {path: 'region', component: PerRegionComponent},
    {path: 'capital', component: PerCapitalComponent},
    {path: 'country/:id', component: SeeCountryComponent},
    {path: '**', redirectTo: ''}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}