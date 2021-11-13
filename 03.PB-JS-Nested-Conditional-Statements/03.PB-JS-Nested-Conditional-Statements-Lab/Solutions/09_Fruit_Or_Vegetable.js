function fruitOrVegetable(input) {
    let product = input[0];
    let output = "";

    switch(product){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            output = "fruit";
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            output = "vegetable";
            break;
        default:
            output = "unknown";
            break;
    }
    console.log(output);
}
fruitOrVegetable (["carrot"]);