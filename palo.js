/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let arr = [...s]
    let subArrs = getSubArrs(arr)
    let revSubArrs = getRevArrs(subArrs)
    let pals = getPals(subArrs, revSubArrs)
    let longest = getLongestPal(pals)
    return longest
};

// function makeString (longestPalArr){
//     let str = ""
//     for( let i = 0; i<longestPalArr.length; i++){
//         str+=longestPalArr[i]
//     }
//     return str
// }

function getLongestPal(pals){
    longestPal = ""
    for(let i = 0; i<pals.length; i++){
        if(pals[i].length > longestPal.length) longestPal = pals[i]
    }
    return longestPal
}
function getPals(subArrs, revSubArrs){
    let pals = []
        for(let i = 0; i<subArrs.length; i++){
            // console.log(subArrs[i])
            // console.log(revSubArrs[i])
            if(subArrs[i] == revSubArrs[i]) pals.push(subArrs[i])
            // console.log(pals)
        }
    return pals
}

function revSubArrs(subArrs){
    let revSubs = []
    for(let i = 0; i<subArrs.length; i++){
        let revSub = ""
        for(let j = subArrs[i].length-1; j>=0; j--){
            revSub+=subArrs[i][j]
        }
        revSubs.push(revSub)
    }
    return revSubs
}

function getSubArrs(arr){
    let subs = []
    for(let i = 0; i<arr.length; i++){
        subs.push(arr[i])
        let sub = arr[i]
        for(let j = i + 1; j<arr.length; j++ ){
            sub += arr[j]
            subs.push(sub)
        }
    }
    return subs
}



// console.log(`answer ${longestPalindrome("rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip")}`)
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))
// console.log(longestPalindrome("dad"))