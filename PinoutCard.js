var PinoutCardsArray = [];

var isOpen = false;
var lastIndex;

class PinoutCard {
    constructor(title, description, image_src, type, manufacturer) {
        this.title = title;
        this.description = description;
        this.image_src = image_src;
        this.type = type;
        this.manufacturer = manufacturer;
        PinoutCardsArray.push(this);
        this.create();
        setInterval(() => {
            console.log(isOpen);
        }, 1000);
    }

    create() {
        let card = document.createElement("div");
        card.classList.add("pinout-card");
        let button = document.createElement("div");
        button.classList.add("button");
        let thumbnail = document.createElement("img");
        thumbnail.classList.add("pinout-thumbnail");
        let title = document.createElement("p");
        title.classList.add("pinout-title-home");
        title.innerText = this.title;
        thumbnail.src = this.image_src;
        let container = document.getElementById("pinout-selctor");
        container.append(card);
        card.append(button);
        card.append(thumbnail);
        card.append(title);
        card.addEventListener("click", (event) => {
            PinoutCardsArray.forEach((card, index) => {
                if (card.title === this.title) {
                    if (isOpen) {
                        this.close(lastIndex);
                    }
                    this.open(index);
                    isOpen = true;
                    lastIndex = index;
                }
            })
        });
    }

    open(index) {
        let container = document.getElementById("pinout-container");
        document.getElementById("pinout-selector-container").classList.add("hidden");
        let backButton = document.createElement("button");
        backButton.classList.add("backButton");
        backButton.innerText = "<Back";
        backButton.addEventListener("click", (event) => {
            this.close(lastIndex);
        })
        let pinout = document.createElement("div");
        pinout.classList.add("pinout");
        pinout.append(backButton);
        let title = document.createElement("h1");
        title.classList.add("pinout-title");
        title.innerText = PinoutCardsArray[index].title;
        let description = document.createElement("p");
        description.classList.add("pinout-description");
        description.innerText = PinoutCardsArray[index].description;
        let image = document.createElement("img");
        image.classList.add("pinout-img");
        image.src = this.image_src;
        container.append(pinout);
        pinout.append(title);
        pinout.append(image);
        pinout.append(description);
    }

    close(index) {
        document.getElementById("pinout-selector-container").classList.remove("hidden");
        let pinout = document.getElementsByClassName("pinout")[0];
        pinout.remove();
        isOpen = false;
    }
}

export {PinoutCard, PinoutCardsArray};
