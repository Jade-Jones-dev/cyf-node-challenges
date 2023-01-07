const express = require('express');
const fs = require ('fs');

const stratford = require('./data/Stratford.json');
const harrow = require('./data/Harrow.json');
const heathrow = require('./data/Heathrow.json');

let cities = {stratford:stratford, harrow:harrow, heathrow:heathrow};
// const stratford = JSON.parse(fs.readFileSync(`${__dirname}/data/Stratford.json`));
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send('<h1>Welcome to City Guide</h1>')
    // res.json(stratford)
})


// app.get('/:city/pharmacies', (req, res) => {
//     let city = req.params.city;
//     if(city === "stratford"){
//         res.json(stratford.pharmacies)
//     }
//     else if (city === "heathrow"){
//         res.json(heathrow.pharmacies)
//     }
//     else res.json(harrow.pharmacies)  
// })
// // /colleges
// app.get('/:city/colleges', (req, res) => {
//     let city = req.params.city;
//     if(city === "stratford"){
//         res.json(stratford.colleges)
//     }
//     else if (city === "heathrow"){
//         res.json(heathrow.colleges)
//     }
//     else res.json(harrow.colleges)  
// })
// // /doctors

// app.get('/:city/doctors', (req, res) => {
//     let city = req.params.city;
//     if(city === "stratford"){
//         res.json(stratford.doctors)
//     }
//     else if (city === "heathrow"){
//         res.json(heathrow.doctors)
//     }
//     else res.json(harrow.doctors)  
// })
// // /hospitals

// app.get( "/:city/hospitals", (req, res) => {
//     let city = req.params.city;
//     if(city === "stratford"){
//         res.json(stratford.hospitals)
//     }
//     else if (city === "heathrow"){
//         res.json(heathrow.hospitals)
//     }
//     else res.json(harrow.hospitals)  
// })

// /:city/:category

app.get("/:city/:category", (req, res) =>{
    let city = req.params.city;
    let category = req.params.category;

    if(cities[city] && cities[city][category]){
        res.json(cities[city][category])
    } else {
        res.sendStatus(404)
    }
// dont do this =>
    // if(city === "stratford" && category === "hospitals"){
    //     res.json(stratford.hospitals)
    // }
    // else if (city === "heathrow" && category === "hospitals"){
    //     res.json(heathrow.hospitals)
    // }
    // else if(city === "harrow" && category === "hospitals"){
    //     res.json(harrow.hospitals)
    // }
    // else if(city === "stratford" && category === "colleges"){
    //     res.json(stratford.colleges)
    // }
    // else if (city === "heathrow" && category === "colleges"){
    //     res.json(heathrow.colleges)
    // }
    // else if(city === "harrow" && category === "colleges"){
    //     res.json(harrow.colleges)
    // }
    // else if(city === "stratford" && category === "pharmacies"){
    //     res.json(stratford.pharmacies)
    // }
    // else if (city === "heathrow" && category === "pharmacies"){
    //     res.json(heathrow.pharmacies)
    // }
    // else if(city === "harrow" && category === "pharmacies"){
    //     res.json(harrow.pharmacies)
    // }
    // else if(city === "stratford" && category === "doctors"){
    //     res.json(stratford.doctors)
    // }
    // else if (city === "heathrow" && category === "doctors"){
    //     res.json(heathrow.doctors)
    // }
    // else if(city === "harrow" && category === "doctors"){
    //     res.json(harrow.doctors)
    // }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})