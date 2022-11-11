function sumFinder(arr, num) {
    let obj = {}
    let diff
  
    for (let i = 0; i < arr.length; i++) {
      diff = num - arr[i]
  
      if (obj[diff]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
  }
  
  let sumFinderResult = sumFinder([6, 4, 3, -6], 0)

  //console.log(sumFinderResult)

  //Run time complexity of O(1)
  //space complexity of O(1)
  



  function uniqueCharacters(str){
      for(let i = 0; i < str.length; i++){
        for (let j = 0; j< str.length; j++){
            if (str[i] === str[j]){
                return true
            } 
                return false
            
        }
      }
    }

//console.log(uniqueCharacters('abc'))

//runtime complexity of O(n*2)
//space complexity of O(n)





function isPangram(str){
    let strArr = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false
      }
    }
    return true
  }

  //console.log(isPangram('The quick brown fox jumps over the lazy dog.'))

  //runtime complexity of O(n)
  //space complexity of O(n)





  function findLongestWord(str) {
    
    let strSplit = str.split(' ')
    let longestWord = 0
    
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length
       }
    }
    return longestWord
  }
  //console.log(findLongestWord("hello bye"))
  //runtime complexity of O(1)
  //space complexity of O(1)