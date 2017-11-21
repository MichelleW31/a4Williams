(function(){

  function FormController(StoryService){
    var vm = this;

    vm.setSentence = function(words){
      StoryService.setWords(words);
    };
  }

  function StoryController(StoryService){
    var vm = this;

    vm.sentence = StoryService.getWords();

    vm.restartStory = function(){
      StoryService.newStory();
    }
  }

  angular
    .module("storyApp")
    .controller("FormController", FormController)
    .controller("StoryController", StoryController)
})();
