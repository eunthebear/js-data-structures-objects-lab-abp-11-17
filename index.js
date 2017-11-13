// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(driver, key) {
  let objectCopy = Object.assign({}, driver);
  delete objectCopy[key];
  return objectCopy;
}
