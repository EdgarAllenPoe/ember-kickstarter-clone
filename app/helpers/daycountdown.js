import Ember from 'ember';

export function daycountdown([time]) {
let endtime =  time;
let t = Date.parse(endtime) - Date.parse(new Date());
let days = Math.floor( t/(1000*60*60*24) );
if (days <= 0) {
  days = 0;

}

  return days;
}

export default Ember.Helper.helper(daycountdown);
 

