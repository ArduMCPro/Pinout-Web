addEventListener("click", (event) => {
    console.log(event.target.id)
        location.href = "/pinout.html?id=" + event.target.id
})
