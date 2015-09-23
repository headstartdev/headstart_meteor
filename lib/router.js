Router.configure({
   layoutTemplate: 'layout', // 모든 route에 대한 기본 레이아웃을 layout 으로 지정.
  /*loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('appointments'); }*/
});


Router.map(function() {
  /*this.route('userList', {path: '/'});
  this.route('/submit', {name: 'scheduleSubmit'});
  this.route('/scheduleList', {name: 'scheduleList'});*/
});