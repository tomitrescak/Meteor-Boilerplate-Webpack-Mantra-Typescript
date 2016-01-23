import Collections, { ICollections } from '../../collections/collections';
//import {Meteor} from 'meteor/meteor';
//import {FlowRouter} from 'meteor/kadira:flow-router';
//import {ReactiveDict} from 'meteor/reactive-dict';
//import {Tracker} from 'meteor/tracker';

export interface IContext {
  Meteor: any,
  FlowRouter: any,
  Collections: ICollections,
  LocalState: ReactiveDict,
  Tracker: any
}

export function initContext() {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
