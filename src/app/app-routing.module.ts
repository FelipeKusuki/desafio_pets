import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'pets',
        loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule)
    },
    {
        path: 'owner',
        loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule)
    },
    {
        path: '',
        loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}