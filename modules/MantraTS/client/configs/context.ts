import * as Collections from '../../common/collections';
//import {Meteor} from 'meteor/meteor';
//import {FlowRouter} from 'meteor/kadira:flow-router';
//import {ReactiveDict} from 'meteor/reactive-dict';
//import {Tracker} from 'meteor/tracker';

export interface IContext {
  Meteor: typeof Meteor,
  FlowRouter: typeof FlowRouter,
  Collections: Collections.ICollections,
  LocalState: ReactiveDict,
  Tracker: typeof Tracker
}

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
