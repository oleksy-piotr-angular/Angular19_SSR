// Główny plik uruchamiający aplikację Angular po stronie przeglądarki (browser bootstrap).
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Uruchomienie głównego komponentu aplikacji z konfiguracją.
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
