function removeUrlAnchor(url){
    // TODO: complete
    let ind = url.indexOf('#');
    let res = url.slice(0,ind);
    return res;
  }
  console.log(removeUrlAnchor('www.codewars.com#about'));