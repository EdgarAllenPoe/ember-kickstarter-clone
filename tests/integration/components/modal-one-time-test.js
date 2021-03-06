import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('modal-one-time', 'Integration | Component | modal one time', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{modal-one-time}}`);

  assert.equal(this.$().text().trim(), `×
        
        Bienvenido A Este Proyecto
      
      
     Este es un sito un poco diferente.No vamos a pedir ninguna informacion finaciera.Anota su donacion y luego alguien va estar en contacto consigo personalmente para ver la forma de pago mas facil`);

  // // Template block usage:
  // this.render(hbs`
  //   {{#modal-one-time}}
  //     template block text
  //   {{/modal-one-time}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
