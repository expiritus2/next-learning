import { toJS } from 'mobx';

export abstract class BaseStateStore {
    color: string = '';

    protected constructor(color?: string) {
        if (color) {
            this.color = color;
        }
    }

    logMessage<P>(propName: P) {
        if (process.env.NODE_ENV === 'development') {
            // @ts-ignore
            console.log(`%c ${this.constructor.name}`, `color: ${this.color}`, propName, toJS(this[propName]));
        }
    }

    abstract logStore(): void;
}
