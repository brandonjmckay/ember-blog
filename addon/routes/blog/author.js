import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model(params) {
    return this.store.find('author', { urlString: params.urlString });
  },

  setupController(controller, model) {
    const author = model.get('content.firstObject');

    controller.setProperties({
      author,
      model: author.get('posts')
    });
  }
});
