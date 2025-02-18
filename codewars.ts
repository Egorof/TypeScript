let uniqueInOrder=function(iterable: string){
    let res = [];
    let lastLetter;
    
    for(let i = 0; i < iterable.length; i++) {
      if (lastLetter != iterable[i]) {
        res.push(iterable[i]);
        lastLetter = iterable[i];
      }
    }
    
    return res;
  }