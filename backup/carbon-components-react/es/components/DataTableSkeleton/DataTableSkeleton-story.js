/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, array } from '@storybook/addon-knobs';
import DataTableSkeleton from '../DataTableSkeleton';

var props = function props() {
  return {
    headers: array('Optional table headers (headers)', ['Name', 'Protocol', 'Port', 'Rule', 'Attached Groups'], ','),
    zebra: boolean('Use zebra stripe (zebra)', false),
    compact: boolean('Compact variant (compact)', false)
  };
};

storiesOf('DataTableSkeleton', module).addDecorator(withKnobs).add('default', function () {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(DataTableSkeleton, props()), React.createElement("br", null));
}, {
  info: {
    text: "\n            Skeleton states are used as a progressive loading state while the user waits for content to load.\n    \n            This example shows a skeleton state for a data table.\n          "
  }
});