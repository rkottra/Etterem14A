import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etlap',
  templateUrl: './etlap.component.html',
  styleUrls: ['./etlap.component.css']
})
export class EtlapComponent implements OnInit {

  public Etelek = [
    {
      EtelNeve : "Rántott hús",
      Leiras: "Akkor jó ha lelóg a tányérról",
      Url : "assets/rantott_hus.jfif"
    },
    {
      EtelNeve : "Töltött káposzta",
      Leiras: "",
      Url : "assets/rantott_hus.jfif"
    },
    {
      EtelNeve : "Palacsinta"
    },
    {
      EtelNeve : "Rakott krumpli"
    },
    {
      EtelNeve : "Spenót"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
