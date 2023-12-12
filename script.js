function makeFileName(str){
  return str.replace(/'+/g, '').replace(/[^_a-z\d+]/gi, '-').replace(/-+/g, '-').replace(/-$/, '').toLowerCase();
}