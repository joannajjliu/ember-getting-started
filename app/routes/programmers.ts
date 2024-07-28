import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Grace Hopper', 'Linus Torvalds', 'Ada Lovelace'];
  }
}
