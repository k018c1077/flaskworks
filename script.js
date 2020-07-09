var cookies = document.cookie.split(';')
for(var c of cookies){ //一つ一つ取り出して
  var cArray = c.split('=') //さらに=で分割して配列に
  if( cArray[0] == ' PHPSESSID'){ // 取り出したいkeyと合致したら
      console.log(cArray[1])  // [key,value] 
      break
  }
}
