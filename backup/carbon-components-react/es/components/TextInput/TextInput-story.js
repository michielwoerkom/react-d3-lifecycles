/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import TextInput from '../TextInput';
import TextInputSkeleton from '../TextInput/TextInput.Skeleton';
var types = {
  None: '',
  'For email (email)': 'email',
  'For password (password)': 'password'
};

var TextInputProps = function TextInputProps() {
  return {
    className: 'some-class',
    id: 'test2',
    defaultValue: text('Default value (defaultValue)', 'This is not a default value'),
    labelText: text('Label text (labelText)', 'Text Input label'),
    type: select('Form control type (type)', types, ''),
    placeholder: text('Placeholder text (placeholder)', 'Placeholder text'),
    light: boolean('Light variant (light)', false),
    disabled: boolean('Disabled (disabled)', false),
    hideLabel: boolean('No label (hideLabel)', false),
    invalid: boolean('Show form validation UI (invalid)', false),
    invalidText: text('Form validation UI content (invalidText)', 'A valid value is required'),
    helperText: text('Helper text (helperText)', 'Optional helper text.'),
    onClick: action('onClick'),
    onChange: action('onChange')
  };
};

storiesOf('TextInput', module).addDecorator(withKnobs).add('Default', function () {
  return React.createElement(TextInput, TextInputProps());
}, {
  info: {
    text: "\n            Text fields enable the user to interact with and input data. A single line\n            field is used when the input anticipated by the user is a single line of\n            text as opposed to a paragraph.\n            The default type is 'text' and its value can be either 'string' or 'number'.\n          "
  }
}).add('skeleton', function () {
  return React.createElement("div", null, React.createElement(TextInputSkeleton, null), React.createElement("br", null), React.createElement(TextInputSkeleton, {
    hideLabel: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n            "
  }
});