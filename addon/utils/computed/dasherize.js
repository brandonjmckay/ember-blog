import defaultFor from 'ember-blog/utils/default-for';
import Ember from 'ember';
const {
  computed,
  String
} = Ember;

export default function(dependentKey) {
  return computed(dependentKey, function() {
    const property = defaultFor(this.get(dependentKey), '');

    return String.dasherize(property.toString());
  });
}
