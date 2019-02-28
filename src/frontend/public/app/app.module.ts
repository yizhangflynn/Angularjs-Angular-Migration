import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import * as AppModuleAjs from './app.module.ajs.js';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        UIRouterUpgradeModule.forRoot(),
        CoreModule,
        FeaturesModule,
        SharedModule
    ]
})
export class AppModule {

    private _upgrade: UpgradeModule;

    constructor(upgrade: UpgradeModule) {

        this._upgrade = upgrade;
    }

    public ngDoBootstrap(): void {

        this._upgrade.bootstrap(document.body, [AppModuleAjs.default]);
    }
}