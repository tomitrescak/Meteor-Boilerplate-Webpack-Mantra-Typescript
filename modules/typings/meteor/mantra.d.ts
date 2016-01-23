declare module 'react-mounter' {
  export var mount: any;
}

declare module 'react-komposer' {
  interface IKomposer {
    (params: Object, onData: Function): Function
  }

  interface IKomposerData {
    (error?: Object, data?: Object): void
  }

  export function compose(): any;
  export function composeWithTracker(komposer: IKomposer): any;
  export function composeWithPromise(): any;
  export function composeWithObservable(): any;
  export function composeAll(composeFunction: Function, depsFunction: Function): any;
}

declare module 'react-simple-di' {
  interface IInjectDeps {
    (...deps: any[]): IInjectDeps
  }

  interface IDepsMapper {
    (...deps: any[]): void
  }

  export var injectDeps: IInjectDeps;
  export function useDeps(depsMapper?: IDepsMapper): any;
}
