/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let p = []
    for(let i = 0; i<s.length; i++){
        let substrings = s[i]
        // console.log(`substring i ${s[i]}`)
        p.push(s[i])
        for(let j = i + 1; j<s.length;  j++){
            substrings+= s[j]
            let revSub = reverseSubStr(substrings)
            // console.log(`revSub ${revSub} substrings ${substrings}`)
            if(revSub == substrings) p.push(substrings)            
        }
        
    }
    // get the longest
    let longest = ""
    for(let i = 0; i < p.length; i++){
        if(p[i].length > longest.length ) longest = p[i]
        // console.log(`longest ${p}`)
    }
    
    return longest
};

function reverseSubStr(subStr){
    let revSub = ""
    for(let i = subStr.length - 1; i >= 0; i--){
        revSub+=subStr[i]
    }
    return revSub
}

console.log(`answer ${longestPalindrome("rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip")}`)