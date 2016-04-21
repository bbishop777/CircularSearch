function doesItMatch(source, find) {
  source = source.toLowerCase();
  find = find.toLowerCase();
  var verdict = null;
  var repeatItAndCheck = function (source, find) {
    source = source + source;
    if(source.length >= (find.length * 2)) {
      if(source.search(find) > -1) {
        verdict = true;
        return verdict;
      } else if (source.search(find) < 0) {
        verdict = false;
        return verdict;
      }
    } else {
      repeatItAndCheck(source, find);
    }

  };
  if (source === find) {
  return true;
  }
  else if (source.length > find.length) {
    source = source + source;
    if(source.search(find) > -1) {
      return true;
    } else if (source.search(find) < 0) {
      return false;
    }
  } else if (source.length < find.length) {
    repeatItAndCheck(source, find);
    return verdict;

  }
}
 console.log(doesItMatch('bam', "ambambambam"));
