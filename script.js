function check() {
    let name = document.querySelector('#name').value;
    let adjectives = [
        "Smart",
        "Dumb",
        "Extra Ordinary",
        "Dexter",
        "Superb",
        "Bravo",
        "Great",
        "Awesome",
        "Average",
        "Einstein"
    ];
    if (name == false) {
        alert("Write name please!");
    }
    else {

        var x = Math.floor((Math.random() * adjectives.length));
        document.getElementById("intelligence").innerHTML = "You are " + adjectives[x];
    }

}