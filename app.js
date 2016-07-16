var app = angular.module( "clone", [] );

app.controller( "redditClone", function( $scope ) {
	$scope.clone = {};
	$scope.posts = [];
	$scope.rightNow = Date.now();
	$scope.propertyName = 'title';
	$scope.reverse = true;


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

	$scope.sortBy = function() {
		$scope.reverse = ( $scope.propertyName === propertyName ) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	}


} );
