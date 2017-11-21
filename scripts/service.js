(function(){

  function StoryService($location){
    var words ={};

    this.setWords = function(input){
      words = input;
      $location.path("/story")
    };

    this.getWords = function(){
      return words;
    }

    this.newStory = function(){
      $location.path("/form");
    }

  }

  angular
    .module("storyApp")
    .service("StoryService", StoryService)
})();
