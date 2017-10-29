function Kid(kid, name){
  this.kid = false;
  this.name = name;
}
 
Kid.prototype.toString = function(){
	var convert = '';
    	for(var all in this){
            convert += all + ' ' + this[all];
        }
		return convert;
}

var newChild = new Kid(false, 'sean')
newChild.toString()
