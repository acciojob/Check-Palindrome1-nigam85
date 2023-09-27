// complete the given function

function palindrome(str){
	var reversed = str.split("").reversed().join("")
	if(reversed===str){
		return true;
	}else return false

}
// console.log(palindrome())
module.exports = palindrome
