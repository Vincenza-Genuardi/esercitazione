import { Component, Input } from '@angular/core';
import { Animale } from '../models/animale.model';

@Component({
  selector: 'app-componente-animale',
  templateUrl: './componente-animale.component.html',
  styleUrls: ['./componente-animale.component.css']
})
export class ComponenteAnimaleComponent {
 @Input() animale !: Animale

}
