import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcademicResultComponent } from './academic-result/academic-result.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DEOCertificateComponent } from './deo-certificate/deo-certificate.component';
import { DocsandinfoComponent } from './docsandinfo/docsandinfo.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { FireSafetyComponent } from './fire-safety/fire-safety.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GenralInfoComponent } from './genral-info/genral-info.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';
import { InfraStructureComponent } from './infra-structure/infra-structure.component';
import { LoginComponent } from './login/login.component';
import { MainUpgradeComponent } from './main-upgrade/main-upgrade.component';
import { NocCertificateComponent } from './noc-certificate/noc-certificate.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecoginitionCertificateComponent } from './recoginition-certificate/recoginition-certificate.component';
import { RenewalCertificateComponent } from './renewal-certificate/renewal-certificate.component';
import { ResultsComponent } from './results/results.component';
import { RulesComponent } from './rules/rules.component';
import { SafetyCertificateComponent } from './safety-certificate/safety-certificate.component';
import { SMCComponent } from './smc/smc.component';
import { StaffAndInfraComponent } from './staff-and-infra/staff-and-infra.component';
import { WaterSanitationComponent } from './water-sanitation/water-sanitation.component';
import { PublicDisclosureComponent } from './public-disclosure/public-disclosure.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'getstarted',component:GetStartedComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'activities',component:ActivitiesComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'clubs',component:ClubsComponent},
  {path:'rules',component:RulesComponent},
  {path:'generalInfo',component:GenralInfoComponent},
  {path:'docsAndInfo',component:DocsandinfoComponent},
  {path:'ResultsAndAcademics',component:ResultsComponent},
  {path:'StaffAndInfra',component:StaffAndInfraComponent},
  {path:'MandatoryPublicDisclosureInSARAS',component:PublicDisclosureComponent},
  {path:'FeeStructure' ,component:FeeStructureComponent},
  {path:'AcademicCalender',component:CalendarComponent},
  {path:'Link_of_ThreeYearResult',component:AcademicResultComponent},
  {path:'List_of_SMC',component:SMCComponent},
  {path:'affiliationLetter',component:MainUpgradeComponent},
  {path:'NOC',component:NocCertificateComponent},
  {path:'TrustCertificate',component:RenewalCertificateComponent},
  {path:'RecognitionCertificate',component:RecoginitionCertificateComponent},
  {path:'BuildingCertificate',component:SafetyCertificateComponent},
  {path:'FireCertificate',component:FireSafetyComponent},
  {path:'DEOCertificate',component:DEOCertificateComponent},
  {path:'WaterHealthCertificate',component:WaterSanitationComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'infrastructure' ,component:InfraStructureComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  
  exports: [RouterModule]


})
export class AppRoutingModule {
  

}
