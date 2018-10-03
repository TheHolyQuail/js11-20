/*programer: Eiot Wachtel; this is a program with functions solving various practice problems
 in the form of a function for each individual problem; 2018-9-25
*/

function firstLast6 (ints) {
    var len = ints.length;
    var x = ints.slice(0, 1);
    var y = ints.slice(len - 1, len);
    if(x == 6 || y == 6){
        return true;
    } else {
        return false;
    }
}

function has23(ints) {
    var x = ints.includes(2);
    var y = ints.includes(3);
    if (x || y) {
        return true;
    } else {
        return false;
    }
}

function fix23 (ints) {
    var a = ints.slice(0, 1);
    var b = ints.slice(1, 2);
    var c = ints.slice(2, 3);
    var result = ints;

    if (a == 2 && b == 3) {
        result.splice(1, 1, 0);
    } else if (b == 2 && c == 3) {
        result.splice(2, 1, 0);
    }

    return result;
}

function countYZ(start) {
    var str = start.toLocaleLowerCase();
    var counter = str.length;
    var result = 0;
    var x = "";

    for (var i = 0; i <counter; i++) {
        x = str.charAt(i);
        if (x == "y" || x == "z"){
            if (str.charAt(i + 1) == " " || i == counter - 1) {
                result += 1;
            }
        }
    }

    return result;
}

function endOther(strX, strY) {
    var x = strX.toLocaleLowerCase();
    var y = strY.toLocaleLowerCase();
    var lenX = x.length - 1;
    var lenY = y.length - 1;

    if (x.includes(y) && x.lastIndexOf(y) == lenX - lenY) {
        return true;
    } else if (y.includes(x) && y.lastIndexOf(x) == lenY - lenX) {
        return true;
    } else {
        return false;
    }
}

function starOut(str) {
    var result = str;

    var Y = result.includes("*");


    //everything happens in here (if there is an * present)
    while (Y) {
        var x = result.indexOf("*");

        if (result[x + 1] == "*"){
            result = result.replace(result[x + 1], "");
        }
        //does ^ a second time
        if (result[x + 1] == "*"){
            result = result.replace(result[x + 1], "");
        }

        result = result.replace(result.substring(x-1, x+2), "");
        //result = result.replace(result[x + 1], "");
        //result = result.replace(result[x], "");

        Y = result.includes("*");
    }

    return result;
}

function getSandwich(str) {
    var result = "";
    var chopper = str;
    var x = 0;

    var Y = chopper.includes("bread");
    if (Y) {
        x = chopper.indexOf("bread");
        chopper = chopper.replace(chopper.substring(0, x + 5), "");
    }

    Y = chopper.includes("bread");
    if (Y) {
        x = chopper.lastIndexOf("bread");
        var len = chopper.length;
        chopper = chopper.replace(chopper.substring(x, len), "");
        result = chopper;
    }

    return result;
}

function canBalance(array){
    var len = array.length;
    var x = 0;
    var y = 0;
    var result = false;

    var counter = 0;

    for (var i = 0; i < len; i++){
        counter = 0;
        x = 0;
        y = 0;
        for (var ii = 0; ii <= i; ii++){
            x += array[ii];
            counter += 1;
        }
        for (var iii = counter; iii < len; iii++){
            y += array[iii];
        }
        if(x == y){
            result = true;
            break
        }
    }

    return result;
}

function countClumps(array){
    var len = array.length;
    var x = "";
    var y = "";
    var result = 0;
    var start = false;

    for ( var i = 0; i < len; i++) {
        x = array[i];
        y = array[i + 1];

        if (x == y && !start) {
            start = true;
        } else if(x != y && start) {
            start = false;
            result += 1;
        }
    }

    return result;
}

function evenlySpaced(a, b, c){
    var x = 0;
    var y = 0;
    var z = 0;

    if (a == b && b == c) {
        return true;
    }

    if (a == b || b == c || c == a) {
        return false;
    }

    if (a > b && a > c) {
        if (b > c) {
            x = a;
            y = b;
            z = c;
        } else if (c > b) {
            x = a;
            y = c;
            z = b;
        }
    } else if (b > a && b > c) {
        if (a > c) {
            x = b;
            y = a;
            z = c;
        } else if (c > a) {
            x = b;
            y = c;
            z = a;
        }
    } else if (c > a && c > b) {
        if (a > b) {
            x = c;
            y = a;
            z = b;
        } else if (b > a) {
            x = c;
            y = b;
            z = a;
        }
    }

    var first = x - y;
    var second = y - z;

    if (first - second == 0){
        return true;
    } else {
        return false;
    }
}

function run() {
    canBalance([1,1,1,1,4]);
}