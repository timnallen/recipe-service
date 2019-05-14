'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [{
      name: "Chicken Vesuvio",
      foodType: "chicken",
      calorieCount: 4230,
      prepTime: 60,
      url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
      ingredientCount: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Chicken Paprikash",
      foodType: "chicken",
      calorieCount: 3033,
      prepTime: 0,
      url: "http://norecipes.com/recipe/chicken-paprikash/",
      ingredientCount: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Chicken Gravy",
      foodType: "chicken",
      calorieCount: 1092,
      prepTime: 270,
      url: "http://www.marthastewart.com/332664/chicken-gravy",
      ingredientCount: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Catalan Chicken",
      foodType: "chicken",
      calorieCount: 3298,
      prepTime: 0,
      url: "http://www.bonappetit.com/columns/breadwinner/article/how-to-get-your-kids-to-eat-sauce-let-them-cook-it-themselves",
      ingredientCount: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Citrus-Roasted Chicken",
      foodType: "chicken",
      calorieCount: 2643,
      prepTime: 424,
      url: "https://food52.com/recipes/3403-citrus-roasted-chicken",
      ingredientCount: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Persian Chicken",
      foodType: "chicken",
      calorieCount: 4107,
      prepTime: 0,
      url: "http://www.bbcgoodfood.com/recipes/7343/persian-chicken",
      ingredientCount: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kreplach (Chicken Dumplings)",
      foodType: "chicken",
      calorieCount: 4278,
      prepTime: 10,
      url: "https://www.tastingtable.com/entry_detail/chefs_recipes/10154/Matzo_balls_watch_your_back.htm",
      ingredientCount: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Twistin’ Chicken",
      foodType: "chicken",
      calorieCount: 708,
      prepTime: 0,
      url: "http://www.cookstr.com/recipes/twistinrsquo-chicken",
      ingredientCount: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Chicken Piccata",
      foodType: "chicken",
      calorieCount: 1651,
      prepTime: 0,
      url: "http://www.simplyrecipes.com/recipes/chicken_piccata/",
      ingredientCount: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Roast Chicken",
      foodType: "chicken",
      calorieCount: 2584,
      prepTime: 0,
      url: "http://www.sfgate.com/food/recipes/detail.html?rid=18229&sorig=qs",
      ingredientCount: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pomegranate Sorbet",
      foodType: "pomegranate",
      calorieCount: 1697,
      prepTime: 0,
      url: "http://cafefernando.com/pomegranate-sorbet-recipe/",
      ingredientCount: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cranberry-Pomegranate Sauce",
      foodType: "pomegranate",
      calorieCount: 1242,
      prepTime: 45,
      url: "http://www.seriouseats.com/recipes/2012/11/cranberry-pomegranate-sauce.html",
      ingredientCount: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pomegranate Margarita",
      foodType: "pomegranate",
      calorieCount: 121,
      prepTime: 0,
      url: "http://www.saveur.com/article/Recipes/Pomegranate-Margarita",
      ingredientCount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pomegranate Walnut Relish",
      foodType: "pomegranate",
      calorieCount: 527,
      prepTime: 0,
      url: "http://leitesculinaria.com/77226/recipes-pomegranate-walnut-relish.html",
      ingredientCount: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pomegranate Molasses",
      foodType: "pomegranate",
      calorieCount: 938,
      prepTime: 0,
      url: "http://simplyrecipes.com/recipes/pomegranate_molasses/",
      ingredientCount: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pomegranate Gastrique",
      foodType: "pomegranate",
      calorieCount: 699,
      prepTime: 29,
      url: "http://www.marthastewart.com/315296/pomegranate-gastrique",
      ingredientCount: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pomegranate Molasses–Maple Syrup recipes",
      foodType: "pomegranate",
      calorieCount: 689,
      prepTime: 15,
      url: "http://www.chowhound.com/recipes/pomegranate-molassesmaple-syrup-14109",
      ingredientCount: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pomegranate & clementine sorbet",
      foodType: "pomegranate",
      calorieCount: 670,
      prepTime: 10,
      url: "http://www.jamieoliver.com/recipes/fruit-recipes/pomegranate-clementine-sorbet/",
      ingredientCount: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Triple Pomegranate Smoothie",
      foodType: "pomegranate",
      calorieCount: 233,
      prepTime: 0,
      url: "http://food52.com/recipes/19903-triple-pomegranate-smoothie",
      ingredientCount: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pomegranate Gelato",
      foodType: "pomegranate",
      calorieCount: 2620,
      prepTime: 0,
      url: "https://www.epicurious.com/recipes/food/views/pomegranate-gelato-235772",
      ingredientCount: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pasta Frittata recipe",
      foodType: "pasta",
      calorieCount: 1423,
      prepTime: 0,
      url: "http://www.foodrepublic.com/2012/01/21/pasta-frittata-recipe",
      ingredientCount: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Wild Garlic Pasta",
      foodType: "pasta",
      calorieCount: 2292,
      prepTime: 0,
      url: "http://www.davidlebovitz.com/2014/04/wild-garlic-or-ramps-pasta-recipe/",
      ingredientCount: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kimchi Pasta",
      foodType: "pasta",
      calorieCount: 725,
      prepTime: 0,
      url: "http://norecipes.com/blog/2010/02/02/kimchi-pasta-recipe/",
      ingredientCount: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mushroom Marsala Pasta With Artichokes",
      foodType: "pasta",
      calorieCount: 3230,
      prepTime: 0,
      url: "http://smittenkitchen.com/2009/12/mushroom-marsala-pasta-with-artichokes/",
      ingredientCount: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pasta Carbonara",
      foodType: "pasta",
      calorieCount: 2824,
      prepTime: 0,
      url: "http://www.finecooking.com/recipes/pasta-carbonara.aspx",
      ingredientCount: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Fresh Egg Pasta recipes",
      foodType: "pasta",
      calorieCount: 1124,
      prepTime: 65,
      url: "http://www.thekitchn.com/how-to-make-fresh-pasta-from-scratch-cooking-lessons-from-the-kitchn-73435",
      ingredientCount: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pinky Pasta",
      foodType: "pasta",
      calorieCount: 1057,
      prepTime: 87,
      url: "http://www.marthastewart.com/349716/pinky-pasta",
      ingredientCount: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pasta with Corn and Garlic",
      foodType: "pasta",
      calorieCount: 2469,
      prepTime: 256,
      url: "http://zesterdaily.com/cooking/corn-recipes/",
      ingredientCount: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pasta with Ham and Peas",
      foodType: "pasta",
      calorieCount: 2883,
      prepTime: 0,
      url: "http://www.simplyrecipes.com/recipes/pasta_with_ham_and_peas/",
      ingredientCount: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pasta with Pancetta and Miso",
      foodType: "pasta",
      calorieCount: 1657,
      prepTime: 225,
      url: "http://www.bonappetit.com/recipe/pasta-with-pancetta-and-miso",
      ingredientCount: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Recipes', null, {});
  }
};
