/* =========================
   MOBILE MENU
========================= */

const menuIcon = document.getElementById("menuIcon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


/* Close mobile menu after clicking link */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

    });

});


/* =========================
   COUNTDOWN
========================= */

/*
   Conference Date:
   15 April 2027
*/

const conferenceDate =
    new Date("2027-04-15T09:00:00+05:30").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = conferenceDate - now;


    if (difference <= 0) {

        if (typeof countdownTimer !== "undefined") {
            clearInterval(countdownTimer);
        }

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}

/* Run immediately to prevent 00 delay */
updateCountdown();

const countdownTimer = setInterval(updateCountdown, 1000);


/* =========================
   POPUP
========================= */

function showPopup(message) {

    const popup = document.getElementById("popup");

    const popupMessage =
        document.getElementById("popupMessage");

    popupMessage.innerText = message;

    popup.classList.add("show");

}


function closePopup() {

    document
        .getElementById("popup")
        .classList.remove("show");

}


/* =========================
   PAPER SUBMISSION
========================= */

function showSubmissionMessage() {

    showPopup(
        "The paper submission portal will open soon. Please check the conference submission guidelines."
    );

}


/* =========================
   REGISTRATION SELECTION
========================= */

function selectRegistration(category) {

    document.getElementById("category").value =
        category;

    document
        .getElementById("registrationForm")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* =========================
   REGISTRATION FORM
========================= */

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const category =
            document.getElementById("category").value;


        showPopup(
            "Thank you " +
            name +
            "! Your " +
            category +
            " registration request has been received."
        );


        registrationForm.reset();

    }
);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        showPopup(
            "Thank you! Your message has been submitted successfully."
        );

        contactForm.reset();

    }
);


/* =========================
   FAQ
========================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const item =
            question.parentElement;


        document
            .querySelectorAll(".faq-item")
            .forEach(function(otherItem) {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                    const otherIcon = otherItem.querySelector(".faq-question i");
                    if (otherIcon) {
                        otherIcon.classList.remove("fa-minus");
                        otherIcon.classList.add("fa-plus");
                    }

                }

            });


        item.classList.toggle("active");


        const icon =
            question.querySelector("i");


        if (item.classList.contains("active")) {

            icon.classList.remove("fa-plus");

            icon.classList.add("fa-minus");

        } else {

            icon.classList.remove("fa-minus");

            icon.classList.add("fa-plus");

        }

    });

});


/* =========================
   CLOSE POPUP ON BACKGROUND
========================= */

document
    .getElementById("popup")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePopup();

        }

    });