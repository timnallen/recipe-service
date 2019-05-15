var express = require("express");
var router = express.Router();
var Recipe = require("../../../models").Recipe;
const Sequelize = require('sequelize');


router.get("/ingredient_count", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  Recipe.findAll({
    order: [
      ['ingredientCount', 'ASC']
    ]
  })
    .then(recipes => {
      let formattedRecipes = formatFastJsonRecipes(recipes);
      res.status(200).send(JSON.stringify(formattedRecipes));
    })
    .catch(error => {
      res.status(500).send({ error });
    });
});

router.get("/average_calorie_count?", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  Recipe.findAll({
    where: {
      foodType: req.query.q
    },
    attributes: [[Sequelize.fn('AVG', Sequelize.col('calorieCount')), 'averageCalorieCount']],
    raw: true
  })
    .then(result => {
      console.log(result)
      if(result[0].averageCalorieCount) {
        res.status(200).send(JSON.stringify({
            data: {
              foodType: req.query.q,
              calorieCount: parseInt(result[0].averageCalorieCount)
            }
          }))
      } else{
        res.status(400).send(JSON.stringify({error: `There are no ${req.query.q} recipes`}))
      }

    })
    .catch(error => {
      res.status(500).send({error});
    })
})

function formatFastJsonRecipes(recipes) {
  var formattedRecipes = [];
  for (let counter = 0; counter < recipes.length; counter++) {
    let newRecipe = {
      id: recipes[counter].id,
      type: "recipe",
      attributes: {
        name: recipes[counter].name,
        url: recipes[counter].url,
        foodType: recipes[counter].foodType,
        ingredientCount: recipes[counter].ingredientCount,
        calorieCount: recipes[counter].calorieCount,
        prepTime: recipes[counter].prepTime,
      }
    }
    formattedRecipes.push(newRecipe);
  }
  return {data: formattedRecipes}
};

module.exports = router;
