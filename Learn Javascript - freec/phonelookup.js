function phoneLookUp(val){ 
    var result = ""; 

    var lookup = { 
        "alpha": "DomSupreme", 
        "omeha": "Dennis", 
        "Kanye": "West", 
        "Dead": "God", 
    }; 
    result = lookup[val]; 

    return result; 
}

console.log(phoneLookUp("alpha"));