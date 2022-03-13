import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'Home',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./pages/Home'));
        });
      },
    },
    {
      path: '/Users',
      name: 'Users',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/Users'));
          cb(null, require('./pages/Users'));
        });
      },
    },
    {
      path: '/Equipment',
      name: 'Equipment',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/Equipment'));
          cb(null, require('./pages/Equipment'));
        });
      },
    },
    {
      path: '/Detail',
      name: 'Detail',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/Detail'));
          cb(null, require('./pages/Detail'));
        });
      },
    },
    
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
