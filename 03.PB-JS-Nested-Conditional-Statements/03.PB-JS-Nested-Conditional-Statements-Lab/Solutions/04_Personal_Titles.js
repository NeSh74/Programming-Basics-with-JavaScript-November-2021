function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];
    let personalTitle = "";

    if(gender === "m"){
        if(age >= 16){
            personalTitle = "Mr.";
        } else{
            personalTitle ="Master";
        }
    }
    else if(gender === "f"){
        if(age >= 16){
            personalTitle = "Ms.";
        } else{
            personalTitle ="Miss";
        }
    }
  console.log(personalTitle);    
}
personalTitles(["12", "f"]);
