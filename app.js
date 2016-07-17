var app = angular.module( "clone", [ 'ngAnimate' ] );

app.controller( "redditClone", function( $scope ) {
	$scope.clone = {};
	$scope.posts = [];
	$scope.searchPost = '';
	$scope.comments = [];
	$scope.date = Date.now();
	$scope.reverse = true;
	$scope.view = {};
	$scope.view.enterCount = 0;
	$scope.view.enterCount2 = 0;
	$scope.clone.showComment = false;
	$scope.post = {
		title: '',
		author: '',
		img: '',
		description: '',
		date: '',

	}


	$scope.posts = [
		{
			title: 'Puppies',
			author: 'Taco',
			img: "https://img.buzzfeed.com/buzzfeed-static/static/2015-02/19/10/campaign_images/webdr07/17-puppies-who-are-so-cute-they-will-make-you-mad-2-30501-1424359138-6_dblbig.jpg",
			description: 'sunt in culpa qui officia deserunt mollit anim id est laborum jajhajdshhyuhfnadfuasdbuashdfuihsdkjnjsdbhs ',
			date: 07 / 16 / 2016,
			score: 9
	},
		{
			title: 'More puppies',
			author: 'Jack',
			img: 'http://www.puppiesinflorida.com/wp-content/uploads/2016/07/Puppies_for_sale_in_florida.jpg',
			description: 'sunt in culpa qui officia deserunt mollit anim id est laborum jajhajdshhyuhfnadfuasdbuashdfuihsdkjnjsdbhs ',
			date: 04 / 14 / 2015,
			score: 10
		}
	 ];



	$scope.generate = function() {
		console.log( 'im here' );
		$scope.showMe = !$scope.showMe;
	};

	$scope.hideComment = function() {
		console.log( "cleaning comments" );
		$scope.littleComment = !$scope.littleComment;
	}


	var reset = function() {
		$scope.clone.title = null;
		$scope.clone.author = null;
		$scope.clone.img = null;
		$scope.clone.description = null;
		$scope.clone.userForm = false;


		console.log( "this is clean!" );
	}

	var cleanComm = function() {
		$scope.clone.commentBy = null;
		$scope.clone.comment = null;
		$scope.clone.otherComment = false;

	}


	$scope.addPost = function() {
		var newPost = {};
		newPost.title = $scope.clone.title;
		newPost.author = $scope.clone.author;
		newPost.img = $scope.clone.img;
		newPost.description = $scope.clone.description;

		$scope.posts.push( newPost );
		console.log( $scope.posts );
		reset();
		console.log( "working here yo!" );

	}

	$scope.addComment = function() {
		var newComment = {};
		newComment.commentBy = $scope.clone.commentBy;
		newComment.comment = $scope.clone.comment;

		$scope.comments.push( newComment );

		console.log( $scope.comment );
		console.log( "working there too" );
		cleanComm();
	}


	$scope.sortBy = function() {
		$scope.reverse = ( $scope.propertyName === $scope.clone.propertyName ) ? !$scope.reverse : false;
		$scope.propertyName = $scope.clone.propertyName;
	}


} );
