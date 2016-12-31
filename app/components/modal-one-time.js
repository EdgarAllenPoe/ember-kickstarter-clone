import Ember from 'ember';

export default Ember.Component.extend({

    didRender() {
$('#myModal').modal();
        // if (Cookies.get('modal_dismiss') == null) {

        //     console.log('here');
        //     $('#myModal').modal();
        //     Cookies.set('modal_dismiss', true, {
        //         expires: 1,
        //         path: '/'
        //     });
        // }
    }

});
