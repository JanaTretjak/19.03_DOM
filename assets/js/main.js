//Lev1_2_js-vertiefung_DOM_getElementsByClassName

function myFunction() {
    for (let i = 0; i < document.getElementsByClassName("example").length; i++) {
        document.getElementsByClassName("example")[i].style.background = "black"
    }
}

//Lev2_1_js-vertiefung_DOM_onclick_style
/*
document.getElementById("navChange").addEventListener("click", () => {
    document.getElementById("navHome").style.background = "pink"
    document.getElementById("navHome").style.color = "black"
    document.getElementById("navHome").innerHTML = document.getElementById("navHome").innerHTML.split("").reverse().join("")

})
*/
//Lev2_2_js-vertiefung_DOM_form_value

document.getElementById("submit").addEventListener("click", () => {
    console.log(`name: ${document.getElementById("vorname").value} ${document.getElementById("nachname").value}, land: ${document.getElementById("land").value}`)
})

//Lev2_3_js-vertiefung_DOM_getElementsByTagName

document.getElementById("navChange").addEventListener("click", () => {
    document.getElementsByTagName("li")[0].style.background = "#f6c89f"
    document.getElementsByTagName("li")[1].style.background = "#ffe7d1"
    document.getElementsByTagName("li")[2].style.background = "#4b8e8d"
    document.getElementsByTagName("a")[3].style.background = "#396362"
    document.getElementsByTagName("a")[3].style.color = "#333"
    let i
    for (i = 0; i < document.getElementsByTagName("a").length - 1; i++) {
        document.getElementsByTagName("a")[i].style.color = "#666"
    }
})

//Lev2_4_js-vertiefung_DOM_background-colors_select-list

document.getElementById("button").addEventListener("click", () => {
    for (let i = 0; i < document.getElementById("farbeAuswahlen").options.length; i++) {
        if (i == document.getElementById("farbeAuswahlen").selectedIndex) {
            event.preventDefault();
            console.log(document.getElementById("farbeAuswahlen").options[i].value.toLowerCase().split(" ").join(""))
            return document.body.style.background = document.getElementById("farbeAuswahlen").options[i].value.toLowerCase().split(" ").join("")
        }

    }
})