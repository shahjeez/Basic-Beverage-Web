const drink = [
    {
        name: "Canrich Diet",
        fat: "0g",
        fat_per: "0%",
        sodium: "310mg",
        sodium_per: "1%",
        carbohytred: "48g",
        carbohytred_per: "15.3%",
        protein: "5g",
        protein_per: "10%",
        poster1: "img/Can1.png",
        poster2: "img/Can1.png",
        main_poster: "img/Can1.png",
    },
    {
        name: "Energizer",
        amount: "330 cl",
        amount_per: "7.5%",
        fat: "0g",
        fat_per: "0%",
        sodium: "30mg",
        sodium_per: "1%",
        carbohytred: "41g",
        carbohytred_per: "14%",
        protein: "0g",
        protein_per: "0%",
        poster1: "img/Can2.png",
        poster2: "img/Can3.png",
        main_poster: "img/Can3.png",
    },
    {
        name: "Canrich Force",
        amount: "350 cl",
        amount_per: "12.9%",
        fat: "0g",
        fat_per: "0%",
        sodium: "40mg",
        sodium_per: "2%",
        carbohytred: "41g",
        carbohytred_per: "21.7%",
        protein: "0g",
        protein_per: "0%",
        poster1: "img/Can4.png",
        poster2: "img/Can4.png",
        main_poster: "img/Can4.png",
    },
    {
        name: "Matcha Mint",
        amount: "510 cl",
        amount_per: "16.3%",
        fat: "50g",
        fat_per: "5%",
        sodium: "49mg",
        sodium_per: "2%",
        carbohytred: "61g",
        carbohytred_per: "27.4%",
        protein: "5g",
        protein_per: "15%",
        poster1: "img/Can5.png",
        poster2: "img/Can5.png",
        main_poster: "img/Can5.png",
    }
];

let index = 0;
let myIndex = 0;

document.getElementById("slideButton").addEventListener("click", () => {
    index += 1;
    if (index >= drink.length) {
        index = 0;
    }

    updateContent(index);
});

function updateContent(index) {
    document.getElementById("main_bottle").src = drink[index].main_poster;
    document.getElementById("main_title").innerText = drink[index].name;
    document.getElementById("fat").innerText = drink[index].fat;
    document.getElementById("fat1").innerText = drink[index].fat_per;
    document.getElementById("sodium").innerText = drink[index].sodium;
    document.getElementById("sodium1").innerText = drink[index].sodium_per;
    document.getElementById("carbohydrate").innerText = drink[index].carbohytred;
    document.getElementById("carbohydrate1").innerText = drink[index].carbohytred_per;
    document.getElementById("protein").innerText = drink[index].protein;
    document.getElementById("protein1").innerText = drink[index].protein_per;
}

carousel();

function carousel() {
    var x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2500);
}
