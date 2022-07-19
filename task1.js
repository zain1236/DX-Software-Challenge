sentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"

function get_longest_word(para){
    
    let allwords = [];
    commasplit = para.split(",")
    for (let i = 0; i < commasplit.length; i++) {
        let words = commasplit[i].split(" ")
        allwords = allwords.concat(words)
    }
    longest_length =allwords.sort(function(a, b){return b.length - a.length})[0].length;
    
    function longest_words(str){
        return str.length >= longest_length
    }
    l_w = allwords.filter(longest_words);
    
    function countVowels(str) {
      var m = str.match(/[aeiou]/gi);
      return m === null ? 0 : m.length;
    }
    
    longest = ""
    count = 0
    for (word of l_w){
        if (countVowels(word) > count){
            count = countVowels(word)
            longest = word
        }
    }
    return longest;
}

longest = get_longest_word(sentence);
console.log(longest)
