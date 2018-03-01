var N = parseInt(readline());
var Y = parseInt(readline());
var cages = [];
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var S = parseInt(inputs[0]);
    var H = parseInt(inputs[1]);
    var A = parseInt(inputs[2]);
    
    cages.push({"sick": S, "healthy" : H, "total": A})
}

var i = 0;
var alivePerCage = 1;
while(alivePerCage != 0 && i < Y){
    
    var alivePerCage = 0;
    cages.forEach(cage => {
        var S = cage.sick;
        var H = cage.healthy;
        var A = cage.total;
        cage.sick = S*2;
        cage.healthy = ((A-S)-S*2) > 0 ? ((A-S)-S*2) : 0;
        cage.total = (A-S) > 0 ? (A-S) : 0;
        
        alivePerCage = alivePerCage+(cage.total);
    });

    print(alivePerCage);
    i++;
}
