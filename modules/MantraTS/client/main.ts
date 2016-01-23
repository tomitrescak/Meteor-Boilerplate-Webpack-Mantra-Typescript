import {initContext} from './configs/context';
import routes from './configs/routes';
import {createApp} from './configs/mantra';

import coreModule from './modules/core';
import commentsModule from './modules/comments';

const context = initContext();

const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.loadRoutes(routes);
