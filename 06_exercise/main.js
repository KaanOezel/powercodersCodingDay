function weekdays(weekday) {
    let dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "What A Day To Be Alive!!!"];
    switch(weekday){
        case 1:
            return dayName[0];
        case 2: 
            return dayName[1];
        case 3:
            return dayName[2];
        case 4: 
            return dayName[3];
        case 5:
            return dayName[4];
        case 6: 
            return dayName[5];
        case 7: 
        return dayName[6];
        
        default:
            return dayName[7];
    }

}

document.write(weekdays()); ///at least this one worked -_-

