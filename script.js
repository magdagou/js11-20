function firstLast6(x){
    if ((x[0] == 6 || x[x.length-1] == 6)){
        return true;
    }else{
        return false;
    }
}
function has23(x){
    if ((x[0] === 2 || x[0] === 3)){
        return true;
    }
    if ((x[x.length-1] === 2 || x[x.length-1] === 3)){
        return true;
    }else{
        return false;
    }
}

function fix23 (x) {
    if ((x[0] === 2) && (x[1] === 3)){
        x[1] = 0;
    }
    if ((x[1] === 2) && (x[2] === 3)){
        x[2] = 0;
    }
        return x;
}

function countYZ(x){
    x=x.toUpperCase();
    var count=0;
    for (var i=0;i<x.length;i++){
        if(x[i]=="Z"&&x[i+1]==" "||x[i]=="Y"&&x[i+1]==" "){
            count+=1;
        }
    }
    if(x[x.length-1]=="Z"||x[x.length-1]=="Y"){
        count+=1;
    }
    return count;
}


function endOther(x,y){
    x=x.toLowerCase();
    y=y.toLowerCase();
    if (x.endsWith(y)){
        return true;
    }
    if (y.endsWith(x)){
        return true;
    }else{
        return false;
    }

}

function starOut(n){
    newWord = "";
    for (var i = 0; i < n.length; i ++){
        if (n[i - 1] != "*" && n[i] != "*" && (n[i +1] != "*")){
            newWord += n[i];
        }
    }
    return newWord;
}

function getSandwich(n){
    var bread1 = n.indexOf("bread");
    var bread2 = n.lastIndexOf("bread");
    if (bread1 == -1){
        return "";
    }
    if (bread1 == bread2){
        return "";
    }
    return n.substring(bread1 + 5, bread2);
}

function canBalance(int){
    var total1 = 0;
    var total2 = 0;
    for (var i = 0; i < int.length; i ++){
        total1 += int[i];
        for (var x = i + 1; x < int.length; x ++){
            total2 += int[x];
        }
        if (total1 == total2){
            return true;
        }
        total2 = 0;
    }
    return false;
}

function countClumps(list){
    var count = 0;
    for (var i = 0; i < list.length; i++){
        if (list[i] == list [i - 1] && list[i] !== list [i + 1]){
            count += 1
        }
    }
    return count;
}

function evenlySpaced(a,b,c){
    if (c - b == b - a || c - a == b - c || a - c == c - b || c - a == a - b){
        return true;
    }
    return false;
}

function tester() {

    document.getElementById("output").innerHTML = firstLast6([6, 3, 6]);
    document.getElementById("output1").innerHTML = has23([4, 5]);
    document.getElementById("output2").innerHTML = fix23([2, 3, 5]);
    document.getElementById("output3").innerHTML = countYZ("DAY abc XYZ");
    document.getElementById("output4").innerHTML = endOther("Hiabc", "abc");
    document.getElementById("output5").innerHTML = starOut("ab**cd");
    document.getElementById("output6").innerHTML = getSandwich("breadjambread");
    document.getElementById("output7").innerHTML = canBalance([1,1,2,0,0]);
    document.getElementById("output8").innerHTML = countClumps([1,1,2,0,0]);
    document.getElementById("output9").innerHTML = evenlySpaced(1,1,2);

}