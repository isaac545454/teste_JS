const green = "#039B00"
const gray = "#A0A0A0"

const changeLastButtonColorToGreen = () => {
  const buttons = document.querySelectorAll(".btn-primary")
  const lastButton = buttons[2]
  lastButton.style.backgroundColor = green
}

changeLastButtonColorToGreen()

const changeHeaderContent = () => {
  const buttons = document.querySelectorAll(".btn-primary")
  const lastButton = buttons[0]
  lastButton.style.backgroundColor = green

  const container = document.querySelector(".jumbotron")
  console.log(container)
  container.style.backgroundColor = gray
  container.style.textAlign = "end"
}
changeHeaderContent()

const addItemsToList = () => {
  const list = document.querySelector(".list-group")

  const fourthItem = document.createElement("li")
  const fifthItem = document.createElement("li")

  fourthItem.textContent = "Quarto item"
  fifthItem.textContent = "Quinto item"

  fourthItem.classList.add("list-group-item")
  fifthItem.classList.add("list-group-item")

  list.appendChild(fourthItem)
  list.appendChild(fifthItem)

  const items = document.querySelectorAll(".list-group-item")

  items[0].classList.remove("active")

  items[3].classList.add("active")
}
addItemsToList()

function transformVerticalToHorizontal() {
  const buttonGroup = document.querySelector(".btn-group-vertical")
  const buttons = document.querySelectorAll(".btn-secondary")

  buttons.forEach((button) => {
    button.style.width = "auto"
    button.style.display = "inline"
    button.style.borderRadius = "8px"
    button.style.maxWidth = "120px"
    button.style.paddingLeft = "4px"
    button.style.paddingRight = "4px"
  })

  if (buttonGroup) {
    buttonGroup.style.flexDirection = "row"
    buttonGroup.style.gap = "10px"
    buttonGroup.style.display = "flex"
    buttonGroup.style.justifyContent = "flex-start"
  }
}

transformVerticalToHorizontal()
