<!-- index.html -->
<!DOCTYPE html>
<html ng-app="app">
<head>
  <!-- SCROLLS -->
  <!-- load bootstrap and fontawesome via CDN -->
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />
  <link rel="stylesheet" href="//cdn.jsdelivr.net/angular.ng-notify/0.6.0/ng-notify.min.css" />
  <link rel="stylesheet" href="stylesheets/styles.css" />

  <!-- SPELLS -->
  <!-- load angular and angular route via CDN -->
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-resource.js"></script>
  <script src="//cdn.jsdelivr.net/angular.ng-notify/0.6.0/ng-notify.min.js"></script>
  <!--<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-animate.js"></script>-->
  <!--<script src="javascripts/vendor/angular-ui-router.min.js"></script>-->
  <script src="javascripts/vendor/angular-local-storage.min.js"></script>
  <script src="javascripts/vendor/underscore-min.js"></script>

  <script src="javascripts/app.module.js"></script>
  <script src="javascripts/app.config.js"></script>
  <script src="javascripts/app.router.js"></script>
  <script src="javascripts/app.config.service.js"></script>
  <script src="javascripts/app.user.factory.js"></script>
  <script src="javascripts/app.trip.factory.js"></script>
  <script src="javascripts/directive.back.js"></script>
  <script src="javascripts/main.controller.js"></script>
  <script src="javascripts/session.controller.js"></script>
  <script src="javascripts/trip.edit.controller.js"></script>
  <script src="javascripts/trip.new.controller.js"></script>
  <script src="javascripts/trips.controller.js"></script>
  <script src="javascripts/user.edit.controller.js"></script>
  <script src="javascripts/user.new.controller.js"></script>
  <script src="javascripts/users.controller.js"></script>
</head>
<body ng-controller="mainController">

<!-- HEADER AND NAVBAR -->
<header>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Angular Routing Example</a>
      </div>

      <ul class="nav navbar-nav">
        <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
        <li><a href="#trips"><i class="fa fa-shield"></i> Trips</a></li>
        <li ng-show="canSeeUsers()"><a href="#users"><i class="fa fa-user"></i> Users</a></li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li ng-show="isAuthenticated()"><div class="navbar-text">{{email()}}</div></li>
        <li><a href="#/login" ng-show="isGuest()">Login</a></li>
        <li><a href="#/register" ng-show="isGuest()">register</a></li>
        <li><a ng-click="logout()" ng-show="isAuthenticated()">Logout</a></li>
      </ul>
    </div>
  </nav>
</header>

<!-- MAIN CONTENT AND INJECTED VIEWS -->
<div id="main">

  <!-- angular templating -->
  <!-- this is where content will be injected -->

  <div ng-view></div>

</div>

</body>
</html>