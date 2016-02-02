import methodStubs from './configs/method_stubs';
import actions from './actions';
import routes from './routes';

import { IContext } from "../../configs/context";

export default {
  routes,
  actions,
  load(context: IContext) {
    methodStubs(context);
  }
};
