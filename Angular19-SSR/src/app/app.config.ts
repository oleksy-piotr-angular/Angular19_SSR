import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
  withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

// Konfiguracja aplikacji Angular, przekazywana do bootstrapApplication.
// Application-wide providers and SSR options.
export const appConfig: ApplicationConfig = {
  providers: [
    // Optymalizacja detekcji zmian Angulara.
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Konfiguracja routera zdefiniowanego w app.routes.ts.
    provideRouter(routes),
    // Hydracja klienta po stronie przeglądarki (SSR).
    provideClientHydration(
      withEventReplay(), // Odtwarzanie zdarzeń po SSR.
      withHttpTransferCacheOptions({
        includePostRequests: true, // Cache POST requests (domyślnie tylko GET).
      })
    ),
    // Konfiguracja HttpClient do używania Fetch API (zalecane dla SSR).
    provideHttpClient(withFetch()),
  ],
};
