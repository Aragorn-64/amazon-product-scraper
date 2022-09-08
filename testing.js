import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
// import fs from 'fs';


// var urlold = 'https://www.amazon.in/Lenovo-Laptop-Backpack-15-6-Inch-GX40Q17225/dp/B075Y72PHZ/ref=sr_1_4?crid=GSCN2EEHB530&keywords=laptop%2Bbags&qid=1661582019&sprefix=laptop%2Bba%2Caps%2C245&sr=8-4&tag=local0ea-21&th=1';
const urltpc = 'https://amzn.eu/d/5SZAHrl'
// const url = 'https://www.amazon.in/dp/B08KWB1QHQ/ref=syn_sd_onsite_desktop_260?ie=UTF8&psc=1&pd_rd_plhdr=t&tag=local0ea-21'
// var search_url = 'https://www.amazon.in/s?k=laptop+bags&crid=GSCN2EEHB530&sprefix=laptop+ba%2Caps%2C245&tag=local0ea-21&ref=nb_sb_noss_2'



// function num(item){
//     console.log("Number found = " + item.length);
//     return;
// }


async function getProduct(url) {
    try {
        const response = await fetch(url);
        const body = await response.text();
        const $ = cheerio.load(body);

        const name = $('#productTitle').text();
        const imgHref = $(".imgTagWrapper img").attr("src");
        const price = $('span[class = a-offscreen]').first().text();

        var prod = {
            name: name,
            imgHref: imgHref,
            price: price
        };

        console.log(prod);

        // return prod;


    } catch (error) {
        console.log(error);
    }

}

getProduct(urltpc);

    // export async function getProduct1(url){
    //     try {
    
    //         const response = await fetch(url);
    //         const body = await response.text();
    //         const $ = cheerio.load(body);
    
    //         // var item = $('#ppd');
    //         // num(item);
            
    //         const name = $('#productTitle').text();
    //         const imgHref = $(".imgTagWrapper img").attr("src");
    //         const price = $('span[class = a-offscreen]').first().text();
    
    //         var prod = {
    //             name : name,
    //             imgHref : imgHref,
    //             price : price
    //         };
    
    //         console.log(prod);
    
    //         prod = JSON.stringify(prod).toString();
            
    //         console.log(prod);
    
    //         fs.appendFile('data.txt', prod + '\n', function (err) {
    //             if(err) {
    //                 console.log(err);
    //             }
    //             else{
    //                 console.log("Wrote product details to file..");
    //             }
    //         });
    
    
    //     } catch (error) {
    //         console.log(error);
    //     }
    
    // }


// const scrape = document.querySelector('#submit');
// const scrapeUrl = document.querySelector('#scrapeUrl').value;

// scrape.addEventListener("click", () =>{
//     getProduct(scrapeUrl);
// })















// async function getAllProducts(url){
//     try {
        
//         const response = await fetch(url);
//         const body = await response.text();
//         // console.log(body);
//         const $ = cheerio.load(body);
//         const items = [];
//         $('.s-result-item').map((i,el) => {
            
//             const name = $(el).find('a-text-normal').text();
//             console.log(name);


//         });


//     } catch (error) {
//         console.log(error);
//     }

// }




// getAllProducts(search_url);