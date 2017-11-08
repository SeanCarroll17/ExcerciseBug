function Kid(kid, name){
  this.kid = kid;
  this.name = name;
}
 
Object.prototype.toString = function(){
    	for(var all in this){
            console.log(` ${all} : ${this[all]} `);
        }
}

var newChild = new Kid(false, 'sean')
newChild.toString()
