import { Component } from '@angular/core';
import { Animal } from './models/Animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-InputOutput';

  icon = "";
  fedAnimals: number = 0;

  // Listan med djur
  animal: Animal[] = 
  [
    new Animal ("Lelle", "Lejonet", 5, false),
    new Animal ("Frankie", "Sjölejonet", 12, false),
    new Animal ("Koalis", "Koalan", 1, true),
    new Animal ("Virre", "Vandrandepinnen", 7, true),
  ]

  // Funktion som körs vid klick på Mata-knapp
  feedAnimal(animal: Animal) {
    animal.isFed = true;
    this.fedAnimals += 1;
    this.icon = document.createElement("h4").innerText = "🍋"
    document.getElementById("fedAnmial")?.prepend(this.icon);
  }
}
