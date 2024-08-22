const { MeiliSearch } = require("meilisearch");
const axios = require("axios");
const { parse, stringify } = require("flatted");

const api = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const client = new MeiliSearch({
  host: "http://localhost:7700",
});

axios.get(`${api}`).then((cards) => {
  stringify(cards);
  client
    .index("cards")
    .addDocuments(cards.data.data)
    .then((result) => console.log(result));
});
