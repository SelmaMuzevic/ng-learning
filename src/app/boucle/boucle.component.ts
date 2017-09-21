import { Component, OnInit } from '@angular/core';
import { CompteurService } from '../shared/compteur.service';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent implements OnInit {
  tableau:string[] = ["Golf", "Jaguar", "Mazda", "Peugeot"];
  
  constructor (private cs:CompteurService) { }

  ngOnInit() {
    console.log('compte initial dans boucle :'
    +this.cs.compte);
    this.cs.increment();
    console.log('compte final dans boucle :'
    +this.cs.compte);
  }

}
