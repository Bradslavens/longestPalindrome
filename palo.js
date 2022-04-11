/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let arr = [...s]
    let subArrs = getSubArrs(arr)
    let revSubArrs = getRevArrs(subArrs)
    let pals = getPals(subArrs, revSubArrs)
    // console.log(pals)
    let longestPalArr = getLongestPal(pals)
    let longest = makeString(longestPalArr)
    return longest
};

function makeString (longestPalArr){
    let str = ""
    for( let i = 0; i<longestPalArr.length; i++){
        str+=longestPalArr[i]
    }
    return str
}

function getLongestPal(pals){
    longestPal = []
    for(let i = 0; i<pals.length; i++){
        if(pals[i].length > longestPal.length) longestPal = pals[i]
    }
    return longestPal
}
function getPals(subArrs, revSubArrs){
    let pals = []
        for(let i = 0; i<subArrs.length; i++){
            let pal = []
            // console.log(subArrs[i])
            // console.log(`rev ${revSubArrs[i]} sub ${subArrs[i]} before loop`)
            for(let j = 0; j<subArrs[i].length; j++){
                // console.log(`after loop rev ${revSubArrs[i][j]} sub ${subArrs[i][j]}\n `)
                if(subArrs[i][j] !== revSubArrs[i][j]) {
                    // console.log(`not equal rev ${revSubArrs[i]} sub ${subArrs[i]}\n`)
                    pal = []
                    break;
                }
                pal.push(revSubArrs[i][j])
                // console.log("pal " + pal + "\n\n")
            }
            if(pal.length > 0) pals.push(pal)
        }
    return pals
}

function getRevArrs(subArrs){
    let revSubs = []
    for(let i = 0; i<subArrs.length; i++){
        let revSub = []
        for(let j = subArrs[i].length-1; j>=0; j--){
            revSub.push(subArrs[i][j])
        }
        revSubs.push(revSub)
    }
    return revSubs
}

function getSubArrs(arr){
    let subs = []
    for(let i = 0; i<arr.length; i++){
        subs.push([arr[i]])
        let sub = [arr[i]]
        for(let j = i + 1; j<arr.length; j++ ){
            sub = [...sub, arr[j]]
            subs.push(sub)
        }
    }

    return subs
}



// console.log(`answer ${longestPalindrome("rgczcpratwyqxaszbuwwcadruayhasynuxnakpmsyhxzlnxmdtsqqlmwnbxvmgvllafrpmlfuqpbhjddmhmbcgmlyeypkfpreddyencsdmgxysctpubvgeedhurvizgqxclhpfrvxggrowaynrtuwvvvwnqlowdihtrdzjffrgoeqivnprdnpvfjuhycpfydjcpfcnkpyujljiesmuxhtizzvwhvpqylvcirwqsmpptyhcqybstsfgjadicwzycswwmpluvzqdvnhkcofptqrzgjqtbvbdxylrylinspncrkxclykccbwridpqckstxdjawvziucrswpsfmisqiozworibeycuarcidbljslwbalcemgymnsxfziattdylrulwrybzztoxhevsdnvvljfzzrgcmagshucoalfiuapgzpqgjjgqsmcvtdsvehewrvtkeqwgmatqdpwlayjcxcavjmgpdyklrjcqvxjqbjucfubgmgpkfdxznkhcejscymuildfnuxwmuklntnyycdcscioimenaeohgpbcpogyifcsatfxeslstkjclauqmywacizyapxlgtcchlxkvygzeucwalhvhbwkvbceqajstxzzppcxoanhyfkgwaelsfdeeviqogjpresnoacegfeejyychabkhszcokdxpaqrprwfdahjqkfptwpeykgumyemgkccynxuvbdpjlrbgqtcqulxodurugofuwzudnhgxdrbbxtrvdnlodyhsifvyspejenpdckevzqrexplpcqtwtxlimfrsjumiygqeemhihcxyngsemcolrnlyhqlbqbcestadoxtrdvcgucntjnfavylip")}`)
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))
// console.log(longestPalindrome("dad"))