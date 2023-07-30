import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docsandinfo',
  templateUrl: './docsandinfo.component.html',
  styleUrls: ['./docsandinfo.component.css']
})
export class DocsandinfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  onclickupgrade(){
    this.router.navigateByUrl('affiliationLetter');
  }

  onclicknocCert(){
    this.router.navigateByUrl('NOC')
  }

  onclickrenewal(){
    this.router.navigateByUrl('TrustCertificate')
  }

  onClickRecCertificate(){
    this.router.navigateByUrl('RecognitionCertificate')
  }

  onSafetyCertificate(){
    this.router.navigateByUrl('BuildingCertificate')
  }

  onfireSafety(){
    this.router.navigateByUrl('FireCertificate')
  }

  onDeoCertificate(){
    this.router.navigateByUrl('DEOCertificate')
  }

  onclickwatersanitation(){
    this.router.navigateByUrl('WaterHealthCertificate')
  }



}
