(function(){

  var formComponent = {
    template:`
      <div id = "form">
        <input placeholder = "Noun" ng-model ="$ctrl.words.noun">
        <input placeholder = "Adjective" ng-model ="$ctrl.words.adj">
        <input placeholder = "Verb(ing)" ng-model ="$ctrl.words.verb">
        <input placeholder = "Adverb" ng-model ="$ctrl.words.adv">
      </div>
      <button ng-click="$ctrl.setSentence($ctrl.words)">Read Story</button>
    `,
    controller:"FormController"
  }


  angular
    .module("storyApp")
    .component("formComponent", formComponent)
})();
