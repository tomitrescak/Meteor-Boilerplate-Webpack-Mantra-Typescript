import {
  injectDeps,
  useDeps as _useDeps,
  IInjectDeps
} from 'react-simple-di';

import {
  compose as _compose,
  composeWithTracker as _composeWithTracker,
  composeWithPromise as _composeWithPromise,
  composeWithObservable as _composeWithObservable,
  composeAll as _composeAll
} from 'react-komposer';

import { IContext } from "../configs/context";

class App {
  context: IContext;
  actions: any;

  private routesLoaded: boolean;

  constructor(context: IContext, actions = {}) {
    this.context = context;
    this.actions = actions;
    this.routesLoaded = false;
  }

  loadRoutes(routes: (injection: IInjectDeps, ...params: any[]) => void) {
    const inject = (routeDependencies: any) => {
      return injectDeps(this.context, this.actions)(routeDependencies);
    };

    routes(inject, this.context, this.actions);
    this.routesLoaded = true;
  }

  loadModule(module: { actions: Object, load: (context: IContext) => void }) {
    if (this.routesLoaded) {
      const message = `A module should be loaded before loading routes.`;
      throw new Error(message);
    }

    if (!module) {
      const message = `app.loadModule() should be called with a module`;
      throw new Error(message);
    }

    if (typeof module.load !== 'function') {
      const message = `A module must contain a .load() function.`;
      throw new Error(message);
    }

    const actions = module.actions || {};
    _.extend(this.actions, actions);
    // this.actions = {
    //   ...this.actions,
    //   ...actions
    // };

    module.load(this.context);
  }
}

// export this module's functions
export const createApp = (context: IContext) => (new App(context));

// export react-simple-di functions
export const useDeps = _useDeps;

// export react-komposer functions
export const compose = _compose;
export const composeWithTracker = _composeWithTracker;
export const composeWithPromise = _composeWithPromise;
export const composeWithObservable = _composeWithObservable;
export const composeAll = _composeAll;
