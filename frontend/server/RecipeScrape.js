


getRecipes = async (link, recipes) => {
    const cheerio = require('cheerio');
    const puppeteer = require('puppeteer');
    const fs = require('fs');
    const url = link;
  
    const start = new Date()
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto(url, { waitUntil: 'networkidle0' });
  
  
    await page.waitForSelector('.category-page-list-content', {
      visible: true,
    })
  
    const pageContent = await page.content()
  
    const $ = cheerio.load(pageContent);
    var imgSource = "";
    
    //Scraping for img link 
    $('.recipeCard__imageContainer').each(function (i, elem) {
        imgSource = $(elem).find('.recipeCard__imageLink')['0'].attribs.href



    });


    $('.recipeCard__detailsContainer').each(function (i, elem) {
        var reviews = "";

        const recipeLink = $(elem).find('.recipeCard__titleLink')['0'].attribs.href;
        const description = $(elem).find('.recipeCard__description')['0'].children[0].data.trim('\n');
        if($(elem).find('.recipeCard__reviewsCount')['0'] != undefined){
            reviews = $(elem).find('.recipeCard__reviewsCount')['0'].children[0].data.trim('\n');
        }
        const author = $(elem).find('.recipeCard__authorName')['0'].children[0].data.trim('\n');
        const recipeName = $(elem).find('.recipeCard__title')['0'].children[0].data.trim('\n');
        //const rating = $(elem).find('.rating-star')['0'].attribs.class;




        recipes.push({
            imgSource: imgSource,
            recipeName: recipeName,
            description: description,
            reviews: reviews,
            author: author, 
            recipeLink: recipeLink

            
        });
  
    });
  
  
    var jsonContent = JSON.stringify(recipes);
  
    fs.writeFile("fish-recipes.json", jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
   
    });
   
  
  
    
  
    await browser.close();
    const end = new Date() - start
  };
  
  var links = [
      'https://www.allrecipes.com/recipes/416/seafood/fish/salmon/',

  ];

  const recipes = [];

  module.exports = { getRecipes }
  
  for(const link of links){
    getRecipes(link, recipes);




  }
  

  
  
  
  
  