class Animal {

  constructor(animal){
    this.animal = animal
  }

  render(){
    const cardLi = document.createElement('li')
    cardLi.className = "card"
    cardLi.dataset.id = this.animal.id
    cardLi.innerHTML = this.generateHTML()
    animalList.append(cardLi)
    this.card = cardLi
    this.addEventListeners()
  }

  addEventListeners(){
    this.card.querySelector(".delete").addEventListener("click", this.remove)
    this.card.querySelector(".donate").addEventListener("click", this.donate)
  }

  remove = () => api.freeAnimal(this.id).then(() => this.card.remove())

  donate = () => {
    api.donate(this.animal.id, this.animal.donations + 10)
    .then(animal => {
      this.animal = animal
      this.card.querySelector(".donation-count").innerText = this.animal.donations
    })
  }

  generateHTML(){
    const {image_url, name, donations, description, species_name, diet} = this.animal
    return `
    <div class="image">
      <img src="${image_url}" alt="${name}">
      <button data-action="freeToTheWild" class="delete button">X</button>
    </div>
    <div class="content">
      <div class="name">${name}</div>
      <div class="donations">
        $<span class="donation-count">${donations}</span> Donated
      </div>
      <div class="description">${description}</div>
      <div class="tags">
        <span>${species_name}</span>
        <span class="${diet}">${diet}</span>
      </div>
    </div>
    <button data-action="donate" class="donate button">
      Donate $10
    </button>
    `
  }

  static renderAllAnimals = () => {
    api.getAllAnimals()
    .then(animals => {
      animals.forEach(Animal.create)
    })
  }

  static create = animal => {
    new Animal(animal).render()
  }

  static createFromForm = (form) => {
    const newAnimal = {
      name: form["name"].value,
      species_name: form["species_name"].value,
      image_url: form["image_url"].value,
      diet: form["diet"].value,
      description: form["description"].value,
      donations: 0
    }
    api.createAnimal(newAnimal)
    .then(Animal.create)
    .catch(error => alert(error))
  }

}
