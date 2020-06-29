var enterEl;
var numberEl;
var characterEl;
var uppercaseEl;
var lowercaseEl;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    enter = parseInt(prompt("Choose between 8 and 128 characters"));
  
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        number = confirm("Would you like numbers?");
        character = confirm("Would you like special characters?");
        uppercase = confirm("Would you like UPPERCASE letters?");
        lowercase = confirm("Would you like lowercase letters?");
    };

    if (!characterEl && !numberEl && !uppercaseEl && !lowercaseEl) {
        choices = alert("Choose Criteria");

    }
    
    else if (characterEl && numberEl && uppercaseEl && lowercaseEl) {

        choices = character.concat(number, alpha, alpha2);
    }
    
    else if (characterEl && numberEl && uppercaseEl) {
        choices = character.concat(number, alpha2);
    }
    else if (characterEl && numberEl && lowercaseEl) {
        choices = character.concat(number, alpha);
    }
    else if (characterEl && lowercaseEl && uppercaseEl) {
        choices = character.concat(alpha, alpha2);
    }
    else if (numberEl && lowercaseEl && uppercaseEl) {
        choices = number.concat(alpha, alpha2);
    }
     
    else if (characterEl && numberEl) {
        choices = character.concat(number);

    } else if (characterEl && lowercaseEl) {
        choices = character.concat(alpha);

    } else if (characterEl && uppercaseEl) {
        choices = character.concat(alpha2);
    }
    else if (lowercaseEl && numberEl) {
        choices = alpha.concat(number);

    } else if (lowercaseEl && uppercaseEl) {
        choices = alpha.concat(alpha2);

    } else if (numberEl && uppercaseEl) {
        choices = number.concat(alpha2);
    }
    
    else if (characterEl) {
        choices = character;
    }
    else if (numberEl) {
        choices = number;
    }
    else if (lowercaseEl) {
        choices = alpha;
    }
    
    else if (uppercaseEl) {
        choices = space.concat(alpha2);
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
