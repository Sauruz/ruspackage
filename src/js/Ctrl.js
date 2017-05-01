app.controller("Ctrl", function ($scope, $filter) {

    $scope.hashtags = [
        'camping',
        'campgrounds',
        'campsites',
        'explore',
        'holiday',
        'nomads',
        'travel',
        'spottocamp',
        'tent',
        'bestdestinations',
        'hiking',
        'wanderlust',
        'nature',
        'offthegrid'
    ];

    $scope.articles = [];

    $scope.emptyArticle = {
        "title": "",
        "content" : "",
        "url": "",
    };

    $scope.newArticle = angular.copy($scope.emptyArticle);

    $scope.getHashtags = function(platform, article) {
        var hashtags = "";

        var titleArr = article.title.replace(/[^\w\s]/gi, '').split(' ');
        titleArr.forEach(function(v) {
            hashtags += "#" + v.toLowerCase() + " ";
        });

        if (platform === 'all') {
            $scope.hashtags.forEach(function(v) {
                hashtags += "#" + v + " ";
            });
        }
        return hashtags;
    }

    $scope.countContent = function(platform, article) {
        var totalContent = 0;
        var bufferLinkExample = "http://buff.ly/2nUkKh0"
        var charactersLeft = 0;
        if (platform === 'all') {
            totalContent =  article.title + article.content + bufferLinkExample + $scope.getHashtags('all', article);
            charactersLeft = 500 - totalContent.length;
        }
        if (platform === 'twitter') {
            totalContent =  article.title + bufferLinkExample + $scope.getHashtags('twitter', article);
            charactersLeft = 140 - totalContent.length;
        }

        return charactersLeft;
    };

    $scope.addArticle = function() {
        var article = angular.copy($scope.newArticle);
        $scope.articles.push(article);
        $scope.newArticle = angular.copy($scope.emptyArticle);
    };


    console.log('test');
}); 