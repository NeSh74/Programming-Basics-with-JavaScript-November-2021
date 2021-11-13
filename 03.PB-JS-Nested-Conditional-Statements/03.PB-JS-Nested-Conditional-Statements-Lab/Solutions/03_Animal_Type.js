function animalType(input) {
    let animalType = input[0];
    let animalClass="";

    switch(animalType){
        case "dog": animalClass = "mammal"; break;
        case "crocodile":
        case "tortoise":
        case "snake": animalClass = "reptile"; break;
       default: animalClass ="unknown"; break;
    }
    console.log(animalClass);
}
animalType(["dog"]);