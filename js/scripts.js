var sections = ["home", "aboutMe", "skills", "portfolio", "blog"];

function displayMenu() {
    var display;
    var card_menu = document.querySelector("#card_menu");
    display = card_menu.style.display;

    if (!display || display === "none") {
        card_menu.style.display = "block";
    } else {
        card_menu.style.display = "none";
    }
}

function displaySection(nav) {
    var search;
    var show;

    for (var i = 0; i < sections.length; i++) {
        search = document.getElementById(sections[i]);
        show = search.style.display;

        if (show === "block") {
            search.style.display = "none";
            if (nav === "next") {
                i++;
                if (i > 4) {
                    i = 0;
                }
            }
            if (nav === "prev") {
                i--;
                if (i < 0) {
                    i = 4;
                }
            }
            search = document.getElementById(sections[i]);
            search.style.display = "block";
            break;
        }
    }
    setColors(i, search);
}

function navSection(nav) {
    var search;
    for (var i = 0; i < sections.length; i++) {
        search = document.getElementById(sections[i]);
        search.style.display = "none";
        
        if(sections[i] === nav) {
            search.style.display = "block";
            setColors(i, search);
        }
    }
}

function setColors(position, search) {
    var backgroundBody;
    var backgroundMenu;

    if (sections[position] === "home") {
        backgroundBody = "#233D58";
        backgroundMenu = "#233D58";
    } else {
        backgroundBody = "#f1f1f1";
        backgroundMenu = "#29abe2";
    }
    search.style.background = backgroundBody;
    var menu = document.getElementsByTagName("header")[0];
    menu.style.background = backgroundMenu;
}
