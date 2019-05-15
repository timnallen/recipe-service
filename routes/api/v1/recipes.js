var express = require("express");
var router = express.Router();
const fetch = require('node-fetch');
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

router.get("/prep_time", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  Recipe.findAll({
    order: [
      ['prepTime', 'ASC']
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
});

router.get("/food_search", function(req, res) {
  res.setHeader("Content-Type", "application/json");
    Recipe.findAll({
      where: {
        foodType: req.query.q
      }
    })
      .then(recipes => {
        if(recipes.length === 0) {
          fetch(`https://api.edamam.com/search?q=${req.query.q}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
            .then(data => data.json())
            .then(recipes => {
              if(recipes.hits.length == 0) {
                res.status(400).send(JSON.stringify({error:`No results were returned for ${req.query.q}, check if query is valid.`}))
              } else{

              let newRecipes = formatEdamamRecipes(recipes)
              Recipe.bulkCreate(newRecipes, {returning: true})
                .then(response => {
                  res.status(200).send(JSON.stringify(formatFastJsonRecipes(response)));

                })
                .catch(error => {
                  res.status(500).send({error})
                })
              }

            })
            .catch(error => {
              res.status(500).send({error})
            })
        } else{
          res.status(200).send(JSON.stringify(formatFastJsonRecipes(recipes)));
        }

      })
      .catch(error => {
        res.status(500).send({error})
      })
})

function formatEdamamRecipes(response) {
  var formattedRecipes = [];

  for (i = 0; i<response.hits.length; i++) {
    let newRecipe = {
      name: response.hits[i].recipe.label,
      foodType: response.q,
      calorieCount: parseInt(response.hits[i].recipe.calories),
      prepTime: response.hits[i].recipe.totalTime,
      url: response.hits[i].recipe.url,
      ingredientCount: response.hits[i].recipe.ingredients.length
    }
    formattedRecipes.push(newRecipe);
  }
  return formattedRecipes;
}

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
