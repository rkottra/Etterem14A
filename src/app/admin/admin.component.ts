import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public felhasznalonev:string = "KovacsJanos";
  public jelszo:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  Belepes() {
    alert(this.felhasznalonev);
  }

}