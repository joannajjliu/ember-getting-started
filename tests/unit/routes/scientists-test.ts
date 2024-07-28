import { module, test } from 'qunit';
import { setupTest } from 'jl-art-shop/tests/helpers';

module('Unit | Route | scientists', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:scientists');
    assert.ok(route);
  });
});
