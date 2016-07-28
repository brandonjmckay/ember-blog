import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.find('post', { urlString: params.urlString });
  },

  setupController(controller, model) {
    const post = model.get('content.firstObject');

    controller.set('model', post);
  }
});
