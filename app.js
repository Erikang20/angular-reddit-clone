var app = angular.module( "clone", [] );

app.controller( "redditClone", function( $scope ) {
	$scope.clone = {};
	$scope.posts = [];
	$scope.sortType = 'title';
	$scope.sortReverse = false;
	$scope.searchPost = '';
	$scope.comments = [];
	$scope.rightNow = Date.now();
	$scope.propertyName = 'title';
	$scope.reverse = true;
	$scope.view = {};
	$scope.view.enterCount = 0;
	$scope.view.enterCount2 = 0;
	$scope.view.enterCount3 = 0;


	var post = [
		{
			title: 'puppies',
			author: 'Taco',
			img: "https://img.buzzfeed.com/buzzfeed-static/static/2015-02/19/10/campaign_images/webdr07/17-puppies-who-are-so-cute-they-will-make-you-mad-2-30501-1424359138-6_dblbig.jpg",
			description: 'sunt in culpa qui officia deserunt mollit anim id est laborum jajhajdshhyuhfnadfuasdbuashdfuihsdkjnjsdbhs ',
			date: 07 / 16 / 2016,
			score: 9
	},
		{
			title: 'more puppies',
			author: 'Jack',
			img: 'http://www.puppiesinflorida.com/wp-content/uploads/2016/07/Puppies_for_sale_in_florida.jpg',
			description: 'sunt in culpa qui officia deserunt mollit anim id est laborum jajhajdshhyuhfnadfuasdbuashdfuihsdkjnjsdbhs ',
			date: 04 / 14 / 206,
			score: 10
		}
   ];


	$scope.generate = function() {
		console.log( $scope.showMe );
		$scope.showMe = !$scope.showMe;
	};


	$scope.addPost = function() {
		var newPost = {};
		newPost.title = $scope.clone.title;
		newPost.author = $scope.clone.author;
		newPost.img = $scope.clone.img;
		newPost.description = $scope.clone.description;

		$scope.posts.push( newPost );
		console.log( $scope.posts );
		console.log( "working here yo!" );

	}




	$scope.addComment = function() {
		var newComment = {};
		newComment.comment = $scope.clone.comment;

		$scope.comments.push( newComment );

		console.log( $scope.clone.comment );
		console.log( "working there too" );
	}

	$scope.sortBy = function() {
		$scope.reverse = ( $scope.propertyName === propertyName ) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	}


} );
