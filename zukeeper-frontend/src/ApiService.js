class ApiService {

  constructor(api){
    this.api = api
  }

  getAllAnimals(){
    return fetch(`${this.api}/animals`)
    .then(response => response.json())
  }

  freeAnimal(id){
    return fetch(`${this.api}/animals/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
  }

  donate(id, donations){
    return fetch(`${this.api}/animals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // how we are sending the data in the body
        "Accept": "application/json" // how we want the response formatted
      },
      body: JSON.stringify({ donations: donations })
    })
    .then(res => res.json())
  }

  createAnimal(newAnimal){
    return fetch(`${this.api}/animals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // how we are sending the data in the body
      "Accept": "application/json" // how we want the response formatted
    },
    body: JSON.stringify(newAnimal)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw Error("Bad request")
      }
    })
  }

}
