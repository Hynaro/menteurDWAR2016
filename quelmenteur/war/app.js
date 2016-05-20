var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'test';
  $scope.t = 1;
  $scope.law=0;
  $scope.listeloi = [];
  $scope.votreDepute = '';
  $scope.listeDeputes = deputes;
  $scope.afficheResultat = 0;

  $scope.login = function() {
    $scope.t = 2;
    $scope.law = 0;
    var arr = [];
    $scope.sample = [];
    while(arr.length < 10){
      var randomnumber=Math.ceil(Math.random()*20);
      var found=false;
      for(var i=0;i<arr.length;i++){
	      if(arr[i]==randomnumber){
	        found=true;
	      }
      }
      if(!found){
        arr[arr.length]=randomnumber;
        $scope.sample[$scope.sample.length]=laws[randomnumber];
      }
    }
  };
  
  $scope.click = function() {
    if ($scope.law < 10) {
      if (angular.equals($scope.vote,'49.3')){
        $scope.listeloi[$scope.law] = $scope.sample[$scope.law].name + ':pour';
        $scope.law++;
      }
      else{
        $scope.listeloi[$scope.law] =  $scope.sample[$scope.law].name + ':' +$scope.vote;
        $scope.law++;
      }
    }
    else{
      $scope.law++;
    }
  };
  
  $scope.results = function(){
    var test = [];
      for(var i=0;i<$scope.listeDeputes.length;i++){
        var k = 0;
        for(var j=0;j<$scope.listeloi.length;j++){
	        for(var l=0;l<$scope.listeDeputes[i].laws.length;l++){
	          if($scope.listeDeputes[i].laws[l]==$scope.listeloi[j]){k++}
          }
        }
        test[i] = k;
       
      }
      var max = Math.max.apply(null, test);
      var placeDepute = test.indexOf(max);
      $scope.votreDepute = $scope.listeDeputes[placeDepute].name
      $scope.AfficheResultat = 1;
  };

var test = {
   name: 'test',
   description: 'tu es connecté',
   connecte: false
};



});

var deputes = [
  {
    name: "Bernadette Laclais",
    laws: ['loi1:pour','loi2:contre','loi3:pour','loi4:abstention','loi5:contre','loi6:contre','loi7:pour','loi8:abstention','loi9:contre','loi10:pour','loi11:pour','loi12:pour','loi13:pour','loi14:pour','loi15:pour','loi16:abstention','loi17:pour','loi18:contre','loi19:pour','loi20:contre' ],
  },
  {
    name: "Jean-Christophe Lagarde",
    laws: ['loi1:pour','loi2:contre','loi3:pour','loi4:abstention','loi5:pour','loi6:contre','loi7:pour','loi8:abstention','loi9:contre','loi10:pour','loi11:pour','loi12:pour','loi13:pour','loi14:pour','loi15:pour','loi16:abstention','loi17:abstention','loi18:pour','loi19:pour','loi20:contre' ],
  },
  {
    name: "Jacques Lamblin",
    laws: ['loi1:pour','loi2:contre','loi3:abstention','loi4:abstention','loi5:contre','loi6:contre','loi7:pour','loi8:abstention','loi9:contre','loi10:contre','loi11:pour','loi12:pour','loi13:pour','loi14:contre','loi15:pour','loi16:abstention','loi17:abstention','loi18:abstention','loi19:pour','loi20:contre' ],
  },
  {
    name: "François Lamy",
    laws: ['loi1:pour','loi2:contre','loi3:contre','loi4:abstention','loi5:contre','loi6:pour','loi7:pour','loi8:abstention','loi9:pour','loi10:pour','loi11:pour','loi12:pour','loi13:pour','loi14:abstention','loi15:pour','loi16:abstention','loi17:abstention','loi18:contre','loi19:contre','loi20:contre' ],
  },
  {
    name: "Collette Langlade",
    laws: ['loi1:pour','loi2:contre','loi3:pour','loi4:abstention','loi5:contre','loi6:contre','loi7:abstention','loi8:abstention','loi9:contre','loi10:pour','loi11:pour','loi12:pour','loi13:pour','loi14:pour','loi15:pour','loi16:abstention','loi17:pour','loi18:pour','loi19:pour','loi20:pour' ],
  },
  ];

var laws = [
  {
    name : 'loi1',
    description : "Interdiction de fumer dans les lieux publiques",
  },
  {
    name : 'loi2',
    description : "Le nouvel aéroport de Nantes",
  },
  {
    name : 'loi3',
    description : "Le sauvetage des pandas roux",
  },
  {
    name : 'loi4',
    description : "4ème loi",
  },
  {
    name : 'loi5',
    description : "5ème loi",
  },
  {
    name : 'loi6',
    description : "6ème loi",
  },
  {
    name : 'loi7',
    description : "7ème loi",
  },
  {
    name : 'loi8',
    description : "8ème loi",
  },
  {
    name : 'loi9',
    description : "9ème loi",
  },
  {
    name : 'loi10',
    description : "10ème loi",
  },
  {
    name : 'loi11',
    description : "11ème loi",
  },
  {
    name : 'loi12',
    description : "12ème loi",
  },
  {
    name : 'loi13',
    description : "13ème loi",
  },
  {
    name : 'loi14',
    description : "14ème loi",
  },
  {
    name : 'loi15',
    description : "15ème loi",
  },
  {
    name : 'loi16',
    description : "16ème loi",
  },
  {
    name : 'loi17',
    description : "17ème loi",
  },
  {
    name : 'loi18',
    description : "18ème loi",
  },
  {
    name : 'loi19',
    description : "19ème loi",
  },
  {
    name : 'loi20',
    description : "20ème loi",
  }
];