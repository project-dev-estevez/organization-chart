import { bootstrapApplication } from '@angular/platform-browser';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { OrganizationChart } from './app/organization-chart';

    bootstrapApplication(OrganizationChart, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));