let express = require('express');
let axios = require('axios');
let router = express.Router();

router.get('/',function (req,res) {
    res.render('index');
});

router.post('/', function (req, res) {
    let from = req.body.from;
    let to = req.body.to;
    let amount = req.body.amount;
    axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3').then(function (response) {
        let data = response.data;
        // let obj;
        for (const axio of data) {
            let fromApi = axio.ccy;
            let toApi = axio.base_ccy;
            let buyApi = axio.buy;
            // let saleApi = axio.sale;

            if (from === fromApi) {
                return from = fromApi;
                if (to === toApi) {
                    to = toApi;
                     return amount *= buyApi;
                }
            }

            obj = {
                from: from,
                to: to,
                // amount: amount
            };

            console.log(obj);

            // console.log(from);
            // console.log(to);
            // amount *= buyApi;
            // console.log(amount);
            // return amount;
        }
    }).catch(function (err) {
        console.log(err);
    });
    res.send("hello");
});

// { ccy: 'EUR', base_ccy: 'UAH', buy: '31.91672', sale: '31.91672' },
// { ccy: 'RUR', base_ccy: 'UAH', buy: '0.41899', sale: '0.41899' },
// { ccy: 'USD', base_ccy: 'UAH', buy: '26.23005', sale: '26.23005' },
// { ccy: 'BTC', base_ccy: 'USD', buy: '8529.7662', sale: '9427.6364' }

module.exports = router;



