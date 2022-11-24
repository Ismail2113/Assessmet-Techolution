import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "aquatics",
        loadChildren: () => import("@assessment-tech/firstscreen/aquatics-screen").then(m => m.FirstscreenAquaticsScreenModule),
    },
    {
        path: "pets",
        loadChildren: () => import("@assessment-tech/firstscreen/aquatics-screen").then(m => m.FirstscreenAquaticsScreenModule),
    },
    {
        path: "plants",
        loadChildren: () => import("@assessment-tech/firstscreen/aquatics-screen").then(m => m.FirstscreenAquaticsScreenModule),
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: `/plants`,
    },
];
