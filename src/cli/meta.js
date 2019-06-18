/* @flow */

export default (
  moduleName: string,
  version: string,
  flowHeader: boolean,
): string => `/**
 * Flowtype definitions for ${moduleName}
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v${version}${flowHeader ? `\n* @flow` : ""}
 */

`;
