import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('category', { urlString: params.urlString });
  },

  setupController(controller, model) {
    const category = model.get('content.firstObject');

    controller.setProperties({
      category,
      model: category.get('posts')
    });
  }
});
