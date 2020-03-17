import app from 'apprun';

import './wc-container'

const model = 'Hello world - AppRun !';

const view = (state) => <div>
  <h1>{state}</h1>
  <wc-container />
</div>;

const update = {

};

app.start(document.body, model, view, update);
