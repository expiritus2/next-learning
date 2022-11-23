import { action, makeObservable, observable } from 'mobx';

import { BaseStateStore } from '../core/BaseStateStore';

export class AppState extends BaseStateStore {
    adminDrawerIsOpen: boolean = false;

    constructor(color?: string) {
        super(color);
        makeObservable(this, {
            adminDrawerIsOpen: observable,
            openAdminDrawer: action,
        });
    }

    openAdminDrawer(isOpen: boolean) {
        this.adminDrawerIsOpen = isOpen;
    }

    logStore(): void {
        this.logMessage(this);
    }
}
