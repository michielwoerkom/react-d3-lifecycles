"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setupGetInstanceId;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Generic utility to initialize a method that will return a unique instance id
 * for a component.
 */
function setupGetInstanceId() {
  var instanceId = 0;
  return function getInstanceId() {
    return ++instanceId;
  };
}