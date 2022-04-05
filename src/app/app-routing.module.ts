import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgApexchartsModule } from 'ng-apexcharts';
import { Monitoring01Component } from './monitoring01/monitoring01.component';
import { Monitoring02Component } from './monitoring02/monitoring02.component';
import { Monitoring03Component } from './monitoring03/monitoring03.component';
import { Monitoring04Component } from './monitoring04/monitoring04.component';
import { Monitoring05Component } from './monitoring05/monitoring05.component';
import { Reporting01Component } from './reporting01/reporting01.component';
import { Reporting02Component } from './reporting02/reporting02.component';
import { Reporting03Component } from './reporting03/reporting03.component';
import { Reporting04Component } from './reporting04/reporting04.component';
import { Reporting05Component } from './reporting05/reporting05.component';
import { Reporting06Component } from './reporting06/reporting06.component';
import { Reporting07Component } from './reporting07/reporting07.component';
import { Reporting08Component } from './reporting08/reporting08.component';

const routes: Routes = [
  { path: 'monitoring01', component: Monitoring01Component },
  { path: 'monitoring02', component: Monitoring02Component },
  { path: 'monitoring03', component: Monitoring03Component },
  { path: 'monitoring04', component: Monitoring04Component },
  { path: 'monitoring05', component: Monitoring05Component },
  { path: 'reporting01', component: Reporting01Component },
  { path: 'reporting02', component: Reporting02Component },
  { path: 'reporting03', component: Reporting03Component },
  { path: 'reporting04', component: Reporting04Component },
  { path: 'reporting05', component: Reporting05Component },
  { path: 'reporting06', component: Reporting06Component },
  { path: 'reporting07', component: Reporting07Component },
  { path: 'reporting08', component: Reporting08Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgApexchartsModule],
  exports: [RouterModule],
  declarations: [
    Monitoring01Component,
    Monitoring02Component,
    Monitoring03Component,
    Monitoring04Component,
    Monitoring05Component,
    Reporting01Component,
    Reporting02Component,
    Reporting03Component,
    Reporting04Component,
    Reporting05Component,
    Reporting06Component,
    Reporting07Component,
    Reporting08Component,
  ],
})
export class AppRoutingModule {}
