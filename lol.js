let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8

var combinationSum2 = function (candidates, target) {
    let re = []
    function hepler(idx, sum, ca) {
        if (target == sum) {
            // console.log(sum)
            re.push([...ca]);
        }
        if (sum > target) {
            // console.log("sum", sum)
            return
        }
        for (let i = idx; i < candidates.length; i++) {
            ca.push(candidates[i])
            sum += candidates[i]
            // console.log(ca, sum)
            hepler(i + 1, sum, ca);
            let a = ca.pop();
            sum -= a
        }
    }
    hepler(0, 0, [])
    return re
};

console.log(combinationSum2(candidates, target))