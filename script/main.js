var quotes = ["quotes quote","quotes quote","quotes quote","quotes quote","quotes quote","quotes quote","quotes quote","quotes quote",]
var arr = []
  for (var i = 0; i < arr.length; i++ ){
    var displayedQuote = Math.floor( Math.random() * quotes.length)
    if(arr[i] == quotes[displayedQuote]){
      continue;
    }else{
      arr.push(quotes[displayedQuote])
    }
  }
