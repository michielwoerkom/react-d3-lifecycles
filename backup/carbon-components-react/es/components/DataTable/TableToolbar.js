/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { settings } from 'carbon-components';
import wrapComponent from '../../tools/wrapComponent';
var prefix = settings.prefix;
var TableToolbar = wrapComponent({
  name: 'TableToolbar',
  type: 'section',
  className: "".concat(prefix, "--table-toolbar")
});
export default TableToolbar;