const app = require("express")()

const JsSearch = require("js-search")

const breeds = require("./breeds.json")

const search = new JsSearch.Search("name") // remember the name key from breeds.json
// search.addIndex("name")
search.addDocuments(breeds)
search.addIndex("name")

app.get("/api", (req, res) => {
  const { query } = req

  try {
    const breed = query.search

    if (breed) {
      //   res.send(breeds.find((b) => b.name === breed)) . //old impleentation
      res.send(search.search(breed))
    }
    res.send(breeds.map((b) => ({ name: b })))
  } catch (error) {
    console.log("error", error)
  }
})

module.exports = app
