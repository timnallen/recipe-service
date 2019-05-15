var shell = require('shelljs');
var request = require("supertest");
var app = require('./app');

describe('Recipes endpoints API', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create')
    shell.exec('npx sequelize db:migrate')
    shell.exec('npx sequelize db:seed:all')
  });
  afterAll(() => {
    shell.exec('npx sequelize db:seed:undo:all')
    shell.exec('npx sequelize db:migrate:undo:all')
  });

  describe('Test the root path', () => {
    test('should return a 200', () => {
      return request(app).get("/").then(response => {
        expect(response.statusCode).toBe(200)
      })
    });
  });

  describe('Test recipes by ingredient count', () => {
    test('should return a 200 and and array of recipes in the correct order', () => {
      return request(app).get("/api/v1/recipes/ingredient_count").then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.data).toBeInstanceOf(Array)
        expect(response.body.data[0]).toBeInstanceOf(Object)
        expect(response.body.data[0].type).toBe("recipe")
        expect(Object.keys(response.body.data[0])).toContain("id")
        expect(Object.keys(response.body.data[0])).toContain("attributes")
        expect(Object.keys(response.body.data[0].attributes)).toContain("name")
        expect(Object.keys(response.body.data[0].attributes)).toContain("foodType")
        expect(Object.keys(response.body.data[0].attributes)).toContain("ingredientCount")
        expect(Object.keys(response.body.data[0].attributes)).toContain("url")
        expect(Object.keys(response.body.data[0].attributes)).toContain("prepTime")
        expect(Object.keys(response.body.data[0].attributes)).toContain("calorieCount")
        expect(response.body.data[0].attributes.ingredientCount).toBeLessThanOrEqual(response.body.data[1].attributes.ingredientCount)
        expect(response.body.data[1].attributes.ingredientCount).toBeLessThanOrEqual(response.body.data[2].attributes.ingredientCount)
        expect(response.body.data[2].attributes.ingredientCount).toBeLessThanOrEqual(response.body.data[3].attributes.ingredientCount)
        expect(response.body.data[3].attributes.ingredientCount).toBeLessThanOrEqual(response.body.data[4].attributes.ingredientCount)
      })
    });
  });

  describe("Test average calories across recipes for a given food type", () => {
    test("should return a 200 status code and the average calories", () => {
      return request(app).get("/api/v1/recipes/ingredient_count")
      .then(response => {
        const data = response.body;
        expect(data).toHaveProperty('foodType');
        expect(data).toHaveProperty('calorieCount');
        expect(data.foodType).toBe('chicken');
        expect(data.calorieCount).toBeCloseTo(1891.46);
      })

    })
  });
});
