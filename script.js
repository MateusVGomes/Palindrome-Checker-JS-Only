function palindrome(str) {
    let newStr = str.toLowerCase();
    newStr = newStr.replace(/\W/g, "");
    newStr = newStr.replace("-", "");
    newStr = newStr.replace("_", "");
    let head="", tail="", guide = newStr.length - 1,sentence=true;
    for (let i = 0; i < newStr.length; i++) {
         tail=newStr.charAt(guide);
         head=newStr.charAt(i);
         if(head!=tail){
            return sentence=false;
         }
         guide--;
    }
    return true;
  }