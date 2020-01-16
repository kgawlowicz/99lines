

let aryFriends = ['Karen','Lori','Dee','Jeff','Joe'];
//console.log(aryFriends.length);

//outer loop
for (let ctrFriends = 0; ctrFriends < aryFriends.length; ++ctrFriends) {
    console.log(aryFriends[ctrFriends]);
    //inner loop  ...testing with 5
    for (let i=5; i>0; i--){
        if (i == 1) {
            console.log(i + ' line of code in the file, ' + i + ' line of code; ' + aryFriends[ctrFriends] + 
            ' strikes one out, clears them all out. ' + (i-1) + ' lines of code in the file.');    
        }
        else {   
        console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + aryFriends[ctrFriends] + 
        ' strikes one out, clears them all out. ' + (i-1) + ' lines of code in the file.');
        }
    }    
}

