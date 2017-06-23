
var treeHeight = 4;
    function drawTree(treeHeight){
	    for (var i = 0; i < treeHeight; i++) {
	    	var star = ('');
		    	for (var j = 0; j <= i; j++){
		    		star + '*';
		    	}
	    	console.log(star);
	  	}
	  }
var smallTreeHeight = 4;
var bigTreeHeight = 10;

drawTree(smallTreeHeight);
drawTree(bigTreeHeight);