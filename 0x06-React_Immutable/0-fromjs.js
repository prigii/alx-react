const { fromJS } = require('immutable');

export default function getImmutableObject(object) {
  // Convert the object to immutable Map
  const immutableMap = fromJS(object);
  return immutableMap;
}
