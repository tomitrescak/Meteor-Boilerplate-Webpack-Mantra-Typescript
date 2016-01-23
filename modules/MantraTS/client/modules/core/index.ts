import methodStubs from './configs/method_stubs';
import actions from './actions';

import { IContext } from "../../configs/context";

export default {
  actions,
  load(context: IContext) {
    methodStubs();
  }
};
