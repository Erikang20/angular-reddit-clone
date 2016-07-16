var app = angular.module( "clone", [] );

app.controller( "redditClone", function( $scope ) {
	$scope.clone = {};
	$scope.posts = [];
	// $scope.comment = [];
	$scope.comments = [];
	$scope.rightNow = Date.now();
	$scope.propertyName = 'title';
	$scope.reverse = true;
	$scope.view = {};
	$scope.view.enterCount = 0;
	$scope.view.enterCount2 = 0;
	$scope.view.enterCount3 = 0;


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
