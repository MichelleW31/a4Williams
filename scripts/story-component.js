(function(){

  var storyComponent = {
    template:`
    <p>One fine day, my trusty {{$ctrl.sentence.noun}} woke up to find a {{$ctrl.sentence.adj}} cat. The cat was {{$ctrl.sentence.verb}} {{$ctrl.sentence.adv}}. What a weird morning...</p>
    <button ng-click="$ctrl.restartStory()">Restart Story</button>
    `,
    controller: "StoryController"
  }

  angular
    .module("storyApp")
    .component("storyComponent", storyComponent)
})();
