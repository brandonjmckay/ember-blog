import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  setupController(controller) {
    const authors = this.store.find('author');
    const categories = this.store.find('category');

    this._super(...arguments);

    controller.setProperties({
      authors,
      categories
    });
  }
});
