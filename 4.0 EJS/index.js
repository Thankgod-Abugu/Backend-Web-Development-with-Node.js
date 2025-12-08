import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todaysDate = new Date();
  const day = todaysDate.getDay();

  let type = "a weekday";
  let adv = "go to work.";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "go and rest.";
  }
  res.render("index.ejs", { dayType: type, advice: adv });
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
