const scrape = require('website-scraper');

// scrape({
//   urls: ['https://webapp.safecity.in/'],
//   recursive: true,
//   maxRecursiveDepth: 10,
//   filenameGenerator: 'bySiteStructure',
//   directory: './Dark moon/safecity-whole'
// });
//=============================================for single page =============/ 
let options = {
    urls: ['https://www.concealed.pt/'],
    directory: './concealed',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});
// ============================================================ //