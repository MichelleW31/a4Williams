(function(){

  var formComponent = {
    template:`
      <input placeholder = "Noun" ng-model ="$ctrl.words.noun">
      <input placeholder = "Adjective" ng-model ="$ctrl.words.adj">
      <input placeholder = "Verb(past tense)" ng-model ="$ctrl.words.verb">
      <input placeholder = "Adverb" ng-model ="$ctrl.words.adv">
      <button ng-click="$ctrl.setSentence($ctrl.words)">Read Story</button>
    `,
    controller:"FormController"
  }


  angular
    .module("storyApp")
    .component("formComponent", formComponent)
})();
