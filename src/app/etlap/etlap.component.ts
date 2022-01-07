import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  public etelid = -1;

  constructor(private route: ActivatedRoute,) { 
    this.route.params.subscribe( params => {
      if (params['id'] > -1) {
        this.etelid = params['id'];
      }
    })
  }

  ngOnInit(): void {
  }

}
