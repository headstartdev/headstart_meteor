/**
 * Created by byunhyeongwon on 2015. 10. 1..
 */
Meteor.publish('customer', function() {
    return Customer.find();
});