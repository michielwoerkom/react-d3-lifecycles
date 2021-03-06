/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
var readmeURL = 'https://goo.gl/dq6CEK';

var props = function props() {
  return {
    short: boolean('Short variant (short)', false),
    shouldShowBorder: boolean('Table Border variant (shouldShowBorder)', true)
  };
};

storiesOf('DataTable', module).addDecorator(withKnobs).add('default', withReadme(readme, function () {
  return require('./stories/default').default(props());
}), {
  info: {
    /* eslint-disable no-useless-escape */
    text: "\n          Data Tables are used to represent a collection of resources, displaying a\n          subset of their fields in columns, or headers. The `DataTable` component\n          that we export from Carbon requires two props to be passed in: `rows`\n          and `headers`.\n          You can find more detailed information surrounding usage of this component\n          at the following url: ".concat(readmeURL, "\n        ")
    /* eslint-enable no-useless-escape */

  }
}).add('with toolbar', withReadme(readme, require('./stories/with-toolbar').default), {
  info: {
    text: "\n          DataTable with toolbar and filtering.\n\n          You can find more detailed information surrounding usage of this component\n          at the following url: ".concat(readmeURL, "\n        ")
  }
}).add('with sorting', withReadme(readme, require('./stories/with-sorting').default), {
  info: {
    text: "\n          DataTable with sorting\n\n          You can find more detailed information surrounding usage of this component\n          at the following url: ".concat(readmeURL, "\n        ")
  }
}).add('with selection', withReadme(readme, require('./stories/with-selection').default), {
  info: {
    text: "\n          DataTable with selection\n\n          You can find more detailed information surrounding usage of this component\n          at the following url: ".concat(readmeURL, "\n        ")
  }
}).add('with radio button selection', withReadme(readme, require('./stories/with-selection--radio').default), {
  info: {
    text: "\n          DataTable with radio button selection\n\n          You can find more detailed information surrounding usage of this component\n          at the following url: ".concat(readmeURL, "\n        ")
  }
}).add('with expansion', withReadme(readme, require('./stories/with-expansion').default), {
  info: {
    text: "\n            DataTable with expansion\n\n            You can find more detailed information surrounding usage of this component\n            at the following url: ".concat(readmeURL, "\n          ")
  }
}).add('with batch actions', withReadme(readme, require('./stories/with-batch-actions').default), {
  info: {
    text: "\n            Uses <TableToolbar> alongside <TableBatchActions> and <TableBatchAction>\n            to create the toolbar and placeholder for where the batch action menu will\n            be displayed.\n\n            You can use the `getBatchActionProps` prop getter on the\n            <TableBatchActions> component to have it wire up the ghost menu for you.\n\n            Individual <TableBatchAction> components take in any kind of event handler\n            prop that you would expect to use, like `onClick`. You can use these\n            alongside the `selectedRows` property in your `render` prop function\n            to pass along this info to your batch action handler.\n\n            You can find more detailed information surrounding usage of this component\n            at the following url: ".concat(readmeURL, "\n          ")
  }
}).add('with dynamic content', withReadme(readme, require('./stories/with-dynamic-content').default), {
  info: {
    text: "\n          Showcases DataTable behavior when rows are added to the component,\n          and when cell data changes dynamically.\n        "
  }
}).add('with boolean column', withReadme(readme, require('./stories/with-boolean-column').default), {
  info: {
    text: "\n          DataTable with toolbar and filtering with column has boolean value.\n        "
  }
});