import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sandbox',
    loadChildren: () =>
      import('./sandbox/sandbox.module').then((m) => m.SandboxModule),
  },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./documentation/documentation.module').then((m) => m.DocumentationModule),
  },    
  {
    path: 'login-page',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'Register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  // {
  //   path: 'change-password',
  //   loadChildren: () =>
  //     import('./clients/change-password/change-password.module').then(
  //       (m) => m.ChangePasswordModule
  //     ),
  // },
  // {
  //   path: 'doctor',
  //   loadChildren: () =>
  //     import('./doctor/doctor.module').then((m) => m.DoctorModule),
  // },
  // {
  //   path: 'blank',
  //   loadChildren: () =>
  //     import('./blank/blank.module').then((m) => m.BlankModule),
  // },
  // {
  //   path: 'map-grid',
  //   loadChildren: () =>
  //     import('./map-grid/map-grid.module').then((m) => m.MapGridModule),
  // },
  // {
  //   path: 'map-list',
  //   loadChildren: () =>
  //     import('./map-list/map-list.module').then((m) => m.MapListModule),
  // },
  // {
  //   path: 'calender',
  //   loadChildren: () =>
  //     import('./calender/calender.module').then((m) => m.CalenderModule),
  // },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  // },
  // {
  //   path: 'blog-grid',
  //   loadChildren: () =>
  //     import('./blog-grid/blog-grid.module').then((m) => m.BlogGridModule),
  // },
  // {
  //   path: 'blank',
  //   loadChildren: () =>
  //     import('./blank/blank.module').then((m) => m.BlankModule),
  // },
  // {
  //   path: 'blog-details',
  //   loadChildren: () =>
  //     import('./blog-details/blog-details.module').then(
  //       (m) => m.BlogDetailsModule
  //     ),
  // },
  // {
  //   path: 'video-call',
  //   loadChildren: () =>
  //     import('./videocall/videocall.module').then((m) => m.VideocallModule),
  // },
  // {
  //   path: 'voice-call',
  //   loadChildren: () =>
  //     import('./voicecall/voicecall.module').then((m) => m.VoicecallModule),
  // },
  // {
  //   path: 'invoice-details',
  //   loadChildren: () =>
  //     import('./invoice-details/invoice-details.module').then(
  //       (m) => m.InvoiceDetailsModule
  //     ),
  // },
  // {
  //   path: 'privacy-policy',
  //   loadChildren: () =>
  //     import('./privacy-policy/privacy-policy.module').then(
  //       (m) => m.PrivacyPolicyModule
  //     ),
  // },
  // {
  //   path: 'terms-conditions',
  //   loadChildren: () =>
  //     import('./terms-conditions/terms-conditions.module').then(
  //       (m) => m.TermsConditionsModule
  //     ),
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.module').then((m) => m.AdminModule),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}