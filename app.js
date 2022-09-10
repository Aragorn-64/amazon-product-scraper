import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import express from 'express';
import cors from 'cors';

const PORT = 8080;
const app = express();
const router = express.Router();
app.use("/", router);
app.use(express.json());

app.use(cors('localhost'));
  
app.listen( PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})

app.get('/scrape', async function (req, res){
    console.log("got request");

    let quer = req.query;
    let link = quer['scrapeUrl'];
    let prod = await getProduct(link);
    console.log(prod);

    res.status(200).send(prod);
})

async function getFromLink(link){
    console.log('reached getFromLink');
    let prod1 = await getProduct(link);
    console.log(prod1);
    return prod1;
}


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

        // console.log(prod);

        return prod;


    } catch (error) {
        console.log(error);
    }

}

// getProduct(urltpc);
// links.forEach(getProduct);
// const urltpc = 'https://amzn.eu/d/5SZAHrl';
// let links = ['https://amzn.eu/d/5SZAHrl', 'https://www.amazon.in/dp/B09SPNKT16/ref=syn_sd_onsite_desktop_92?ie=UTF8&psc=1&pd_rd_plhdr=t&tag=local0ea-21'];

