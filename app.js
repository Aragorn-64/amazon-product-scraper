import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const urltpc = 'https://amzn.eu/d/5SZAHrl';
let links = ['https://amzn.eu/d/5SZAHrl', 'https://www.amazon.in/dp/B09SPNKT16/ref=syn_sd_onsite_desktop_92?ie=UTF8&psc=1&pd_rd_plhdr=t&tag=local0ea-21'];

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

// getProduct(urltpc);
links.forEach(getProduct);
