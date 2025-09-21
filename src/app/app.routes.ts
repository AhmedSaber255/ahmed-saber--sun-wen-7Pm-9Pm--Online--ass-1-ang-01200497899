import { Routes } from '@angular/router';
import { HomeComponent as Home } from './features/components/home/home.component';
import { AboutComponent as About } from './features/components/about/about.component';
import { PortfolioComponent as portfolio } from './features/components/portfolio/portfolio.component';
import { ContactComponent as contact } from './features/components/contact/contact.component'; 
import { NotFoundComponent } from './features/components/not-found/not-found.component'; 



export const routes: Routes = [
    { path: '', component: Home
        
    },
    { path: 'about', component: About 

    },
    { path: 'portfolio', component: portfolio
        
    },
    { path: 'contact', component: contact 

    },
    { path: "**", component: NotFoundComponent

    }
];
