function printCombinations(arr) {
    var n = arr.length;
    var indices = new Array(n);
    for (var i = 0; i < n; i++)
        indices[i] = 0;
    while (true) {
        for (var i = 0; i < n; i++)
            console.log(arr[i][indices[i]] + " ");
        console.log("\n");
        var next = n - 1;
        while (next >= 0 && indices[next] + 1 >= arr[next].length)
            next--;
        if (next < 0)
            return;
        indices[next]++;
        for (var i = next + 1; i < n; i++)
            indices[i] = 0;
    }
}
var arr = new Array(2);
for (var i = 0; i < arr.length; i++)
    arr[i] = [];
arr[0].push("red");
arr[0].push("green");
arr[1].push("small");
arr[1].push("medium");
arr[1].push("large");
printCombinations(arr);
