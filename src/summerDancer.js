var MakeSummerDancer = function(top, left, timeBetweenSteps) {
  this.char = 'summer';

  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // this.$node = $('<span class="morty"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep  = this.step;
  // this.step();

};

MakeSummerDancer.prototype = Object.create(MakeDancer.prototype);
MakeSummerDancer.prototype.constructor = MakeSummerDancer;

MakeSummerDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log('test');
  MakeDancer.prototype.step.call(this);
  // this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  this.$node.toggleClass("danceMove");
};

MakeSummerDancer.prototype.lineup = function() {
  this.setPosition($('body').height() - 200, this.left);
};