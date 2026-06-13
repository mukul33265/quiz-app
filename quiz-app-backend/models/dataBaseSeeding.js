const mongoose = require("mongoose");
const TestSeries = require("./testSeries");
const TestPapers = require("./testPapers");

const testSeriesData = [
    {
        title : "Nemraj Sunda test series",
        description : "Nemraj Sunda sub-topic wise MCQs",
        subject : "Agriculture",
        price : 79,
        isPaid : true,
    },
    {
        title : "PAU Rabi package test",
        description : "For general agriculture and agronomy (major) with PYQs",
        subject : "Agriculture",
        price : 79,
        isPaid : true,
    },
    {
        title : "PAU Kharif package test",
        description : "For general agriculture and agronomy (major) with PYQs",
        subject : "Agriculture",
        price : 79,
        isPaid : true,
    }
]

// nemraj 
const testPapersDataNemraj = [
    {
        title: "Agronomy Part-01",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,
    
        questions:  [
                {
                    "id": 1,
                    "question": "Wheat protein is called as:",
                    "options": ["Zein", "Gluten", "Dhurin", "Ricinin"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 2,
                    "question": "Botanical name of six row barley is:",
                    "options": ["Hordeum vulgare", "Hordeum distichon", "Hordeum irregular", "None of the above"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 3,
                    "question": "Average seed rate of sugarcane in Rajasthan is:",
                    "options": ["40-50 thousand sets/ha.", "25-30 thousand sets/ha.", "20-25 thousand sets/ha.", "10-15 thousand sets/ha."],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 4,
                    "question": "In India Technology Mission on Oilseeds (TMO) was started in the year:",
                    "options": ["1986", "1966", "1967", "1996"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 5,
                    "question": "WHO/FAO recommended a minimum intake of pulses in daily diet is:",
                    "options": ["64 g/day", "40 g/day", "80 g/day", "None of these"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 6,
                    "question": "Recovery of sugar in sugarcane in India is:",
                    "options": ["6-8%", "8-10%", "10-15%", "4-6%"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 7,
                    "question": "Safflower oil is known to reduce blood cholesterol due to the presence of higher content of:",
                    "options": ["Linoleic acid", "Oleic acid", "Stearic acid", "Palmitic acid"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 8,
                    "question": "The most important alkaloid present in opium is:",
                    "options": ["Nicotin", "Morphin", "Nimbidin", "None of these"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 9,
                    "question": "The salt resistant variety of barley for Rajasthan is:",
                    "options": ["RDB-1", "RD-31", "BL-2", "Rajkiran"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 10,
                    "question": "ICRISAT is situated at:",
                    "options": ["Dehradun", "Jodhpur", "Hyderabad", "Chandigarh"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 11,
                    "question": "In western Rajasthan 'Khadin' is a:",
                    "options": ["Grass species", "Cropping system", "Water harvesting structure", "Spices crop"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 12,
                    "question": "Isohyte is a line of connecting points equal values of:",
                    "options": ["Height", "Altitude", "Rainfall", "Temperature"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 13,
                    "question": "The period of short range weather forecasting is:",
                    "options": ["1-2 days", "1-2 weeks", "4 weeks", "7 weeks"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 14,
                    "question": "Wind velocity is measured by:",
                    "options": ["Wind vane", "Anemometer", "Pyrhelimeter", "Pyranometer"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 15,
                    "question": "The monsoon which covers major parts of India is called:",
                    "options": ["South-West monsoon", "North-East monsoon", "Winter rains", "Western disturbances"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 16,
                    "question": "Chief protein of maize is:",
                    "options": ["Casein", "Lacto-albumin", "Zein", "Oryzine"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 17,
                    "question": "Beta-carotene is found in:",
                    "options": ["Wheat", "Sugar", "Egg", "Green leafy vegetable"],
                    "correctAnswer": 3,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 18,
                    "question": "Chemical is used for imparting drought hardiness is:",
                    "options": ["CaCl2", "HCl", "2-4, D", "Chlormequat"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 19,
                    "question": "Pre-emergence herbicide used for weed control in maize is:",
                    "options": ["2-4, D", "Atrazine", "Fluchlorin", "None of these"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 20,
                    "question": "In case of delayed onset of monsoon cereals should be replaced by:",
                    "options": ["Root crops", "Sugar crops", "Pulses", "Vegetable crops"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 21,
                    "question": "Choose the complete parasitic weed among the following:",
                    "options": ["Phalaris minor", "Orabanche spp", "Trianthena spp", "Aregemone Mexicana"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 22,
                    "question": "Mycoherbicides are the formulation of:",
                    "options": ["Bacteria", "Nematodes", "Fungi", "Virus"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 23,
                    "question": "Seed potential of Chenopodiam album is:",
                    "options": ["72000 Seeds/plant", "196000 seeds/plant", "56000 seeds/plant", "None of these"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 24,
                    "question": "Saccharum spontaneum is an:",
                    "options": ["Annual weed", "Perennial weed", "Biannial weed", "None of the above"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 25,
                    "question": "Paraquat is a:",
                    "options": ["Selective herbicide", "Non-selective herbicide", "Non-selective contact herbicide", "Selective contact herbicide"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 26,
                    "question": "Agriculturally beneficial interaction is:",
                    "options": ["Rhizobium - Legume", "Puccinia graminis - Wheat", "Agrobacterium tumefaciens - Fruit tree", "Erwinia amylovora - Apple"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 27,
                    "question": "The drip irrigation method when compared with conventional method of irrigation saves:",
                    "options": ["90-100% irrigation water", "50-70% irrigation water", "10-30% irrigation water", "30-70% irrigation water"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 28,
                    "question": "Number of cultivated species of sugarcane are:",
                    "options": ["Two", "Three", "Four", "Five"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 29,
                    "question": "Amount of moisture present in a unit volume of air is known as:",
                    "options": ["Relative humidity", "Specific humidity", "Absolute humidity", "All type"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 30,
                    "question": "Agronomy is a science of:",
                    "options": ["Soil management", "Farm management", "Crop protection", "Crop production and soil management"],
                    "correctAnswer": 3,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 31,
                    "question": "In case of potato seed dormancy is broken by:",
                    "options": ["N.A.A.", "Etheral", "Thiourea", "I.A.A"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 32,
                    "question": "Suitable inter-crop for mustard is:",
                    "options": ["Potato", "Bajra", "Wheat", "Chick-pea"],
                    "correctAnswer": 3,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 33,
                    "question": "If only one irrigation is available to the farmer, at which stage the water is applied for barley crop?:",
                    "options": ["Germination", "Tillering", "Boot stage", "Flowering"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 34,
                    "question": "Which part of tobacco plant is known for nicotine formation?:",
                    "options": ["Root", "Stem", "Leaf", "Flower"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 35,
                    "question": "Botanical name of common wheat is:",
                    "options": ["Triticum aestivum", "Triticum dicocum", "Triticum duram", "Triticum persiccum"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 36,
                    "question": "Early duration varieties of potato are ready to harvest in:",
                    "options": ["90-110 days", "75-90 days", "110-130 days", "140-160 days"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 37,
                    "question": "What is the original place of barley?:",
                    "options": ["India", "USA", "Ethopia", "None of the above"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 38,
                    "question": "Which of the following process is practised in tobacco?:",
                    "options": ["De-suckering", "Retting", "Winning", "Thinning"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 39,
                    "question": "Safflower oil is rich in:",
                    "options": ["Linoleic acid", "Linolenic acid", "Steoric acid", "Palmitic acid"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 40,
                    "question": "Oil percentage in castor seed is:",
                    "options": ["24%", "37%", "20%", "27%"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 41,
                    "question": "Among spices in Rajasthan, maximum area under cultivation is of:",
                    "options": ["Cumin", "Coriander", "Fenugreek", "Chilly"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 42,
                    "question": "International Rice Research Institute is located at:",
                    "options": ["Mexico", "India", "Phillipines", "Syria"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 43,
                    "question": "Aruna is a variety of:",
                    "options": ["Maize", "Castor", "Moth bean", "Cowpea"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 44,
                    "question": "Botanical name of Moth bean is:",
                    "options": ["Vigna radiata", "Vigna sinensis", "Vigna acontifolia", "Vigna mungo"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 45,
                    "question": "Origin of cowpea is:",
                    "options": ["India", "Maxico", "Central China", "Central Africa"],
                    "correctAnswer": 3,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 46,
                    "question": "Pegging is related with:",
                    "options": ["Groundnut", "Cotton", "Soyabean", "Wheat"],
                    "correctAnswer": 0,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 47,
                    "question": "Castor belongs to family:",
                    "options": ["Poaceae", "Compositeae", "Euphorbiaceae", "Linaceae"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 48,
                    "question": "MGR-1 is a hybrid variety of:",
                    "options": ["Maize", "Sorghum", "Cotton", "Rice"],
                    "correctAnswer": 3,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 49,
                    "question": "Seed of Urd bean contains:",
                    "options": ["16% protein", "20% protein", "24% protein", "28% protein"],
                    "correctAnswer": 2,
                    "marks": 2,
                    "negativeMarks": 0.25
                },
                {
                    "id": 50,
                    "question": "Sunhemp belongs to family:",
                    "options": ["Poaceae", "Leguminoceae", "Euphorbiaceae", "Malvaceae"],
                    "correctAnswer": 1,
                    "marks": 2,
                    "negativeMarks": 0.25
                }
        ],
    },
    {
        title: "Agronomy Part-02",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
            {
                "id": 1,
                "question": "American classification of Soyabean is based on:",
                "options": ["Maturity period", "Shape of pods", "Size of seed", "Colour of seed"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 2,
                "question": "Prussic acid content in sorghum is higher in:",
                "options": ["Root", "Stem", "Leaf", "Equal in all parts"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 3,
                "question": "From the following species of cotton, which is known as Indian cotton?:",
                "options": ["Gossypium hirsutus", "Gossypium barbadense", "Gossypium herbaceum", "Gossypium arboreum"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 4,
                "question": "Cross pollination in pearlmillet occurs due to:",
                "options": ["Protoandry", "Protogyny", "Cleistogamy", "None of the above"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 5,
                "question": "Crop in which hybrid varieties have NOT been developed yet is:",
                "options": ["Barley", "Maize", "Bajra", "Sorghum"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 6,
                "question": "Bikaneri Narma is a variety of:",
                "options": ["Mustard", "Taramira", "Cotton", "Groundnut"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 7,
                "question": "Central Rice Research Institute (now NRRI) is located at:",
                "options": ["Mexico", "Cuttak", "Jodhpur", "Philippines"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 8,
                "question": "PEHM-2 is a popular hybrid variety of:",
                "options": ["Maize", "Sorghum", "Mothbean", "Rice"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 9,
                "question": "Botanical name of cluster bean is:",
                "options": ["Cyamopsis tetragonaloba", "Alexendrium tryfolium", "Crotolaria juncea", "Vigna leguminocerum"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 10,
                "question": "Sunhemp is:",
                "options": ["Green manuring crop", "Cereal crop", "Oil-seed crop", "Sugar crop"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 11,
                "question": "In pearlmillet ears honey like secretion dries up after few days. This is called:",
                "options": ["Rust", "Smut", "Ergot", "None of the above"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 12,
                "question": "Niger crop belongs to:",
                "options": ["Minor oil seed crop", "Sugar crop", "Fibre crop", "None of the above"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 13,
                "question": "Soybean seeds contain:",
                "options": ["40-42% protein and 18-20% oil", "50-60% protein and 20-25% oil", "30-35% protein and 30-35% oil", "35% protein and 30% oil"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 14,
                "question": "Tikka disease is associated with:",
                "options": ["Soyabean", "Groundnut", "Green gram", "Pearlmillet"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 15,
                "question": "Seed rate of sesame crop which is sown in rows is:",
                "options": ["2.5 to 3.0 kg ha⁻¹", "4 to 7 kg ha⁻¹", "7 to 8 kg ha⁻¹", "8 to 9 kg ha⁻¹"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 16,
                "question": "Which ICAR institution is located at Trivandrum:",
                "options": ["CPRI", "CTRI", "CPCRI", "CTCRI"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 17,
                "question": "Largest area of crop under Kharif in Rajasthan is:",
                "options": ["Cotton", "Maize", "Bajra", "Jowar"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 18,
                "question": "Average hulling percentage of rice is:",
                "options": ["80%", "65%", "30%", "40%"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 19,
                "question": "The millet which is highly drought resistant is:",
                "options": ["Kodo millet", "Finger millet", "Foxtail millet", "Barnyard millet"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 20,
                "question": "Botanical name of cowpea is:",
                "options": ["Vigna sinensis", "Vigna munga", "Vigna radiate", "Lens esculenta"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 21,
                "question": "The crop also sown for green manuring is:",
                "options": ["Maize", "Green gram", "Pea", "Bengal gram"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 22,
                "question": "Which of the following is an example of mixed cropping specially in Rajasthan:",
                "options": ["Gram+Barley", "Mustard + Wheat", "Groundnut + Til", "Mustard + Barley"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 23,
                "question": "Shelling percentage in groundnut is:",
                "options": ["33%", "50%", "70%", "60%"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 24,
                "question": "Major constituent of cotton fibre is:",
                "options": ["Cellulose", "Lignin", "Protein", "Fat"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 25,
                "question": "Botanical name of Bajra is:",
                "options": ["Sorghum bicolour", "Pennisetum glaucum", "Pennisetum perpurium", "Triticum aestivam"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 26,
                "question": "Seed rate (kg/ha) of pigeonpea (red gram) for sole crop is:",
                "options": ["10-12", "12-15", "15-20", "20-25"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 27,
                "question": "Most drought resistant and early maturing Kharif crops for sandy areas is:",
                "options": ["Cowpea", "Green gram", "Moth bean", "Black gram"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 28,
                "question": "Seed rate (kg/ha) of green gram is:",
                "options": ["8-10", "12-15", "15-20", "20-25"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 29,
                "question": "'Collar rot' disease is associated with:",
                "options": ["Green gram", "Sesame", "Soybean", "Groundnut"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 30,
                "question": "Origin place of maize is:",
                "options": ["Africa", "Central America (Mexico)", "China", "India"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 31,
                "question": "Rice-wheat-moong is an example of:",
                "options": ["Farming system", "Agroforestry system", "Cropping system", "Agro-ecosystem"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 32,
                "question": "Cultivation of mulberry plant is called:",
                "options": ["Pisciculture", "Moriculture", "Monoculture", "Tissue culture"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 33,
                "question": "International Irrigation Management Institute is situated in:",
                "options": ["Nigeria", "Canada", "Kenya", "Shri Lanka"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 34,
                "question": "Unit for measuring cloud cover is:",
                "options": ["Percent", "Okta", "Km/hr", "mmday/"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 35,
                "question": "Which one of the crops does not belong to family Poaceae:",
                "options": ["Napier", "Sugarcane", "Para grass", "Linseed"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 36,
                "question": "An example of biennial crop is:",
                "options": ["Tobacco", "Sugarbeet", "Maize", "Lucerne"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 37,
                "question": "At around 6 km height, the atmospheric pressure is 1/2 of the sea level value:",
                "options": ["1/2", "1/3", "2", "Equal"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 38,
                "question": "Winter rains in Rajasthan are mainly due to:",
                "options": ["South-west monsoon", "North-east monsoon", "Western disturbances", "None of the above"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 39,
                "question": "Which of the following is a green manure crop:",
                "options": ["Sorghum", "Dhaincha", "Pearlmillet", "Maize"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 40,
                "question": "What is wavelength of ultraviolet radiation:",
                "options": ["280-400 nm", "700-1000 nm", "1000-1500 nm", ">1500 nm"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 41,
                "question": "Which crop is most sensitive to frost:",
                "options": ["Wheat", "Gram", "Barley", "Oat"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 42,
                "question": "Inter cultivation is done for:",
                "options": ["Controlling weeds", "Root development", "Conserving soil moisture", "All the above"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 43,
                "question": "Which of the following is not effective measure for soil conservation:",
                "options": ["Strip cropping", "Contour farming", "Mulch farming", "Sowing along the slope"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 44,
                "question": "The area is declared as drought affected when the total rainfall is 25% less than of the average rainfall of the area:",
                "options": ["75%", "60%", "50%", "25%"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 45,
                "question": "The prime objective of sustainable agriculture includes:",
                "options": ["To obtain high income", "To maintain ecological balance", "Both a & b", "None of the above"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 46,
                "question": "Which of the following is the salt tolerant crop:",
                "options": ["Wheat", "Barley", "Rice", "None of the above"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 47,
                "question": "Project Directorate for Farming Systems Research is located at:",
                "options": ["Meerut", "Lucknow", "Kanpur", "Mau"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 48,
                "question": "The number of crops grown per annum on a given area of land multiplied by 100 is:",
                "options": ["Cropping intensity", "Harvest index", "Index of sustainability", "Crop rotation intensity"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 49,
                "question": "The young plant leaves of sorghum contain a glucoside, which is:",
                "options": ["Dhurin (HCN)", "Gossipol", "Sinigrin", "None of these"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 50,
                "question": "The Kharif pulse crop which is sometimes also called as vegetable meat is:",
                "options": ["Blackgram", "Greengram", "Pigeonpea", "Cowpea"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            }
        ]
    },
    {
        title: "Agronomy Part-03",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
            {
                "id": 1,
                "question": "Maize is a:",
                "options": ["Monoecious plant", "Diocious plant", "Both a & b", "None of these"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 2,
                "question": "The poor man's substitute of ghee is called the oil of:",
                "options": ["Soyabean", "Sunflower", "Sesame", "Groundnut"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 3,
                "question": "Chaufali method of sowing is used for hybrids of:",
                "options": ["Castor", "Sorghum", "Cotton", "Pigeonpea"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 4,
                "question": "Retting is done in the crop of:",
                "options": ["Cotton", "Castor", "Jojoba", "Sunhemp"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 5,
                "question": "The seed rate for castor is 8-10 kg/ha:",
                "options": ["8-10", "12-15", "20-22", "25kg/ha"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 6,
                "question": "Khaira disease is associated with:",
                "options": ["Wheat", "Maize", "Barley", "Paddy"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 7,
                "question": "Botanically soybean is a:",
                "options": ["Oilseed crop", "Pulse crop", "Legume crop", "All of these"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 8,
                "question": "Current meter is used to measure:",
                "options": ["Electric current", "Rainfall", "Velocity of water flow", "Depth of water flow"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 9,
                "question": "Units of measurement of water at rest is:",
                "options": ["Litre/minute", "Cubic metre", "Square metre", "Kilogram/minute"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 10,
                "question": "A pipe is discharging 0.4 m³/min water. The amount of water discharged in 5 minutes will be:",
                "options": ["2,400 litre", "2,000 litre", "3,000 litre", "1,200 litre"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 11,
                "question": "Open pan evaporimeter is used for measurement of:",
                "options": ["Evapotranspiration", "Transpiration", "Both of the above", "Evaporation"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 12,
                "question": "The size of Parshall Flume (PF) is indicated by:",
                "options": ["Width of the throat", "Length of the PF", "Both of the above", "None of the above"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 13,
                "question": "Maize is highly sensitive to:",
                "options": ["Water logging", "Water stress", "Both", "None of these"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 14,
                "question": "Which pulse crop is known as golden gram:",
                "options": ["Red gram", "Green gram", "Black gram", "Gram"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 15,
                "question": "In which pulse crop the first hybrid was developed:",
                "options": ["Gram", "Red gram", "Green gram", "Pea"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 16,
                "question": "The organism adjustable to the given new environment is known as:",
                "options": ["Acclimatization", "Adaptation", "Adoption", "All of these"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 17,
                "question": "State of spices is known as:",
                "options": ["Rajasthan", "Karnataka", "Gujrat", "Kerala"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 18,
                "question": "Water used by plants for metabolic need is about:",
                "options": ["<1%", "5%", "10%", "15%"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 19,
                "question": "Lysimeter is used to measure:",
                "options": ["Evaporation", "Evapo-transpiration", "Transpiration", "Rainfall"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 20,
                "question": "The height of troposphere at equator is:",
                "options": ["8 kms", "18 kms", "25 kms", "32 kms"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 21,
                "question": "Liquid used in minimum thermometer is:",
                "options": ["Mercury", "Alcohol", "Acid", "Water"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 22,
                "question": "Nitrogen content of atmosphere by volume is:",
                "options": ["0.03%", "20.95%", "68.53%", "78.09%"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 23,
                "question": "The wavelength of photosynthetically active radiation is:",
                "options": ["< 400 nm", "400-700 nm", "700-1000 nm", ">1000 nm"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 24,
                "question": "Photoperiodically wheat is:",
                "options": ["Short day plant", "Long day plant", "Day neutral plant", "None of the above"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 25,
                "question": "The temperature at which air has to be cooled in order to reach saturation is called:",
                "options": ["Dew point", "Melting point", "Freezing point", "Critical point"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 26,
                "question": "As the height increase the barometric pressure:",
                "options": ["Decreases", "Increases", "Remains constant", "Increases at increasing rate"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 27,
                "question": "Botanical name of Red gram is:",
                "options": ["Ricinus cuminus", "Cajanus cajan", "Vigna acontifolia", "Vigna radiata"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 28,
                "question": "Phyllody disease is associated with:",
                "options": ["Soybean", "Groundnut", "Sesame", "Green gram"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 29,
                "question": "Optimum seed rate of hybrid maize is 20-25 kg/ha:",
                "options": ["10-15", "18-20", "20-25", "50-60"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 30,
                "question": "Seeds of Calotropis are dispersed through structure:",
                "options": ["Pappus", "Wings", "Comose", "Balloon"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 31,
                "question": "Chenopodium murale is a weed of which season?:",
                "options": ["Kharif", "Summer", "Rabi", "None of these"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 32,
                "question": "The mode of application of fluchloraline in pulses for effective weed control is:",
                "options": ["Pre-planting", "Pre-emergence", "Post-emergence", "Post-Planting"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 33,
                "question": "Chemicals are used for weed control is also termed as:",
                "options": ["Nematicide", "Pesticide", "Fungicide", "None of these"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 34,
                "question": "Which of the following is a mimicry weed of paddy crop?:",
                "options": ["Cynodon dectylone", "Phalaris minor", "Cenchrus ciliaris", "Echinochloa colonum"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 35,
                "question": "Which of the following weeds belong to family graminae?:",
                "options": ["Cyperous rotandus", "Brassica sinensis", "Argomone mexicana", "Sorghum helepense"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 36,
                "question": "Which of the following weed plants population help soil nitrogen build up?:",
                "options": ["Leucus aspera", "Melilotus indica", "Cynodon dectylon", "Lantana camera"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 37,
                "question": "Which of the following weeds belong to family Solanaceae?:",
                "options": ["Celosia sp.", "Solanum xanthocarpum", "Sachhrum munja", "Lolium rigidem"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 38,
                "question": "Weed which has medicinal value:",
                "options": ["Chenopodium album", "Sorghum helepense", "Tephrosia purpurea", "None of these"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 39,
                "question": "Which is the critical period of weed-crop competition in Kharif pulses?:",
                "options": ["Sowing to 15 days stage", "15-30 days stage", "30-45 days stage", "45-60 days stage"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 40,
                "question": "Cyperus rotundus is propagated by:",
                "options": ["Seed", "Stolans", "Bulb", "Tubers"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 41,
                "question": "The book 'Annals of Agriculture' was published by?",
                "options": ["Van Helmont", "Arthur Young", "Jethro Tull", "Blackman"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 42,
                "question": "In India, the first separate Department of Agriculture was established in?",
                "options": ["1881", "1900", "1801", "1985"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 43,
                "question": "Yellow Revolution is associated with?",
                "options": ["Pulse production", "Milk production", "Fruit production", "Oilseed production"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 44,
                "question": "A major consequence of increasing elevation is?",
                "options": ["Decreased temperature", "Decreased precipitation", "Decreased wind velocity", "Increased soil fertility"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 45,
                "question": "Net Assimilation Rate (NAR) is expressed as?",
                "options": ["g cm⁻² day⁻¹", "g g⁻¹ ha⁻¹", "g g⁻¹ day⁻¹", "g cm⁻² ha⁻¹"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 46,
                "question": "Which crop geometry ensures uniform solar radiation availability?",
                "options": ["Rectangular", "Random", "Square", "None of these"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 47,
                "question": "The origin of potato is?",
                "options": ["China", "South America", "India", "Africa"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 48,
                "question": "Conservation tillage encourages?",
                "options": ["Higher microbial population", "Lower number of earthworms", "Reduced soil fauna", "None of these"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 49,
                "question": "Tilth can be measured by?",
                "options": ["Aggregate analysis", "Chemical analysis", "Biological analysis", "None of these"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 50,
                "question": "Capillary movement of water is complemented by?",
                "options": ["Stem elongation", "Root extension", "Leaf orientation", "None of these"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            }
        ]
    },
    {
        title: "Agronomy Part-04",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
            {
                "id": 1,
                "question": "For tuberisation point of view, potato is required:",
                "options": ["Short day", "Long day", "Intermediate", "Does not depend on day length"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 2,
                "question": "Average speed of a cyclone movement is:",
                "options": ["30 kmph", "60 kmph", "60 kmph", "18 kmph"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 3,
                "question": "In Land capability classification system class II is represented by colour:",
                "options": ["Yellow", "Orange", "Red", "Green"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 4,
                "question": "Which of the following fixes lowest amount of atmospheric N:",
                "options": ["Moong", "Lucern", "Soyabean", "Groundnut"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 5,
                "question": "Push and pull strategy is used for management of:",
                "options": ["Cuscuta", "Orbanche", "Loranthus", "Striga"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 6,
                "question": "Indian Society of Agronomy established in:",
                "options": ["1905", "1929", "1942", "1955"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 7,
                "question": "Buffer stock of food grains in India is mainly maintained by:",
                "options": ["NSC", "FCI", "IGSI", "Govt. of India"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 8,
                "question": "In wind erosion majority of soil loss is due to following process:",
                "options": ["Surface creep", "Saltation", "Suspension", "Scrapping"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 9,
                "question": "LEPA (Low energy precision agriculture) is a modified irrigation system:",
                "options": ["Drip", "Sprinkler", "Surface", "Sub-surface"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 10,
                "question": "Which of the following point is false for SRI:",
                "options": ["Wide row spacing", "Irrigated when hair line crack appears", "Not labour intensive", "Low seed rate"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 11,
                "question": "Which is a reflecting type anti-transpirants:",
                "options": ["PMA", "Atrazine", "Kaoline", "All of these"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 12,
                "question": "To prolong the beneficial effect of chiseling which of the following is practiced:",
                "options": ["Deep tillage", "Stubble mulching", "Intercultivation", "Vertical mulching"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 13,
                "question": "Graphical representation of numerical data by drawing pictures is done by:",
                "options": ["Pie chart", "Histogram", "Pictogram", "Bar diagram"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 14,
                "question": "A-value given by Friend and Dean is used for assessment of P & S in soil:",
                "options": ["P", "S", "P&K", "P & S"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 15,
                "question": "To protect gram crop from Fusarium wilt Deep sowing must be done:",
                "options": ["Early sowing", "Deep sowing", "Shallow sowing", "Wide spacing"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 16,
                "question": "For planting of napier grass over 1 ha number of rooted slips required are:",
                "options": ["10,000", "27,800", "33,000", "66,666"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 17,
                "question": "FACE stands for:",
                "options": ["Free air carbon enrichment technology", "Free air carbon dioxide enrichment technology", "Free air CO enrichment technology", "Free air CFC enrichment technology"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 18,
                "question": "Farmer's first concept was given by:",
                "options": ["Leagens", "Indira Gandhi", "Robert Chamber", "M S Swaminathan"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 19,
                "question": "Uniformity coefficient is related to Sprinkler irrigation:",
                "options": ["Drip", "Sprinkler", "Check basin", "Flood"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 20,
                "question": "Annidation means Complementary interaction:",
                "options": ["Complementary", "Supplementary", "Additive", "Negative"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 21,
                "question": "Classification of climate based on weather elements was given by:",
                "options": ["De Candole", "Troll", "Koppen & Thornthwaite", "Koppen"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 22,
                "question": "A history of agriculture in India was written by:",
                "options": ["B.P.Pal", "Ramadas", "Randhawa", "RS Paroda"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 23,
                "question": "Seed rate of hybrid variety of Rice is 15 kg per hectare:",
                "options": ["5 kg", "15 kg", "60 kg", "100 kg"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 24,
                "question": "A soil absorbs about ______ of incoming solar radiation.",
                "options": ["5%", "10%", "15%", "20%"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 25,
                "question": "Nitrate levels above ______ mg/L in drinking water are hazardous.",
                "options": ["5", "10", "15", "20"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 26,
                "question": "Biogeochemical nutrient cycles emphasize the importance of?",
                "options": ["Balanced fertilization", "Over fertilization", "Under fertilization", "None of these"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 27,
                "question": "Wavelength longer than ______ mµ is called infrared.",
                "options": ["450", "550", "650", "750"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 28,
                "question": "North of the equator, surface winds are called?",
                "options": ["Northeast trade winds", "Southeast winds", "Westerlies", "Easterlies"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 29,
                "question": "Spray drift of 2,4-D (ester form) causes serious damage in?",
                "options": ["Maize", "Rice", "Sorghum", "Cotton"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 30,
                "question": "Mustard planted at 50 × 20 cm spacing will have approximately how many plants/ha?",
                "options": ["75,000", "1,00,000", "1,25,000", "1,50,000"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 31,
                "question": "Agro-climatic Zone XIII (Gujarat) has which climate?",
                "options": ["Arid to extremely arid", "Arid to dry sub-humid", "Semi-arid", "Humid"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 32,
                "question": "Optimum temperature for better crop production is?",
                "options": ["12–18°C", "24–30°C", "18–24°C", "30–35°C"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 33,
                "question": "Which instrument determines wind direction?",
                "options": ["Anemometer", "Anemograph", "Acrometer", "Aeroscope slide"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 34,
                "question": "Which weed has developed herbicide resistance?",
                "options": ["Avena fatua", "Phalaris minor", "Tridax procumbens", "Trianthema portulacastrum"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 35,
                "question": "Which sprayer causes maximum herbicide wastage through drift?",
                "options": ["High volume sprayer", "Ultra-low volume sprayer", "Hand sprayer", "Low volume sprayer"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 36,
                "question": "Which weed-crop pair is NOT correctly matched?",
                "options": ["Striga – Sorghum", "Cuscuta – Lucerne", "Typha – Sugarcane", "Orobanche – Tobacco"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 37,
                "question": "A substance capable of counteracting herbicide effects is called?",
                "options": ["Anesthesia", "Antidote", "Aborigines", "None of these"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 38,
                "question": "Stale seedbed technique belongs to which weed control method?",
                "options": ["Cultural", "Mechanical", "Chemical", "Biological"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 39,
                "question": "EPTC (a thiocarbamate herbicide) is translocated?",
                "options": ["Only upward", "Only downward", "Both upward and downward", "None of these"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 40,
                "question": "Photodecomposition causes greater loss of urea herbicides when the soil surface is?",
                "options": ["Moist", "Wet", "Dry", "None of these"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 41,
                "question": "The word 'Meteorology' is derived from which language?",
                "options": ["Latin", "Greek", "English", "Hindi"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 42,
                "question": "Which instrument is used for measuring solar radiation?",
                "options": ["Anemometer", "Barograph", "Psychrometer", "Pyranometer"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 43,
                "question": "What is the average value of the solar constant?",
                "options": ["1.94 cal/cm²/min", "1.94 J/cm²/min", "2.94 J/cm²/min", "2.94 cal/cm²/min"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 44,
                "question": "The normal lapse rate (vertical temperature decrease in the atmosphere) is:",
                "options": ["4.5°C/km", "5.5°C/km", "6.5°C/km", "7.5°C/km"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 45,
                "question": "What is the synonym used to describe micro-climate?",
                "options": ["Plant climate", "Eco-climate", "Habitat climate", "All the above"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 46,
                "question": "Blue colour of the sky and the red colour of sunset are due to which atmospheric process?",
                "options": ["Reflection", "Refraction", "Dispersion", "None of these"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 47,
                "question": "Which layer of the atmosphere makes radio communication possible by reflecting radio waves?",
                "options": ["Troposphere", "Mesosphere", "Stratosphere", "Ionosphere"],
                "correctAnswer": 3,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 48,
                "question": "The ratio between the solar radiation reflected by a surface and the total incoming global solar radiation is called:",
                "options": ["Direct radiation", "Albedo", "Net radiation", "Diffused radiation"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 49,
                "question": "At what time of the day is the maximum temperature generally observed?",
                "options": ["12:00 noon", "2:00 pm", "4:00 pm", "1:00 pm"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 50,
                "question": "A line connecting points of equal wind speed on a weather map is called:",
                "options": ["Isohyet", "Isotach", "Isobath", "Isobar"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            }
        ]
    } ,
    {
        title: "Soil Science Part-01",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "The cultivation practices based on GIS, GPS is called:",
    "options": ["Multistored farming", "Precision farming", "Conservation Agriculture", "Mixed farming"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "A combination of contouring and crop rotation to prevent soil erosion is called:",
    "options": ["Strip Cropping", "Precision Agriculture", "Trap cropping", "Companion Cropping"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Study of soil relations to growth and development of plant is known as:",
    "options": ["Pedology", "Soil Genesis", "Soil Fertility", "Edaphology"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Science that deals with genesis and classification of soil is referred as:",
    "options": ["Pedology", "Petrology", "Pedogogy", "Petrography"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Clay soil contains which type of pores in a large extent?",
    "options": ["Capillary Pores", "Macro Pores", "Micro Pores", "Medium Pores"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Which type of soil has maximum porosity?",
    "options": ["Sandy soil", "Sandy Loam", "Clay Loam soil", "Loamy Soil"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "How many nutrients have been declared essential for plants so far?",
    "options": ["13", "15", "17", "19"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "In dryland farming area emphasis is on:",
    "options": ["Moisture conservation practice", "Drainage", "Disposal of excess water", "All of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Honey comb structure is found in:",
    "options": ["Black Soil", "Red soil", "Salt Affected soil", "Laterites soil"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "The most abundant microorganism in soils are:",
    "options": ["Protozoa", "Actinomycetes", "Bacteria", "Fungi"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Which among the following phosphatic fertilizer is water soluble or monocalcium phosphate fertilizer?",
    "options": ["Raw bone meal", "Rock phosphate", "Basic slag", "Ammonium phosphate"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Which among the following crops has highest ODR?",
    "options": ["Rice", "Wheat", "Maize", "Pea"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Which type of soil is suitable for producing Tea and cashew crop?",
    "options": ["Black soil", "Alluvial soil", "Desert soil", "Laterite soil"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "What is the order of alluvial soil?",
    "options": ["Vertisol", "Alfisol", "Entisol", "Histosols"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Deficiency symptoms of immobile nutrients will appear first in:",
    "options": ["Plant roots", "Young, upper leaves", "Older, lower leaves", "Flowers"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "What is the pore space in loam soil?",
    "options": ["40%", "43%", "47%", "50%"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "pF value at field capacity is:",
    "options": ["4.5", "1", "2.5", "4.2"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Which among the following nutrient is responsible for eutrophication?",
    "options": ["N", "P", "K", "Both N & P"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "When there is sodicity hazard in soil then a high sodium hazard occurs in which class?",
    "options": ["S3", "S4", "S2", "C3"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Which crop requires maximum amount of nitrogen?",
    "options": ["Potato", "Wheat", "Barley", "Sugarcane"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Water erosion sequence is:",
    "options": ["Splash-Rill-Gully-Sheet-Ravine", "Gully-Sheet-Ravine-Rill-Splash", "Splash-Sheet-Rill-Gully-Ravine", "Splash-Rill-Ravine-Gully-Sheet"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Which among the following crop will be the indicator crop for deficiency of Potassium?",
    "options": ["Sorghum", "Maize", "Cauliflower", "Eucalyptus"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Which element is most useful for root growth?",
    "options": ["Nitrogen", "Phosphorous", "Boron", "Calcium"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Which nutrient is major role Energy exchange, transfer & bonding?",
    "options": ["C, H, O", "Ca, Mg, K", "N, P, S", "H & K"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "What is the silt % in clay textural classes soil?",
    "options": ["0-50", "0-45", "45-65", "0-40"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Which of the following element is the structural part of chlorophyll?",
    "options": ["Mg", "Fe", "Mn", "Fe"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Rhizobium japonicum can fix the nitrogen in the roots of:",
    "options": ["Soybean", "Clover", "Lathyrus", "Lentil"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Indian Institute of Soil Science (ICAR-IISS), Bhopal was established in which year?",
    "options": ["1974", "1947", "1975", "1988"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Use of CAN will have ......effect to soil?",
    "options": ["Acidic", "Alkaline", "Neutral", "Sodic"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Which among the following have a good thermal conductivity?",
    "options": ["Compact soil", "Natural structures", "Organic soil", "Both a & b"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Which among the following is not a reason for reduction in Porosity?",
    "options": ["Continuous cropping", "Conventional tillage", "Virgin soil", "Both b & c"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Which among the following nutrient is the most immobile nutrient in plants and soil respectively?",
    "options": ["Calcium, Zn", "B, Ca", "B, S", "Ca, B"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Which among the following is slow-release N fertilizer?",
    "options": ["Urea form", "Methylene urease", "Sulfur-coated urea", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Iron pyrite is used in the reclamation of?",
    "options": ["Saline soil", "Sodic soil", "Acidic soil", "Neutral soil"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Study of soil from stand point of higher plants is called:",
    "options": ["Pedology", "Edaphology", "Soil fertility", "Soil productivity"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "The minerals having specific gravity more than 2.85 which are called:",
    "options": ["Heavy minerals", "Light minerals", "Medium minerals", "Clay minerals"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Stratification is main feature of following rocks:",
    "options": ["Sedimentary rocks", "Igneous rocks", "Metamorphic rocks", "Plutonic rocks"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Cooling magma is quickly occur in which type of rocks:",
    "options": ["Volcanic rocks", "Plutonic rocks", "Sedimentary rocks", "Secondary rocks"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "The origin of rocks is called:",
    "options": ["Petrology", "Petro genesis", "Petrography", "Neosynthesis"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "The second dominant element in the earth crust after oxygen is:",
    "options": ["O2", "Si", "Mg", "Ca"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "It is a management approach to the cultivation of crops by considering spatially and temporal variation in soils, rainfall and adopting management techniques to reduce cost, efficient use of inputs and reduce environmental pollution:",
    "options": ["Precision agriculture", "Organic farming", "Sustainable agriculture", "Permaculture"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "The thickness of core is:",
    "options": ["3500 Km", "2500 Km", "2000 km", "5000 km"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Movement of nutrients ions along with irrigation water or rainwater is called:",
    "options": ["Diffusion", "Mass flow", "Contact exchange", "Passive absorption"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Principal mineral constituent of rock phosphate:",
    "options": ["Crandallite", "Apatite", "Phlogopite", "Struvite"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "The 'Bangalore method' of composting is characterized by:",
    "options": ["Initial aerobic phase followed by anaerobic phase", "Continuous aerobic phase", "Initial anaerobic followed by aerobic phase", "Continuous anaerobic phase"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Which of the following is not a method of measurement of soil moisture?",
    "options": ["Tensiometer", "Lysimeter", "Gravimetric", "Neutron scattering method"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "At high pH values, the cation exchange capacity of humus on a mass basis is:",
    "options": ["80-100 C mol (P+)/kg", "100-150 C mol (P+)/kg", "150-300 C mol (P+)/kg", "3-15 C mol (P+)/kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Which of the following compound is most resistant to decomposition:",
    "options": ["Cellulose", "Hemicelluloses", "Lignin", "Proteins"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Highly resistant humic substances, insoluble both in alkali and acid are grouped in:",
    "options": ["Humin", "Humic acid", "Fulvic acid", "Humus"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Water held between the field capacity (-1/3 bar) and permanent wilting point (-15 bar) is called:",
    "options": ["Un available water", "Available water", "Hygroscopic water", "Capillary water"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
    },
    {
         title: "Soil Science Part-02",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "According to ISSS and USDA the size of clay particle is:",
    "options": ["<0.002 mm", ">0.002mm", ">0.02 mm", "<0.02 mm"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "When the horizontal dimensions are more develop compare to the vertical but units are thick then the structure is called as:",
    "options": ["Platy", "Laminar", "Columnar", "Prismatic"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Bulk density also called:",
    "options": ["Apparent specific gravity", "True density", "Specific density", "Swell index"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Organic or peat soil having bulk density:",
    "options": ["0.5 Mg/m3", "0.2 Mg/m3", "0.1 Mg/m3", "2.5 Mg/m3"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "When water freezes in rocks joints and crevices, it expands 9 percent of its volume, creating a shattering force of about:",
    "options": ["150 tons per square foot", "140 tons per square foot", "160 tons per square foot", "170 tons per square foot"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "C: N ratio of micro organisms:",
    "options": ["5:1", "15:1", "10-15:1", "4:1 to 9:1"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "The micronutrient element associated with the biosynthesis of auxins in plants is:",
    "options": ["Cu", "Zn", "Mo", "Fe"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "The following element plays important role in biological nitrogen fixation:",
    "options": ["Mo", "N", "Cu", "Ca"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Downward movement of water through saturated soil is called:",
    "options": ["Seepage", "Percolation", "Infiltration", "Leaching"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "What is the electrical conductivity of saline soil?",
    "options": ["Less than 4", "More than 4", "Less than 8.5", "More than 8.5"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "A soil having EC>4dSm, ESP>15% and pH>8.5 is called as:",
    "options": ["Saline Soil", "Sodic Soil", "Saline Sodic Soil", "Acidic Soil"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Enzymes which brings about oxidation-reduction reactions in plants act as electron carrier in:",
    "options": ["S", "B", "Zn", "Cu"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Urea fertilizer is:",
    "options": ["Ammonical fertilizer", "Nitrate fertilizer", "Amide fertilizer", "None of the above"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Which is basic fertilizer?",
    "options": ["Urea", "Calcium ammonium nitrate", "Ammonium Sulphate", "Sodium nitrate"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "The following element which is responsible for 60 enzyme activation:",
    "options": ["P", "Mn", "Zn", "K"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Water quality parameter used to measure total quantity of dissolved salts in water, having units as Deci Siemens per meter:",
    "options": ["Electric Potential", "Acidity", "Water Tension", "Electrical Conductivity"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Self-ploughing soils are:",
    "options": ["Black soils", "Red soils", "Laterite soils", "Alluvial soil"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Which of the following SAR range is termed as SAR class S1?",
    "options": ["Less than 10", "19-26", "10-18", "Greater than 26"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Which is NOT correct about Saline soil?",
    "options": ["EC of saline soil is more than 4", "ESP of saline soil is less than 15", "In saline soil due to precipitation Salt content increase", "Accumulation of Mg & Ca chloride in saline soil"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "What is the nitrogen content in CAN fertilizer?",
    "options": ["28", "20.6", "25", "30"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Citrate Soluble fertilizer but water insoluble fertilizer is:",
    "options": ["DCP", "MAP", "Rock Phosphate", "DAP"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Which one of the following is a symbiotic nitrogen fixing bacteria?",
    "options": ["Rhizobium", "Azotobacter", "Clostridium", "Azospirillium"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Which is developed due to H+ and Al+3 ions on soils colloids:",
    "options": ["Active acidity", "Exchangeable/salt replaceable acidity", "Residual acidity", "Total acidity"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "In universal soil loss equation (A=RKLSCP) K denotes?",
    "options": ["Soil erodibility Factor", "Slope gradient", "Soil Erosivity", "Soil Cover"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Deforestation generally decreases:",
    "options": ["Rainfall", "Erosion", "Evaporation", "Temperature"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Water erosion follows the sequence?",
    "options": ["Splash > Rill > Gully > Sheet", "Splash > Sheet > Rill > Gully", "Splash > Gully > Sheet > Rill", "Sheet > Splash > Rill > Gully"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Eluviation process occur in following horizon of soil profile:",
    "options": ["B horizon", "E or A2 horizon", "C horizon", "A – horizon"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "The density of whole earth is:",
    "options": ["5.5 g/cm3", "4.5 g/cm3", "6.5 g/cm3", "8.5 g/cm3"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "After application of urea to soil which undergoes hydrolysis to produce unstable compound called:",
    "options": ["Ammonium hydroxide", "Ammonium bicarbonate", "Ammonium carbamate", "Anhydrous ammonia"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Earthy odour of soil occur by actinomycetes due to secretion of:",
    "options": ["Flavonoids", "Carbohydrates", "Geosmin", "Terpenes"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Fungi dominant in:",
    "options": ["Acidic soil", "Neutral soil", "Alkaline soil", "Calcareous soil"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Splitting of water molecule into H+ and OH- ions is called:",
    "options": ["Hydration", "Hydrolysis", "Carbonation", "Oxidation"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Hematite gives limonite under the following process of chemical weathering:",
    "options": ["Hydrolysis", "Hydration", "Solution", "Oxidation"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Podsolization also called:",
    "options": ["Acid hydrolysis", "Alkali hydrolysis", "Rock hydrolysis", "Humification"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Father of Indian soil science is:",
    "options": ["Leather", "Dokuchaev", "Jenny", "Matson"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Potassium is determined with the help of:",
    "options": ["AAS", "ICP", "Flame photometer", "Spectrophotometer"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Bray No 1 reagent for estimation of available phosphorus mostly used in soil having pH:",
    "options": [">5.5", "<5.5", ">6.5", "<3.5"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Lime requirement calculated by following method:",
    "options": ["Schoonover method", "Lindsay method", "Shoemaker et al", "Norvell method"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Which microorganism is responsible for nitrification or nitrite to nitrate?",
    "options": ["Nitrosomonas", "Nitrobacter", "Clostridium", "Nitrosococcus"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Which nutrients stimulates flowering and aids in seed form?",
    "options": ["Phosphorus", "Potassium", "Ca and mg", "Sulphate"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "A good supply of ______ helps in counteracting the bad effect of poor aeration.",
    "options": ["Fe", "Mn", "Zn", "Cu"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Based on the functional basis, which of the following elements are classified as main structure elements?",
    "options": ["C, H, O", "N, P, S", "K, Ca, Mg", "Ca, Mg and Fe"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Single superphosphate is produced by the reaction of:",
    "options": ["Rock phosphate with sulphuric acid", "Rock Phosphate with hydrochloric acid", "Rock Phosphate with phosphoric acid", "Phosphoric acid with sulphuric acid"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "In neutron probe method for moisture estimation neutron source is:",
    "options": ["Americium", "Beryllium", "Both a and b", "BF3"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Amongst oil cakes, the highest nitrogen content is in:",
    "options": ["Castor cake", "Neem cake", "Coconut cake", "Groundnut cake"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Of the following which one is an important component of urease enzyme?",
    "options": ["Co", "Mo", "Fe", "Ni"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Little leaf of cotton is due to the:",
    "options": ["Deficiency of Zn", "Toxicity of Zn", "Deficiency of Cu", "Toxicity of Cu"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Dominant soils in India:",
    "options": ["Red", "Laterite", "Black", "Alluvial"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "In munsell colour chart chroma denotes:",
    "options": ["Dominant spectral colour", "Brightness/lightness/darkness of colour", "Purity of colour", "Strength of colour"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Liquid bio fertilizers are more attractive than solid inoculants, their shelf life is:",
    "options": ["6-12 month", "18-24 month", "36-48 month", "3-6 month"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  }
    ]
    },
    {
       title: "Soil Science Part-03",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Liquid bio fertilizers are more attractive than solid inoculants, their shelf life is:",
    "options": ["6-12 month", "18-24 month", "36-48 month", "3-6 month"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "'cfu' is a unit for measuring:",
    "options": ["Soil pollution", "Soil quantity", "Metal contamination", "Microbial population"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Black colour of vertisol is due to the presence of:",
    "options": ["Magnesium", "Titanium oxide", "Selenium", "Montmorillonite clay"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Bradyrhizobium is suitable for:",
    "options": ["Groundnut", "Soybean", "Cowpea", "Alfalfa"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Concept of leaching requirement was developed by:",
    "options": ["W.R. Gardner", "D. kirkham", "L.D Baver", "L.A. Richards"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Upper 5 Km Sedimentary rocks percentage is:",
    "options": ["18%", "74%", "8%", "50%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "The carbon dioxide percentage in soil air is:",
    "options": ["0.03%", "0.3%", "3%", "0.003%"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Average particle diameter of sand:",
    "options": ["2 – 0.07 mm", "2 – 0.02 mm", "2 – 0.05 mm", "2 – 0.08 mm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "The term remote sensing first used by:",
    "options": ["Tomilnson", "Parker", "Evelyn L.Pruitt", "Marshall"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "GPS is constellation of:",
    "options": ["12 satellites", "24 satellites", "48 satellites", "10 satellites"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Soils of these textured class have minimum water holding capacity:",
    "options": ["Sandy soil", "Clay soil", "Loam soil", "Clay loam soil"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Due to high content of nitrates in drinking water cause:",
    "options": ["Blue baby syndrome", "Minimata", "Itai-Itai", "Grass tetany"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "The law used in mechanical analysis:",
    "options": ["Charle's law", "Poisoulle s law", "Stoke' s law", "Fick's law"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "In acid soil availability of the nutrient is quite low:",
    "options": ["Fe", "Mn", "Zn", "Mo"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "What is the critical limit of ODR:",
    "options": ["20x10-8 g/cm2/min", "20x10-2 g/cm2/min", "20x10-6 g/cm2/min", "20x10-7 g/cm2/min"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Study of earth crust is called:",
    "options": ["Geology", "Pedology", "Petrology", "Edaphology"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "In land capability classification land suitable for crop cultivation:",
    "options": ["Class I to IV", "Class I to VI", "Class V to VIII", "Class I to VI"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Bemmelen factor is:",
    "options": ["1.754", "1.724", "1.342", "1.524"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "pF value for hygroscopic coefficient is:",
    "options": ["2.53", "4.18", "4.50", "6"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Pink color of nodules is due to:",
    "options": ["Rhizobium", "Mo", "Fe", "Leghaemoglobin"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Which element is the structural part of chlorophyll?",
    "options": ["Mg", "Fe", "Mn", "Cl"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "The most abundant mineral in earth crust:",
    "options": ["Feldspar", "Quartz", "Mica", "Calcite"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Soil water potential is measured by:",
    "options": ["Psychrometer", "Lysimeter", "Infiltrometer", "Hygrometer"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "The unit of cation exchange capacity is:",
    "options": ["cmol(p+)/kg", "mg/kg", "g/cc", "dS/m"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Phosphorus is essential for:",
    "options": ["Root growth", "Photosynthesis", "Chlorophyll synthesis", "Stomatal opening"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Which element is required for sugar translocation?",
    "options": ["Boron", "Potassium", "Chlorine", "Manganese"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "The soil horizon which contains maximum humus:",
    "options": ["O-horizon", "A-horizon", "B-horizon", "C-horizon"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Most of the nitrogen in soil is present in:",
    "options": ["Inorganic form", "Organic form", "Gaseous form", "None"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Cation exchange capacity increases with:",
    "options": ["Decrease in pH", "Increase in pH", "Neutral pH", "None"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "The most common method of fertilizer application for field crops:",
    "options": ["Broadcasting", "Placement", "Fertigation", "Foliar"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Soil texture is:",
    "options": ["Dynamic", "Static", "Changeable", "None"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Which of the following is a primary nutrient?",
    "options": ["Calcium", "Sulphur", "Phosphorus", "Magnesium"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "The process of formation of soil from parent material is called:",
    "options": ["Pedogenesis", "Weathering", "Leaching", "Translocation"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Which nutrient is responsible for stomatal opening and closing?",
    "options": ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "What is the pH range of neutral soil?",
    "options": ["6.5-7.5", "5.5-6.5", "7.5-8.5", "<5.5"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "The percentage of Pore space in Sandy soil:",
    "options": ["40%", "47%", "50%", "58%"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Which is the highest essential element required by plants?",
    "options": ["Carbon", "Nitrogen", "Phosphorus", "Potassium"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Which soil is suitable for rice cultivation?",
    "options": ["Sandy", "Clay", "Loam", "Silt"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "The process of loss of nitrogen in gaseous form is:",
    "options": ["Denitrification", "Volatilization", "Nitrification", "Immobilization"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Which of the following is a micro nutrient?",
    "options": ["N", "P", "K", "Zn"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "The term 'Pedology' is derived from which language?",
    "options": ["Latin", "Greek", "English", "Arabic"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "The dominant clay mineral in Black soil:",
    "options": ["Kaolinite", "Montmorillonite", "Illite", "Vermiculite"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Soil bulk density is normally:",
    "options": ["1.33 g/cm3", "2.65 g/cm3", "1.0 g/cm3", "2.0 g/cm3"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Available Phosphorus in soil is determined by:",
    "options": ["Olsen's method", "Walkley-Black", "Kjeldahl", "Flame photometer"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Which process is responsible for the formation of salt-affected soils?",
    "options": ["Salinization", "Leaching", "Podzolization", "Laterization"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Organic carbon in soil is determined by:",
    "options": ["Wet digestion", "Dry ashing", "Kjeldahl method", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Which nutrient deficiency causes yellowing of older leaves?",
    "options": ["Nitrogen", "Iron", "Boron", "Calcium"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Maximum nitrogen fixing bacteria in soil:",
    "options": ["Rhizobium", "Azotobacter", "Clostridium", "Blue-green algae"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Which soil is known as 'black cotton soil'?",
    "options": ["Vertisol", "Entisol", "Alfisol", "Ultisol"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "The pH of saline soil is:",
    "options": ["< 8.5", "> 8.5", "7.0", "5.5"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
    },
    {
       title: "Soil Science Part-04",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Which fertilizer is mostly used in India?",
    "options": ["Urea", "DAP", "SSP", "MOP"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "The process of formation of soil from rocks:",
    "options": ["Pedogenesis", "Weathering", "Denudation", "Erosion"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Which soil has high water retention?",
    "options": ["Sand", "Silt", "Clay", "Loam"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "What is the value of ESP for sodic soil?",
    "options": ["> 15", "< 15", "= 15", "> 20"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "What is the SAR value for Sodic soil?",
    "options": ["> 13", "< 13", "= 13", "> 15"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "C:N ratio of legumes is:",
    "options": ["20-30:1", "100:1", "400:1", "10:1"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "In 1:1 type clay mineral, the ratio of silica to alumina is:",
    "options": ["1:1", "2:1", "2:2", "1:2"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Which nutrient is involved in chlorophyll formation?",
    "options": ["Mg", "Fe", "Zn", "Cu"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "The element required for the activation of nitrate reductase enzyme:",
    "options": ["Mo", "Fe", "Cu", "Zn"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Which gas is predominant in soil air?",
    "options": ["N2", "O2", "CO2", "Argon"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Which of the following is a mobile nutrient?",
    "options": ["Nitrogen", "Calcium", "Boron", "Iron"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "The process of removal of basic cations from the soil:",
    "options": ["Leaching", "Podzolization", "Salinization", "Laterization"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Which fertilizer has high nitrogen content?",
    "options": ["Urea", "Ammonium Sulphate", "Calcium Ammonium Nitrate", "Sodium Nitrate"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "The term 'soil' is derived from:",
    "options": ["Latin word 'Solum'", "Greek word 'Pedon'", "English word 'Soil'", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "What is the bulk density of sandy soil?",
    "options": ["1.6 g/cm3", "1.4 g/cm3", "1.3 g/cm3", "1.1 g/cm3"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "The major constituent of the earth's crust is:",
    "options": ["Oxygen", "Silicon", "Aluminum", "Iron"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Essential nutrients are how many?",
    "options": ["16", "17", "18", "19"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Which of the following is a beneficial element?",
    "options": ["Cobalt", "Nitrogen", "Phosphorus", "Potassium"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Phosphorous deficiency symptoms:",
    "options": ["Purple color", "Yellowing", "Necrosis", "Chlorosis"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "What is the pH of alkaline soil?",
    "options": ["> 8.5", "< 8.5", "7.0", "5.0"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Which is not a secondary nutrient?",
    "options": ["Calcium", "Magnesium", "Sulphur", "Nitrogen"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "The method to determine soil moisture in situ is:",
    "options": ["Neutron moisture meter", "Oven drying", "Gravimetric", "All of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Which soil has high CEC?",
    "options": ["Sandy", "Clay", "Loam", "Silt"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Soil colour is measured by:",
    "options": ["Munsell colour chart", "pH meter", "Spectrophotometer", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "In soil classification, what is the order for Black soil?",
    "options": ["Vertisol", "Mollisol", "Histosol", "Alfisol"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "The micronutrient deficiency which causes 'Little Leaf' in plants:",
    "options": ["Zn", "Cu", "Mn", "Fe"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "What is the standard temperature for measuring pH of soil?",
    "options": ["25°C", "30°C", "20°C", "35°C"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Nutrient uptake by plants takes place by:",
    "options": ["Diffusion", "Mass flow", "Root interception", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "What is the C:N ratio of arable soil?",
    "options": ["5:1 to 15:1", "20:1", "100:1", "4:1"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "The most common form of Nitrogen absorbed by plants:",
    "options": ["Nitrate", "Ammonium", "Urea", "Amino acids"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "The process of transformation of Ammonium to Nitrate:",
    "options": ["Nitrification", "Denitrification", "Mineralization", "Immobilization"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Which fertilizer should not be used in acid soil?",
    "options": ["Ammonium Sulphate", "Calcium Ammonium Nitrate", "Lime", "Basic Slag"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Which of the following is not a micronutrient?",
    "options": ["Iron", "Manganese", "Zinc", "Potassium"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "The percentage of Pore space in Clay soil:",
    "options": ["40%", "47%", "50%", "58%"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "What is the source of Phosphorus in soil?",
    "options": ["Apatite", "Gypsum", "Pyrite", "Borax"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "What is the function of Potassium in plants?",
    "options": ["Enzyme activation", "Photosynthesis", "Cell division", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "The soil with high CEC has:",
    "options": ["High clay content", "High organic matter", "Both a and b", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Which soil is known for self-ploughing property?",
    "options": ["Black soil", "Red soil", "Sandy soil", "Laterite soil"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "The most limiting factor for plant growth in arid regions:",
    "options": ["Water", "Nitrogen", "Phosphorus", "Light"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "What is the main component of soil?",
    "options": ["Mineral matter", "Organic matter", "Water", "Air"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Which of the following is a nitrogen fixing bacteria?",
    "options": ["Rhizobium", "Azotobacter", "Clostridium", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Cation exchange capacity is the ability of soil to:",
    "options": ["Hold nutrients", "Exchange nutrients", "Both", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Which soil type is rich in organic matter?",
    "options": ["Histosol", "Vertisol", "Entisol", "Aridisol"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "The most common type of weathering in hot deserts:",
    "options": ["Physical weathering", "Chemical weathering", "Biological weathering", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "What is the percentage of Oxygen in earth crust?",
    "options": ["46.6%", "27.7%", "8.1%", "5.0%"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Soil colour 'Red' indicates the presence of:",
    "options": ["Iron", "Manganese", "Organic matter", "Silica"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "The process of converting soil into a compact mass:",
    "options": ["Compaction", "Consolidation", "Both", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Which of the following element is non-mineral?",
    "options": ["Carbon", "Nitrogen", "Calcium", "Magnesium"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Which nutrient is responsible for the formation of seeds and fruits?",
    "options": ["Phosphorus", "Nitrogen", "Potassium", "Boron"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "What is the pH of acidic soil?",
    "options": ["< 6.5", "> 7.5", "7.0", "8.5"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "The C:N ratio of humus is:",
    "options": ["4:1 to 9:1", "10:1", "12:1", "100:1"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "The C:N ratio of normal soils is:",
    "options": ["10:1", "20:1 to 30:1", "12:1", "100:1"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "The typical C:N ratio range for legumes is:",
    "options": ["4:1 to 9:1", "10:1", "20:1 to 30:1", "100:1"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Which of the following has the lowest C:N ratio?",
    "options": ["Crop straw", "FYM", "Legumes", "Microorganisms"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Which material has a C:N ratio of approximately 100:1?",
    "options": ["Humus", "Normal soil", "FYM", "Crop straw"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  }
      ]
    },
    {
      title: "Plant Pathology",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 120,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Stag Head is associated with:",
    "options": ["Covered smut of barley", "White rust of mustard", "Club root of mustard", "Karnal bunt of wheat"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Early blight of tomato is caused by:",
    "options": ["Alternaria brassicae", "Alternaria tenuis", "Alternaria solani", "Alternaria raphani"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "The antheridia of Phytophthora infestance are:",
    "options": ["Paragynous type", "Amphigynous type", "Both types", "None of the above"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Autoecious rust is:",
    "options": ["Black rust of wheat", "Brown rust of wheat", "White rust of mustard", "Linseed rust"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Which disease of wheat was first reported in India by Mitra (1931):",
    "options": ["Flag smut", "Loose smut", "Karnal bunt", "Hill bunt"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Select a non-systemic fungicide:",
    "options": ["Ridomil MZ-72", "Bavistin", "Dithane M-45", "Vitavax"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Wheat rust, which is highly susceptible to higher temperature is:",
    "options": ["Black rust", "Yellow rust", "Brown rust", "None of the above"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Ustilago scitaminea is a causal agent of:",
    "options": ["Flag smut of wheat", "Loose smut of wheat", "Whip smut of sugarcane", "Covered smut of barley"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Favorable temperature for maximum germination of sporangia of Albugo candida is:",
    "options": ["20-24°C", "12-14°C", "30°C", "4-8°C"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Potato leaf roll virus is transmitted by:",
    "options": ["Leaf hopper", "Myzus persicae", "Mites", "Bemisia tabaci"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Both fungal and bacterial diseases can be controlled effectively by:",
    "options": ["Mancozeb", "Copper oxychloride", "Tetracycline", "Agrimycin"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Brown spot of maize is caused by:",
    "options": ["Helminthosporium maydis", "Peronosclerospora spp", "Physoderma zeae-maydis", "Cephalosporium spp"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Carbendazim and vitavax are effective in controlling:",
    "options": ["Rusts", "Downy mildew", "Smuts", "Virus diseases"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Powdery mildew is not effectively controlled by following fungicide:",
    "options": ["Sulphur dust", "Ridomil-MZ", "Karathane", "Calixin"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Total or holo stem parasite is:",
    "options": ["Striga", "Loranthus", "Orobanche", "Cuscuta"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Smut of Bajra is caused by:",
    "options": ["Tolyposporium penicillariae", "Sclerospora graminicola", "Tolyposporium ehrenbergii", "Sphacelotheca reiliana"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Head smut of sorghum is caused by:",
    "options": ["Sphacelotheca reiliana", "Tolyposporium ehrenbergii", "Sphacelotheca sorghi", "Sphacelotheca cruenta"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Yellow vein mosaic of okra is transmitted by:",
    "options": ["Mechanical method", "Insect", "Nematode", "Mite"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "For best fructification, which edible mushroom prefer 'paddy straw' as a food material:",
    "options": ["Agaricus spp", "Pleurotus spp", "Volvariella spp", "Polyporus spp"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Khaira disease of rice is caused by the deficiency of:",
    "options": ["Iron", "Boron", "Zinc", "Potash"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Green ear disease of Bajra is primarily:",
    "options": ["Seed borne", "Air borne", "Soil borne", "None of these"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Species of striga are:",
    "options": ["Partial root parasite", "Complete root parasite", "Complete stem parasite", "Partial stem parasite"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "The pathogen of green ear disease of bajra is perpetuate or survive mainly through:",
    "options": ["Soil", "Seed", "Soil and seed", "Weed"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Grain smut of sorghum is caused by:",
    "options": ["Puccinia graminis", "Sphacealotheca sorghi", "Sphacealotheca cruenta", "Tolysporium ehrenbergii"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Highly poisonous mushroom is:",
    "options": ["Agaricus bisporus", "Amanita muscaria", "Calocybe indica", "Trichoderma species"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Electron microscope has a maximum useful magnification in the range of:",
    "options": ["100-1000X", "1000-2000X", "200000-400000X", "More than 1000000X"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Azospirillum contributes to plant growth as:",
    "options": ["N2 fixation", "Organic matter recycling", "Soil structure", "Bulk density"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Growth of organism can be measured as:",
    "options": ["Increased cell mass", "Increased cell number", "Increased cell mass and cell number", "None of the above"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Nostoc is an example of:",
    "options": ["Algae", "Fungi", "Bacteria", "Virus"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Albugo candida is:",
    "options": ["Obligate parasite", "Facultative parasite", "Saprophyte", "Facultative saprophyte"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Diseases which occur at very irregular intervals and location, and in relatively few instances, are called:",
    "options": ["Epidemic", "Pandemic", "Sporadic", "Endemic"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Asexually produced spores, bearing flagella are called:",
    "options": ["Zygospore", "Zoospore", "Zoosporangium", "Conidium"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Plant disease which is poisonous to human and animals is:",
    "options": ["Ergot of Bajra", "Karnal bunt of Wheat", "Smut of Sorghum", "Late blight of Potato"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Name the father of Plant Pathology in India:",
    "options": ["E.J. Butler", "B.B. Mundker", "K.C. Mehta", "J.F. Dastur"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Fungi do not have:",
    "options": ["Chromosome", "Nucleus", "Chloroplast", "Mitochondria"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "True fungi belongs to kingdom:",
    "options": ["Chromista", "Fungi", "Plantae", "Protista"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "A fruiting structure consisting of cluster of conidiophores woven together on a mass of hyphae is called:",
    "options": ["Stroma", "Sporodochium", "Basidium", "Ascocarp"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Fungicide used for the control of Powdery mildew is:",
    "options": ["Mancozeb", "Apron", "Sulphur", "Thiram"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Fungus used as bio-control agent, for soil borne diseases is:",
    "options": ["Trichoderma", "Trichothecium", "Sclerotium", "Alternaria"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Phytoplasma is susceptible to:",
    "options": ["Tetracycline", "Penicillin", "P.C.N.B", "Propiconazole"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "The author of book 'Plant Diseases' is:",
    "options": ["Y.L. Nene", "R.S. Singh", "P.N. Thapliyal", "G.N. Agros"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Which group of following fungicide is now banned:",
    "options": ["Sulphur fungicides", "Copper fungicides", "Mercury fungicides", "Benzimidazole"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Toxic ingredient for fungi in Blitox-50 is:",
    "options": ["Copper oxychloride", "Copper sulphate", "Copper carbonate", "Cuprous oxide"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Deep ploughing in summer is done to manage:",
    "options": ["Soil borne pathogen", "Seed borne pathogen", "Virus diseases", "None of the above"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "The quantity of Antibiotic and water required to prepare 100 ppm solution is:",
    "options": ["100 mg and 1 litre", "100 mg and 100 ml", "1 mg and 1 litre", "10 mg and 1 litre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "The best method to control soil borne diseases is use of:",
    "options": ["Foliar spray", "Sulphur fungicide", "Disease free seed", "Systemic fungicide"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Fungicide used to control downy mildew diseases is:",
    "options": ["Carbendazim", "Vitavax", "Metalaxyl", "Captan"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "The famous Irish famine of 1845-46 was largely due to failure of:",
    "options": ["Potato crop", "Tomato crop", "Grape crop", "Banana crop"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "At what stage of plant growth, the symptoms of loose smut of wheat appear:",
    "options": ["Maturity stage", "Seedling stage", "Ear emergence stage", "Tillering stage"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Covered smut of barley is a/an:",
    "options": ["Air-borne disease", "Soil-borne disease", "Internally seed-borne disease", "Externally seed-borne disease"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Alternaria blight of mustard is caused by:",
    "options": ["Alternaria solani", "Alternaria brassicae", "Alternaria tenuis", "Alternaria linicola"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "Potato leaf roll virus is also known as:",
    "options": ["Phloem necrosis virus", "Xylem necrosis virus", "Bud necrosis virus", "Yellow mosaic virus"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "Loose smut of wheat is a/an:",
    "options": ["Air-borne disease", "Soil-borne disease", "Externally seed-borne disease", "Internally seed-borne disease"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Viruses are:",
    "options": ["Necrotrophs", "Facultative parasite", "Obligate parasite", "None of the above"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Setae are present in:",
    "options": ["Fusarium oxysporum", "Colletotrichum falcatum", "Alternaria solani", "Ustilago nuda"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "The heteroecious nature of rust fungi was discovered by:",
    "options": ["PMA Millardet", "Anton De Bary", "E. J. Butler", "J. G. Horsfall"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "Late blight of potato is caused by:",
    "options": ["Alternaria", "Peronospora", "Pythium", "Phytophthora"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "Flagellated motile spore is called as:",
    "options": ["Zygospore", "Zoosporangium", "Zoospore", "Conidium"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "Which fungicide was discovered by PMA Millardet:",
    "options": ["Burgundy mixture", "Bordeaux mixture", "Blitox - 50", "Copper oxychloride"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "Obligate parasite (s) is/are:",
    "options": ["Erysiphe", "Puccinia", "Peronospora", "All the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
      title: "Plant Breeding and Genetics",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 120,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Cereals are deficient in which amino acid:",
    "options": ["Lysine", "Methionine", "Tryptophan", "None of the above"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Amino acid which is deficient in legumes:",
    "options": ["Lysine", "Methionine", "Tryptophan", "None of the above"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "The concept of double cross hybrid in maize was proposed by:",
    "options": ["D.F. Jones, 1920", "N.E. Borlaug", "M.S. Swaminathan", "B.P. Pal"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "First variety of rice introduced in India is:",
    "options": ["TN-1 (1965)", "Jaya (1968)", "IR-8", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "First indigenous variety of rice in India is:",
    "options": ["TN-1", "Jaya (1968)", "IR-8", "None"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "The most widely cultivated species of potato is:",
    "options": ["Solanum tuberosum", "Solanum nigrum", "Solanum indicum", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "A gene for resistance in host corresponding to a gene for avirulence in pathogen is:",
    "options": ["Gene for gene theory", "Monogenic resistance", "Polygenic resistance", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "The theory of pangenesis was given by:",
    "options": ["C. Darwin", "J.B. Lamarck", "De Candole", "G.J. Mendel"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "The book 'Systematic and Origin of Species' was written by:",
    "options": ["C. Darwin", "J.B. Lamarck", "De Candole", "Ernst Mayr"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Crossing-over among the homologous chromosomes takes place at:",
    "options": ["Pachytene stage", "Zygotene stage", "Leptotene stage", "Diplotene stage"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "De-Vries first gave the theory of:",
    "options": ["Mutation", "Evolution", "Selection", "Adaptation"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Darwin gave the theory of:",
    "options": ["Mutation", "Evolution or natural selection", "Selection", "Adaptation"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Region of chromosome with which spindle fibres are attached during metaphase is:",
    "options": ["Centromere", "Chromatid", "Telomere", "Nucleolus"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Name of scientist who established chromosome theory of inheritance:",
    "options": ["Sutton and Boveri", "Mendel", "Darwin", "De-Vries"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "DNA is the genetic material in:",
    "options": ["Bacteria", "Plants", "Animals", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "The nitrogenous base not present in RNA:",
    "options": ["Adenine", "Guanine", "Cytosine", "Thymine"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "The genetic material in most plant viruses:",
    "options": ["ss-RNA", "DNA", "Protein", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "The process of protein synthesis takes place at:",
    "options": ["Nucleus", "Ribosomes", "Mitochondria", "Cytoplasm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Mutations are:",
    "options": ["Heritable changes", "Non-heritable changes", "Environmental changes", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "In Mendelian genetics, a 3:1 ratio is observed in:",
    "options": ["Monohybrid cross F2 generation", "Dihybrid cross", "Back cross", "Test cross"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Pure line theory was proposed by:",
    "options": ["Johannsen", "Mendel", "Darwin", "De-Vries"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Mass selection is suitable for:",
    "options": ["Cross-pollinated crops", "Self-pollinated crops", "Both (a) and (b)", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Clonal selection is practiced in:",
    "options": ["Potato", "Sugarcane", "Both (a) and (b)", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Pedigree selection is a method of:",
    "options": ["Breeding", "Entomology", "Pathology", "Agronomy"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Heterosis is:",
    "options": ["Hybrid vigour", "Inbreeding depression", "Mutation", "Polyploidy"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Which of the following is an example of aneuploidy:",
    "options": ["Nullisomy", "Monosomy", "Trisomy", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Polyploidy involves:",
    "options": ["Increase in number of chromosomes", "Decrease in number", "No change", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Which crop is known as man-made cereal:",
    "options": ["Triticale", "Wheat", "Maize", "Barley"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "A test cross is used to:",
    "options": ["Determine genotype", "Determine phenotype", "Induce mutation", "Increase yield"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "The term 'Genetics' was coined by:",
    "options": ["W. Bateson", "Mendel", "Morgan", "Johannsen"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "An organism with two identical alleles for a character is:",
    "options": ["Homozygous", "Heterozygous", "Hybrid", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "The phenotypic ratio of a dihybrid cross in F2 generation is:",
    "options": ["9:3:3:1", "3:1", "1:2:1", "1:1"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Linkage groups in an organism are equal to:",
    "options": ["Haploid chromosome number", "Diploid chromosome number", "1/2 of diploid", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Sex-linked inheritance was first discovered by:",
    "options": ["Morgan", "Mendel", "Sutton", "Bateson"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "The unit of mutation is:",
    "options": ["Muton", "Recon", "Cistron", "Codon"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "The functional unit of inheritance is:",
    "options": ["Gene", "Chromosome", "Nucleus", "Ribosome"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Self-pollinated crops are:",
    "options": ["Wheat, rice, peas", "Maize, bajra, rye", "Sunflower, carrot", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Cross-pollinated crops are:",
    "options": ["Maize, bajra", "Wheat, rice", "Pea, lentil", "Soybean"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Heterosis was coined by:",
    "options": ["Shull", "Mendel", "Darwin", "Morgan"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Inbreeding depression is more common in:",
    "options": ["Cross-pollinated crops", "Self-pollinated crops", "Both", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Which method is best for improving yield in cross-pollinated crops:",
    "options": ["Mass selection", "Pure line selection", "Backcross", "Pedigree"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "A backcross is a cross between:",
    "options": ["F1 hybrid and one of the parents", "F1 and F1", "Two parents", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Which is used to break self-incompatibility:",
    "options": ["Bud pollination", "Heat treatment", "Both", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "The germplasm bank is also known as:",
    "options": ["Gene bank", "Seed bank", "Both", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "In DNA, adenine always pairs with:",
    "options": ["Thymine", "Guanine", "Cytosine", "Uracil"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "The structural unit of DNA is:",
    "options": ["Nucleotide", "Nucleoside", "Amino acid", "Protein"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Which element is present in all proteins but not in fats and carbohydrates:",
    "options": ["Nitrogen", "Carbon", "Oxygen", "Hydrogen"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "In genetic mapping, the unit of distance is:",
    "options": ["Centimorgan (cM)", "Millimeter", "Micron", "Angstrom"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Cytoplasmic inheritance is determined by:",
    "options": ["Mitochondria and chloroplasts", "Nucleus", "Ribosomes", "Golgi bodies"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Apomixis is:",
    "options": ["Sexual reproduction", "Asexual reproduction", "Budding", "Regeneration"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Parthenocarpy is the development of fruit:",
    "options": ["Without fertilization", "With fertilization", "By mutation", "By polyploidy"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "Which of the following is a male sterile line:",
    "options": ["A-line", "B-line", "R-line", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "The maintenance of A-line is done by:",
    "options": ["A-line", "B-line", "R-line", "None"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "The restoration of fertility in male sterile line is done by:",
    "options": ["A-line", "B-line", "R-line", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "The most common type of linkage is:",
    "options": ["Complete linkage", "Incomplete linkage", "No linkage", "None"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "The site of protein synthesis is:",
    "options": ["Nucleus", "Ribosomes", "Cytoplasm", "Lysosome"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "Genetic code consists of:",
    "options": ["64 codons", "20 codons", "16 codons", "32 codons"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "The first step of protein synthesis is:",
    "options": ["Transcription", "Translation", "Activation of amino acids", "Termination"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "Which is the initiation codon:",
    "options": ["AUG", "UAA", "UAG", "UGA"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "Breeding for disease resistance is:",
    "options": ["Important", "Not important", "Very easy", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
    },
    {
      title: "Extension Education",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 120,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "The term 'Extension' was first used in:",
    "options": ["USA", "UK", "India", "Germany"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Father of Extension in the world:",
    "options": ["James Stuart", "Seaman A. Knapp", "M.S. Swaminathan", "B.P. Pal"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Father of Extension in USA:",
    "options": ["Seaman A. Knapp", "James Stuart", "Leagens", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Extension education is a:",
    "options": ["Applied science", "Basic science", "Pure science", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Extension education is:",
    "options": ["Informal education", "Formal education", "Non-formal education", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "The philosophy of extension education is:",
    "options": ["Helping people to help themselves", "Teaching them", "Forcing them", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "'Extension' word is derived from:",
    "options": ["Latin", "Greek", "English", "Arabic"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "The aim of extension education is:",
    "options": ["Change in behaviour", "Increase in yield", "Increase in wealth", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "'Farmer's first' concept was given by:",
    "options": ["Robert Chamber", "M.S. Swaminathan", "Leagens", "Indira Gandhi"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "The three components of extension are:",
    "options": ["Research, Teaching, Extension", "Research, Teaching, Evaluation", "Training, Extension, Research", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Which is the basic unit of extension:",
    "options": ["Individual", "Village", "Block", "District"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Demonstrations are:",
    "options": ["Learning by doing", "Seeing is believing", "Both", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Result demonstration is for:",
    "options": ["Proving a new practice", "Teaching a skill", "Both", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Method demonstration is for:",
    "options": ["Teaching a skill", "Proving a new practice", "Both", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Which is a group contact method:",
    "options": ["Demonstration", "Farm visit", "Telephone call", "Radio"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Which is a mass contact method:",
    "options": ["Radio", "Farm visit", "Meeting", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "The first Krishi Vigyan Kendra (KVK) was established at:",
    "options": ["Pondicherry", "Delhi", "Kanpur", "Ludhiana"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "KVK is also known as:",
    "options": ["Farm Science Centre", "Research Centre", "Training Centre", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "First KVK was established in the year:",
    "options": ["1974", "1980", "1990", "1966"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "The primary function of KVK is:",
    "options": ["Vocational training", "Basic research", "Seed production", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Lab to Land program was started in:",
    "options": ["1979", "1960", "1985", "1990"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "IRDP stands for:",
    "options": ["Integrated Rural Development Programme", "Intensive Rural Development Program", "International Rural Development Program", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "IRDP was launched in:",
    "options": ["1978-79", "1970", "1985", "1995"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "ATMA stands for:",
    "options": ["Agricultural Technology Management Agency", "Agricultural Training Management Agency", "Agricultural Technology Marketing Agency", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Transfer of Technology (TOT) project was launched in:",
    "options": ["1974", "1980", "1965", "1990"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "NAIP stands for:",
    "options": ["National Agricultural Innovation Project", "National Agricultural Intensive Project", "National Agricultural Integration Project", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "The most effective method for rural people:",
    "options": ["Demonstration", "Lecture", "Pamphlet", "Radio"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Evaluation means:",
    "options": ["Measuring success", "Identifying failure", "Both", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Extension approach is:",
    "options": ["Bottom-up", "Top-down", "Linear", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "The process of adoption of innovation goes through:",
    "options": ["Awareness-Interest-Evaluation-Trial-Adoption", "Trial-Adoption-Interest-Evaluation", "Evaluation-Trial-Adoption", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "The communication process involves:",
    "options": ["Communicator-Message-Channel-Receiver", "Message-Receiver-Communicator", "Channel-Message-Communicator", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Noise in communication means:",
    "options": ["Disturbance", "Sound", "Clarity", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Feedback is:",
    "options": ["Essential in communication", "Not necessary", "Secondary", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "The main barrier in communication in rural areas is:",
    "options": ["Language", "Lack of interest", "Lack of resources", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "The purpose of extension is to bring about:",
    "options": ["Desirable changes in human behaviour", "Only production changes", "Only economic changes", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Audio-Visual aids are used to:",
    "options": ["Make learning easier", "Increase cost", "Reduce time", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Radio is a:",
    "options": ["Audio aid", "Visual aid", "Audio-visual aid", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Television is a:",
    "options": ["Audio-visual aid", "Audio aid", "Visual aid", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Posters are:",
    "options": ["Visual aids", "Audio aids", "Audio-visual aids", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Training and Visit (T&V) system was introduced by:",
    "options": ["Daniel Benor", "Leagens", "Knapp", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "T&V system was introduced in India in:",
    "options": ["1974", "1980", "1990", "1966"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Frontline demonstration (FLD) is conducted by:",
    "options": ["KVKs", "ICAR", "State Dept", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "The aim of FLD is to demonstrate:",
    "options": ["New technology", "Old technology", "Both", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "The leader who is chosen by people:",
    "options": ["Formal leader", "Informal leader", "Official", "None"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "The leader appointed by an agency:",
    "options": ["Formal leader", "Informal leader", "Natural leader", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Evaluation of extension program is:",
    "options": ["Continuous", "Periodic", "One time", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "The term 'Andragogy' means:",
    "options": ["Art and science of teaching adults", "Teaching children", "Teaching animals", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "The term 'Pedagogy' means:",
    "options": ["Art of teaching children", "Art of teaching adults", "Both", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Leadership is:",
    "options": ["The ability to influence others", "Commanding people", "Forcing", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Extension education is:",
    "options": ["Out of school education", "In school education", "Both", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Change agent is:",
    "options": ["An extension worker", "A farmer", "A researcher", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "The goal of extension is:",
    "options": ["Improving the quality of life", "Only production", "Only profit", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "The feedback loop improves:",
    "options": ["Communication", "Production", "Selling", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Who is a target audience in extension:",
    "options": ["Farmers", "Researchers", "Traders", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Self-help group (SHG) concept is based on:",
    "options": ["Collective action", "Individual action", "Government action", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "The main objective of extension is:",
    "options": ["Education of farmers", "Providing credit", "Providing inputs", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "Participatory Rural Appraisal (PRA) is:",
    "options": ["A method to understand rural reality", "Research", "Teaching", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "Role of an extension worker:",
    "options": ["Advisor", "Leader", "Facilitator", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "Extension education process is:",
    "options": ["Continuous", "Discrete", "Irregular", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "Extension work in India is the responsibility of:",
    "options": ["State and Central governments", "Farmers only", "NGO only", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
      title: "Entomology ",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7882",
    
        durationSeconds: 7200,
    
        totalMarks: 120,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Most effective insecticide for termite control is:",
    "options": ["Malathion", "Phosphomidon", "Methy demeton", "Chlorpyriphos"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Pheromones are employed for which activities of insects:",
    "options": ["Mass trapping", "Monitoring", "Mating disruption", "All the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Directorate of Plant Protection, Quarantine and Storage is situated at:",
    "options": ["Faridkot", "Faridabad", "Farrukhabad", "New Delhi"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "White grub adults fly from the soil to the tree between:",
    "options": ["6 to 8 a.m", "4 to 6 p.m", "6 to 8 p.m", "8 to 10 p.m"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Crushing and grinding method of control comes under:",
    "options": ["Cultural control", "Mechanical method", "Physical method", "Biological control"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Growing resistant varieties comes under which method of pest control:",
    "options": ["Cultural control", "Mechanical method", "Physical method", "Biological control"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Manipulation of temperature and humidity and use of radiation are which type of management practice:",
    "options": ["Cultural control", "Mechanical method", "Physical method", "Genetic control"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Yellow sticky traps are used to control:",
    "options": ["Mango mealy bug", "Aphids", "Jassids", "Thrips"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "The control measures against an insect pest should be advocated at:",
    "options": ["Economic threshold level (ETL)", "Economic injury level (EIL)", "Above EIL", "Above ETL"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "The utilization of parasitoids, predators, and pathogens for regulation of insect pest population comes under:",
    "options": ["Cultural control", "Mechanical method", "Microbial control", "Biological control"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Oberia brevis is a pest of:",
    "options": ["Maize", "Paddy", "Cotton", "Soybean"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Corcyra cephalonica belongs to order:",
    "options": ["Coleoptera", "Diptera", "Lepidoptera", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Inderbela quadrinotata feeds on:",
    "options": ["Roots", "Flowers", "Fruits", "Bark"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Acherontia styx belongs to the order:",
    "options": ["Hemiptera", "Coleoptera", "Diptera", "Lepidoptera"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "'Dead heart' damage symptom in plants is caused by:",
    "options": ["Borer insects", "Sucking insects", "Chewing insects", "All"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Which stored grain insect pest attacks in the field also:",
    "options": ["Red rust flour beetle", "Rice moth", "Pulse beetle", "Khapra beetle"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Melon fruit fly pupates:",
    "options": ["In fruit", "On stem", "In soil", "On flower"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Maize stem borer hibernates in a stage:",
    "options": ["Larva", "Pupa", "Adult", "Egg"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Which of the following is a social insect:",
    "options": ["Locust", "Grasshopper", "Termite", "White grub"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Locust feed on:",
    "options": ["All plants except Aak/Dhatura", "All except Ber", "All except Bajra", "All plants"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Red hairy caterpillar belongs to family:",
    "options": ["Arctiidae", "Noctuidae", "Pyralidae", "Acrididae"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Trichogramma is an egg parasitoid of:",
    "options": ["Chilo partellus", "Tryporyza incertulus", "Pectinophora gossypiella", "All"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Leucinodes orbonalis is a pest of:",
    "options": ["Tomato", "Brinjal", "Cotton", "Okra"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "NPV infected larvae become flaccid, skin becomes fragile, larvae crawl to top of plants and hang upside down by prolegs:",
    "options": ["NPV", "Bt", "Fungus", "Nematode"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "'Pebrine' disease in Silkworm is caused by:",
    "options": ["NPV", "Beauveria bassiana", "Bt", "Nosema bombycis"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Neem based pesticide is:",
    "options": ["Dipel", "Delfin", "Margocide", "Halt"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Early sowing of mustard is recommended for the management of:",
    "options": ["Aphids", "Whitefly", "Pod borer", "Mustard sawfly"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Agricultural Pests, Disease and Noxious Weeds Act was made in year:",
    "options": ["1918", "1915", "1914", "1916"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Terrestrial arthropods (insects) excrete excess nitrogen as uric acid/salts known as:",
    "options": ["Ammonotelic", "Ureotelic", "Uricotelic", "All"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Chrysoperla carnea is a:",
    "options": ["Parasite", "Parasitoid", "Predator", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Paraglossa is a part of:",
    "options": ["Labrum", "Labium", "Maxilla", "Hypopharynx"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Fossorial type of leg is found in:",
    "options": ["Grasshopper", "Mole cricket", "Preying mantis", "Cockroach"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Geniculate antenna is found in:",
    "options": ["Wasp", "Termite", "Mosquito", "Grasshopper"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Halters are present in:",
    "options": ["House fly", "Honey-bee", "Wasp", "Cockroach"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Tegmina are the modified wings of:",
    "options": ["House fly", "Wasp", "Bug", "Grasshopper"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Elytra is a fore wing of:",
    "options": ["Grasshopper", "Beetles", "Bugs", "Moths"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Cerci are present in:",
    "options": ["Male cockroach", "Female cockroach", "Both", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Gula is a part of:",
    "options": ["Head", "Thorax", "Abdomen", "Wings"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "The external genitalia of male grasshopper are located on:",
    "options": ["7th abdominal segment", "8th", "9th", "10th"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Hymenoptera includes:",
    "options": ["White ants", "Ants", "Antlion", "None"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Parthenogenetic type of reproduction is found in:",
    "options": ["Grasshopper", "Aphid", "Honey-bee", "House fly"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Chewing and lapping types of mouth parts are present in:",
    "options": ["Housefly", "Cockroach", "Honey bee", "Bug"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Trichogramma chilonis is a parasitoid of:",
    "options": ["Egg", "Larva", "Adult", "Pupa"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Which disease is transmitted by housefly:",
    "options": ["Malaria", "Kala azar", "Cholera", "Bubonic plague"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Bubonic plague is transmitted by:",
    "options": ["Housefly", "Rat flea", "Sandfly", "Mosquito"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Exoskeleton of insect is made up of:",
    "options": ["Calcium and protein", "Calcium and chitin", "Chitin and protein", "All"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Saltatorial type of leg is found in:",
    "options": ["Grasshopper", "Mole cricket", "Preying mantis", "Cockroach"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Plumose type of antennae is found in:",
    "options": ["Moth", "Termite", "Mosquito", "Grasshopper"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Coccus viridis is an insect pest of:",
    "options": ["Coconut", "Coffee", "Cashew", "Almond"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Bacillus thuringiensis is generally used for the control of:",
    "options": ["Grasshopper", "Termites", "Tomato fruit borer", "Cotton whitefly"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Which is a systemic insecticide:",
    "options": ["Parathion", "Malathion", "Chloropyriphos", "Dimethoate"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "Light trap is used for the control of:",
    "options": ["Jassid", "Mustard sawfly", "Thrips", "Red hairy caterpillar"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "Pest of sorghum belonging to order Diptera is:",
    "options": ["Chilo partellus", "Rhopalosiphum maidis", "Atherigona soccata", "Bagrada cruciferarum"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Grassy stunt virus disease of paddy is transmitted by:",
    "options": ["Nilaparvata lugens", "Thrips tabaci", "Tryporyza incertulus", "Bemisia tabaci"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Plume moth belongs to family:",
    "options": ["Arctiidae", "Pyralidae", "Noctuidae", "Pterophoridae"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "Name of egg parasitoid which is commercially produced and sold in India:",
    "options": ["Telenomus sp.", "Trichogramma sp.", "Platytenomus sp", "None"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "Chemicals used to kill mites are called:",
    "options": ["Insecticide", "Nematicide", "Rodenticide", "Acaricide"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "Bt genes of cotton are effective against:",
    "options": ["Orthopteran insects", "Hemipteran insects", "Lepidopteran insects", "Sucking insects"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "Which is the most diverse insect order:",
    "options": ["Lepidoptera", "Hymenoptera", "Coleoptera", "Diptera"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "Insect belonging to endopterygota has which type of metamorphosis:",
    "options": ["Complete metamorphosis", "Indirect", "Holometabolous", "All"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  }
      ]
    }
]

// kharif 
const testPapersKharif = [
    {
        title: "New varieties and production techniques. (2026)",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 1800,
    
        totalMarks: 30,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,
        
        questions : [
            {
                "id": 1,
                "question": "What is the average paddy yield of the PR 133 rice variety?",
                "options": ["24.7 quintals per acre", "30.5 quintals per acre", "10.9 quintals per acre", "55 quintals per acre"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 2,
                "question": "What is the recommended practice to improve productivity of cotton seeds before sowing?",
                "options": ["Heat treatment for 30 minutes", "Spraying urea directly on seeds", "Soaking in Bacillus thaonhiensis solution for 2 hours", "Mixing with wheat straw"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 3,
                "question": "When should Sunnhemp be incorporated as green manure in cotton crops?",
                "options": ["At the time of sowing", "Before the 1st irrigation", "After the 1st irrigation (at 35-40 days after sowing)", "At the time of harvesting"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 4,
                "question": "Which insecticide is recommended for the management of thrips in cotton?",
                "options": ["Simodis 10 DC", "Ferterra 0.4 GR", "Markgen 18.5 SC", "Amistar Top 325 SC"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 5,
                "question": "How should rodent damage be reduced in a rice nursery?",
                "options": ["By spraying chemical rodenticides", "By fencing the area with wire", "By making a 1.5 m wide water channel around the nursery", "By burning the field bunds"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 6,
                "question": "What is the recommended nitrogen application for Bt cotton hybrids?",
                "options": ["120 kg urea (55 kg N) per acre", "100 kg urea (40 kg N) per acre", "55 kg urea (20 kg N) per acre", "240 kg urea (110 kg N) per acre"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 7,
                "question": "Which cropping system is recommended for higher productivity and profitability in maize?",
                "options": ["Maize-Wheat-Rice", "Maize-Gobhi sarson+Toria-Mentha", "Maize-Soybean-Wheat", "Rice-Wheat-Summer Moong"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 8,
                "question": "What is the treatment recommended for sugarcane setts to control red rot and smut?",
                "options": ["Ferterra 0.4 GR", "Markgen 18.5 SC", "0.1% solution of Amistar Top 325 SC", "Imazethapyr 10 SL"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 9,
                "question": "What is the maturity period for the NK 7328 maize hybrid?",
                "options": ["109 days", "111 days", "99 days", "35 days"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 10,
                "question": "Which herbicide is used to control weeds in Moong and Mash crops?",
                "options": ["Isocycloseram", "Imazethapyr 10 SL", "Chlorantraniliprole", "Bacillus thaonhiensis"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 11,
                "question": "What is the name of new maize hybrid?",
                "options": ["NK 7328", "PBH 2435", "NK 7282", "NK8278"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 12,
                "question": "Name the new variety released by PAU of desi cotton and it is tolerant to?",
                "options": ["PBD 88 (shattering tolerant)", "PDB 88 (shattering tolerant)", "PBD89 (saline tolerant)", "None of these"],
                "correctAnswer": 0,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 13,
                "question": "Rice dwarfing disease is caused by?",
                "options": ["Nilaparavata lugens", "Black hopper", "Southern rice black streaked virus", "Black streak virus"],
                "correctAnswer": 2,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 14,
                "question": "PR 133 is which duration variety?",
                "options": ["long duration variety", "short duration variety", "Medium duration variety", "short-medium both"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            },
            {
                "id": 15,
                "question": "In cotton field the incorporation of which crop straw is used?",
                "options": ["Rice", "Wheat", "Both", "None of these"],
                "correctAnswer": 1,
                "marks": 2,
                "negativeMarks": 0.25
            }
            ]
    },
    {
        title: "Rice Part-01",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 5400,
    
        totalMarks: 80,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,
        
        questions : [
  {
    "id": 1,
    "question": "What was the area under rice cultivation in Punjab during 2024-25?",
    "options": ["28.43 lakh ha", "30.43 lakh ha", "32.43 lakh ha", "34.43 lakh ha"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "The average yield of paddy in Punjab during 2024-25 was:",
    "options": ["60.70 q/ha", "63.70 q/ha", "66.70 q/ha", "69.70 q/ha"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Which rice varieties should be avoided because they require 15–20% more water and at least two extra pesticide sprays?",
    "options": ["PR 126, PR 131, PR 132", "Pusa 44, Peeli Pusa, Dogar Pusa", "PR 114, PR 121, PR 122", "PR 123, PR 124, PR 125"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "What is the recommended nursery sowing period for rice in Punjab?",
    "options": ["1 May – 31 May", "10 May – 10 June", "20 May – 20 June", "1 June – 30 June"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "The recommended transplanting period for rice is:",
    "options": ["1 June – 20 June", "10 June – 30 June", "20 June – 10 July", "1 July – 20 July"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "For obtaining higher yield and better grain quality from PR 126, the nursery should be:",
    "options": ["15–20 days old", "20–25 days old", "25–30 days old", "35–40 days old"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Direct seeding of rice in tar-wattar field should be started from:",
    "options": ["15 May", "25 May", "1 June", "15 June"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "To obtain higher yield in PR 132, nitrogenous fertilizer should be applied:",
    "options": ["10% more than other varieties", "25% more than other varieties", "25% less than other varieties", "50% less than other varieties"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Use of synthetic pyrethroids in rice should be avoided because they increase the population of:",
    "options": ["Stem borers", "Leaf folders", "Rice planthoppers", "Gall midge"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Rice grows well in soils having a pH range of:",
    "options": ["4–6", "5–9", "6–10", "7–11"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Compared to PR varieties, Pusa 44 requires:",
    "options": ["Less water", "Equal water", "15–20% more water", "30% more water"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "How much heavy rice seed is sufficient to raise nursery for transplanting one acre?",
    "options": ["5 kg", "6 kg", "8 kg", "10 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "The purpose of dipping rice seed in water before sowing is to:",
    "options": ["Break dormancy", "Separate heavy and immature seeds", "Increase germination temperature", "Control weeds"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "In water flotation method, immature rice seeds:",
    "options": ["Settle at the bottom", "Float on the surface", "Germinate immediately", "Turn yellow"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Sprint 75 WS contains:",
    "options": ["Carbendazim + Mancozeb", "Captan + Thiram", "Carbendazim + Metalaxyl", "Mancozeb + Copper oxychloride"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Recommended dose of Sprint 75 WS for seed treatment is:",
    "options": ["1 g/kg seed", "2 g/kg seed", "3 g/kg seed", "5 g/kg seed"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "For treating 8 kg rice seed, the quantity of fungicide required is:",
    "options": ["16 g", "20 g", "24 g", "32 g"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Well-rotted FYM or compost recommended during nursery preparation is:",
    "options": ["5–8 t/acre", "8–10 t/acre", "12–15 t/acre", "18–20 t/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Rice seeds sprout in approximately:",
    "options": ["12–18 hours", "24–36 hours", "48–60 hours", "72 hours"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Basal dose of urea recommended in rice nursery is:",
    "options": ["13 kg/acre", "20 kg/acre", "26 kg/acre", "40 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Recommended dose of SSP in rice nursery is:",
    "options": ["30 kg/acre", "40 kg/acre", "50 kg/acre", "60 kg/acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Zinc sulphate heptahydrate (21% Zn) recommended at sowing is:",
    "options": ["20 kg/acre", "30 kg/acre", "40 kg/acre", "50 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Nursery area required for transplanting one acre of rice is:",
    "options": ["80 m²", "120 m²", "160 m²", "200 m²"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "160 square metres is approximately equal to:",
    "options": ["4 marlas", "5 marlas", "6.5 marlas", "8 marlas"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "To prevent bird damage after broadcasting rice seed, farmers should:",
    "options": ["Spray insecticide", "Cover with sand", "Broadcast thin layer of decomposed FYM", "Flood the field immediately"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Second dose of urea in nursery is applied:",
    "options": ["7 days after sowing", "About 15 days after sowing", "30 days after sowing", "45 days after sowing"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Rice seedlings are generally ready for transplanting when they are:",
    "options": ["10–15 cm tall", "15–20 cm tall", "20–25 cm tall with 6–7 leaves", "30–35 cm tall"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Recommended width of nursery beds in medium to heavy soils is:",
    "options": ["0.5 m", "0.75 m", "1.0 m", "1.5 m"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Yellowing of new leaves in rice nursery indicates deficiency of:",
    "options": ["Nitrogen", "Zinc", "Iron", "Sulphur"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Ferrous sulphate spray recommended for iron deficiency is:",
    "options": ["0.2–0.5%", "0.5–1.0%", "1.5–2.0%", "2.0–3.0%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Rusty brown leaves after yellowing indicate deficiency of:",
    "options": ["Iron", "Nitrogen", "Zinc", "Potassium"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Recommended dose of Butachlor 50 EC in rice nursery is:",
    "options": ["600 mL/acre", "800 mL/acre", "1000 mL/acre", "1200 mL/acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Butachlor 50 EC should be applied:",
    "options": ["At sowing", "3 DAS", "7 DAS", "20 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Sofit 37.5 EC contains:",
    "options": ["Butachlor + Safener", "Pretilachlor + Safener", "Pendimethalin + Safener", "Pyrazosulfuron + Safener"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Nominee Gold/Taarak/Wash Out/Macho 10 SC contains:",
    "options": ["Pretilachlor", "Butachlor", "Bispyribac-sodium", "Pendimethalin"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Bispyribac is sprayed in rice nursery at:",
    "options": ["5–10 DAS", "10–15 DAS", "15–20 DAS", "25–30 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "For mat-type nursery, seed requirement per acre is approximately:",
    "options": ["6–8 kg", "8–10 kg", "10–12 kg", "14–16 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Polythene sheet width recommended for mat-type nursery is:",
    "options": ["60 cm", "75 cm", "90 cm", "120 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Seedling mats for mechanical transplanting become ready in:",
    "options": ["15–20 days", "20–25 days", "25–30 days", "35–40 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Fertilizer spray for 150 mats consists of:",
    "options": ["100 g urea in 10 L water", "200 g urea in 15 L water", "500 g urea in 20 L water", "1 kg urea in 25 L water"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Rice Part-02",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 5400,
    
        totalMarks: 80,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,
        
        questions : [
  {
    "id": 1,
    "question": "The tractor-operated seeder for mat nursery lays a polythene sheet of:",
    "options": ["0.5 m width", "0.75 m width", "1.0 m width", "1.5 m width"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Recommended dose of farmyard manure before rice transplanting is:",
    "options": ["4 t/acre", "5 t/acre", "6 t/acre", "8 t/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Recommended quantity of poultry manure per acre is:",
    "options": ["1.5 t", "2.0 t", "2.5 t", "3.0 t"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Recommended dose of prali char for rice is:",
    "options": ["1.0 t/acre", "1.5 t/acre", "2.0 t/acre", "3.0 t/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Dhaincha seed rate for green manuring is:",
    "options": ["10 kg/acre", "15 kg/acre", "20 kg/acre", "25 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Recommended seed rate of cowpea for green manuring is:",
    "options": ["8 kg/acre", "10 kg/acre", "12 kg/acre", "20 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Before sowing, dhaincha seed should be soaked in water for:",
    "options": ["4 hours", "6 hours", "8 hours", "12 hours"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Green manure crops should be incorporated at the age of:",
    "options": ["3–4 weeks", "4–5 weeks", "6–8 weeks", "10–12 weeks"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Dhaincha is especially preferred in:",
    "options": ["Sandy soils", "Acid soils", "Kallar and recently reclaimed soils", "Waterlogged soils only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Green manuring with dhaincha saves approximately:",
    "options": ["15 kg N/acre", "20 kg N/acre", "25 kg N/acre", "30 kg N/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Saving of 25 kg nitrogen through green manuring is equivalent to about:",
    "options": ["40 kg urea", "45 kg urea", "55 kg urea", "65 kg urea"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Incorporation of moong crop residues before transplanting allows reduction of fertilizer N by:",
    "options": ["One-fourth", "One-third", "One-half", "Two-thirds"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Green manuring with dhaincha helps in ameliorating deficiency of:",
    "options": ["Zinc", "Sulphur", "Iron", "Boron"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Continuous incorporation/retention of rice straw improves:",
    "options": ["Soil health and rice yield", "Only soil pH", "Weed infestation", "Insect population"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "After about 8 years of continuous straw incorporation, urea can be reduced by:",
    "options": ["10 kg/acre", "15 kg/acre", "20 kg/acre", "25 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Recommended period for transplanting rice in Punjab is:",
    "options": ["1–20 June", "10–30 June", "20 June–10 July", "1–15 July"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "For late transplanting conditions, which rice variety is preferred?",
    "options": ["PR 131", "PR 132", "PR 126", "PR 114"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "PR 126 should not be transplanted beyond:",
    "options": ["5 July", "10 July", "15 July", "20 July"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Age of seedlings recommended for medium-duration rice varieties is:",
    "options": ["20–25 days", "25–30 days", "30–35 days", "40–45 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Recommended seedling age for PR 126 is:",
    "options": ["20–25 days", "25–30 days", "30–35 days", "35–40 days"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Rice nursery seedlings should be dipped in Azospirillum solution for:",
    "options": ["15 minutes", "30 minutes", "45 minutes", "60 minutes"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Application of 6 tonnes of pressmud per acre can save approximately:",
    "options": ["16 kg N (35 kg urea)", "20 kg N (44 kg urea)", "25 kg N (55 kg urea)", "30 kg N (66 kg urea)"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Which organic manure provides the highest nitrogen saving per acre?",
    "options": ["Farmyard manure", "Gobar gas slurry", "Prali char", "Pressmud and Poultry manure"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Application of 2.5 tonnes poultry manure per acre saves:",
    "options": ["16 kg N (35 kg urea)", "20 kg N (44 kg urea)", "25 kg N (55 kg urea)", "30 kg N (66 kg urea)"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Which of the following saves 16 kg nitrogen (equivalent to 35 kg urea) per acre?",
    "options": ["Farmyard manure (6 t/acre)", "Gobar gas slurry (2.4 t/acre)", "Prali char (2.0 t/acre)", "All of the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Incorporation of summer moong crop residue can save approximately:",
    "options": ["10 kg N (22 kg urea)", "16 kg N (35 kg urea)", "20 kg N (44 kg urea)", "25 kg N (55 kg urea)"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Green manuring in rice is equivalent to a fertilizer saving of:",
    "options": ["16 kg N (35 kg urea)", "20 kg N (44 kg urea)", "25 kg N (55 kg urea)", "30 kg N (66 kg urea)"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Application of prali char @ 2.0 t/acre increases rice yield by approximately:",
    "options": ["5%", "8%", "10%", "15%"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Besides saving nitrogen, prali char application in rice mainly helps in:",
    "options": ["Reducing seed rate", "Increasing crop yield", "Controlling weeds", "Reducing irrigation requirement"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "In coarse-textured soils, organic manures or green manure should be applied:",
    "options": ["In place of recommended nitrogen dose", "At half the recommended nitrogen dose", "In addition to the recommended nitrogen dose", "Only when phosphorus is omitted"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Application of FYM/Pressmud/Poultry manure/Green manure in coarse-textured soils helps in:",
    "options": ["Increasing lodging only", "Reducing tillering", "Obtaining higher yield and ameliorating micronutrient deficiencies", "Delaying crop maturity"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "The recommended concentration of potassium nitrate spray for reducing sterility in paddy is:",
    "options": ["0.5%", "1.0%", "1.5%", "2.0%"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "For preparing a 1.5% potassium nitrate spray solution, how much potassium nitrate is required per acre?",
    "options": ["1 kg", "2 kg", "3 kg", "4 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "The recommended quantity of water for spraying 3 kg potassium nitrate per acre is:",
    "options": ["100 litres", "150 litres", "200 litres", "250 litres"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Phosphorus application to rice can be skipped if:",
    "options": ["FYM was applied", "Zinc was applied", "Recommended phosphorus was applied to preceding wheat crop", "Rice follows maize"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Phosphorus and potassium fertilizers should be applied only when:",
    "options": ["Crop shows deficiency symptoms", "Soil test shows deficiency", "Farmer has fertilizer available", "Nitrogen is not applied"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Whole phosphorus and potassium fertilizers should preferably be applied:",
    "options": ["At flowering", "At tillering", "Before puddling", "At maturity"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Phosphorus can be top dressed up to:",
    "options": ["7 DAT", "14 DAT", "21 DAT", "30 DAT"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "If 27 kg DAP is used in deficient soil, urea dose should be reduced by:",
    "options": ["5 kg", "10 kg", "15 kg", "20 kg"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Nitrogen fertilizer is recommended to be applied in how many equal splits?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Rice Part-03",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 5400,
    
        totalMarks: 80,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,
        
        questions : [
  {
    "id": 1,
    "question": "The first split of nitrogen should be applied:",
    "options": ["Before transplanting", "Up to 7 days after transplanting", "21 DAT", "35 DAT"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "The second split of nitrogen should be applied at:",
    "options": ["14 DAT", "21 DAT", "28 DAT", "35 DAT"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "For PR 126, the third split of nitrogen should be applied at:",
    "options": ["28 DAT", "35 DAT", "42 DAT", "49 DAT"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "For rice varieties other than PR 126, the third nitrogen split should be applied at:",
    "options": ["35 DAT", "38 DAT", "42 DAT", "45 DAT"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "If fish pond sediments @ 6 t/acre are applied, fertilizer recommendation should be reduced by:",
    "options": ["10%", "15%", "20%", "25%"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Basal dose of urea recommended under PAU Leaf Colour Chart (LCC) system is:",
    "options": ["20 kg/acre", "25 kg/acre", "30 kg/acre", "35 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Matching of leaf colour with LCC should start:",
    "options": ["7 DAT", "10 DAT", "14 DAT", "21 DAT"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Under LCC, leaf colour should be checked at intervals of:",
    "options": ["3 days", "5 days", "7 days", "10 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Urea should be applied when:",
    "options": ["4 out of 10 leaves are lighter than shade 4", "5 out of 10 leaves are lighter than shade 4", "6 or more out of 10 leaves are lighter than shade 4", "All leaves are darker than shade 4"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Quantity of urea applied under LCC recommendation is:",
    "options": ["15 kg/acre", "20 kg/acre", "25 kg/acre", "30 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "No urea should be applied if leaf colour is:",
    "options": ["Lighter than shade 3", "Equal to or darker than shade 4", "Equal to shade 2", "Darker than shade 2"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Use of LCC should be discontinued after:",
    "options": ["Tillering", "Panicle initiation", "Flower initiation", "Initiation of flowering"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Excessive use of nitrogen during flowering causes:",
    "options": ["Lodging only", "Delayed maturity only", "Sterility and yield reduction", "Zinc deficiency"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Zinc deficiency symptoms in rice generally appear:",
    "options": ["Immediately after transplanting", "1 week after transplanting", "2–3 weeks after transplanting", "At maturity"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Lower leaves become rusty brown and dry up in case of:",
    "options": ["Iron deficiency", "Nitrogen deficiency", "Zinc deficiency", "Sulphur deficiency"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Recommended dose of zinc sulphate heptahydrate for correcting zinc deficiency is:",
    "options": ["10 kg/acre", "15 kg/acre", "20 kg/acre", "25 kg/acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Recommended dose of zinc sulphate monohydrate for zinc-deficient rice is:",
    "options": ["10 kg/acre", "12 kg/acre", "16 kg/acre", "20 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Iron deficiency symptoms generally appear in the:",
    "options": ["Oldest leaves", "Middle leaves", "Youngest leaves", "Flag leaf only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Iron chlorosis in rice generally appears about:",
    "options": ["1 week after transplanting", "2 weeks after transplanting", "3 weeks after transplanting", "5 weeks after transplanting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "To correct iron deficiency, spray:",
    "options": ["1% zinc sulphate", "1% ferrous sulphate", "2% urea", "1% SSP solution"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Standing water should be maintained continuously after transplanting for:",
    "options": ["1 week", "10 days", "2 weeks", "1 month"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "After establishment of seedlings, irrigation should be applied:",
    "options": ["Daily", "Every alternate day", "Two days after ponded water infiltrates into soil", "Weekly"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Maximum recommended depth of standing water in rice field is:",
    "options": ["5 cm", "8 cm", "10 cm", "15 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Irrigation should be stopped approximately before maturity:",
    "options": ["7 days", "10 days", "15 days (a fortnight)", "30 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Optimum moisture content of paddy for safe storage is:",
    "options": ["10%", "12%", "14%", "17%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Approximately how much paddy straw is produced annually in Punjab?",
    "options": ["120 lakh tonnes", "180 lakh tonnes", "220 lakh tonnes", "250 lakh tonnes"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Burning one tonne of paddy straw causes a loss of approximately how much organic carbon?",
    "options": ["200 kg", "300 kg", "400 kg", "500 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Which nutrient is lost completely during the burning of paddy straw?",
    "options": ["Phosphorus and Potassium", "Nitrogen and Sulphur", "Potassium and Sulphur", "Nitrogen and Phosphorus"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Which of the following poisonous gases is produced during paddy straw burning?",
    "options": ["Carbon monoxide", "Methane", "Nitric oxide", "All of the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Which of the following correctly represents the nutrient loss caused by burning one tonne of paddy straw?",
    "options": [
      "400 kg organic carbon, 5.5 kg N, 2.3 kg P, 25 kg K, 1.2 kg S",
      "300 kg organic carbon, 5.5 kg N, 3.2 kg P, 20 kg K, 1.2 kg S",
      "400 kg organic carbon, 4.5 kg N, 2.3 kg P, 20 kg K, 1.0 kg S",
      "500 kg organic carbon, 5.5 kg N, 2.3 kg P, 25 kg K, 2.0 kg S"
    ],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "What is the main advantage of growing short-duration rice varieties in Punjab?",
    "options": ["Higher seed rate requirement", "Increased window period for straw management", "Increased water requirement", "Delayed sowing of wheat"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "On average, Prali Char contains which of the following nutrient composition?",
    "options": [
      "30–36% Carbon, 0.5–0.6% N, 0.16–0.22% P, 1.6–2.2% K",
      "20–25% Carbon, 1.0–1.5% N, 0.5–0.8% P, 2.5–3.0% K",
      "40–45% Carbon, 0.2–0.3% N, 0.1–0.15% P, 1.0–1.5% K",
      "25–30% Carbon, 0.8–1.0% N, 0.3–0.5% P, 2.0–2.5% K"
    ],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Rice stem borer damage in young plants appears as:",
    "options": ["Hopper burn", "Dead hearts", "White streaks", "Gall formation"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Rice stem borer damage in older plants results in:",
    "options": ["Brown spots", "Root galls", "White earheads (whiteheads)", "Leaf rolling"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "The Economic Threshold Level (ETL) for rice stem borer is:",
    "options": ["2% dead hearts", "5% dead hearts", "10% dead hearts", "15% dead hearts"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Leaf folder larvae cause damage by:",
    "options": ["Sucking sap from roots", "Folding leaves and feeding on green tissue", "Cutting panicles", "Boring into stems"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "The Economic Threshold Level (ETL) for leaf folder is:",
    "options": ["5% leaf damage", "10% leaf damage", "15% leaf damage", "20% leaf damage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Mechanical control of leaf folder is done using:",
    "options": ["Rope pulling across the crop canopy", "Light trap", "Sticky trap", "Bird perches"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Planthoppers mainly feed on:",
    "options": ["Panicles", "Leaf sheath at the base of plants", "Roots", "Grains"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "ETL for planthoppers in rice is:",
    "options": ["2 hoppers per hill", "3 hoppers per hill", "Minimum 5 planthoppers per hill", "10 planthoppers per hill"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Rice Part-04",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 3600,
    
        totalMarks: 54,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,
        
        questions : [
  {
    "id": 1,
    "question": "Hopper burn in rice is caused by:",
    "options": ["Stem borer", "Leaf folder", "Planthoppers", "Rice hispa"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "For better control of planthoppers, spray should be directed towards:",
    "options": ["Panicles", "Leaf tips", "Base of plants", "Roots only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Rice hispa grubs damage rice by:",
    "options": ["Feeding on roots", "Tunneling into leaves", "Cutting earheads", "Sucking sap"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Rice hispa is particularly serious in which Punjab districts?",
    "options": ["Ludhiana and Patiala", "Bathinda and Mansa", "Gurdaspur and Amritsar", "Ferozepur and Fazilka"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Rice root weevil is a localized pest mainly reported around:",
    "options": ["Ludhiana", "Rajpura", "Bathinda", "Jalandhar"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Rice ear-cutting caterpillar is commonly known as:",
    "options": ["Cutworm", "Armyworm", "Gall midge", "Rice bug"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Rice dwarfing disease is caused by:",
    "options": ["Fungus", "Bacterium", "Southern rice black-streaked dwarf virus (SRBSDV)", "Nematode"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Rice dwarfing virus is transmitted by:",
    "options": ["Brown planthopper", "Whitebacked planthopper", "Green leafhopper", "Aphid"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "In severe rice dwarfing disease, plant height may reduce to:",
    "options": ["90% of normal", "75% of normal", "One-third to two-thirds of normal height", "No reduction"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Which disease produces greyish-green lesions with purple margins on leaf sheath?",
    "options": ["Blast", "False smut", "Sheath blight", "Brown spot"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Excessive use of nitrogen fertilizer favors the development of:",
    "options": ["Sheath blight", "Blast", "False smut", "All of the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Sheath blight is caused by:",
    "options": ["Rhizoctonia solani", "Ustilaginoidea virens", "Drechslera oryzae", "Fusarium moniliforme"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "False smut disease transforms individual grains into:",
    "options": ["Black powder masses", "Yellowish-green velvety spore balls", "White streaks", "Brown lesions"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "False smut is caused by:",
    "options": ["Rhizoctonia solani", "Pyricularia grisea", "Ustilaginoidea virens", "Sclerotium oryzae"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Recommended stage for fungicide application against false smut is:",
    "options": ["Tillering stage", "Boot stage", "Flowering stage", "Dough stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Brown leaf spot disease is caused by:",
    "options": ["Drechslera oryzae", "Rhizoctonia solani", "Xanthomonas oryzae", "Ustilaginoidea virens"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Blast disease of rice is caused by:",
    "options": ["Fusarium moniliforme", "Pyricularia grisea", "Rhizoctonia solani", "Xanthomonas oryzae"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Blast disease is particularly severe in:",
    "options": ["Hybrid rice", "Coarse rice varieties", "Basmati cultivars", "Direct-seeded rice only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Neck rot symptom is associated with:",
    "options": ["False smut", "Blast disease", "Brown spot", "Sheath rot"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Sheath rot disease is caused by:",
    "options": ["Fusarium moniliforme", "Rhizoctonia solani", "Drechslera oryzae", "Ustilaginoidea virens"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Stem rot disease of rice is caused by:",
    "options": ["Sclerotium oryzae", "Fusarium moniliforme", "Xanthomonas oryzae", "Pyricularia grisea"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Bacterial blight of rice is caused by:",
    "options": ["Xanthomonas oryzae pv. oryzicola", "Xanthomonas oryzae pv. oryzae", "Pseudomonas syringae", "Erwinia spp."],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Which rice varieties are resistant to most pathotypes of bacterial blight?",
    "options": [
      "Pusa 44 and Peeli Pusa",
      "PR 133, PR 132, PR 131, PR 130, PR 129, PR 128, PR 127, PR 126, PR 122, PR 121 and PR 113",
      "Only Basmati varieties",
      "All rice varieties"
    ],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Root-knot nematode of rice is caused by:",
    "options": ["Heterodera avenae", "Meloidogyne graminicola", "Rotylenchulus reniformis", "Aphelenchoides besseyi"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "For management of root-knot nematode in rice nursery, mustard cake is applied @:",
    "options": ["20 g/m²", "30 g/m²", "40 g/m²", "50 g/m²"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Waiting period between mustard cake application and nursery sowing should be:",
    "options": ["5 days", "7 days", "10 days", "15 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "What is the chromosome number of rice?",
    "options": ["24", "22", "20", "26"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
    },
    {
        title: "Basmatice Rice",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 5400,
    
        totalMarks: 90,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,
        
        questions : [
  {
    "id": 1,
    "question": "Which rice variety should NOT be grown under alkali soil conditions?",
    "options": ["PR 126", "PR 131", "PR 127", "PR 121"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Which of the following Basmati rice varieties is resistant to bacterial blight?",
    "options": ["Pusa Basmati 1121", "Punjab Basmati 7", "PR 126", "Pusa 44"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Which combination of varieties is resistant to bacterial blight?",
    "options": ["Pusa Basmati 1121 and PR 126", "Punjab Basmati 7 and Pusa Basmati 1847", "PR 121 and PR 122", "Pusa 44 and Pusa 1509"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Pusa Basmati 1718 is known for resistance against:",
    "options": ["Neck blast", "Foot rot", "Bacterial blight", "Brown spot"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Which Basmati variety is moderately resistant to neck blast?",
    "options": ["Punjab Basmati 7", "Pusa Basmati 1718", "Pusa Basmati 1847", "Pusa Basmati 1509"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Pusa Basmati 1847 possesses:",
    "options": [
      "Resistance to bacterial blight and moderate resistance to neck blast",
      "Resistance to foot rot only",
      "Resistance to brown spot only",
      "Resistance to stem rot only"
    ],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Nitrogenous fertilizer should not be applied to Basmati rice when:",
    "options": ["It is direct seeded", "Zinc is applied", "Green manuring has been done", "FYM is applied"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "In Basmati rice, application of nitrogen after green manuring is:",
    "options": ["Recommended", "Partially recommended", "Not recommended", "Essential"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "For the control of foot rot in rice, which practice is recommended?",
    "options": ["Foliar spray of urea", "Seed and seedling treatment", "Deep sowing", "Extra nitrogen application"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Which disease can be managed by treating both seed and seedlings?",
    "options": ["Bacterial blight", "Neck blast", "Foot rot", "Brown spot"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Identify the incorrect statement.",
    "options": [
      "Punjab Basmati 7 is resistant to bacterial blight.",
      "Pusa Basmati 1847 is moderately resistant to neck blast.",
      "Nitrogen fertilizer is recommended after green manuring in Basmati rice.",
      "Foot rot can be controlled through seed and seedling treatment."
    ],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Which of the following varieties is NOT mentioned as resistant to bacterial blight?",
    "options": ["Punjab Basmati 7", "Pusa Basmati 1847", "Pusa Basmati 1718", "Pusa Basmati 1121"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Moderate resistance to neck blast has been reported in:",
    "options": ["Punjab Basmati 7", "Pusa Basmati 1847", "Pusa Basmati 1718", "PR 126"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Foot rot is considered a major disease of:",
    "options": ["Wheat", "Maize", "Basmati rice", "Cotton"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "For effective control of foot rot in Basmati rice, which practice is mandatory?",
    "options": ["Deep ploughing", "Seed and seedling treatment", "Higher seed rate", "Foliar spray of urea"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Trichoderma asperellum 2% WP (PAU strain) is applied on seed at the rate of:",
    "options": ["5 g/kg seed", "10 g/kg seed", "15 g/kg seed", "20 g/kg seed"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Seedling roots should be dipped in Trichoderma asperellum suspension for:",
    "options": ["2 hours", "4 hours", "6 hours", "12 hours"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "What is the recommended concentration of Trichoderma asperellum 2% WP for seedling root dip?",
    "options": ["5 g/L water", "10 g/L water", "15 g/L water", "20 g/L water"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Sprint 75 WS contains:",
    "options": ["Carbendazim + Mancozeb", "Thiram + Captan", "Carbofuran + Mancozeb", "Metalaxyl + Captan"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Sprint 75 WS is used mainly for managing:",
    "options": ["Insect pests", "Seed-borne diseases of rice", "Weeds", "Nematodes"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "For treating 1 kg seed with Sprint 75 WS, slurry should be prepared using:",
    "options": ["1 g fungicide in 5 mL water", "2 g fungicide in 10 mL water", "3 g fungicide in 10 mL water", "5 g fungicide in 20 mL water"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "The most crucial factor determining yield and quality of Basmati rice is:",
    "options": ["Seed rate", "Nitrogen application", "Time of transplanting", "Water depth"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Nursery sowing of Punjab Basmati 7, Punjab Basmati 5, Pusa Basmati 1847, 1121 and 1718 should be done in:",
    "options": ["First fortnight of May", "Second fortnight of May", "First fortnight of June", "First fortnight of July"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Transplanting of Punjab Basmati 7, Punjab Basmati 5, Pusa Basmati 1847, 1121 and 1718 is recommended during:",
    "options": ["First fortnight of June", "First fortnight of July", "Second fortnight of July", "First fortnight of August"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Nursery sowing of CSR 30 and Pusa Basmati 1509 should be done during:",
    "options": ["First fortnight of June", "Second fortnight of June", "First fortnight of July", "Second fortnight of July"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "CSR 30 and Pusa Basmati 1509 should be transplanted during:",
    "options": ["First fortnight of July", "Second fortnight of June", "Second fortnight of July", "First fortnight of August"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Basmati seedlings are ready for transplanting at:",
    "options": ["2–3 leaf stage", "3–4 leaf stage", "5–6 leaf stage", "7–8 leaf stage"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Ideal age of Basmati seedlings for transplanting is:",
    "options": ["15–20 days", "20–25 days", "25–30 days", "35–40 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Longer stay of Basmati seedlings in the nursery results in:",
    "options": ["Increased tillering", "Increased grain quality", "Node formation and reduced tillering", "Early maturity"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "About ______ day old seedlings of Pusa Basmati 1509 should be transplanted for better tillering.",
    "options": ["15", "20", "25", "35"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "The recommended number of seedlings per hill in Basmati rice transplanting is:",
    "options": ["1", "2", "3", "4"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Recommended spacing for transplanting Basmati rice during optimum period is:",
    "options": ["15 × 10 cm", "20 × 10 cm", "20 × 15 cm", "25 × 20 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Spacing of 20 × 15 cm provides approximately:",
    "options": ["22 hills/m²", "33 hills/m²", "44 hills/m²", "55 hills/m²"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "In late transplanted Basmati rice, recommended spacing is:",
    "options": ["20 × 15 cm", "25 × 15 cm", "15 × 15 cm", "10 × 10 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "The hill population at 15 × 15 cm spacing is approximately:",
    "options": ["22 hills/m²", "33 hills/m²", "44 hills/m²", "55 hills/m²"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "The purpose of reducing spacing in late transplanted Basmati rice is to:",
    "options": ["Increase plant height", "Increase grain size", "Minimize reduction in yield", "Reduce fertilizer requirement"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "What is the recommended dose of urea for CSR 30 Basmati rice?",
    "options": ["9 kg/acre", "18 kg/acre", "36 kg/acre", "54 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Which group of Basmati varieties requires 36 kg urea per acre?",
    "options": [
      "CSR 30 and Pusa Basmati 1509",
      "Pusa Basmati 1847 and 1509",
      "Punjab Basmati 7 & 5 and Pusa Basmati 1121 & 1718",
      "All Basmati varieties"
    ],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "The recommended dose of urea for Pusa Basmati 1847 and Pusa Basmati 1509 is:",
    "options": ["18 kg/acre", "27 kg/acre", "36 kg/acre", "54 kg/acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Excessive nitrogen application in Basmati rice mainly results in:",
    "options": ["Reduced plant height", "Increased drought tolerance", "Excessive vegetative growth and lodging", "Early maturity"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Urea in Basmati rice should be applied in:",
    "options": ["One basal dose at transplanting", "Three equal splits", "Two equal splits at 3 and 6 weeks after transplanting", "Four equal splits"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Under the PAU Leaf Colour Chart (LCC) recommendation, no basal urea should be applied:",
    "options": ["At flowering", "At harvest", "At the time of transplanting", "During nursery stage"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "For Punjab Basmati 7, 5 and Pusa Basmati 1121, 1509 and 1718, leaf colour is compared with which LCC shade?",
    "options": ["Shade 2.5", "Shade 3.0", "Shade 3.5", "Shade 4.0"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "If 6 or more out of 10 leaves are lighter than the recommended LCC shade, the farmer should apply:",
    "options": ["4.5 kg urea/acre", "9 kg urea/acre", "18 kg urea/acre", "27 kg urea/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Irrigation in Basmati rice should be stopped approximately:",
    "options": ["One week before harvesting", "At flowering", "A fortnight before harvesting", "One month before harvesting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Unpuddled DSR and Puddled Basmati",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 5400,
    
        totalMarks: 80,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Direct Seeded Rice (DSR) can save approximately how much irrigation water compared to puddled transplanted rice?",
    "options": ["5–10%", "10–20%", "25–30%", "35–40%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "DSR increases groundwater recharge by approximately:",
    "options": ["2–5%", "5–8%", "10–12%", "15–20%"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Compared to conventional puddled transplanted rice, DSR provides ______ higher yield of succeeding wheat.",
    "options": ["50 kg/acre", "75 kg/acre", "100 kg/acre", "150 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "DSR technology was first recommended in Punjab in:",
    "options": ["2005", "2010", "2015", "2020"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "The \"Tar-Wattar DSR\" technique was recommended in:",
    "options": ["2010", "2015", "2020", "2022"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "In Tar-Wattar DSR, the first irrigation is applied:",
    "options": ["Immediately after sowing", "7 DAS", "14 DAS", "21 DAS"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Direct seeding on raised beds in Tar-Wattar fields was recommended in:",
    "options": ["2018", "2020", "2021", "2022"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "DSR cultivation is NOT recommended in:",
    "options": ["Clay loam soils", "Loam soils", "Sandy loam soils", "Light textured sandy soils"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "The major reason for poor performance of DSR in light textured soils is:",
    "options": ["Zinc deficiency", "Iron deficiency", "Sulphur deficiency", "Potassium deficiency"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "The recommended sowing time for DSR is:",
    "options": ["15 May – 31 May", "1–15 June", "15–30 June", "1–15 July"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Recommended seed rate for DSR is:",
    "options": ["4–6 kg/acre", "6–8 kg/acre", "8–10 kg/acre", "12–15 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "For seed imbibition in DSR, seeds are dipped in:",
    "options": ["1% urea solution", "2% potassium nitrate solution", "5% salt solution", "1% zinc sulphate solution"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "To prepare a 2% KNO₃ solution for 8 kg seed, how much KNO₃ is dissolved in 10 litres of water?",
    "options": ["100 g", "150 g", "200 g", "250 g"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Rice seed should be soaked in 2% KNO₃ solution for:",
    "options": ["6 hours", "8 hours", "12 hours", "24 hours"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Seed treatment in DSR is done with Sprint 75 WS @:",
    "options": ["1 g/kg seed", "2 g/kg seed", "3 g/kg seed", "5 g/kg seed"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "In Tar-Wattar DSR, seed should be placed at a depth of:",
    "options": ["1–2 cm", "2–3 cm", "3–4 cm", "5–6 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Recommended row spacing in Tar-Wattar DSR is:",
    "options": ["15 cm", "20 cm", "25 cm", "30 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Which machine can simultaneously sow rice and spray pre-emergence herbicide in DSR?",
    "options": ["Zero Till Drill", "Happy Seeder", "Lucky Seed Drill", "Rotavator Seeder"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "In raised bed DSR, the recommended bed width is:",
    "options": ["50 cm", "60 cm", "67.5 cm", "75 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Which statement regarding raised bed DSR is correct?",
    "options": [
      "It requires more irrigation water.",
      "It saves more irrigation water than other DSR methods.",
      "It is suitable only for sandy soils.",
      "It requires puddling before sowing."
    ],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "If summer moong residue is incorporated after picking pods, the recommended urea dose in DSR is:",
    "options": ["90 kg/acre", "100 kg/acre", "110 kg/acre", "130 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "In DSR, the recommended dose of 130 kg urea per acre should be applied in how many splits?",
    "options": ["One split", "Two splits", "Three splits", "Four splits"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "The three equal splits of urea in DSR are applied at:",
    "options": ["2, 4 and 6 weeks after sowing", "3, 6 and 9 weeks after sowing", "4, 6 and 9 weeks after sowing", "5, 8 and 11 weeks after sowing"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Under PAU-LCC recommendations, urea should be applied at the time of sowing in DSR.",
    "options": ["True", "False"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "According to PAU-LCC, how much urea should be applied four weeks after sowing?",
    "options": ["15 kg/acre", "20 kg/acre", "25 kg/acre", "30 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "After six weeks of sowing, leaf colour should be matched with PAU-LCC at an interval of:",
    "options": ["3 days", "5 days", "7 days", "10 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "In DSR, additional urea is applied when 6 or more out of 10 leaves are lighter than:",
    "options": ["LCC Shade 3", "LCC Shade 3.5", "LCC Shade 4", "LCC Shade 5"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "If 6 or more out of 10 leaves are lighter than LCC Shade 4, how much urea should be applied?",
    "options": ["20 kg/acre", "25 kg/acre", "30 kg/acre", "35 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "In Tar-Wattar DSR (flat/raised beds), the first irrigation is applied approximately:",
    "options": ["Immediately after sowing", "7 DAS", "14 DAS", "21 DAS"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "In DSR, irrigation should be stopped approximately ______ before harvesting.",
    "options": ["5 days", "10 days", "15 days", "20 days"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "What is the recommended total dose of urea for Direct Seeded Rice (DSR)?",
    "options": ["90 kg/acre", "110 kg/acre", "130 kg/acre", "150 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "If sunnhemp green manuring or FYM @ 6 tonnes/acre has been applied, the recommended urea dose in DSR is reduced to:",
    "options": ["70 kg/acre", "90 kg/acre", "110 kg/acre", "130 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Under PAU-LCC recommendations for DSR, how much urea should be applied four weeks after sowing?",
    "options": ["15 kg/acre", "20 kg/acre", "25 kg/acre", "30 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Which of the following varieties is NOT recommended for Unpuddled Direct Seeded Basmati Rice (DSBR)?",
    "options": ["Punjab Basmati 7", "Pusa Basmati 1718", "Pusa Basmati 1509", "CSR 30"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "The optimum sowing time for DSBR is:",
    "options": ["1–15 June", "15–30 June", "1–15 July", "15–31 July"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "The recommended dose of urea for DSBR is:",
    "options": ["18 kg/acre", "36 kg/acre", "54 kg/acre", "72 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "In DSBR, 54 kg urea per acre should be applied in three equal splits at:",
    "options": ["2, 4 and 6 weeks after sowing", "3, 6 and 9 weeks after sowing", "4, 6 and 9 weeks after sowing", "3, 5 and 7 weeks after sowing"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "If sunnhemp green manuring is done before DSBR, the recommended urea dose is reduced to:",
    "options": ["18 kg/acre", "36 kg/acre", "54 kg/acre", "72 kg/acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Which nutrient deficiency is most commonly observed in rice grown under light textured sandy soils?",
    "options": ["Nitrogen deficiency", "Phosphorus deficiency", "Iron deficiency", "Sulphur deficiency"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Which of the following operations is recommended before sowing direct seeded rice to improve irrigation water use efficiency and ensure better germination?",
    "options": ["Puddling", "Laser levelling", "Deep hoeing", "Earthing up"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Maize and Spring Maize",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 7200,
    
        totalMarks: 110,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions :[
  {
    "id": 1,
    "question": "Which maize hybrid released in 2026 is moderately resistant to maydis leaf blight?",
    "options": ["PMH 17", "DKC 9144", "NK 7328", "Parkash"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Which maize hybrid is suitable for both grain and silage production and ethanol production?",
    "options": ["PMH 17", "PMH 2", "Parkash", "Pearl Popcorn"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Punjab Baby Corn 1 is mainly recommended for:",
    "options": ["Popcorn production", "Sweet corn production", "Baby corn production", "Silage production"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "PMH 2 is known as a:",
    "options": ["Sweet corn composite", "Drought tolerant rainfed hybrid", "Popcorn variety", "Baby corn hybrid"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Maize grows best in:",
    "options": ["Waterlogged clay soils", "Well-drained sandy loam to silty loam soils", "Saline soils", "Marshy soils"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Optimum sowing time of irrigated maize is:",
    "options": ["April", "Last week of May to end of June", "July", "August"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Recommended seed rate for most maize varieties is:",
    "options": ["5 kg/acre", "7 kg/acre", "10 kg/acre", "15 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Seed rate for Pearl Popcorn is:",
    "options": ["5 kg/acre", "7 kg/acre", "10 kg/acre", "12 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Recommended spacing in maize is:",
    "options": ["45 × 15 cm", "50 × 20 cm", "60 × 20 cm", "75 × 20 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Recommended sowing depth of maize seed is:",
    "options": ["1–2 cm", "2–3 cm", "3–5 cm", "6–8 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Optimum plant population in maize is approximately:",
    "options": ["25,000 plants/acre", "30,000 plants/acre", "33,333 plants/acre", "40,000 plants/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Trench sowing is recommended mainly for:",
    "options": ["Salt affected soils", "Easy irrigation and lodging resistance", "Weed control", "Pest control"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Trench-sown maize generally gives:",
    "options": ["Lower yield", "Same yield", "Higher grain yield", "No grain yield"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Bed sowing row spacing is:",
    "options": ["50 cm", "60 cm", "67.5 cm", "75 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "In bed planting, plant spacing is:",
    "options": ["15 cm", "18 cm", "20 cm", "25 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Zero till maize can be sown using:",
    "options": ["Rotavator", "Happy Seeder", "Zero Till Drill", "Seed broadcaster"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Before zero till sowing, weeds can be controlled using:",
    "options": ["Atrazine", "Paraquat", "Pendimethalin", "Butachlor"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Dose of Gramoxone 24 SL before sowing maize is:",
    "options": ["250 mL/acre", "500 mL/acre", "750 mL/acre", "1000 mL/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Cowpea variety recommended for intercropping in maize is:",
    "options": ["CL 221", "CL 367", "CL 88", "CL 105"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Seed rate of CL 367 cowpea for intercropping is:",
    "options": ["4 kg/acre", "6 kg/acre", "8 kg/acre", "10 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Cowpea fodder is harvested at:",
    "options": ["20–25 DAS", "30–35 DAS", "45–55 DAS", "60–70 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Thinning is generally done during:",
    "options": ["Sowing", "First hoeing", "Tasseling", "Harvesting"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Cultural weed control recommends hoeing at:",
    "options": ["5–10 DAS", "15–30 DAS", "40–50 DAS", "60 DAS"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Paddy straw mulch required for weed control is:",
    "options": ["10 q/acre", "20 q/acre", "30 q/acre", "40 q/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Atrazine should be applied within:",
    "options": ["3 days of sowing", "5 days of sowing", "10 days of sowing", "20 days of sowing"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Atrazine dose for medium to heavy soils is:",
    "options": ["500 g/acre", "600 g/acre", "800 g/acre", "1000 g/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Atrazine dose for light soils is:",
    "options": ["250 g/acre", "500 g/acre", "750 g/acre", "1000 g/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Atrazine controls mainly:",
    "options": ["Nematodes", "Annual grasses and broadleaf weeds", "Stem borers", "Fungi"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Laudis 420 SC contains:",
    "options": ["Pendimethalin", "Atrazine", "Tembotrione", "Paraquat"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Recommended dose of Laudis 420 SC is:",
    "options": ["75 mL/acre", "90 mL/acre", "105 mL/acre", "150 mL/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Laudis is sprayed at:",
    "options": ["5 DAS", "10 DAS", "20 DAS", "40 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "For dila/motha control, use:",
    "options": ["Atrazine", "Pendimethalin", "2,4-D amine salt", "Butachlor"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Dose of 2,4-D amine salt 58 SL is:",
    "options": ["200 mL/acre", "300 mL/acre", "400 mL/acre", "500 mL/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Green manure crops for maize include:",
    "options": ["Sunhemp", "Dhaincha", "Cowpea", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Sunhemp green manure should be buried at about:",
    "options": ["20 days", "30 days", "50 days", "70 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Green manure should decompose for about ______ before maize sowing.",
    "options": ["5 days", "10 days", "15 days", "20 days"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Application of more than 6 tonnes FYM/acre allows omission of basal:",
    "options": ["P only", "N only", "NPK + Zn basal dose", "K only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Nitrogen fertilizer cannot substitute:",
    "options": ["Zinc", "FYM or green manuring", "Potash", "DAP"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Irrigation requirement of maize is generally:",
    "options": ["1–2 irrigations", "2–3 irrigations", "4–6 irrigations", "8–10 irrigations"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Critical stage for irrigation in maize is:",
    "options": ["Germination", "Knee-high stage", "Pre-tasseling, silking and grain filling", "Harvesting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Flooding causes maximum damage at:",
    "options": ["Mature stage", "Young stage", "Grain filling stage", "Harvest stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "After flooding, foliar spray of urea recommended is:",
    "options": ["2%", "3%", "4%", "5%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Maize borer is serious during:",
    "options": ["January–March", "April–May", "June–September", "November–December"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Maize borer attack causes:",
    "options": ["White earheads", "Dead heart", "Bunchy top", "Smut"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Trichocards are released first at:",
    "options": ["5-day crop", "10-day crop", "20-day crop", "30-day crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Second release of Trichocards is done:",
    "options": ["3 days later", "5 days later", "7 days later", "15 days later"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Trichocards contain eggs parasitized by:",
    "options": ["Bracon spp.", "Trichogramma chilonis", "Chrysoperla spp.", "Coccinella spp."],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Coragen 18.5 SC is sprayed against maize borer @:",
    "options": ["10 mL/acre", "20 mL/acre", "30 mL/acre", "40 mL/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Fall armyworm larva shows a characteristic:",
    "options": ["Black triangle mark", "White inverted Y mark on head", "Red stripe", "White spots on wings"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Four spots arranged in square pattern are seen on:",
    "options": ["Aphid", "Pyrilla", "Fall armyworm larva", "Jassid"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Rainfed maize sowing time is:",
    "options": ["May 1–15", "June 20–July 7", "July 20–30", "August 1–10"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "Seed rate of rainfed maize is:",
    "options": ["5 kg/acre", "7 kg/acre", "8 kg/acre", "10 kg/acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "Rainfed maize spacing is:",
    "options": ["45 × 15 cm", "50 × 20 cm", "60 × 20 cm", "75 × 20 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Sowing and field operations in rainfed maize should be done:",
    "options": ["Along the slope", "Across the slope/contour", "Randomly", "Only on beds"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Mulching material in rainfed maize should preferably be spread during:",
    "options": ["June", "July", "Last week of August", "October"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Bajra",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 5400,
    
        totalMarks: 68,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions :[
  {
    "id": 1,
    "question": "PCB 167 (2024) is known for:",
    "options": ["High resistant starch, iron and zinc content", "Susceptibility to diseases", "Very short duration", "White grains only"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Bajra grows best on:",
    "options": ["Heavy clay soils", "Waterlogged soils", "Well-drained sandy loam soils", "Marshy soils"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Bajra is highly sensitive to:",
    "options": ["Drought", "Waterlogging", "High temperature", "Wind"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Bajra is suitable for areas receiving annual rainfall of:",
    "options": ["20–30 cm", "40–65 cm", "70–90 cm", "More than 100 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Rain during flowering of bajra causes:",
    "options": ["Better pollination", "Increased tillering", "Reduced seed set", "Increased grain size"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Bajra is a:",
    "options": ["Cool season crop", "Warm weather crop", "Winter crop", "Temperate crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Which is a recommended crop rotation?",
    "options": ["Bajra–Wheat", "Bajra–Sugarcane", "Bajra–Cotton", "Bajra–Maize"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Bajra–Gram is an example of:",
    "options": ["Mixed cropping", "Crop rotation", "Relay cropping", "Intercropping"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "A good bajra crop requires:",
    "options": ["Rough seedbed", "Fine seedbed with adequate moisture", "Waterlogged seedbed", "Puddled field"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Recommended number of ploughings before sowing bajra:",
    "options": ["1", "2–3", "5–6", "7–8"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "In low rainfall areas, bajra should be sown in:",
    "options": ["Early June", "Early July", "August", "September"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "In other areas, bajra should be sown during:",
    "options": ["First week of June", "Last week of July", "August", "September"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Recommended seed rate of bajra is:",
    "options": ["1.0 kg/acre", "1.5 kg/acre", "2.0 kg/acre", "2.5 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Under ideal seedbed conditions, seed rate can be reduced to:",
    "options": ["0.5 kg/acre", "1.0 kg/acre", "2.0 kg/acre", "2.5 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Recommended sowing depth is:",
    "options": ["1 cm", "2.5 cm", "5 cm", "7 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Recommended row spacing in bajra:",
    "options": ["30 cm", "40 cm", "50 cm", "60 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Plant-to-plant spacing after thinning should be:",
    "options": ["10 cm", "12 cm", "15 cm", "20 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Thinning should be done:",
    "options": ["1 week after sowing", "2 weeks after sowing", "3 weeks after sowing", "5 weeks after sowing"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Poor plant stand should be corrected by:",
    "options": ["Resowing whole field", "Gap filling through transplanting", "More irrigation", "More fertilizer"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Purpose of sowing in late July in normal rainfall areas is:",
    "options": ["Avoid drought", "Avoid waterlogging", "Ensure flowering after monsoon rains", "Reduce tillering"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Wheel hoe is mainly used for:",
    "options": ["Harvesting", "Weeding and interculture", "Irrigation", "Sowing"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Triphali is used for:",
    "options": ["Seed treatment", "Weed control", "Harvesting", "Irrigation"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Tractor-drawn cultivator is used for:",
    "options": ["Interculture operations", "Irrigation", "Plant protection", "Harvesting"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Interculture mainly helps in:",
    "options": ["Pollination", "Weed control", "Grain filling", "Harvesting"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Generally, bajra requires:",
    "options": ["One irrigation", "Two irrigations", "Four irrigations", "Six irrigations"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Rainwater should not remain standing in bajra field for more than:",
    "options": ["Few hours", "One day", "Two days", "One week"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Root bug is important in:",
    "options": ["North-eastern Punjab", "South-western Punjab", "Central Punjab", "Kandi region only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Root bug damages mainly:",
    "options": ["Leaves", "Earheads", "Roots", "Stem"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Which of the following also attacks bajra?",
    "options": ["Grey weevil", "Pyrilla", "Fulgorid", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Green ear disease is caused by:",
    "options": ["Claviceps fusiformis", "Sclerospora graminicola", "Tolyposporium penicillariae", "Alternaria spp."],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Green ear disease is also known as:",
    "options": ["Ergot", "Downy mildew", "Rust", "Blast"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Grain smut of bajra is caused by:",
    "options": ["Claviceps fusiformis", "Sclerospora graminicola", "Tolyposporium penicillariae", "Puccinia spp."],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Ergot disease of bajra is caused by:",
    "options": ["Claviceps fusiformis", "Rhizoctonia spp.", "Puccinia spp.", "Fusarium spp."],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Ergot sclerotia can be separated from seed by using:",
    "options": ["2% salt solution", "5% salt solution", "10% salt solution", "15% salt solution"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "American Cotton",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 7200,
    
        totalMarks: 120,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Which is the latest Bt cotton variety released by PAU in 2022?",
    "options": ["F 2228", "LH 2108", "PAU Bt 3", "LH 1556"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "PAU Bt 3 is tolerant to:",
    "options": ["Rust and blast", "Jassid and cotton leaf curl disease", "Wilt and root rot", "Bacterial blight only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "PAU Bt 2 matures in about:",
    "options": ["120–130 days", "140–145 days", "160–165 days", "190–200 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "F 2228 is:",
    "options": ["Bt hybrid", "Bt variety", "Non-Bt variety", "Desi cotton variety"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Minimum temperature required for cotton seed germination is:",
    "options": ["10°C", "12°C", "16°C", "20°C"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Ideal temperature for cotton crop growth is:",
    "options": ["10–15°C", "21–27°C", "35–40°C", "40–45°C"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "During fruiting stage, optimum day temperature is:",
    "options": ["15–20°C", "20–25°C", "27–32°C", "35–40°C"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Cotton picking period should preferably have:",
    "options": ["Cloudy weather", "Bright sunny days", "Continuous rainfall", "Foggy weather"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Cotton can be grown on all soils except:",
    "options": ["Sandy soils", "Saline soils", "Waterlogged soils", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Cotton is highly sensitive to:",
    "options": ["Cold winds", "Water stagnation", "Drought only", "Shade"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Which is a recommended crop rotation?",
    "options": ["Cotton–Wheat", "Cotton–Barley", "Cotton–Raya", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Cotton–Sunflower–Paddy–Wheat is:",
    "options": ["Mixed cropping", "Intercropping", "Crop rotation", "Relay cropping"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Sub-soiling should be done at spacing of:",
    "options": ["0.5 m", "1.0 m", "1.5 m", "2.0 m"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Sub-soiling is done to a depth of:",
    "options": ["15–20 cm", "25–30 cm", "45–50 cm", "60–70 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Sub-soiling helps in:",
    "options": ["Breaking hard pan", "Better root growth", "Better water infiltration", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "A ______ seedbed is essential for cotton.",
    "options": ["Rough", "Fine", "Waterlogged", "Saline"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Recommended sowing period for cotton is:",
    "options": ["1 March–31 March", "1 April–15 May", "June–July", "August"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Cotton sowing should preferably be done:",
    "options": ["At noon", "During night only", "Morning and evening hours", "Anytime"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Complete cotton sowing by:",
    "options": ["1 April", "15 April", "15 May", "1 June"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Timely sowing helps cotton escape:",
    "options": ["Frost injury", "Insect pests and diseases", "Lodging", "Salinity"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Acid delinting is done using:",
    "options": ["Nitric acid", "Sulphuric acid", "Hydrochloric acid", "Acetic acid"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Acid delinting removes:",
    "options": ["Dormancy", "Fuzz from seed", "Seed coat", "Embryo"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "After acid treatment, seed is washed with:",
    "options": ["Potassium nitrate solution", "Sodium bicarbonate solution", "Salt solution", "Urea solution"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Metal containers should be avoided during acid delinting because:",
    "options": ["They are costly", "Acid reacts with metal", "Seed becomes heavy", "Germination increases"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Seed priming is done using:",
    "options": ["Potassium nitrate", "Succinic acid", "Boric acid", "Zinc sulphate"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Seed bio-priming in cotton uses:",
    "options": ["Rhizobium", "Bacillus thuringiensis", "Azotobacter only", "PSB only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Gaucho 70 WS contains:",
    "options": ["Thiamethoxam", "Imidacloprid", "Chlorpyrifos", "Pendimethalin"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Seed treatment with Gaucho/Cruiser protects against:",
    "options": ["Bollworms", "Whitefly", "Jassid", "Aphid"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Recommended row spacing in cotton:",
    "options": ["45 cm", "60 cm", "67.5 cm", "90 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Plant spacing for PAU Bt 2 and PAU Bt 3 is:",
    "options": ["15 cm", "30 cm", "45 cm", "60 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Plant spacing for Bt hybrids is:",
    "options": ["30 cm", "45 cm", "60 cm", "75 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Thinning is generally done:",
    "options": ["Before sowing", "After first irrigation or heavy shower", "At flowering", "At harvesting"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Refugia is maintained to:",
    "options": ["Increase yield", "Prevent resistance development in bollworms", "Reduce irrigation", "Improve germination"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Recommended refuge area around Bt cotton is:",
    "options": ["2%", "5%", "10%", "20%"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Non-Bt varieties used as refuge include:",
    "options": ["F 2228 and LH 2108", "PAU Bt 2 and Bt 3", "Only hybrids", "None"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "One row of maize/cowpea is intercropped mainly for:",
    "options": ["Grain production", "Fodder and additional income", "Green manure only", "Seed production"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Maize/cowpea fodder is harvested after:",
    "options": ["15–20 DAS", "25–30 DAS", "45–55 DAS", "90 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Sunnhemp is intercropped for:",
    "options": ["Fibre", "Green manuring", "Weed control only", "Seed production"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Sunnhemp biomass is incorporated at:",
    "options": ["10–15 DAS", "20–25 DAS", "35–40 DAS", "60 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Cotton generally requires:",
    "options": ["1–2 irrigations", "2–3 irrigations", "4–6 irrigations", "10 irrigations"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "First irrigation should be given:",
    "options": ["Immediately after sowing", "1–2 weeks after sowing", "4–6 weeks after sowing", "At flowering"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Cotton is most sensitive to water stress during:",
    "options": ["Seedling stage only", "Flowering and fruiting stages", "Harvesting stage", "Maturity stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Last irrigation should preferably be given:",
    "options": ["July end", "August end", "September end", "October end"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Ridge sowing saves:",
    "options": ["Seed", "Fertilizer", "Irrigation water", "Labour only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Water stagnation in cotton should:",
    "options": ["Be encouraged", "Be drained immediately", "Be maintained for 2 days", "Not affect crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "First hoeing should be done:",
    "options": ["After flowering", "Before first irrigation", "At boll formation", "At harvesting"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Pendimethalin is used as:",
    "options": ["Fungicide", "Insecticide", "Pre-emergence herbicide", "Rodenticide"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Stomp 30 EC contains:",
    "options": ["Paraquat", "Pendimethalin", "Glyphosate", "Glufosinate"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Hitweed Maxx controls:",
    "options": ["Only grasses", "Only broadleaf weeds", "Annual grasses and broadleaf weeds", "Insects"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Paraquat is a:",
    "options": ["Selective herbicide", "Non-selective herbicide", "Fungicide", "Insecticide"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Whitefly is a:",
    "options": ["Bollworm", "Sucking pest", "Stem borer", "Root feeder"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "Pink bollworm mainly damages:",
    "options": ["Roots", "Leaves", "Bolls", "Stem"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "Yellow sticky traps are used for monitoring:",
    "options": ["Whitefly", "Bollworm", "Termites", "Armyworm"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Recommended number of yellow sticky traps per acre:",
    "options": ["10", "20", "40", "60"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Which crop should be avoided near cotton?",
    "options": ["Wheat", "Barley", "Bhindi (okra)", "Mustard"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "Bhindi acts as an alternate host for:",
    "options": ["Whitefly and jassid", "American bollworm", "Spotted bollworm", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "Barrier crops against mealybug include:",
    "options": ["Bajra and maize", "Rice and wheat", "Gram and lentil", "Berseem and oats"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "Synthetic pyrethroids should be avoided before:",
    "options": ["July 1", "August 1", "September 15", "October 15"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "Cotton sticks should not be stored:",
    "options": ["Vertically", "Under shade or in field", "After harvest", "In dry condition"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "Regular monitoring is most important for:",
    "options": ["Whitefly", "Pink bollworm", "Mealybug", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Desi cotton",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 3600,
    
        totalMarks: 60,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Which is the latest desi cotton variety released by PAU in 2026?",
    "options": ["LD 949", "FDK 124", "PBD 88", "LD 1019"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "PBD 88 is resistant to:",
    "options": [
      "Jassid and whitefly only",
      "Fusarium wilt and bacterial blight only",
      "Jassid, whitefly, Fusarium wilt and bacterial blight",
      "Cotton leaf curl disease only"
    ],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "PBD 88 is a:",
    "options": ["Long staple fibre variety", "Medium staple fibre variety", "Short staple coarse fibre variety", "Extra long staple variety"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "During 2024-25, desi cotton was grown on approximately:",
    "options": ["1.7 thousand ha", "17 thousand ha", "170 thousand ha", "270 thousand ha"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Average lint yield of desi cotton in Punjab during 2024-25 was:",
    "options": ["0.95 q/acre", "1.95 q/acre", "2.95 q/acre", "3.95 q/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Climatic requirements of desi cotton are:",
    "options": ["Different from American cotton", "Similar to American cotton", "Similar to rice", "Similar to wheat"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Weed control recommendations in desi cotton are:",
    "options": ["Different from American cotton", "Similar to American cotton", "Not required", "Mechanical only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Irrigation recommendations for desi cotton are:",
    "options": ["Same as American cotton", "Same as wheat", "Same as rice", "Different from all crops"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Recommended seed rate for desi cotton is:",
    "options": ["2.0 kg/acre", "2.5 kg/acre", "3.0 kg/acre", "4.0 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Acid delinting in desi cotton is done:",
    "options": ["Differently from American cotton", "Same as American cotton", "Not required", "Only for hybrids"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Recommended row spacing for desi cotton is:",
    "options": ["45 cm", "60 cm", "67.5 cm", "75 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Plant-to-plant spacing in desi cotton after thinning is:",
    "options": ["30 cm", "45 cm", "60 cm", "75 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Desi cotton is sown using:",
    "options": ["Paddy drill", "Cotton sowing drill", "Seed-cum-fertilizer drill only", "Broadcaster"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Management of sucking insect pests in desi cotton is:",
    "options": ["Same as American cotton", "Different from American cotton", "Not required", "Mechanical only"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "First spray against bollworms in desi cotton should be done when:",
    "options": ["10% plants produce squares", "25% plants produce squares", "50% plants produce squares", "At flowering"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Subsequent sprays against bollworms should be:",
    "options": ["Weekly", "Monthly", "Need based", "Not required"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Tobacco caterpillar management is:",
    "options": ["Same as American cotton", "Not required", "Different from American cotton", "Only biological control"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Excessively tall desi cotton plants should be:",
    "options": ["Irrigated more", "Detopped", "Uprooted", "Burned"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Detopping is recommended when plant height exceeds:",
    "options": ["1.0 m", "1.2 m", "1.5 m", "2.0 m"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Detopping helps in:",
    "options": ["Better insecticide coverage", "Increasing lodging", "Delaying maturity", "Increasing waterlogging"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Wilt in desi cotton is caused by:",
    "options": ["Alternaria alternata", "Fusarium oxysporum f.sp. vasinfectum", "Rhizoctonia solani", "Xanthomonas spp."],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Wilt pathogen is:",
    "options": ["Air-borne only", "Seed-borne only", "Soil-borne only", "Both soil and seed-borne"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "First symptom of wilt is:",
    "options": ["Leaf reddening", "Loss of leaf turgidity", "Root rot only", "Boll bursting"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "In wilt disease, leaves first become:",
    "options": ["Blue", "Black", "Yellow", "Purple"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "The most diagnostic symptom of wilt is:",
    "options": ["White growth on leaves", "Root knot formation", "Browning and blackening of vascular tissues", "Boll cracking"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Recommended crop rotation to manage wilt is:",
    "options": ["1–2 years", "2–3 years", "3–4 years", "5–6 years"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "In heavily wilt-infested fields, farmers should grow:",
    "options": ["Desi cotton only", "American cotton", "Rice", "Sugarcane"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Desi cotton is resistant to:",
    "options": ["Bacterial blight", "Fusarium wilt", "Cotton leaf curl disease", "Root rot"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Desi cotton is generally ready for first picking in:",
    "options": ["July", "August", "Third week of September", "November"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Picked kapas should be stored:",
    "options": ["In wet water channels", "In open field", "In a dry godown", "Near irrigation channels"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Moong and Mash",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 5400,
    
        totalMarks: 80,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Which moong variety was released by PAU in 2021?",
    "options": ["ML 818", "ML 2056", "ML 1808", "SML 668"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "ML 1808 is resistant/tolerant to:",
    "options": ["Yellow mosaic virus only", "Cercospora leaf spot only", "Bacterial leaf spot only", "Yellow mosaic virus, Cercospora leaf spot and bacterial leaf spot"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "ML 1808 matures in about:",
    "options": ["60 days", "65 days", "71 days", "80 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "A common characteristic of ML 1808, ML 2056 and ML 818 is:",
    "options": ["Susceptible to YMV", "Tolerant/resistant to YMV, Cercospora leaf spot and bacterial leaf spot", "Long duration varieties", "Black seeded varieties"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Moong requires:",
    "options": ["Cool climate", "Humid climate", "Hot climate", "Frosty climate"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Suitable soil for moong is:",
    "options": ["Waterlogged soil", "Saline soil", "Well-drained loamy to sandy loam soil", "Heavy clay soil only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Sowing of kharif moong should be done in:",
    "options": ["First fortnight of June", "Second fortnight of June", "First fortnight of July", "Second fortnight of July"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Recommended seed rate for moong is:",
    "options": ["4 kg/acre", "6 kg/acre", "8 kg/acre", "10 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Moong seed should be inoculated with:",
    "options": ["Azotobacter culture", "Rhizobium culture", "PSB culture", "Azospirillum culture"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Seed inoculation with Rhizobium increases grain yield by:",
    "options": ["2–5%", "5–10%", "12–16%", "20–25%"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Recommended row spacing in moong is:",
    "options": ["20 cm", "25 cm", "30 cm", "45 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Recommended plant-to-plant spacing in moong is:",
    "options": ["5 cm", "10 cm", "20 cm", "30 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Recommended sowing depth for moong is:",
    "options": ["1–2 cm", "2–3 cm", "4–6 cm", "8–10 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Bi-directional sowing in moong is recommended for:",
    "options": ["Disease control", "Higher yield", "Seed saving only", "Early maturity"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Raised bed sowing of moong is particularly useful because it:",
    "options": ["Delays maturity", "Increases pest attack", "Saves irrigation water and protects from heavy rainfall", "Reduces germination"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "First hoeing in moong should be done:",
    "options": ["2 weeks after sowing", "3 weeks after sowing", "4 weeks after sowing", "6 weeks after sowing"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Imazethapyr 10 SL is sprayed at:",
    "options": ["5–10 DAS", "15–20 DAS", "30–35 DAS", "45 DAS"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Moong crop should be harvested when approximately ______ pods mature.",
    "options": ["50%", "60%", "70%", "80%"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Whitefly is the vector of:",
    "options": ["Anthracnose", "Root rot", "Yellow mosaic virus", "Web blight"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Which disease causes irregular yellow and green patches on moong leaves?",
    "options": ["Cercospora leaf spot", "Anthracnose", "Yellow mosaic virus", "Root rot"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Which mash variety was released by PAU in 2022?",
    "options": ["Mash 338", "Mash 114", "Mash 883", "ML 1808"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Mash 883 matures in about:",
    "options": ["71 days", "77 days", "83 days", "90 days"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Mash 883 is resistant to:",
    "options": ["Anthracnose", "Yellow mosaic disease", "Root rot", "Web blight"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Climate suitable for mash cultivation is:",
    "options": ["Cool and dry", "Hot and humid", "Cold and humid", "Frosty climate"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Mash cultivation improves:",
    "options": ["Soil salinity", "Soil fertility", "Soil erosion", "Waterlogging"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Mash can be grown on all soils except:",
    "options": ["Sandy loam", "Clay soil", "Saline-alkaline and waterlogged soils", "Loamy soil"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Recommended sowing time for irrigated mash in sub-montaneous region is:",
    "options": ["1–15 June", "15–25 July", "First week of August", "September"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "In other areas of Punjab, mash should be sown during:",
    "options": ["Last week of June to first week of July", "First week of August", "Second fortnight of July", "May"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Recommended seed rate of mash is:",
    "options": ["4–6 kg/acre", "6–8 kg/acre", "8–10 kg/acre", "10–12 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Mash seed should be inoculated with:",
    "options": ["Azotobacter", "PSB", "Rhizobium culture", "Azospirillum"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Recommended row spacing for mash is:",
    "options": ["20 cm", "25 cm", "30 cm", "45 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Recommended sowing depth of mash is:",
    "options": ["1–2 cm", "2–3 cm", "4–6 cm", "8–10 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "For economical cultivation of mash, which crop is recommended as intercrop?",
    "options": ["Wheat", "Rice", "Maize", "Mustard"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Weed control with imazethapyr 10 SL should be done at:",
    "options": ["5–10 DAS", "15–20 DAS", "30–35 DAS", "45 DAS"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Normally mash crop requires:",
    "options": ["Two irrigations", "Three irrigations", "No irrigation", "Weekly irrigation"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Mash should be harvested when:",
    "options": ["Leaves are green", "Pods are yellow", "Leaves are shed and pods become greyish black", "Flowers appear"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Which insect pest can completely defoliate mash crop?",
    "options": ["Whitefly", "Aphid", "Hairy caterpillar", "Jassid"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Yellow mosaic virus in mash is transmitted by:",
    "options": ["Aphid", "Jassid", "Whitefly", "Thrips"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "The characteristic symptom of yellow mosaic disease is:",
    "options": ["Brown circular spots", "Yellow and green patches on leaves", "Root decay", "Web formation on leaves"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Mash 883, Mash 114 and Mash 338 are tolerant/resistant to:",
    "options": ["Yellow mosaic virus, Cercospora leaf spot and bacterial leaf spot", "Anthracnose only", "Root rot only", "Web blight only"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Arhar and Soyabean",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "What was the average yield of arhar in Punjab during 2024–25?",
    "options": ["4.10 q/acre", "5.10 q/acre", "6.20 q/acre", "7.50 q/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Arhar requires which type of climate?",
    "options": ["Cold and dry", "Cool and humid", "Hot climate", "Temperate climate"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Which soil is best suited for arhar cultivation?",
    "options": ["Saline soil", "Waterlogged soil", "Fertile well-drained loamy soil", "Marshy soil"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Which soils are unfit for arhar cultivation?",
    "options": ["Sandy loam", "Loamy soil", "Saline-alkaline and waterlogged soils", "Black soil"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Recommended crop rotation for arhar is:",
    "options": ["Arhar–Rice", "Arhar–Maize", "Arhar–Wheat/Barley", "Arhar–Cotton"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Which is the latest recommended variety of arhar?",
    "options": ["PAU 881", "AL 882", "Pusa 992", "AL 201"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "AL 882 was released in:",
    "options": ["2007", "2012", "2018", "2022"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "What is the growth habit of AL 882?",
    "options": ["Determinate", "Semi-determinate", "Indeterminate", "Bushy"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "AL 882 matures in about:",
    "options": ["110 days", "120 days", "132 days", "150 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Average grain yield of AL 882 is:",
    "options": ["4.2 q/acre", "4.8 q/acre", "5.4 q/acre", "6.5 q/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Arhar field should be prepared with:",
    "options": ["One ploughing only", "2–3 cultivations followed by planking", "No tillage only", "Harrowing only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Optimum sowing time for arhar is:",
    "options": ["First fortnight of April", "Second fortnight of May", "First fortnight of July", "Last week of August"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Recommended seed rate of arhar is:",
    "options": ["4 kg/acre", "5 kg/acre", "6 kg/acre", "10 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Which biofertilizer is used for seed inoculation in arhar?",
    "options": ["Azotobacter", "Azospirillum", "PSB", "Rhizobium"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Rhizobium inoculation increases grain yield by:",
    "options": ["1–2%", "3–4%", "5–7%", "10–15%"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Recommended row spacing in arhar is:",
    "options": ["20 cm", "30 cm", "40 cm", "50 cm"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Recommended plant spacing in arhar is:",
    "options": ["10 cm", "15 cm", "20 cm", "25 cm"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "For delayed sowing, AL 882 should be sown during:",
    "options": ["1–15 June", "15–25 June", "1–10 July", "15–30 July"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Recommended seed rate under high-density sowing is:",
    "options": ["6 kg/acre", "8 kg/acre", "10 kg/acre", "12 kg/acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Under high-density sowing, row spacing should be:",
    "options": ["20 cm", "25 cm", "30 cm", "50 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Raised bed spacing recommended for arhar is:",
    "options": ["45 cm", "60 cm", "67.5 cm", "75 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Which crop can be successfully intercropped with arhar?",
    "options": ["Cotton", "Wheat", "Moong", "Mustard"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Intercropped moong can yield about:",
    "options": ["0.5 q/acre", "0.8 q/acre", "1.2 q/acre", "2.5 q/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Which herbicide is recommended as pre-emergence in arhar?",
    "options": ["Atrazine", "Pendimethalin (Stomp 30 EC)", "Glyphosate", "Paraquat"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Why should insecticide sprays be applied during evening hours in arhar?",
    "options": ["To save water", "To reduce evaporation", "To protect honey bees and pollinators", "To increase pesticide persistence"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Which soybean variety contains the highest protein content?",
    "options": ["SL 525", "SL 744", "SL 958", "All are equal"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Protein content of SL 744 is:",
    "options": ["37.2%", "41.7%", "42.3%", "43.5%"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Which soybean variety contains the highest oil content?",
    "options": ["SL 958", "SL 744", "SL 525", "All have same oil content"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Oil content of SL 525 is:",
    "options": ["20.2%", "21.0%", "21.9%", "22.5%"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Which soybean variety has grey hilum?",
    "options": ["SL 958", "SL 744", "SL 525", "None of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "SL 525 is tolerant to:",
    "options": ["Yellow mosaic only", "Stem blight and root-knot nematode", "Bacterial blight", "Cercospora leaf spot"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Which soybean variety matures earliest?",
    "options": ["SL 525", "SL 958", "SL 744", "All mature at same time"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "SL 744 matures in about:",
    "options": ["132 days", "139 days", "142 days", "144 days"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Average seed yield of SL 525 is:",
    "options": ["5.4 q/acre", "6.1 q/acre", "7.3 q/acre", "8.0 q/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Which variety has light yellow grains with black hilum?",
    "options": ["SL 525", "SL 744", "SL 958", "JS 335"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Which variety has cream coloured grains with light black (grey) hilum?",
    "options": ["SL 958", "SL 744", "SL 525", "None of these"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Recommended FYM dose for soybean is:",
    "options": ["2 tonnes/acre", "3 tonnes/acre", "4 tonnes/acre", "5 tonnes/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "For green manuring in soybean, sunnhemp seed rate is:",
    "options": ["10 kg/acre", "15 kg/acre", "20 kg/acre", "25 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Sunnhemp green manure crop should be buried at about:",
    "options": ["20–25 days", "30–35 days", "40–45 days", "60 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Recommended nitrogen dose in soybean is:",
    "options": ["6.25 kg N/acre", "10 kg N/acre", "12.5 kg N/acre", "15 kg N/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Recommended phosphorus dose in soybean is:",
    "options": ["16 kg P₂O₅/acre", "24 kg P₂O₅/acre", "28 kg P₂O₅/acre", "32 kg P₂O₅/acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "To supply 12.5 kg N, how much urea is required in soybean?",
    "options": ["20 kg", "25 kg", "28 kg", "35 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Recommended single superphosphate dose in soybean is:",
    "options": ["100 kg/acre", "150 kg/acre", "175 kg/acre", "200 kg/acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "For higher yield, 2% urea spray is recommended at:",
    "options": ["30 and 45 DAS", "45 and 60 DAS", "60 and 75 DAS", "75 and 90 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Iron deficiency symptoms in soybean generally appear at:",
    "options": ["Germination stage", "First-to-third trifoliate leaf stage", "Flowering stage", "Pod filling stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Iron deficiency is corrected by spraying:",
    "options": ["Zinc sulphate 0.5%", "Ferrous sulphate 0.5%", "Borax 0.5%", "Copper sulphate 0.5%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Ferrous sulphate spray is first recommended at:",
    "options": ["15 DAS", "20 DAS", "30 DAS", "45 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Mixed foliar spray of ferrous sulphate (0.5%) + urea (2%) is recommended at:",
    "options": ["40 DAS", "50 DAS", "60 DAS", "75 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Maximum grain moisture content for safe soybean storage is:",
    "options": ["5%", "7%", "9%", "11%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Which insect transmits yellow mosaic virus in soybean?",
    "options": ["Aphid", "Jassid", "Whitefly", "Thrips"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Groundnut and sesame",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 7200,
    
        totalMarks: 100,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Groundnut is mainly grown as a:",
    "options": ["Fibre crop", "Oilseed crop", "Sugar crop", "Fodder crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "During 2024-25, groundnut was grown on approximately:",
    "options": ["0.8 thousand ha", "1.6 thousand ha", "3.2 thousand ha", "5.0 thousand ha"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Average yield of groundnut in Punjab during 2024-25 was:",
    "options": ["10.5 q/ha", "12.8 q/ha", "17.10 q/ha", "20.5 q/ha"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "For successful rainfed cultivation of groundnut, annual rainfall should be at least:",
    "options": ["25 cm", "40 cm", "50 cm", "75 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Groundnut well behaved in which soil conditions",
    "options": ["loamy soil", "Sandy - loam soil", "clayey soil", "none of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Ideal soil for rainfed groundnut is:",
    "options": ["Clay soil", "Sandy soil over loamy sub-soil", "Saline soil", "Heavy black soil"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Groundnut should not be grown continuously in the same field because:",
    "options": ["It increases weeds", "Soil becomes acidic", "Soil-borne diseases build up", "Water requirement increases"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Which of the following is a recommended crop rotation?",
    "options": ["Groundnut-Peas-Sunflower", "Groundnut-Wheat-Groundnut", "Rice-Rice-Groundnut", "Cotton-Cotton-Groundnut"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Deep ploughing is generally:",
    "options": ["Always necessary", "Never required", "Not necessary except in kans/doob infested fields", "Required every year"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Groundnut pods should be hand-shelled:",
    "options": ["One day before sowing", "One month before sowing", "About a fortnight before sowing", "At harvest"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Small, shrivelled and blemished kernels should be:",
    "options": ["Stored separately", "Mixed with healthy seed", "Discarded", "Used for fodder only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Which groundnut variety recommended for both spring and kharif season",
    "options": ["TG 37A", "J 87", "SG 99", "M 552"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Seed treatment with Neonix helps control:",
    "options": ["Aphids only", "Tikka disease only", "White grubs and termites", "Root knot only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Which variety is early maturing and grown in spring season?",
    "options": ["TG 37A", "J 87", "SG 99", "M 552"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Spring groundnut should be sown during:",
    "options": ["January", "First fortnight of February", "Second fortnight of February", "March"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Optimum sowing time of irrigated kharif groundnut is:",
    "options": ["March-April", "End April to End May", "July-August", "September"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Rainfed groundnut should be sown:",
    "options": ["In April", "During May", "Last week of June to first week of July", "During August"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Delayed sowing causes:",
    "options": ["Higher oil content", "Higher shelling percentage", "Reduction in pod yield", "Better germination"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Recommended sowing depth of groundnut seed is:",
    "options": ["2 cm", "3 cm", "5 cm", "8 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Seed should be sown using:",
    "options": ["Broadcasting", "Dibbling only", "Drill or planter", "Transplanting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Under irrigated conditions, spring groundnut should be sown during:",
    "options": ["First fortnight of January", "First fortnight of February", "Second fortnight of February", "First fortnight of March"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "The optimum sowing time for irrigated kharif groundnut is:",
    "options": ["March to April", "Mid-April to Mid-May", "End April to End May", "June to July"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Potash fertilizers are applied only when:",
    "options": ["Rainfall is low", "Crop is irrigated", "Soil test shows deficiency", "Soil is sandy"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "In spring groundnut, gypsum is applied:",
    "options": ["Only at sowing", "Only at flowering", "In two equal splits", "At harvesting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Recommended sowing time for rainfed groundnut is:",
    "options": ["First week of June", "Second week of June", "Last week of June to first week of July", "Last week of July"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "The main reason for avoiding delayed sowing in groundnut is:",
    "options": ["Poor shelling percentage", "Increased disease incidence", "Reduction in pod yield", "Low oil content"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Zinc deficiency causes:",
    "options": ["Larger leaves", "Dark green leaves", "Reduced leaf size and yellowing", "Excessive branching"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Recommended seed rate for J 87 is:",
    "options": ["32 kg kernels/acre", "38 kg kernels/acre", "40 kg kernels/acre", "48 kg kernels/acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Recommended seed rate for M 522 is:",
    "options": ["48 kg kernels/acre", "32 kg kernels/acre", "38 kg kernels/acre", "40 kg kernels/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Recommended seed rate for TG 37A is:",
    "options": ["32 kg kernels/acre", "38 kg kernels/acre", "40 kg kernels/acre", "48 kg kernels/acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "First irrigation should be given at:",
    "options": ["Germination", "Vegetative stage", "Flowering stage", "Harvesting stage"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Another irrigation before harvesting helps in:",
    "options": ["Weed control", "Pod recovery from soil", "Disease control", "Seed treatment"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "A sign of maturity in groundnut pods is:",
    "options": ["Green kernels", "White lines inside shell", "Brown to black lines inside pod shell", "Red leaves"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Rainfed groundnut is generally harvested:",
    "options": ["August", "September", "October", "Beginning of November"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Recommended seed rate for SG 99 is:",
    "options": ["32 kg kernels/acre", "40 kg kernels/acre", "38 kg kernels/acre", "48 kg kernels/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Aphids damage groundnut by:",
    "options": ["Cutting roots", "Boring pods", "Sucking cell sap", "Feeding on flowers"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Adult white grub beetles emerge after:",
    "options": ["Winter frost", "Summer irrigation", "First showers of rain during June-July", "Harvesting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Hairy caterpillar causes damage by:",
    "options": ["Sucking sap", "Feeding on leaves and tender stems", "Boring into pods", "Feeding on roots only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Collar rot and seed rot are mainly caused by:",
    "options": ["Cercospora spp.", "Aspergillus niger and other fungi", "Meloidogyne spp.", "Aphids"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Root knot disease of groundnut is caused by:",
    "options": ["Bacteria", "Virus", "Nematodes", "Fungi"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Recommended spacing for J 87 and M 552 is:",
    "options": ["30 × 15 cm", "30 × 20 cm", "30 × 22.5 cm", "45 × 15 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Recommended spacing for TG 37A and SG 99 is:",
    "options": ["30 × 15 cm", "30 × 22.5 cm", "45 × 15 cm", "22.5 × 15 cm"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Which variety is tolerant to bud necrosis?",
    "options": ["SG 99", "M 552", "TG 37A", "None of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "The recommended time of sowing for sesame in Punjab is:",
    "options": ["First fortnight of June", "Second fortnight of June", "First fortnight of July", "First fortnight of August"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Early sowing of sesame in June increases the incidence of:",
    "options": ["Wilt disease", "Phyllody disease", "Root rot", "Leaf rust"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "The recommended seed rate for sesame is:",
    "options": ["0.5 kg/acre", "1.0 kg/acre", "2.0 kg/acre", "4.0 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Sesame should be sown at a row-to-row spacing of:",
    "options": ["15 cm", "20 cm", "25 cm", "30 cm"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "RT 346 is a variety of which crop?",
    "options": ["lucerne", "sesame", "linseed", "buckwheat"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "RT 346 is moderately resistant to which pest?",
    "options": ["Antigastra capsule borer", "Nut borer", "Cercospora", "none of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "What is the origin of sesame?",
    "options": ["India", "Africa", "Indonesia", "North America"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Fodder Crops",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 7200,
    
        totalMarks: 146,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "The approximate area under fodder crops in Punjab is:",
    "options": ["7.5 lakh ha", "8.0 lakh ha", "9.0 lakh ha", "10.5 lakh ha"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Annual green fodder production in Punjab is around:",
    "options": ["500 lakh tonnes", "600 lakh tonnes", "700 lakh tonnes", "900 lakh tonnes"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Present green fodder supply per bovine per day is:",
    "options": ["20 kg", "25 kg", "30 kg", "40 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Actual green fodder requirement per bovine per day is:",
    "options": ["30 kg", "35 kg", "40 kg", "45 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "The main reason for fodder deficit in Punjab is:",
    "options": ["Lack of irrigation", "High demand due to crossbred animals", "Poor seed quality", "Low rainfall"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Estimated total green fodder requirement in Punjab is:",
    "options": ["700 lakh tonnes", "850 lakh tonnes", "956 lakh tonnes", "1000 lakh tonnes"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Legumes in fodder are mainly important because they:",
    "options": ["Provide energy", "Fix nitrogen only", "Provide cheaper protein source", "Increase fiber content"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Non-legume fodders are mainly rich in:",
    "options": ["Protein", "Energy", "Minerals only", "Vitamins only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Recommended fodder production practice is:",
    "options": ["Sole cropping system", "Mixed cropping of legumes and non-legumes", "Zero fertilization", "Dryland farming only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Which crop combination is suitable for fodder mixtures?",
    "options": ["Cowpea + Maize", "Wheat + Rice", "Potato + Sugarcane", "Mustard + Barley"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Irrigation before harvesting sorghum and bajra helps to:",
    "options": ["Increase grain yield", "Reduce anti-quality factors", "Improve soil pH", "Increase pest attack"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Preservation of fodder during lean periods is done by:",
    "options": ["Composting", "Silage and hay making", "Burning crop residues", "Deep ploughing"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "What is the recommended seed rate of sorghum for fodder production (per acre)?",
    "options": ["10–15 kg", "15–20 kg", "20–25 kg", "25–30 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Which is the recommended sowing time for fodder sorghum to obtain early green fodder?",
    "options": ["Mid-February", "Mid-March", "Mid-May", "Mid-August"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "The optimum sowing period of fodder sorghum for best yield is:",
    "options": ["April–May", "Mid-June to mid-July", "August–September", "October–November"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "SL 46 sorghum variety is best described as:",
    "options": ["Single-cut late maturing variety", "Dual-purpose composite variety", "Grain-only variety", "Dwarf fodder type"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "SL 45 sorghum variety is characterized as:",
    "options": ["Early maturing dwarf variety", "Single-cut late maturing variety", "Multi-cut hybrid variety", "Grain-only hybrid"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Seed treatment of fodder sorghum to control shoot fly and grain smut involves:",
    "options": [
      "5 mL thiamethoxam + 2 g sulfur dust per kg seed",
      "10 mL Slayer 30 FS per kg seed + 4 g sulfur dust per kg seed",
      "10 g sulfur dust + 4 mL insecticide per kg seed",
      "20 mL imidacloprid + 8 g sulfur dust per kg seed"
    ],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Sorghum (jowar) and maize should not be sown in fields where which herbicide has been previously used in wheat?",
    "options": ["Atrazine / Pendimethalin", "Glyphosate / Paraquat", "Leader / SF-10", "2,4-D / MCPA only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "At what stage should fodder sorghum be harvested for optimum quality and yield?",
    "options": [
      "Tillering to stem elongation stage (30–45 DAS)",
      "Boot to milk stage (65–80 days after sowing)",
      "Dough to maturity stage (90–110 days after sowing)",
      "Germination to 2-leaf stage (10–15 DAS)"
    ],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "What is the recommended seed rate for multi-cut sorghum?",
    "options": ["10 kg per acre", "15 kg per acre", "20 kg per acre", "25 kg per acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "The recommended time of sowing for multi-cut sorghum is:",
    "options": ["Mid-March to mid-April", "Last week of April to end of May", "Mid-June to mid-July", "September to October"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Punjab Sudax Chari 4 is a:",
    "options": ["Single-cut grain sorghum variety", "Multi-cut forage sorghum hybrid", "Dwarf fodder maize hybrid", "Late maturing rice variety"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Punjab Sudax Chari 1 belongs to which category of sorghum?",
    "options": ["Single-cut hybrid", "Grain type sorghum", "Multi-cut forage sorghum hybrid", "Sweet sorghum for ethanol only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "What is the recommended seed rate for fodder maize per acre?",
    "options": ["20 kg", "25 kg", "30 kg", "35 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "The suitable sowing period for fodder maize is:",
    "options": ["January to March", "First week of March to mid-September", "October to December only", "Whole year without restriction"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "To reduce fall armyworm infestation in fodder maize, preferred sowing period is:",
    "options": ["January to March", "Mid-April to mid-August", "September to November", "December to February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "J 1008 maize variety is best described as:",
    "options": ["Late maturing white grain hybrid", "Yellow seeded early maturing composite variety", "Single-cut fodder sorghum type", "Sweet corn hybrid for popcorn"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "J 1007 maize variety is characterized as:",
    "options": [
      "Dwarf early hybrid with white grains",
      "Tall composite variety with broad leaves and white bold grains",
      "Multi-cut sorghum hybrid",
      "Grain-only hybrid for export"
    ],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "When maize is sown in mixture with cowpea for fodder production, the recommended seed rate per acre is:",
    "options": ["20 kg maize + 10 kg cowpea (CL 367)", "15 kg maize + 6 kg cowpea (CL 367)", "25 kg maize + 8 kg cowpea (CL 367)", "30 kg maize + 5 kg cowpea (CL 367)"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "In which situation should atrazine (Atrataf 50 WP) NOT be used in fodder maize?",
    "options": [
      "When maize is grown as a sole crop",
      "When maize is grown for grain production",
      "When maize is intercropped with cowpea",
      "When maize is grown under irrigated conditions"
    ],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "PCB 166 (2022) bajra variety is best described as:",
    "options": ["Single-cut fodder type", "Dual-purpose composite variety", "Grain-only dwarf hybrid", "Fibre crop variety"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "FBC 16 (2003) bajra variety is mainly developed for:",
    "options": ["Grain production", "Oil extraction", "Exclusive fodder production", "Biofuel production"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "PCB 164 (2003) bajra variety is characterized as:",
    "options": ["Single-cut fodder sorghum type", "Quick growing dual-purpose composite variety", "Late maturing grain-only hybrid", "Dwarf forage maize hybrid"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "What is the recommended seed rate of bajra for fodder production per acre?",
    "options": ["3–4 kg", "6–8 kg", "10–12 kg", "15–18 kg"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Bajra can be sown for fodder production during:",
    "options": ["October to December", "January to February", "March to August", "September to November"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "The main fodder crop of bajra is obtained when it is sown in:",
    "options": ["September–October", "March–May", "November–December", "January–February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Bajra should NOT be allowed to exceed which stage for fodder harvesting?",
    "options": ["Germination stage", "Tillering stage", "50% earing stage", "Maturity stage"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "At flowering stage, bajra may be affected by which disease causing abortion in animals if fed infected fodder?",
    "options": ["Rust disease", "Ergot disease", "Smut disease", "Leaf blight"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Ergot-infected bajra fodder when fed to cattle can cause:",
    "options": ["Milk fever", "Foot rot", "Finger-and-toe disease and abortion", "Mastitis only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Bajra should be avoided in waterlogged fields because it is:",
    "options": ["Waterlogging tolerant", "Sensitive to standing water", "Aquatic crop", "Salt tolerant only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Which rotation includes bajra as a component?",
    "options": ["Rice–wheat–cotton", "Bajra–maize–berseem", "Wheat–mustard–gram", "Sugarcane–rice–wheat"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Bajra should be harvested at:",
    "options": ["Boot stage", "Ear initiation or flag leaf emergence", "Grain maturity", "Seed dormancy"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Napier–Bajra hybrid is best described as:",
    "options": ["Annual seed propagated grass", "Vegetatively propagated perennial fodder grass", "Rabi cereal fodder crop", "Grain-only fodder crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Napier–Bajra hybrid gives economic fodder yield for:",
    "options": ["1 year only", "2–3 years after planting", "6 months only", "One kharif season"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Recommended planting time of Napier–Bajra hybrid is:",
    "options": ["October–December", "January–February", "Last week of February to May", "July–August"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Which of the following are the varieties of napier bajra?",
    "options": ["PBN 342", "PNB 456", "NMP765", "PNB1006"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Intercropping during winter in Napier–Bajra hybrid includes:",
    "options": ["Wheat, barley, maize", "Oats, senji, metha, sarson", "Rice, cotton, bajra", "Mustard only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Napier–Bajra hybrid should be harvested at:",
    "options": ["2 m plant height", "1 m plant height", "Flowering stage", "Seed maturity stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "If Napier–Bajra is harvested beyond 2 m height, it may cause:",
    "options": ["Increased digestibility", "Rumen impaction (Banh)", "Higher protein content", "Better milk yield"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Recommended length of root slips for planting is:",
    "options": ["10 cm", "20 cm", "30 cm", "50 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "Number of slips or cuttings required to plant one acre is approximately:",
    "options": ["5,000", "8,000", "11,000", "15,000"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "Stem cuttings used in Napier–Bajra hybrid should contain:",
    "options": ["One node only", "Two to three nodes", "Four to five nodes", "No node requirement"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Recommended planting depth for stem cuttings is:",
    "options": ["2–3 cm", "5 cm", "7–8 cm", "12–15 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Napier–Bajra hybrid planting spacing is:",
    "options": ["30 × 10 cm", "90 × 40 cm or 60 × 60 cm", "45 × 15 cm", "100 × 100 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "After planting Napier–Bajra hybrid, recommended mulch application is:",
    "options": ["Wheat straw 2 tonnes/acre", "Rice straw 4 tonnes/acre", "Sugarcane trash 6 tonnes/acre", "Maize stover 1 tonne/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "Main purpose of applying rice straw mulch in Napier–Bajra hybrid is to:",
    "options": ["Increase fertilizer efficiency", "Improve seed germination", "Save soil moisture", "Control diseases only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "PGG 518 is the variety of which crop?",
    "options": ["Napier bajra", "Fennel", "Guinea grass", "None of these"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "Guinea grass seed rate is:",
    "options": ["2–4 kg/acre", "6–8 kg/acre", "10–12 kg/acre", "15–20 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "Guinea grass may be sown during:",
    "options": ["January to February", "Mid-March to mid-May", "June to July", "September to October"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 61,
    "question": "Guara is mainly valued as:",
    "options": ["High starch fodder", "Leguminous fodder and soil enriching crop", "Oilseed crop", "Fibre crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 62,
    "question": "Recommended seed rate of Guara per acre is:",
    "options": ["5–8 kg", "10–12 kg", "18–20 kg", "25–30 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 63,
    "question": "Guara sowing time is:",
    "options": ["January–March", "May to mid-August", "September–November", "December–February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 64,
    "question": "Optimum harvesting stage of Guara is:",
    "options": ["30–40 DAS", "50% flowering", "90–100 days after sowing (flowering + pod initiation)", "Seed maturity stage only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 65,
    "question": "Cowpea is mainly recommended for:",
    "options": ["Rainfed areas only", "Irrigated areas of Punjab", "Desert farming", "Mountain regions only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 66,
    "question": "Cowpea seed rate for sole fodder crop is:",
    "options": ["6 kg/acre", "8 kg/acre", "12 kg/acre", "18 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 67,
    "question": "Cowpea + maize intercropping seed rate is:",
    "options": ["20 kg maize + 10 kg cowpea", "15 kg maize + 6 kg cowpea", "25 kg maize + 8 kg cowpea", "10 kg maize + 5 kg cowpea"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 68,
    "question": "Cowpea harvesting stage is:",
    "options": ["30–40 DAS", "Pre-flowering stage (55–65 DAS)", "Pod maturity stage", "Full flowering only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 69,
    "question": "Cowpea seed rate for seed production is:",
    "options": ["5 kg/acre", "8 kg/acre", "12 kg/acre", "15 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 70,
    "question": "For silage making what is the harvest stage of sorghum and maize?",
    "options": ["Boot stage", "Flowering to milk stage", "1 metre tall stage", "none of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 71,
    "question": "For bajra for silage making what is the stage of harvest?",
    "options": ["Boot stage", "Flowering to milk stage", "1 metre tall stage", "none of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 72,
    "question": "For Napier bajra and guinea grass what is the best stage for silage making?",
    "options": ["Boot stage", "Flowering to milk stage", "1 metre tall stage", "none of these"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 73,
    "question": "What is the pH which should be maintained for minimum nitrogen loss in silage?",
    "options": ["5.5-6", "4.6-5.0", "7-8", "None of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    },
    {
        title: "Other Crops",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7884",
    
        durationSeconds: 7200,
    
        totalMarks: 102,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions :[
  {
    "id": 1,
    "question": "Guara belongs to which type of crop?",
    "options": ["Cereal fodder crop", "Oilseed crop", "Leguminous crop", "Fibre crop"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Guara is mainly valued for:",
    "options": ["Only grain production", "Gum extraction and high protein feed", "Fibre production", "Sugar extraction"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Guara is recommended in rotation with wheat mainly in:",
    "options": ["High rainfall areas", "Heavy clay soils", "Light textured soils of south-western Punjab", "Hill regions only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Recommended seed rate of Guara per acre is:",
    "options": ["5–6 kg", "8–10 kg", "12–15 kg", "18–20 kg"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Guara sowing time under irrigated conditions is:",
    "options": ["March–April", "First fortnight of July", "October–November", "January–February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Under rainfed conditions, Guara should be sown:",
    "options": ["Before irrigation", "With onset of rains", "After harvesting wheat only", "In winter season"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Which Guara variety is recommended for rainfed cultivation throughout Punjab?",
    "options": ["HG-365", "Ageta Guara 112", "Guara 80", "CL 367"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "CIM Unnati (2025) is a variety of:",
    "options": ["Wheat", "Mentha arvensis (menthol mint)", "Guara", "Bajra"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "CIM Kranti (2020) belongs to which crop?",
    "options": ["Maize", "Mentha arvensis", "Sorghum", "Cowpea"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Kosi (2014) is a variety of:",
    "options": ["Mentha arvensis", "Wheat", "Guara", "Napier grass"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Recommended planting time for mentha varieties (general) is:",
    "options": ["March–April", "Mid-January to end of January", "June–July", "September–October"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "CIM Kranti and CIM Unnati are specifically recommended for planting up to:",
    "options": ["Mid-March", "Mid-February", "End of February", "April end"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Recommended seed material for mentha is:",
    "options": ["True seed", "Tubers", "Suckers", "Cuttings only from leaves"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Recommended seed rate of mentha per acre is:",
    "options": ["1 quintal", "2 quintals", "3 quintals", "5 quintals"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Length of mentha suckers used for planting is:",
    "options": ["2–3 cm", "5–8 cm", "10–15 cm", "20–25 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Recommended spacing between mentha rows is:",
    "options": ["30 cm", "45 cm", "60 cm", "90 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Which intercrop combination is recommended with mentha?",
    "options": ["Wheat–mustard", "Sugarcane–mentha", "Rice–cotton", "Maize–wheat"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Onion is intercropped with mentha by planting:",
    "options": ["One row onion between two rows of mentha", "Two rows onion between mentha rows", "Random broadcasting", "Ridge sowing only"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Sunflower–mentha intercropping is done by:",
    "options": ["One row mentha between sunflower rows", "Two rows mentha between sunflower rows", "Mixing seeds together", "Alternating seasons only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Recommended sowing time for mentha–sunflower intercropping is:",
    "options": ["Mid-January", "End January", "February–March", "April–May"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Mentha crop is propagated through:",
    "options": ["Seeds", "Suckers", "Rhizomes only", "Stem seeds"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Recommended planting depth of mentha suckers is:",
    "options": ["2–3 cm", "4–5 cm", "7–8 cm", "10–12 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Number of suckers required per acre in mentha is approximately:",
    "options": ["50 kg", "1 quintal", "2 quintals", "5 quintals"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "The optimum stage for harvesting mentha crop is:",
    "options": ["Seed maturity stage", "Flower initiation stage", "Full flowering stage", "Pod formation stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "While harvesting mentha, the recommended stump height to ensure better sprouting is:",
    "options": ["2–3 cm", "4–5 cm", "6–8 cm", "10–12 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "For water saving and higher yield in mentha cultivation, which practice is recommended?",
    "options": [
      "Flat sowing with flood irrigation",
      "Ridge/bed sowing with no mulch",
      "Sowing on beds/ridges with paddy straw mulch @ 24 quintals/acre",
      "Deep sowing with heavy irrigation every 3 days"
    ],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Dhaincha (Sesbania aculeata) is mainly used as:",
    "options": ["Oilseed crop", "Green manure crop", "Fibre crop", "Fodder grain crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Punjab Dhaincha 1 is characterized as:",
    "options": ["Small seeded slow growing variety", "Bold seeded quick growing variety", "Dwarf grain-only variety", "Multicut fodder grass"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Recommended seed rate of dhaincha for green manure is:",
    "options": ["10 kg/acre", "15 kg/acre", "20 kg/acre", "25 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Sowing time of dhaincha for green manure crop is:",
    "options": ["January–March", "April to July", "September–November", "December–February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Row spacing for dhaincha green manure crop is:",
    "options": ["10–15 cm", "20–22.5 cm", "30–35 cm", "45–50 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Sowing time of dhaincha for grain production is:",
    "options": ["April–May", "Mid-June to mid-July", "August–September", "October–November"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Seed rate for dhaincha grain crop is:",
    "options": ["5–6 kg/acre", "8–10 kg/acre", "12–15 kg/acre", "20–25 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Dhaincha shows good tolerance to:",
    "options": ["Acidic soils only", "Salinity and sodicity", "Only drought", "Only waterlogging"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Dhaincha grain crop matures in approximately:",
    "options": ["60 days", "90 days", "150 days", "210 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Which fertilizer is recommended for dhaincha at sowing?",
    "options": ["Nitrogen only", "Potash only", "Phosphorus (SSP)", "Zinc only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Irrigation stress should NOT occur in dhaincha during:",
    "options": ["Germination stage", "Flower initiation and grain development stage", "Vegetative stage only", "Harvest stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Harvesting time of dhaincha grain crop is:",
    "options": ["June–July", "August–September", "Mid-October to early November", "January–February"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "PAU 1691 is a variety of:",
    "options": ["Dhaincha", "Sunnhemp", "Guara", "Cowpea"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Narendra Sanai 1 belongs to which crop?",
    "options": ["Sunnhemp", "Bajra", "Mentha", "Maize"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Sunnhemp is mainly used as:",
    "options": ["Oilseed crop only", "Fibre and green manure crop", "Fruit crop", "Grain-only cereal crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Recommended seed rate of sunnhemp for green manure is:",
    "options": ["10 kg/acre", "15 kg/acre", "20 kg/acre", "25 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Sowing time of sunnhemp for green manuring is:",
    "options": ["January–March", "April to July", "September–October", "November–December"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Sunnhemp seed production is done by sowing in:",
    "options": ["March", "June", "September", "December"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Row spacing for sunnhemp seed production is:",
    "options": ["22.5 cm", "30 cm", "45 cm", "60 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Sunnhemp is tolerant to:",
    "options": ["Only drought", "Drought, salinity and acidity", "Only waterlogging", "Only frost conditions"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Sunnhemp does NOT tolerate:",
    "options": ["Salinity", "Acidity", "Waterlogging", "Drought"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Sunnhemp green manuring is commonly done after:",
    "options": ["Rice harvest", "Wheat harvest", "Sugarcane harvest", "Cotton harvest"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Sunnhemp seed soaking before sowing is done to improve:",
    "options": ["Flowering", "Weed control", "Germination", "Fibre quality"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Harvesting time of sunnhemp for seed production is:",
    "options": ["August–September", "Mid-October to early November", "January–February", "April–May"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Sunnhemp improves soil mainly by:",
    "options": ["Increasing soil salinity", "Improving physical properties and reducing nutrient loss", "Decreasing microbial activity", "Increasing soil acidity"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
    }
]


const testPaperRabi = [
  {
        title: "Wheat Part-01",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 5400,
    
        totalMarks: 80,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "What was the area under wheat cultivation in Punjab during 2021-22?",
    "options": ["35.26 lakh hectares", "148.65 lakh tonnes", "42.16 quintals per hectare", "17.1 quintals per acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "What is the average yield of wheat in Punjab per hectare?",
    "options": ["35.26 quintals", "42.16 quintals", "148.65 quintals", "17.1 quintals"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Which temperature range is ideal for wheat cultivation during the grain development stage?",
    "options": ["15-22°C", "21-28°C", "4-11°C", "7-13°C"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Which type of soil is not suitable for wheat cultivation?",
    "options": ["Alkaline soil", "Water-logged soil", "Medium textured soil", "Fine textured soil"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Which crop rotation is not suitable for wheat cultivation?",
    "options": ["Rice-Wheat", "Cotton-Wheat", "Rice-Pea-Wheat", "Green Manure-Rice-Wheat"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Which wheat variety is recommended for cultivation under timely sown irrigated conditions?",
    "options": ["PBW 826", "PBW 869", "PBW 824", "PBW 803"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Which wheat variety is recommended for sowing with Happy Seeder/Super Seeder in in-situ rice residue managed fields?",
    "options": ["PBW 869", "PBW 824", "PBW 803", "Sunehri (PBW 766)"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Which wheat variety is recommended for cultivation in the South Western region of Punjab?",
    "options": ["PBW 826", "PBW 869", "PBW 803", "Sunehri (PBW 766)"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Which wheat variety is suitable for cultivation under poplar plantation?",
    "options": ["PBW 725", "PBW 677", "HD 3086", "WH 1105"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Which wheat variety is an improved version of PBW 343 and has an average plant height of 100 cm?",
    "options": ["Unnat PBW 343", "Unnat PBW 550", "PBW 725", "PBW 677"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Which wheat variety has an average plant height of 103 cm and is moderately susceptible to yellow rust?",
    "options": ["DBW 222", "DBW 187", "HD 3226", "HD 2967"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Which wheat variety is resistant to yellow and brown rust and possesses good grain quality characteristics?",
    "options": ["DBW 222", "HD 3226", "Unnat PBW 343", "Unnat PBW 550"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Which wheat variety is suitable for cultivation in Punjab except sub-mountainous regions?",
    "options": ["DBW 222", "DBW 187", "HD 3226", "HD 2967"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Which wheat variety is an improved version of PBW 550, has an average plant height of 86 cm, and matures in about 145 days?",
    "options": ["Unnat PBW 343", "Unnat PBW 550", "PBW 725", "PBW 677"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Which wheat variety is susceptible to new races of yellow rust and moderately resistant to brown rust?",
    "options": ["HD 3086", "WH 1105", "HD 2967", "DBW 187"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Which wheat variety possesses higher grain zinc concentration, good for human health, and is resistant to yellow and brown rust?",
    "options": ["PBW Zinc 2", "PBW RS1", "PBW 1 Chapati", "PBW 1 Zn"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Which wheat variety is a premium quality bread wheat variety with excellent chapati-making properties?",
    "options": ["PBW RS1", "PBW 1 Chapati", "PBW 1 Zn", "WHD 943"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Which wheat variety is durum wheat (Wadanak) suitable for pasta making and resistant to yellow and brown rusts?",
    "options": ["WHD 943", "PDW 291", "PBW RS1", "PBW 1 Zn"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Which wheat variety is recommended for cultivation in Punjab under irrigated very late sown conditions (January sowing)?",
    "options": ["PBW 771", "PBW 757", "PBW 752", "PBW 1 Zn"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Which wheat variety possesses high resistant starch in grains, suitable for diabetic patients, and is resistant to yellow rust?",
    "options": ["PBW Zinc 2", "PBW RS1", "PBW 1 Chapati", "PBW 1 Zn"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "What is the recommended method for managing paddy straw when wheat is sown after paddy harvest?",
    "options": ["Burn the paddy straw", "Incorporate paddy straw into the soil without chopping", "Chop the paddy straw into small pieces and mix it into the soil", "Collect the paddy straw and use it for animal bedding"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Which tool can be used for sowing wheat in standing paddy stubbles?",
    "options": ["Plough", "Rotavator", "Happy Seeder", "Hand seeder"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "When is the optimum time for sowing wheat in Punjab?",
    "options": ["First fortnight of October", "Second fortnight of November", "First fortnight of December", "Third fortnight of January"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "How does delayed sowing of wheat affect yield?",
    "options": ["Increases yield", "No effect on yield", "Reduces yield", "Improves grain quality"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Which variety of wheat is suitable for sowing with Happy Seeder and Super Seeder?",
    "options": ["PBW 826", "PBW 869", "PBW 803", "PBW Zinc 2"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "What is the seed rate for conventional sowing of wheat?",
    "options": ["40 kg per acre", "45 kg per acre", "50 kg per acre", "55 kg per acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Which variety of wheat is recommended for sowing in the first fortnight of January?",
    "options": ["PBW 771", "PBW 757", "PBW 752", "PBW RS1"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "How does continuous retention/incorporation of paddy straw improve soil health?",
    "options": ["Increases soil erosion", "Reduces soil fertility", "Improves soil structure", "Increases soil compaction"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "What is the purpose of treating wheat seed for termite?",
    "options": ["Improve germination", "Control termite infestation", "Increase seed size", "Enhance seed color"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Which variety of wheat possesses higher grain zinc concentration?",
    "options": ["PBW RS1", "PBW 1 Chapati", "PBW Zinc 2", "PBW 1 Zn"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "How does the use of Happy Seeder benefit wheat cultivation?",
    "options": ["Reduces soil compaction", "Increases soil erosion", "Improves seed placement", "Decreases seed rate"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "What is the recommended method for managing paddy straw when wheat is sown after manual harvested paddy fields?",
    "options": ["Burn the paddy straw", "Incorporate paddy straw into the soil without chopping", "Chop the paddy straw into small pieces and mix it into the soil", "Collect the paddy straw and use it for animal bedding"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Which variety of wheat is suitable for sowing in South Western districts of Punjab?",
    "options": ["PBW 826", "PBW 869", "PBW 803", "PBW RS1"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "What is the recommended seed rate for sowing wheat with Happy Seeder?",
    "options": ["40 kg per acre", "45 kg per acre", "50 kg per acre", "55 kg per acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "How does delayed sowing affect wheat yield?",
    "options": ["Increases yield", "No effect on yield", "Reduces yield", "Improves grain quality"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Which tool can be used for preparing the dry seedbed in heavy soil?",
    "options": ["Disc harrow", "Plough", "Rotavator", "Cultivator with pulverizing roller-cum-puddler"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "What is the recommended seed rate for PBW 869 for conventional sowing?",
    "options": ["40 kg per acre", "45 kg per acre", "50 kg per acre", "55 kg per acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Which variety of wheat is recommended for sowing in the first fortnight of December?",
    "options": ["PBW 771", "PBW 757", "PBW 752", "PBW RS1"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "How does continuous retention/incorporation of paddy straw help in increasing wheat productivity?",
    "options": ["Reduces soil erosion", "Increases soil fertility", "Improves soil health", "Decreases soil compaction"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "What is the recommended seed rate for PBW 869 for sowing with Happy Seeder?",
    "options": ["40 kg per acre", "45 kg per acre", "50 kg per acre", "55 kg per acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
  },
  {
        title: "Wheat Part-02",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 5400,
    
        totalMarks: 80,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "How can paddy straw be managed for wheat sowing after paddy harvest?",
    "options": ["Burn the straw", "Chop the straw into small pieces and mix it into the soil", "Collect and use the straw for animal bedding", "Leave the straw on the field without any treatment"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "What is the benefit of retaining or incorporating paddy straw through Happy Seeder for more than three years?",
    "options": ["Increase in soil compaction", "Decrease in wheat productivity", "Improvement in soil health", "Reduction in soil fertility"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "What should be done if the field has enough soil moisture after removing paddy straw?",
    "options": ["Apply pre-sowing irrigation", "Burn the straw immediately", "Undertake tillage straightaway", "Use disc harrow for plowing"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "When is the optimum sowing time for wheat in Punjab?",
    "options": ["First fortnight of November", "Second fortnight of October", "Third fortnight of December", "Fourth week of January"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "How does delayed sowing of wheat affect yield?",
    "options": ["Increases yield", "No effect on yield", "Reduces yield", "Improves grain quality"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Which variety of wheat is recommended for sowing in South Western districts of Punjab?",
    "options": ["PBW 826", "PBW 803", "PBW 869", "PBW Zinc 2"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "What is the recommended seed rate for conventional sowing of wheat?",
    "options": ["40 kg per acre", "45 kg per acre", "50 kg per acre", "55 kg per acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "How does continuous retention/incorporation of paddy straw help in increasing wheat productivity?",
    "options": ["Reduces soil compaction", "Increases soil fertility", "Improves soil health", "Decreases soil erosion"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Which variety of wheat is suitable for sowing with Happy Seeder and Super Seeder?",
    "options": ["PBW 826", "PBW 869", "PBW 803", "PBW Zinc 2"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "What is the purpose of treating wheat seed for termite?",
    "options": ["Improve germination", "Control termite infestation", "Increase seed size", "Enhance seed color"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "What is the recommended seed rate for conventional sowing of PBW 869?",
    "options": ["40 kg per acre", "45 kg per acre", "50 kg per acre", "55 kg per acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "How much seed should be used for sowing Unnat PBW 550 with a Happy Seeder?",
    "options": ["40 kg per acre", "45 kg per acre", "50 kg per acre", "55 kg per acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "What is the recommended seed treatment for termite control?",
    "options": ["Cruiser 70 WS", "Neonix 20 FS", "Dursban/Ruban/Durmet 20 EC", "All of the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "How much seed treatment is recommended for loose smut control?",
    "options": ["13 ml Raxil Easy/Orius 6 FS per 40 kg seed", "120 g Vitavax Power 75 WS per 40 kg seed", "80 g Vitavax 75 WP per 40 kg seed", "All of the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Which seed treatment is effective against flag smut?",
    "options": ["Orius 6 FS", "Vitavax Power 75 WS", "Vitavax 75 WP", "Tebuseed/Seedex/Exzole 2 DS"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "What is the recommended seed rate for all other wheat varieties for conventional sowing?",
    "options": ["40 kg per acre", "45 kg per acre", "50 kg per acre", "55 kg per acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "How should the seed be treated for termite control?",
    "options": ["Treat with Cruiser 70 WS and dry in shade", "Treat with Neonix 20 FS and dry in shade", "Treat with Dursban/Ruban/Durmet 20 EC and dry in shade", "Treat with all three and dry in direct sunlight"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "What is the seed rate for Unnat PBW 550 for conventional sowing?",
    "options": ["40 kg per acre", "45 kg per acre", "50 kg per acre", "55 kg per acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Which seed treatment is effective against smuts of wheat?",
    "options": ["Cruiser 70 WS", "Neonix 20 FS", "Dursban/Ruban/Durmet 20 EC", "Raxil Easy/Orius 6 FS"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "How should the seed be treated for flag smut control?",
    "options": ["Treat with Orius 6 FS and dry in shade", "Treat with Vitavax Power 75 WS and dry in shade", "Treat with Vitavax 75 WP and dry in shade", "Treat with Tebuseed/Seedex/Exzole 2 DS and dry in shade"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "When should seed treatment be done to avoid affecting seed germination?",
    "options": ["At the time of sowing", "One week before sowing", "One month before sowing", "Seed treatment does not affect seed germination"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "How should seed treatment be done effectively?",
    "options": ["Using a seed treating drum", "Soaking seeds in water for 24 hours", "Exposing seeds to direct sunlight", "Spraying seeds with pesticides"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "What is the recommended gap between pesticide treatment and seed inoculation?",
    "options": ["1 hour", "3 hours", "6 hours", "12 hours"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "How should seed inoculation be applied?",
    "options": ["Mix with fertilizer and apply during sowing", "Apply directly to seeds and let them dry", "Spray on seeds immediately before sowing", "Soak seeds in the inoculant solution"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "What is the recommended quantity of consortium biofertilizer for one acre of seeds?",
    "options": ["100 g", "250 g", "500 g", "1 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "What is the purpose of using biofertilizers in seed treatment?",
    "options": ["To increase seed size", "To improve seed color", "To increase grain yield and maintain/improve soil health", "To protect seeds from pests"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "How should seeds be treated with biofertilizers before sowing?",
    "options": ["Soak seeds in biofertilizer solution overnight", "Apply biofertilizer to seeds and sow immediately", "Mix biofertilizer with soil and then sow seeds", "Apply biofertilizer to seeds after sowing"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "What is the recommended drying method for seeds treated with biofertilizers?",
    "options": ["Dry in direct sunlight", "Dry in shade", "Dry under a fan", "Dry using a heater"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "What is the recommended depth for sowing wheat using a seed-cum-fertilizer drill in conventional sowing?",
    "options": ["2-4 cm", "4-6 cm", "6-8 cm", "8-10 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "What is the recommended row spacing for wheat in conventional sowing?",
    "options": ["10-15 cm", "15-20 cm", "20-25 cm", "25-30 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "How should soaked seeds be sown to hasten the emergence of late-sown wheat?",
    "options": ["Soak for 12 hours before sowing", "Soak for 24 hours before sowing", "Soak for 48 hours before sowing", "Soak for 72 hours before sowing"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "What is the recommended spacing between rows in bi-directional sowing?",
    "options": ["10-15 cm", "15-20 cm", "20-25 cm", "25-30 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "What is the advantage of raised bed sowing?",
    "options": ["Efficient use of water and fertilizers", "Reduced weed emergence", "Mechanical weed control is possible", "All of the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "How can wheat be sown in unprepared fields using zero tillage?",
    "options": ["Use a bed planter", "Use a seed-cum-fertilizer drill", "Use a tractor drawn zero till drill or strip till drill", "Use a seed treating drum"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "What should be done after three years of continuous sowing of wheat under zero tillage?",
    "options": ["Apply more fertilizer", "Plough the field to tackle perennial weeds or rodents", "Increase seed rate", "Introduce new varieties of wheat"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "What is the purpose of using a Happy Seeder, Super Seeder, or PAU Smart Seeder for sowing wheat in combine harvested paddy fields?",
    "options": ["To increase soil fertility", "To reduce straw burning or removal", "To control weeds", "To improve water efficiency"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "How should the loose straw be prepared before sowing with an Ordinary Happy Seeder?",
    "options": ["Spread uniformly in the field manually", "Burn the straw for better germination", "Leave the straw as it is", "Use a straw chopper-cum-spreader to chop the straw into small pieces"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "What is the purpose of the press wheel assembly attached to the PAU Happy Seeder?",
    "options": ["To chop the straw into small pieces", "To spread the chopped paddy straw in the field", "To press the chopped paddy straw in the inter-row area as mulch", "To harvest paddy"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Which machine should be used for sowing wheat in combine harvested paddy fields after cutting and spreading of standing stubbles with PAU Straw Cutter-cum-Spreader?",
    "options": ["Ordinary Happy Seeder", "PAU Happy Seeder", "Super Seeder", "PAU Smart Seeder"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "What is the recommended row spacing for sowing with a Happy Seeder for better weed control and higher yield?",
    "options": ["4 inches", "6 inches", "8 inches", "10 inches"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
  },
  {
        title: "Wheat Part-03",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 3600,
    
        totalMarks: 60,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "What should be done in Happy Seeder sown wheat fields to control rodents and ensure proper growth?",
    "options": ["Apply recommended dose of urea immediately after sowing", "Apply rodenticide before sowing", "Burn the straw after sowing", "Apply recommended dose of urea immediately before first and second irrigations"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "How much higher seed per acre should be used for sowing with a Happy Seeder compared to conventional sowing?",
    "options": ["2 kg", "5 kg", "8 kg", "10 kg"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Why is sowing wheat in standing rice or basmati rice fields recommended?",
    "options": ["To reduce soil pH", "To increase infiltration rate", "To save time and labor", "To improve rice yield"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "When should wheat seed be broadcast in standing rice or basmati rice fields?",
    "options": ["After the last irrigation in November", "Before the last irrigation in October", "During the rice harvesting season", "After the rice is completely harvested"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "What should be ensured before sowing wheat in standing rice or basmati rice fields?",
    "options": ["High soil pH", "Low moisture content in the field", "Sufficient moisture content in the field", "Use of herbicides for weed control"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "How should wheat seed be sown in standing rice or basmati rice fields?",
    "options": ["Broadcast", "Drilled", "Transplanted", "Dibbled"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "What should be done if a combine without SMS is used for rice harvesting before sowing wheat?",
    "options": ["Apply fertilizer immediately after sowing", "Distribute the lumps of loose straw for proper germination", "Burn the straw to clear the field", "Apply herbicides to control weeds"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "How should nitrogen fertilizer be applied for wheat sown in standing rice or basmati rice fields?",
    "options": ["Half with first irrigation and half with second irrigation", "Half before sowing and half after germination", "All at once before sowing", "Only after the wheat crop has fully emerged"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "What is the recommended timeframe for completing the second split of nitrogen application for wheat sown in standing rice or basmati rice fields?",
    "options": ["Within 30 days after sowing", "Within 40 days after sowing", "Within 50-55 days after sowing", "Within 60 days after sowing"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "What is surface seeding-cum-mulching?",
    "options": ["A method for deep sowing of wheat seeds", "A technique for managing paddy residue", "A process of transplanting rice seedlings", "A method for applying basal fertilizer to wheat"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "What are the benefits of surface seeding-cum-mulching?",
    "options": ["Requires costly machinery", "Provides partial mulching", "Low-cost and easy technique", "Increases weed infestation"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "How is wheat seed and basal fertilizer applied in surface seeding-cum-mulching?",
    "options": ["Manual broadcasting", "Deep drilling", "Surface spraying", "Drip irrigation"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Which machine is used for surface seeding of wheat in a combine harvested paddy field?",
    "options": ["PAU Super Seeder", "Cutter-cum-Spreader", "PAU Surface Seeder", "Fluted roller metering system"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "What should be ensured before surface seeding-cum-mulching?",
    "options": ["Excessive soil moisture", "Large plot size", "Levelled field", "Delayed irrigation"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "How is irrigation used in surface seeding-cum-mulching?",
    "options": ["To delay germination of wheat", "To initiate germination of wheat", "To prevent weed growth", "To increase soil moisture"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "What is the recommended timing for cut-off irrigation before rice harvesting for surface seeding-cum-mulching?",
    "options": ["5 days before harvesting", "10 days before harvesting", "15 days before harvesting", "20 days before harvesting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Which is the newly released variety of wheat in 2025?",
    "options": ["PBW871", "PBW872", "PBW 785", "PBW 343"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "How much prali char should be applied per acre to save 35 kg urea and improve yield and soil health?",
    "options": ["1 tonne", "2 tonnes", "3 tonnes", "4 tonnes"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "What is the recommended method for applying bio-fertilizers to wheat seeds?",
    "options": ["Apply directly to the soil before sowing", "Mix with water and spray on the soil", "Inoculate the seed before sowing as per recommendations", "Apply with chemical fertilizers during sowing"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "How should chemical fertilizers be applied to wheat in the absence of a soil test?",
    "options": ["Apply based on crop requirement", "Apply based on the previous year's application", "Apply based on the recommendations for medium fertile soils", "Do not apply chemical fertilizers without a soil test"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "What is the recommended rate of Neem coated urea per acre for wheat cultivation?",
    "options": ["55 kg", "75 kg", "110 kg", "155 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "When using 125 kg of Nitrophosphate, how much should the quantity of urea be decreased per acre?",
    "options": ["25 kg", "50 kg", "75 kg", "100 kg"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "How much DAP should be drilled per acre at sowing?",
    "options": ["45 kg", "55 kg", "65 kg", "75 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "How much urea should be broadcast per acre for a timely sown wheat crop with the first and second irrigation?",
    "options": ["35 kg", "45 kg", "55 kg", "65 kg"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "When should urea be broadcast for a wheat crop sown after mid-December?",
    "options": ["With the first irrigation", "With the second irrigation", "55 days after sowing", "75 days after sowing"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "What should be done if water stagnates near the second irrigation and urea was supposed to be broadcasted?",
    "options": ["Broadcast urea anyway", "Skip the urea application", "Apply urea as a foliar spray", "Apply urea with the third irrigation"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "How much urea solution should be sprayed per acre at 42 and 54 days after sowing if water stagnates near the second irrigation?",
    "options": ["5 kg", "10 kg", "15 kg", "20 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "How much urea should be broadcast per acre before the first and second irrigation for wheat sown with different rice straw management practices?",
    "options": ["35 kg", "45 kg", "55 kg", "65 kg"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "What should be done to the urea application from the fourth year onwards in fields where wheat has been sown with Happy Seeder continuously for 3 years?",
    "options": ["Increase by 20 kg per acre", "Decrease by 20 kg per acre", "Maintain the same amount", "Stop the urea application"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "What is the improved variety for rainfed wheat?",
    "options": ["PBW672", "PBW 660", "PBW872", "PBW456"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
  },
  {
        title: "Wheat Part-04",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 7200,
    
        totalMarks: 116,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
          
  {
    "id": 1,
    "question": "Which of the following wheat varieties is recommended for sowing with Happy Seeder/Super Seeder in in-situ rice residue managed fields?(MET 2022)",
    "options": ["PBW 803", "PBW 869", "PBW 824", "HD 3086"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "What is the seed rate recommended for PBW 869 wheat variety?",
    "options": ["50 kg per acre", "35 kg per acre", "45 kg per acre", "40 kg per acre"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Which of the following wheat varieties is suitable for cultivation under poplar plantations? (MET 2024)",
    "options": ["PBW 752 and PBW 757", "PBW 725 and PBW 677/PBW 872", "PBW 803 and PBW 869", "HD 3086 and DBW 222"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "PBW RS1 is recommended to be sown during which period? (MET 2023)",
    "options": ["First week of December", "Second to fourth week of November", "Last week of October", "Mid-November to mid-December"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Which wheat variety is recommended for cultivation in very late sown (January) irrigated conditions in Punjab? (MET 2023)",
    "options": ["PBW 771", "PBW 752", "PBW 757", "HD 3226"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Which variety of wheat is known for high resistant starch and low glycemic index properties?",
    "options": ["PBW Biscuit 1", "PBW RS1", "PBW Zinc 2", "PBW 1 Zn"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Which wheat variety has the lowest average grain yield among the special purpose varieties?",
    "options": ["PBW 1 Chapati", "PBW Zinc 2", "PBW RS1", "WHD 943"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Which durum wheat variety is known for resistance to Karnal bunt and pasta-making suitability?",
    "options": ["PBW 1 Zn", "PBW Biscuit 1", "WHD 943", "DBW 222"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "What is the production of wheat in Punjab 2025-2026? (MET 2024)",
    "options": ["181 Lakh tonnes", "133 Lakh tones", "181.76 Lakh tones ", "114 Lakh tones"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Which of the following wheat varieties released in 2024 is specifically bread for biscuit making?",
    "options": ["PBW Zinc 2", "PBW Biscuit 1", "PBW RS1", "HD 3226"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "In wheat fourth year onwards how much amount of urea saved when we incorporate paddy straw?(MET 2022) ",
    "options": ["20 kg", "21 kg", "22 kg", "23 kg"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Which of the following is not recommended for cultivation in sub-mountainous areas of Punjab?",
    "options": ["PBW 826", "DBW 222", "PBW 725", "Unnat PBW 343"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "How much reduction of nitrogenous fertilizer is there and irrigation practices in pbw chappati 1 variety?",
    "options": ["25% ,1 irrigation", "23 % ,half irrigation", "17%,2 irrigation", "22% , 4 irrigation"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "PBW 1 Zn variety is known for which nutritional trait?",
    "options": ["High iron content", "High zinc concentration", "High calcium", "High dietary fiber"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Which wheat variety released in 2023 is known for red glumes and higher zinc content?",
    "options": ["PBW RS1", "PBW Zinc 2", "PBW 1 Zn", "PBW Biscuit 1"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Which variety is an improved version of PBW 343?",
    "options": ["PBW 869", "Unnat PBW 343", "PBW 803", "PBW 725"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "A delay in one week of optimum sowing reduce wheat yield by how much kg per acre ?(MET 2024)",
    "options": ["154 Kg", "150 kg", "156 kg", "151 kg"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Which variety among the following is best suited for South-Western Punjab?",
    "options": ["PBW 752", "PBW 803", "PBW 869", "HD 3086"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "For Flag smut which active ingredient is used for seed treatment?(MET 2022)",
    "options": ["carboxin", "tebuconazole", "both a and b", "None of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "PAU Happy seeder has been upgrading by attaching ?",
    "options": ["wheel hoe", "press wheel", "none of these", "both a and b"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Which variety is known for cookie and biscuit making quality?",
    "options": ["PBW 1 Chapati", "PBW Biscuit 1", "PBW Zinc 2", "PBW 869"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Which of the following varieties has the highest spread factor (9.8/10)?",
    "options": ["PBW Biscuit 1", "PBW RS1", "WHD 943", "HD 3226"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "In case of happy seeder how much extra seed per acre is recommended? (MET 2022)",
    "options": ["5 kg", "9 kg", "3 kg", "4 kg"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Which wheat(durum) variety is highly suitable for pasta making and has low yellow berry incidence?",
    "options": ["PDW 291", "PBW 1 Zn", "PBW RS1", "PBW 826"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "In standing rice what is the seed rate of wheat?( MET QUESTION )",
    "options": ["50-60 kg", "70-80 kg", "90 kg", "100 kg"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "What is the recommended seed rate for Unnat PBW 550?",
    "options": ["40 kg/acre", "35 kg/acre", "50 kg/acre", "45 kg/acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "The average yield of PBW RS1 is:",
    "options": ["23.0 q/acre", "22.9 q/acre", "17.1 q/acre", "19.8 q/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "PBW 1 Chapati is preferred for which quality?",
    "options": ["Pasta making", "Chapati making", "Biscuit making", "Pizza base preparation"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Which wheat variety is susceptible to new races of yellow rust?",
    "options": ["DBW 222", "HD 3086", "PBW 803", "PBW 826"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Which wheat variety has the shortest plant height among all listed?",
    "options": ["Unnat PBW 550", "PBW RS1", "PDW 291", "PBW 771"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "PBW 826 was released in which year?",
    "options": ["2021", "2022", "2020", "2023"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Which of the following has excellent field resistance to Karnal bunt?",
    "options": ["HD 3226", "WHD 943", "PBW 725", "PBW 1 Zn"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Which wheat variety has a high coleoptile length and is suitable for residue fields?",
    "options": ["PBW 869", "HD 3086", "PBW 803", "PBW 1 Zn"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "In wheat, what is the average yield (2022-23) in Punjab per acre?",
    "options": ["18.5 quintals", "20.2 quintals", "19.06 quintals", "21.4 quintals"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "What is the maturity duration of PBW 869?",
    "options": ["145 days", "153 days", "158 days", "154 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "What is the optimum time for sowing wheat in Punjab?",
    "options": ["Second fortnight of October", "First fortnight of November", "Last week of November", "First week of December"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "A delay of one week from the optimum sowing time reduces wheat yield by approximately:",
    "options": ["100 kg/acre", "150 kg/acre", "200 kg/acre", "250 kg/acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "The recommended seed rate for PBW 869 and Unnat PBW 550 under conventional sowing is:",
    "options": ["40 kg/acre", "45 kg/acre", "50 kg/acre", "55 kg/acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "For sowing wheat with a Happy Seeder, what seed rate is recommended for varieties other than Unnat PBW 550?",
    "options": ["40 kg/acre", "45 kg/acre", "50 kg/acre", "55 kg/acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Which machine helps place and press paddy straw as mulch between wheat rows?",
    "options": ["Super Seeder", "Zero Tillage Drill", "PAU Happy Seeder", "Rotavator"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "For termite control in wheat seed treatment, which chemical can be used?",
    "options": ["Vitavax", "Raxil", "Cruiser 70 WS", "Carbendazim"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "What is the seed rate for Unnat PBW 550 under Happy Seeder sowing?",
    "options": ["40 kg/acre", "45 kg/acre", "50 kg/acre", "55 kg/acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "The recommended row spacing under late sown wheat conditions is:",
    "options": ["10 cm", "12 cm", "15 cm", "20 cm"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Which of the following is a bi-directional sowing advantage?",
    "options": ["Requires zero tillage", "Reduces weed infestation", "Saves seed cost", "Eliminates last ploughing"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "What is the recommended dose of DAP per acre at sowing with Happy Seeder?",
    "options": ["55 kg", "60 kg", "65 kg", "70 kg"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "The drill depth for conventional sowing of wheat is:",
    "options": ["2–3 cm", "3–5 cm", "4–6 cm", "5–7 cm"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "How much urea is broadcasted at each irrigation for a timely sown wheat crop?",
    "options": ["35 kg", "40 kg", "45 kg", "50 kg"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "What is the ideal row spacing for Happy Seeder sowing for better weed control?",
    "options": ["6 inch", "8 inch", "10 inch", "12 inch"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "What is the total N dose (urea equivalent) recommended for medium fertility soil?",
    "options": ["80 kg urea", "90 kg urea", "100 kg urea", "110 kg urea"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "How much DAP is drilled per acre in wheat under conventional sowing?",
    "options": ["55 kg", "60 kg", "65 kg", "70 kg"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Which machine is low-cost and used in surface seeding-cum-mulching?",
    "options": ["Super Seeder", "Surface Seeder", "Happy Seeder", "Strip Till Drill"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "Which seed treatment chemical controls both termites and smuts?",
    "options": ["Cruiser 70 WS", "Neonix 20 FS", "Dursban", "Raxil"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "How much DAP should be drilled at sowing in medium fertility soils with conventional tillage?",
    "options": ["45 kg/acre", "55 kg/acre", "65 kg/acre", "75 kg/acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Which mobile app is used for determining urea dose using Green Seeker readings?",
    "options": ["PAU-Wheat Care", "Agri-Advisor", "PAU-Urea Guide", "Kisan App"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "In case of stagnant water near second irrigation, how should urea be applied?",
    "options": ["Broadcast urea", "Apply through fertigation", "Spray urea solution", "Do not apply urea"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "Which of the following is a symptom of manganese deficiency in wheat?",
    "options": ["Bushy plants with chlorotic leaves", "Purple margins on older leaves", "Specks of light greyish yellow on middle leaves", "Wilting of seedlings"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "How much zinc sulphate (21%) is applied per acre to correct zinc deficiency in wheat?",
    "options": ["15 kg", "20 kg", "25 kg", "30 kg"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "Which pre-emergence herbicide is commonly recommended for controlling Phalaris minor?",
    "options": ["Isoproturon", "Pendimethalin", "Metsulfuron", "Carfentrazone"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
        
  },
  {
        title: "Barley and Spring Maize",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 5400,
    
        totalMarks: 90,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Which barley variety was released in 2025 and is suitable for the brewing industry?",
    "options": ["PL 891", "DWRB 123", "PL 942", "DWRUB 52"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "PL 942 possesses all the following desirable malt quality traits except:",
    "options": ["β-glucan", "Free amino nitrogen", "Malt extract", "High lysine content"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Barley is suitable in which region where rainfall is:",
    "options": ["Heavy rainfall", "Scanty rainfall", "Medium rainfall", "None of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Which barley variety is a two rowed malt barley variety?",
    "options": ["PL 807", "PNB 825", "DWRB 123", "PB 0788"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "β-glucan present in barley is particularly useful in preventing:",
    "options": ["Cancer and hypertension", "Heart diseases and Type-II diabetes", "Kidney stones", "Tuberculosis"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "PL 891 is classified as:",
    "options": ["Two-rowed malt barley", "Six-rowed feed barley", "Two-rowed hulless food barley", "Six-rowed food barley"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Which variety requires a higher seed rate of 50 kg/acre due to bold seed size?",
    "options": ["PL 807", "PL 891", "DWRUB 52", "PL 426"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Scientific name of barley:",
    "options": ["Hordeum vulgare", "Hordeum nuda", "Hordeum ascavata", "All of the above"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Which barley variety is particularly suitable for the brewing industry?",
    "options": ["PL 807", "PL 426", "DWRB 123", "Both PL 942 and DWRB 123"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Covert smut of barley is due to which pathogen?",
    "options": ["U. hordei", "Puccinia striformis", "D. graminae", "None of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Barley gives best results when sown between:",
    "options": ["Oct 1–31", "Oct 15–Nov 15", "Nov 1–30", "Nov 15–Dec 15"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Recommended seed rate under timely sown irrigated conditions is:",
    "options": ["25 kg/acre", "30 kg/acre", "35 kg/acre", "45 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "For rainfed and late-sown barley, the recommended seed rate is:",
    "options": ["35 kg/acre", "40 kg/acre", "45 kg/acre", "50 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Covered smut and loose smut in barley can be controlled by seed treatment with:",
    "options": ["Carbendazim @ 2 g/kg seed", "Vitavax 75 WP @ 1.5 g/kg seed", "Mancozeb @ 3 g/kg seed", "Captan @ 2 g/kg seed"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "The recommended row spacing for normally sown barley is:",
    "options": ["15 cm", "18 cm", "20 cm", "22.5 cm"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Recommended row spacing for late-sown barley is:",
    "options": ["10–15 cm", "18–20 cm", "22.5–25 cm", "25–30 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Zinc deficiency in barley is characterized by:",
    "options": ["Purple leaves", "Bushy and stunted crop", "Leaf scorching", "Excessive tillering"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Barley is grown under which crop season?",
    "options": ["Rabi", "Zaid", "Kharif", "None of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "To enrich zinc content in barley grains, zinc sulphate sprays should be applied at:",
    "options": ["Tillering and booting", "Booting and flowering", "Earing and milk stages", "Grain filling and maturity"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "In south-western dry districts of Punjab, barley generally requires:",
    "options": ["No irrigation", "One post-sowing irrigation", "Two post-sowing irrigations", "Four post-sowing irrigations"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Which barley variety is six-rowed and used mainly as feed barley?",
    "options": ["PL 891", "PL 807", "DWRB 123", "PL 942"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Which treatment in barley is used for controlling loose smut of barley?",
    "options": ["Hot water treatment", "Seed inoculation in hot water + azorhizobium", "Solar heat treatment", "All of these"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Hulless barley can be consumed as:",
    "options": ["Whole grain cereal", "Barley flakes", "Barley flour", "All of the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Barley sattu is mainly used as:",
    "options": ["Animal feed", "Brewing material", "Energy drink", "Biofuel source"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Which statement is correct regarding barley cultivation in Punjab?",
    "options": ["Barley performs poorly in salt-affected soils.", "Barley requires high rainfall.", "Barley is drought resistant and can be grown in salt-affected soils during reclamation.", "Barley cannot be grown after paddy."],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Which of the following is a recommended variety of Spring Maize in Punjab?",
    "options": ["PMH 7", "P 1844", "DKC 9108", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Spring maize is popularly grown in which district of Punjab?",
    "options": ["Bathinda", "Hoshiarpur", "Fazilka", "Mansa"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Which crop rotation is recommended for spring maize?",
    "options": ["Rice-Wheat", "Cotton-Wheat", "Maize-Vegetable pea/Potato-Spring maize", "Sugarcane-Wheat"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Recommended sowing time of spring maize is:",
    "options": ["1–15 January", "20 January–15 February", "15 February–15 March", "1–15 March"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Late sowing of spring maize may cause:",
    "options": ["Waterlogging", "Frost damage", "Pollen desiccation", "Lodging"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Recommended seed rate for spring maize is:",
    "options": ["8 kg/acre", "10 kg/acre", "12 kg/acre", "15 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "For control of maize shoot fly, seed should be treated with:",
    "options": ["Mancozeb", "Carbendazim", "Gaucho 600 FS", "Captan"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Dose of Gaucho 600 FS for seed treatment is:",
    "options": ["2 mL/kg seed", "4 mL/kg seed", "6 mL/kg seed", "8 mL/kg seed"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Recommended ridge spacing for spring maize is:",
    "options": ["45 cm", "50 cm", "60 cm", "75 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Recommended plant-to-plant spacing on ridges is:",
    "options": ["15 cm", "20 cm", "25 cm", "30 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Recommended bed spacing is:",
    "options": ["60 cm", "65 cm", "67.5 cm", "75 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Atrataf 50 WP contains:",
    "options": ["Glyphosate", "Atrazine", "Paraquat", "Pendimethalin"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Atrazine is effective against:",
    "options": ["Fungi", "Nematodes", "Broadleaf weeds and grasses", "Bacteria"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Fall armyworm is a major:",
    "options": ["Disease", "Weed", "Insect pest", "Nematode"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Which insecticide is recommended against fall armyworm?",
    "options": ["Coragen 18.5 SC", "Rogor", "Endosulfan", "Monocrotophos"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Critical irrigation stages in spring maize are:",
    "options": ["Emergence and vegetative stage", "Tasseling, silking and grain filling", "Seedling stage only", "Harvest stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Treated maize seed should be sown within:",
    "options": ["7 days", "10 days", "14 days", "21 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Spring maize should preferably be sown on the ______ side of East-West ridges.",
    "options": ["Northern", "Eastern", "Southern", "Western"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "How much amount of paddy straw is to be spread at time of sowing for saving irrigation water?",
    "options": ["40 quintal", "30 quintal", "59 quintal", "34 quintal"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Apply how much amount of FYM per acre to the maize crop per year to omit the application of N, P, K, Zn at basal dose?",
    "options": ["4 Tonnes", "6 Tonnes", "8 Tonnes", "10 Tonnes"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
  },
  {
        title: "Millets",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 3600,
    
        totalMarks: 50,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Finger millet is scientifically known as:",
    "options": ["Setaria italica", "Eleusine coracana", "Panicum miliaceum", "Echinochloa crusgalli"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Foxtail millet is scientifically known as:",
    "options": ["Setaria italica", "Panicum miliaceum", "Panicum sumatrense", "Paspalum scrobiculatum"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Proso millet is scientifically known as:",
    "options": ["Setaria italica", "Panicum miliaceum", "Panicum sumatrense", "Eleusine coracana"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Barnyard millet is scientifically known as:",
    "options": ["Echinochloa crusgalli", "Paspalum scrobiculatum", "Panicum miliaceum", "Setaria italica"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Kodo millet is scientifically known as:",
    "options": ["Panicum sumatrense", "Setaria italica", "Paspalum scrobiculatum", "Eleusine coracana"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Little millet is scientifically known as:",
    "options": ["Panicum sumatrense", "Panicum miliaceum", "Setaria italica", "Echinochloa crusgalli"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Punjab Cheena 1 is a variety of:",
    "options": ["Foxtail millet", "Finger millet", "Proso millet", "Kodo millet"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Punjab Cheena 1 was released in:",
    "options": ["2023", "2024", "2025", "2026"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Punjab Kangni 1 is a variety of:",
    "options": ["Proso millet", "Little millet", "Foxtail millet", "Barnyard millet"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Punjab Kangni 1 was released in:",
    "options": ["2023", "2024", "2025", "2026"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Best sowing time of Proso millet in Punjab is:",
    "options": ["1–20 March", "10–30 March", "25 March–20 April", "1–15 April"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Best sowing time of Foxtail millet in Punjab is:",
    "options": ["10–30 March", "15 March–15 April", "25 March–20 April", "1–30 April"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Recommended seed rate for Proso millet is:",
    "options": ["2–3 kg/acre", "3–4 kg/acre", "4–5 kg/acre", "6–7 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Recommended seed rate for Foxtail millet is:",
    "options": ["2–3 kg/acre", "3–4 kg/acre", "4–5 kg/acre", "6–7 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Recommended row spacing for Proso millet is:",
    "options": ["20 cm", "22.5 cm", "25 cm", "30 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Recommended row spacing for Foxtail millet is:",
    "options": ["22.5 cm", "25 cm", "30 cm", "37.5 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Minor millets are best suited to:",
    "options": ["Waterlogged soils", "Saline soils", "Marginal growing conditions", "Marshy lands"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Minor millets require ______ climate.",
    "options": ["Cool", "Hot", "Humid", "Cold"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Minor millets cannot tolerate:",
    "options": ["Drought", "High temperature", "Waterlogging", "Sandy soils"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Proso millet is known as ______ in Punjabi.",
    "options": ["Kangni", "Cheena", "Bajra", "Mandua"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Foxtail millet is known as ______ in Punjabi.",
    "options": ["Cheena", "Mandua", "Kangni", "Kodra"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Proso millet features:",
    "options": ["High glycemic load", "Medium to high glycemic load", "Low glycemic load", "None of these"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Minor millets are also called:",
    "options": ["Uddupi", "Shree khandvi", "Shree anna", "None of these"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Weed management in minor millets can be done by:",
    "options": ["Wheel hoe", "Rotavator", "Disc harrow", "Laser leveller"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Proso millet is mainly valued as a:",
    "options": ["High-water crop", "Long-duration crop", "Short-duration, low-water crop", "Fodder crop only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
  },
  {
        title: "Pulses (Gram,Lentil,Field Pea,Summer Moong,Summer Mash)",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 7200,
    
        totalMarks: 156,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "PBG 10 is a variety of:",
    "options": ["Kabuli gram", "Desi gram (Irrigated)", "Desi gram (Rainfed)", "Lentil"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "PBG 8 is recommended for:",
    "options": ["Desi gram (Irrigated)", "Kabuli gram", "Rainfed gram", "Summer moong"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "PBG 7 belongs to:",
    "options": ["Kabuli gram", "Desi gram (Irrigated)", "Rainfed gram", "Field pea"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "PDG 4 is a variety of:",
    "options": ["Kabuli gram", "Desi gram (Irrigated)", "Desi gram (Rainfed)", "Mungbean"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "L 552 is a variety of:",
    "options": ["Desi gram", "Green gram", "Kabuli gram", "Lentil"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Which is the latest released gram variety?",
    "options": ["PBG 5", "PBG 8", "PBG 10", "GPF 2"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "PBG 10 is moderately resistant to:",
    "options": ["Wilt only", "Ascochyta blight and Botrytis grey mould", "Rust only", "Powdery mildew"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "PBG 8 is moderately resistant to:",
    "options": ["Wilt", "Dry root rot", "Botrytis grey mould", "Rust"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "PBG 7 is moderately resistant to:",
    "options": ["Ascochyta blight (Chanani)", "Rust", "Powdery mildew", "Anthracnose"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Recommended seed rate for PBG 10 is:",
    "options": ["15-18 kg/acre", "24 kg/acre", "30 kg/acre", "37 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Recommended seed rate for PBG 5 is:",
    "options": ["18 kg/acre", "24 kg/acre", "30 kg/acre", "37 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "Seed rate for most desi gram varieties is:",
    "options": ["10-12 kg/acre", "15-18 kg/acre", "24 kg/acre", "37 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Recommended seed rate for Kabuli gram is:",
    "options": ["24 kg/acre", "30 kg/acre", "37 kg/acre", "40 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Gram grows best on:",
    "options": ["Waterlogged soils", "Saline soils", "Well-drained light to medium soils", "Marshy soils"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Gram is mainly a:",
    "options": ["Kharif pulse crop", "Rabi pulse crop", "Summer pulse crop", "Fodder crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Optimum sowing time of desi gram under rainfed conditions is:",
    "options": ["1–15 October", "10–25 October", "25 October–10 November", "15–30 November"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Optimum sowing time of irrigated desi and kabuli gram is:",
    "options": ["10–25 October", "25 October–10 November", "10–20 November", "December first week"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Recommended row spacing in gram is:",
    "options": ["20 cm", "25 cm", "30 cm", "45 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Recommended sowing method for gram is:",
    "options": ["Broadcasting", "Pora method", "Transplanting", "Dibbling"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Recommended sowing depth of gram is:",
    "options": ["2-3 cm", "4-5 cm", "6-8 cm", "10-12.5 cm"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "For reducing gram caterpillar incidence, which intercrop is recommended?",
    "options": ["Mustard", "Wheat", "Linseed", "Barley"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "After every 20 rows of gram, how many rows of linseed are recommended?",
    "options": ["One", "Two", "Three", "Four"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Which biofertilizer is recommended for gram seed inoculation?",
    "options": ["Azotobacter", "Blue green algae", "Mesorhizobium (LGR-33)", "Azolla"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Raised bed sowing of gram is especially recommended after:",
    "options": ["Maize", "Cotton", "Rice", "Sugarcane"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Raised beds for gram are spaced:",
    "options": ["45 cm apart", "60 cm apart", "67.5 cm apart", "75 cm apart"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Early sowing of crop leads to:",
    "options": ["Insect attack", "Wilt attack", "Both", "None of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Late sowing of crop leads to:",
    "options": ["Wilt attack", "Poor vegetative growth", "Ascochyta blight attack", "None of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "PBG 10 is moderately resistant to:",
    "options": ["Wilt and root rot", "Ascochyta blight and Botrytis grey mould", "Rust and powdery mildew", "Stem rot and anthracnose"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "PBG 8 is moderately resistant to:",
    "options": ["Wilt", "Ascochyta blight", "Botrytis grey mould", "Root rot"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "PBG 7 is moderately resistant to:",
    "options": ["Botrytis grey mould", "Rust", "Ascochyta blight (Chanani)", "Stem rot"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Raised bed sowing of gram is particularly recommended after:",
    "options": ["Maize", "Cotton", "Rice", "Bajra"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Raised bed sowing is especially beneficial on:",
    "options": ["Sandy soils", "Light soils", "Heavy soils", "Saline soils"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Gram seed should be inoculated with recommended ______ before sowing.",
    "options": ["Fungicide", "Herbicide", "Biofertilizer", "Insecticide"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "To obtain higher yield in gram, spray _____ urea solution.",
    "options": ["1%", "2%", "3%", "5%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "First spray of 2% urea should be applied at:",
    "options": ["60 DAS", "75 DAS", "90 DAS", "120 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Second spray of 2% urea should be applied at:",
    "options": ["100 DAS", "105 DAS", "110 DAS", "120 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Recommended sowing period of irrigated gram is:",
    "options": ["10–25 October", "25 October–10 November", "10–25 November", "1–15 December"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "Crop rotation with cereals helps prevent:",
    "options": ["Aphid attack", "Gram caterpillar", "Stem rot, foot rot and other soil-borne diseases", "Bird damage"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Which of the following is a soil-borne disease of gram?",
    "options": ["Foot rot", "Stem rot", "Wilt", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "Scientific name of gram:",
    "options": ["C. arietinum", "C. erecta", "C. rubrense", "C. muscata"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Which is the latest recommended lentil variety in Punjab?",
    "options": ["LL 931", "LL 1373", "LL 699", "LL 56"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "LL 1373 is resistant to:",
    "options": ["Wilt", "Rust", "Blight", "Root rot"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Optimum seed rate for LL 1373 is:",
    "options": ["12 kg/acre", "15 kg/acre", "18 kg/acre", "20 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Recommended seed rate for LL 931 is:",
    "options": ["8-10 kg/acre", "12-15 kg/acre", "18-20 kg/acre", "20-25 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Lentil should be sown in sub-montane areas during:",
    "options": ["First fortnight of October", "Second fortnight of October", "First fortnight of November", "December"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "In other areas of Punjab, lentil should be sown during:",
    "options": ["September end", "Mid October", "End of October to first week of November", "December first week"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Which biofertilizer is recommended for lentil seed inoculation?",
    "options": ["Azotobacter", "Rhizobium (LLR-12)", "Azospirillum", "BGA"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Recommended row spacing for lentil is:",
    "options": ["15 cm", "20 cm", "22.5 cm", "30 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Which crop rotation is recommended for lentil?",
    "options": ["Rice–Lentil–Summer Moong", "Rice–Wheat", "Cotton–Wheat", "Maize–Wheat"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Raised bed sowing of lentil is especially useful on:",
    "options": ["Sandy soils", "Saline soils", "Medium to heavy textured soils", "Gravelly soils"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "IPFD 12-2 is the variety of which crop?",
    "options": ["Gram", "Pea", "Lentils", "None of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "What is the seed rate of field pea?",
    "options": ["10-15 kg", "20-25 kg", "40-45 kg", "5 kg"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "What is the optimum time of sowing for field pea?",
    "options": ["End September to October", "End October to end November", "End October to mid November", "None of these"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Which is the latest recommended variety of Summer Moong in Punjab?",
    "options": ["SML 668", "SML 832", "SML 1827", "ML 818"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Which Summer Moong variety is resistant to Yellow Mosaic Disease?",
    "options": ["SML 668", "SML 832", "SML 1827", "None of these"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "Recommended seed rate for SML 668 is:",
    "options": ["10 kg/acre", "12 kg/acre", "15 kg/acre", "18 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "Recommended seed rate for SML 1827 is:",
    "options": ["10 kg/acre", "12 kg/acre", "15 kg/acre", "18 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "Recommended seed rate for SML 832 is:",
    "options": ["12 kg/acre", "15 kg/acre", "18 kg/acre", "20 kg/acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "Optimum sowing time of Summer Moong is:",
    "options": ["1 March – 20 March", "20 March – 10 April", "10 April – 30 April", "1 May – 20 May"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "Summer Moong sowing can be extended up to:",
    "options": ["First week of April", "Second week of April", "Third week of April", "First week of May"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 61,
    "question": "Recommended row spacing for Summer Moong is:",
    "options": ["15-20 cm", "17.5-22.5 cm", "25-30 cm", "30-45 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 62,
    "question": "Which biofertilizer consortium is recommended for Summer Moong?",
    "options": ["Rhizobium sp. LSMR-1 + Rhizobacterium RB-3", "Rhizobium LLR-12 + RB-2", "Mesorhizobium + RB-1", "Azotobacter + PSB"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 63,
    "question": "In the presence of wheat straw, Summer Moong should preferably be sown with:",
    "options": ["Seed drill", "Kera method", "PAU Happy Seeder", "Broadcasting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 64,
    "question": "Raised bed sowing of Summer Moong is recommended on:",
    "options": ["Sandy soils", "Light soils", "Medium to heavy textured soils", "Saline soils"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 65,
    "question": "Summer Moong sown after potato requires:",
    "options": ["Full fertilizer dose", "Half fertilizer dose", "Nitrogen only", "No fertilizer"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 66,
    "question": "Which herbicide is recommended in Summer Moong for control of grassy weeds, broadleaf weeds and sedges?",
    "options": ["Atrazine", "Pendimethalin", "Imazethapyr 10 SL", "Glyphosate"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 67,
    "question": "First irrigation in Summer Moong should be applied:",
    "options": ["10 DAS", "15 DAS", "25 DAS", "35 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 68,
    "question": "For synchronous maturity, last irrigation should be stopped at about:",
    "options": ["40 DAS", "45 DAS", "55 DAS", "65 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 69,
    "question": "Which is the latest recommended Summer Mash variety in Punjab?",
    "options": ["Mash 414", "Mash 1008", "Mash 1137", "Mash 338"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 70,
    "question": "Mash 1137 is recommended for:",
    "options": ["Entire Punjab", "South-west Punjab", "Sub-montaneous zone of Punjab", "Central zone only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 71,
    "question": "Which Summer Mash variety is resistant to Yellow Mosaic Disease?",
    "options": ["Mash 1008", "Mash 1137", "Both A and B", "None of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 72,
    "question": "Mash 1008 is fairly tolerant to:",
    "options": ["Rust and blight", "Yellow mosaic virus and leaf crinkle virus", "Wilt and root rot", "Anthracnose and rust"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 73,
    "question": "Recommended seed rate for Summer Mash is:",
    "options": ["15 kg/acre", "18 kg/acre", "20 kg/acre", "25 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 74,
    "question": "Summer Mash should be sown from:",
    "options": ["1 March to 20 March", "15 March to first week of April", "1 April to 20 April", "15 April to 30 April"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 75,
    "question": "Recommended row spacing in Summer Mash is:",
    "options": ["15 cm", "20 cm", "22.5 cm", "30 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 76,
    "question": "Recommended Rhizobium culture for seed inoculation in Summer Mash is:",
    "options": ["LSMR-1", "LGR-33", "LUR-6", "LLR-12"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 77,
    "question": "Which herbicide is recommended in Summer Mash for controlling grassy, broadleaf weeds and sedges?",
    "options": ["Atrazine", "Pendimethalin", "Imazethapyr 10 SL", "Glyphosate"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 78,
    "question": "The last irrigation in Summer Mash should be applied at about:",
    "options": ["45 DAS", "50 DAS", "60 DAS", "70 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
  },
  {
        title: "Oilseed Crop",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 7200,
    
        totalMarks: 150,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Which crop is categorized as mustard?",
    "options": ["Toria", "Gobhi Sarson", "Raya", "Taramira"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Which crop is grown only under rainfed conditions?",
    "options": ["Toria", "Raya", "African Sarson", "Taramira"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Which newly released raya hybrid was recommended in 2024?",
    "options": ["RCH 1", "PHR 126", "PHR 127", "RLC 3"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Which newly released gobhi sarson hybrid was recommended in 2024?",
    "options": ["PGSH 1707", "PGSH 2155", "GSC 7", "GSC 6"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Which raya variety is the first canola quality ('00') variety in India?",
    "options": ["PBR 357", "Giriraj", "RLC 3", "PBR 91"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Which raya hybrid is the first canola quality ('00') hybrid in India?",
    "options": ["PHR 126", "PHR 127", "RCH 1", "PBR 97"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Which gobhi sarson hybrid is canola quality ('00')?",
    "options": ["PGSH 1707", "PGSH 2155", "Both A and B", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Which African sarson variety is the world's first determinate oilseed Brassica variety?",
    "options": ["PC 6", "GSC 7", "RLC 3", "TL 17"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Which African sarson variety is suitable for combine harvesting?",
    "options": ["PC 6", "PBR 97", "PHR 126", "TL 15"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Which toria variety was released in 2011?",
    "options": ["TL 15", "TL 17", "PBR 97", "Giriraj"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Which toria variety matures early and fits well in multiple cropping systems?",
    "options": ["TL 15", "TL 17", "Both A and B", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "What is the recommended seed rate for rapeseed-mustard as a sole crop?",
    "options": ["1.0 kg/acre", "1.5 kg/acre", "2.0 kg/acre", "2.5 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "Recommended row spacing for toria, raya and African sarson is:",
    "options": ["22.5 cm", "30 cm", "45 cm", "60 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "Recommended row spacing for gobhi sarson is:",
    "options": ["30 cm", "37.5 cm", "45 cm", "60 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Plant-to-plant spacing in gobhi sarson should be:",
    "options": ["5 cm", "10 cm", "15 cm", "20 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Plant-to-plant spacing for taramira should be:",
    "options": ["10 cm", "12 cm", "15 cm", "20 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Which biofertilizer is recommended for seed inoculation in rapeseed-mustard?",
    "options": ["Rhizobium", "Azotobacter", "Pseudomonas putida MLE8", "Azospirillum"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Canola varieties contain less than ____ erucic acid in oil.",
    "options": ["1%", "2%", "5%", "10%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "High erucic acid in oil is associated with:",
    "options": ["Better taste", "Heart problems", "Higher protein", "Better germination"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Which of the following is a canola-type gobhi sarson variety?",
    "options": ["GSC 7", "GSC 6", "Both A and B", "None"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Gobhi sarson + oats intercropping requires how much oats seed per acre?",
    "options": ["8 kg", "12 kg", "16 kg", "20 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "For late sowing conditions, which crops are preferably transplanted?",
    "options": ["Raya and Taramira", "Toria and Raya", "Gobhi Sarson and African Sarson", "Toria and Gobhi Sarson"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Transplanting of gobhi sarson for higher yield should preferably be done in:",
    "options": ["September", "October", "November", "January"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "How much seed is required for raising one acre nursery of gobhi sarson?",
    "options": ["200 g", "300 g", "400 g", "600 g"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "How much seed is required for raising one acre nursery of African sarson?",
    "options": ["400 g", "500 g", "600 g", "700 g"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Which of the following is a canola-quality raya hybrid?",
    "options": ["RCH 1", "PBR 91", "Giriraj", "PBR 97"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "In Raya, Gobhi Sarson and African Sarson, nitrogen is applied in how many splits?",
    "options": ["One", "Two", "Three", "Four"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "At sowing/transplanting, how much nitrogen is applied?",
    "options": ["Full nitrogen", "1/4 nitrogen", "1/2 nitrogen", "No nitrogen"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "At sowing/transplanting, phosphorus is applied as:",
    "options": ["Half dose", "Full dose", "One-third dose", "No phosphorus"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "At sowing/transplanting, potassium is applied as:",
    "options": ["Full dose", "Half dose", "One-fourth dose", "No potassium"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "The remaining 1/2 nitrogen is applied at:",
    "options": ["Flowering stage", "Pod formation stage", "Harvesting stage", "First irrigation"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Which phosphorus fertilizer is preferred in rapeseed-mustard crops?",
    "options": ["DAP", "MOP", "Super Phosphate", "Urea"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Super phosphate is preferred because it supplies:",
    "options": ["Nitrogen and Potassium", "Sulphur and Phosphorus", "Zinc and Sulphur", "Nitrogen and Sulphur"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "For higher returns, Gobhi Sarson should be intercropped with:",
    "options": ["Wheat", "Barley", "Oats fodder", "Gram"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Intercropping of Gobhi Sarson with oats is recommended mainly for:",
    "options": ["Disease control", "Higher returns", "Early maturity", "Seed production"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Water stress should be avoided at which stage of rapeseed-mustard crops?",
    "options": ["Germination only", "Vegetative stage only", "Flowering initiation, pod formation and seed filling stages", "Harvesting stage only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "After a heavy pre-sowing irrigation (10–12 cm), Raya and Gobhi Sarson should be irrigated after:",
    "options": ["1–2 weeks of sowing", "2–3 weeks of sowing", "3–4 weeks of sowing", "5–6 weeks of sowing"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "The first irrigation in Raya and Gobhi Sarson is recommended mainly for:",
    "options": ["Weed control", "Deeper rooting and better utilization of fertilizers", "Disease control", "Early maturity"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "In Raya, if required, the second irrigation is generally given at:",
    "options": ["Germination stage", "Flowering stage", "Pod maturity stage", "Harvesting stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "In Raya, second irrigation may be applied earlier when the crop is threatened by:",
    "options": ["Drought", "Waterlogging", "Frost damage", "Hailstorm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Painted bug is serious pest of which crop?",
    "options": ["Mustard", "Soyabean", "Gram", "None of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "LC 2063 is a variety of which crop?",
    "options": ["Gram", "Lentil", "Linseed", "Taramira"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "LC 2023 belongs to:",
    "options": ["Linseed", "Raya", "Lentil", "Summer Moong"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "The recommended sowing time of linseed is:",
    "options": ["Second fortnight of September", "First fortnight of October", "First fortnight of November", "End of October"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Recommended seed rate for linseed is:",
    "options": ["10 kg/acre", "12 kg/acre", "15 kg/acre", "18 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Linseed is sown in rows spaced:",
    "options": ["15 cm apart", "20 cm apart", "23 cm apart", "30 cm apart"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Recommended sowing depth for linseed is:",
    "options": ["1–2 cm", "2–3 cm", "4–5 cm", "6–7 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Which crop rotation is recommended for linseed?",
    "options": ["Rice–Linseed", "Wheat–Linseed", "Cotton–Linseed", "Maize–Linseed"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Linseed grows best in:",
    "options": ["Low rainfall areas", "High rainfall areas", "Desert areas", "Waterlogged areas"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Which fertilizer source is preferred for phosphorus in linseed?",
    "options": ["DAP", "Urea", "Superphosphate", "MOP"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "Irrigation at which stage is essential in linseed?",
    "options": ["Germination", "Flowering initiation", "Harvesting", "Pod maturity"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "Linseed generally requires how many irrigations?",
    "options": ["1–2", "2–3", "3–4", "5–6"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "The flowers of linseed varieties LC 2063 and LC 2023 are:",
    "options": ["White", "Yellow", "Pink", "Blue"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "Which sunflower hybrid is recommended for late-sown conditions?",
    "options": ["PSH 2080", "PSH 1962", "PSH 996", "DK 3849"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Which sunflower hybrid has high oil content, shorter duration and medium-tall stature?",
    "options": ["PSH 2080 and PSH 1962", "DK 3849 and PSH 996", "PSH 996 and DK 3849", "PSH 1962 and DK 3849"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "What is the recommended seed rate for sunflower?",
    "options": ["1 kg/acre", "1.5 kg/acre", "2 kg/acre", "3 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "To obtain higher yield and save irrigation water, sunflower should be sown in:",
    "options": ["December", "January", "February", "March"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "If sowing is delayed up to the first week of February, which hybrids should be preferred?",
    "options": ["DK 3849 only", "PSH 2080, PSH 1962, PSH 996", "Champ only", "NSFH-1001 only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "When sowing is delayed to the second fortnight of February, which method is recommended?",
    "options": ["Broadcasting", "Ridge sowing", "Transplanting", "Pora method"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "What is the recommended spacing for sunflower sowing?",
    "options": ["30 cm × 10 cm", "45 cm × 15 cm", "60 cm × 30 cm", "75 cm × 20 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 61,
    "question": "Sunflower seed should be sown at a depth of:",
    "options": ["2–3 cm", "3–4 cm", "4–5 cm", "6–8 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 62,
    "question": "Which crop can be successfully intercropped with sunflower?",
    "options": ["Wheat", "Mentha", "Gram", "Lentil"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 63,
    "question": "In sunflower + mentha intercropping, how many rows of mentha are sown between two rows of sunflower?",
    "options": ["One", "Two", "Three", "Four"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 64,
    "question": "How much mentha suckers are required per acre in sunflower + mentha intercropping?",
    "options": ["100 kg", "125 kg", "150 kg", "200 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 65,
    "question": "Which fungicide is recommended for sunflower seed treatment before sowing?",
    "options": ["Captan", "Carbendazim", "Tagron 35 WS (Metalaxyl)", "Thiram"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 66,
    "question": "Delayed sowing of sunflower increases the incidence of:",
    "options": ["Nutrient deficiency", "Pests and diseases", "Lodging only", "Seed dormancy"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 67,
    "question": "About how much nursery area is sufficient to raise seedlings for one acre of sunflower?",
    "options": ["10 sq. m", "20 sq. m", "30 sq. m", "40 sq. m"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 68,
    "question": "Avoid water stress in sunflower particularly at which stages?",
    "options": ["Germination and tillering", "Flowering and dough stages", "Flowering and harvesting", "Vegetative and maturity stages"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 69,
    "question": "Which crop sequence is stated to be more productive and remunerative than Basmati–Wheat?",
    "options": ["Basmati–Gram", "Basmati–Mustard", "Basmati–Sunflower", "Basmati–Lentil"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 70,
    "question": "Honey bees are important in sunflower because they help in:",
    "options": ["Weed control", "Seed setting", "Nitrogen fixation", "Disease control"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 71,
    "question": "Which season is most suitable for assured sunflower crop and high yield?",
    "options": ["Kharif season", "Summer season", "Spring season", "Winter season"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 72,
    "question": "Which soil is suitable for sunflower cultivation?",
    "options": ["Saline soil", "Waterlogged soil", "Well-drained medium-textured soil", "Highly alkaline soil"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 73,
    "question": "For higher yield and water saving, sunflower sowing should be completed by:",
    "options": ["End of December", "End of January", "Mid-February", "End of February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 74,
    "question": "Sunflower crop is ready for harvesting when:",
    "options": ["Heads remain green and seeds are soft", "Heads turn yellowish-brown on the lower surface near the stalk and discs start drying", "Flowers are fully open", "Leaves start emerging"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 75,
    "question": "Why should sunflower seeds be thoroughly dried after threshing before storage?",
    "options": ["To improve oil content", "To increase seed size", "To prevent fungal attack during storage", "To improve germination speed"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
  },
  {
        title: "Sugarcane and Sugarbeet",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 10800,
    
        totalMarks: 204,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "What is the optimum time for planting sugarcane in Punjab?",
    "options": ["January to February", "Mid-February to end of March", "April to May", "November to December"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Which type of soil is best suited for sugarcane cultivation?",
    "options": ["Waterlogged soil", "Rocky soil", "Well-drained loamy soil", "Saline soil only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Under saline water conditions in south-western Punjab, which variety is recommended?",
    "options": ["CoPb 95", "CoJ 64", "CoJ 88", "Co 118"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Which sugarcane variety is suitable for saline water conditions and is an excellent ratooner?",
    "options": ["CoPb 96", "CoJ 88", "CoPb 92", "Co 238"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Which sugarcane variety is unrecommended due to susceptibility to wilt disease and root borer?",
    "options": ["CoJ 64", "CoPb 91", "Co 89003", "Co 238"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "What is the recommended seed rate for sugarcane?",
    "options": ["10,000 three-budded setts/acre", "15,000 three-budded setts/acre", "20,000 three-budded setts/acre", "25,000 three-budded setts/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Due to thick canes, the seed rate should be kept 10% higher for which varieties?",
    "options": ["CoPb 95 and CoPb 96", "Co 118 and CoJ 85", "CoPb 92 and CoJ 64", "CoPb 98 and CoPb 91"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "For improving germination, sugarcane setts should be soaked overnight in:",
    "options": ["Urea solution", "Ethrel solution", "Salt solution", "DAP solution"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "How much Ethrel 39 SL is required to prepare 100 litres of seed treatment solution?",
    "options": ["10 mL", "15 mL", "25 mL", "50 mL"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "In trench planting, sugarcane rows should be spaced at:",
    "options": ["45 cm", "60 cm", "75 cm", "90 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "What should be the depth of trenches in trench planting?",
    "options": ["10–15 cm", "15–20 cm", "20–25 cm", "30–35 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "In paired-row trench planting, the distance between two rows within a trench is:",
    "options": ["20 cm", "25 cm", "30 cm", "45 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "In paired-row trench planting, the distance between two trenches should be:",
    "options": ["60 cm", "75 cm", "90 cm", "120 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "For ease of mechanical harvesting, sugarcane should be planted at row spacing of:",
    "options": ["60 cm", "75 cm", "90 cm", "120 cm"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "Which planting method helps save irrigation water and reduces lodging?",
    "options": ["Flat planting", "Broadcasting", "Paired-row trench planting", "Ring pit planting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Sugarcane can be planted in standing wheat crop using which method?",
    "options": ["Ridge planting", "Furrow Irrigated Raised Bed (FIRB) planting", "Broadcasting", "Pora method"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Which crop can be intercropped between two rows of sugarcane without affecting cane yield?",
    "options": ["Wheat", "Gram", "Summer moong or summer mash", "Mustard"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Intercropping summer moong/summer mash with sugarcane provides an additional grain yield of about:",
    "options": ["0.5–1.0 q/acre", "1.5–2.0 q/acre", "3–4 q/acre", "5 q/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Which sugarcane variety is a good ratooner, non-lodging and frost tolerant?",
    "options": ["CoPb 95", "CoJ 64", "Co 238", "CoJ 85"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "What ratio of early and mid-late maturing varieties is recommended for higher sugar recovery?",
    "options": ["1 : 1", "2 : 1", "3 : 2", "4 : 1"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Which part of the selected cane should be used for planting?",
    "options": ["Bottom one-third portion", "Middle one-third portion only", "Top two-third portion", "Whole cane only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "Which crop should be harvested first for better sugar recovery?",
    "options": ["Plant crop", "Ratoon crop", "Autumn crop", "Seed crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "To prevent lodging in sugarcane, earthing up should be done during:",
    "options": ["January–February", "March–April", "May–June", "October–November"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Propping of sugarcane crop is recommended during:",
    "options": ["March–April", "May–June", "July–August", "August–September"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Which sugarcane varieties are tolerant to most prevalent pathotypes of red rot disease?",
    "options": ["CoJ 64, Co 89003 only", "CoPb 95, CoPb 96, Co 15023, CoPb 98, CoPb 92, Co 118, CoJ 85, CoPb 93, CoPb 94, CoPb 91, Co 238 and CoJ 88", "CoPb 95 and CoPb 96 only", "CoJ 64 and CoJ 88 only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "Which sugarcane variety is NOT included among varieties tolerant to most prevalent pathotypes of red rot disease?",
    "options": ["CoPb 95", "CoPb 98", "CoJ 64", "CoPb 91"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Gur (jaggery) of excellent quality is obtained from which of the following varieties?",
    "options": ["CoPb 96", "CoPb 92", "Co 118", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Which sugarcane variety produces excellent quality gur (jaggery)?",
    "options": ["CoJ 64", "CoJ 88", "Both A and B", "CoPb 91"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Seed rate should be kept 10% higher (on weight basis) for which sugarcane varieties?",
    "options": ["CoPb 95 and CoPb 96", "Co 118 and CoJ 85", "CoPb 91 and CoPb 93", "CoJ 88 and Co 238"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "Why should the seed rate of Co 118 and CoJ 85 be kept 10% higher?",
    "options": ["Low germination", "Susceptibility to diseases", "Thick canes", "High tillering"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Which of the following varieties is known for excellent quality gur (jaggery)?",
    "options": ["CoPb 96", "CoPb 92", "Co 118", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "CoJ 88 is known for:",
    "options": ["Excellent quality gur", "Tolerance to red rot disease", "Good ratooning ability", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Which statement is correct regarding Co 118 and CoJ 85?",
    "options": ["They require lower seed rate", "Their seed rate should be increased by 10% on weight basis", "They are highly susceptible to red rot", "They are unsuitable for ratoon crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "How many rows of mentha are planted between two rows of sugarcane?",
    "options": ["2 rows", "3 rows", "1 row", "4 rows"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "What is the seed/sucker rate of mentha when intercropped with sugarcane?",
    "options": ["50 kg/acre", "75 kg/acre", "1 quintal/acre", "2 quintals/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "Mentha and sugarcane should be planted simultaneously during:",
    "options": ["January", "First fortnight of February", "March", "April"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "In mentha intercropping, how much nitrogen is applied in addition to sugarcane fertilizers?",
    "options": ["10 kg N/acre", "18 kg N/acre", "25 kg N/acre", "40 kg N/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "In mentha intercropping, half nitrogen and full phosphorus are applied:",
    "options": ["At harvest", "At planting", "40 days after planting", "At flowering"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "How many cuttings of mentha are taken when intercropped with sugarcane?",
    "options": ["One", "Two", "Three", "Four"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "How many rows of okra are intercropped between two rows of sugarcane?",
    "options": ["One row", "Two rows", "Three rows", "Four rows"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "What row spacing is maintained between the two okra rows in sugarcane intercropping?",
    "options": ["30 cm", "45 cm", "60 cm", "75 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "What is the okra seed rate under the 90:30 cm paired row sugarcane system?",
    "options": ["9 kg/acre", "10 kg/acre", "11 kg/acre", "12 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "What is the okra seed rate under the 120:30 cm paired row sugarcane system?",
    "options": ["7 kg/acre", "8 kg/acre", "9 kg/acre", "11 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Okra intercrop should be terminated in:",
    "options": ["May first fortnight", "June second fortnight", "July first fortnight", "August"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "How many rows of cucumber are sown between two rows of sugarcane?",
    "options": ["One row", "Two rows", "Three rows", "Four rows"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "What plant-to-plant spacing is maintained in cucumber intercropping?",
    "options": ["30 cm", "40 cm", "45 cm", "60 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "What is the seed rate of cucumber in sugarcane intercropping?",
    "options": ["0.5 kg/acre", "1 kg/acre", "2 kg/acre", "3 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Cucumber intercrop is sown in:",
    "options": ["January", "First fortnight of February", "Second fortnight of February", "March"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Which sugarcane paired-row planting systems are suitable for cucumber intercropping?",
    "options": ["75 cm only", "90:30 cm only", "120:30 cm only", "Both 90:30 cm and 120:30 cm"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "In cucumber intercropping, how much nitrogen is applied per acre?",
    "options": ["20 kg", "30 kg", "40 kg", "50 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "In cucumber intercropping, how much phosphorus (P₂O₅) is applied per acre?",
    "options": ["10 kg", "15 kg", "20 kg", "25 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "In cucumber intercropping, how much potash (K₂O) is applied per acre?",
    "options": ["10 kg", "15 kg", "20 kg", "25 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "Match the intercrop with its seed rate:",
    "options": ["Mentha – 1 quintal suckers/acre", "Okra (90:30 cm) – 11 kg seed/acre", "Cucumber – 1 kg seed/acre", "All of these"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "How much FYM or press-mud should be applied per acre in sugarcane?",
    "options": ["4 tonnes", "6 tonnes", "8 tonnes", "10 tonnes"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Which herbicides are specifically recommended for the control of hardy weed 'Bans Patta' in sugarcane?",
    "options": ["Atrazine and Pendimethalin", "Sencor 70 WP or Karmex/Klass 80 WP", "Glyphosate and Paraquat", "Oxyfluorfen and Metribuzin"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "Which alternative herbicide can be used for controlling Ipomoea spp. (Lapeta Vel)?",
    "options": ["400 mL 2,4-D amine salt 58 SL per acre", "200 mL glyphosate per acre", "500 mL paraquat per acre", "1 kg atrazine per acre"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "How much paddy straw/rice husk/sugarcane trash/tree leaves should be applied for mulching in sugarcane?",
    "options": ["10–15 quintals/acre", "15–20 quintals/acre", "20–25 quintals/acre", "25–30 quintals/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "To prevent lodging in sugarcane, heavy earthing up should be done at:",
    "options": ["End of April", "End of May", "End of June", "End of July"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "Which planting method is particularly effective in preventing lodging in sugarcane?",
    "options": ["Broadcast planting", "Trench planting", "Ridge planting", "Bed planting"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "Sugarcane crop should be propped up during:",
    "options": ["June–July", "End of August or beginning of September", "October", "November"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 61,
    "question": "Which method is recommended for propping up sugarcane to prevent lodging?",
    "options": ["Ring method", "Bamboo staking", "Trash-twist method", "Rope tying method"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 62,
    "question": "What is the optimum planting time for autumn sugarcane in Punjab?",
    "options": ["1 August – 31 August", "20 September – 20 October", "1 November – 30 November", "15 December – 15 January"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 63,
    "question": "What is the recommended seed rate of autumn sugarcane using three-budded setts?",
    "options": ["10,000 setts/acre", "15,000 setts/acre", "20,000 setts/acre", "25,000 setts/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 64,
    "question": "What is the recommended seed rate using four-budded setts?",
    "options": ["12,000 setts/acre", "15,000 setts/acre", "18,000 setts/acre", "20,000 setts/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 65,
    "question": "What is the recommended seed rate using five-budded setts?",
    "options": ["10,000 setts/acre", "12,000 setts/acre", "15,000 setts/acre", "20,000 setts/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 66,
    "question": "Seed for autumn sugarcane planting should be obtained from:",
    "options": ["Any ratoon crop", "Wheat crop", "Well-grown spring or autumn sugarcane crop", "Maize crop"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 67,
    "question": "What is the recommended row spacing under flat planting of autumn sugarcane?",
    "options": ["60 cm", "75 cm", "90 cm", "120 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 68,
    "question": "Which planting method is recommended in autumn sugarcane for saving irrigation water?",
    "options": ["Broadcasting", "Ridge planting", "Paired row trench planting", "Dibbling"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 69,
    "question": "Which of the following is a recommended variety for autumn sugarcane?",
    "options": ["CoPb 95", "CoPb 96", "Co 15023", "All of the above"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 70,
    "question": "Growing intercrops in autumn sugarcane mainly helps in:",
    "options": ["Reducing germination", "Increasing total productivity and net profit", "Increasing lodging", "Delaying maturity"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 71,
    "question": "Which of the following crop rotations is recommended for autumn sugarcane?",
    "options": ["Rice → Wheat", "Cotton → Gram", "Kharif fodder → Sugarcane with intercrop → Ratoon I → Ratoon II → Wheat", "Maize → Barley"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 72,
    "question": "Which herbicide is recommended for control of gulli danda in wheat intercropped with autumn sugarcane?",
    "options": ["Atrazine", "Axial 5 EC (Pinoxaden)", "Sencor", "Karmex"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 73,
    "question": "At what stage should Axial 5 EC (Pinoxaden) be sprayed for controlling gulli danda?",
    "options": ["15–20 DAS", "20–25 DAS", "30–35 DAS", "45–50 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 74,
    "question": "Which herbicide can also be used for controlling gulli danda in wheat intercropped with autumn sugarcane?",
    "options": ["Sulfosulfuron 75 WG", "Atrazine", "Pendimethalin", "Oxyfluorfen"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 75,
    "question": "Which herbicide is recommended where gulli danda has not developed resistance?",
    "options": ["Metsulfuron", "Isoproturon 75 WP", "Carfentrazone ethyl", "Atlantis"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 76,
    "question": "Which herbicide is recommended for controlling broadleaf weeds in wheat intercropped with autumn sugarcane?",
    "options": ["Atrazine", "Isoproturon", "Metsulfuron 20 WP", "Sencor"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 77,
    "question": "At what stage should Metsulfuron be applied for broadleaf weed control?",
    "options": ["10–15 DAS", "20–25 DAS", "30–35 DAS", "45–50 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 78,
    "question": "Which herbicide is specifically recommended for button booti infestation?",
    "options": ["Sulfosulfuron", "Isoproturon", "Carfentrazone ethyl (Aim/Affinity)", "Pendimethalin"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 79,
    "question": "At what stage should Carfentrazone ethyl be sprayed for button booti control?",
    "options": ["15–20 DAS", "20–25 DAS", "25–30 DAS", "40–45 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 80,
    "question": "Which herbicide is recommended for mixed infestation of grass weeds and broadleaf weeds?",
    "options": ["Total/Markpower 75 WG", "Atrazine", "Karmex", "Sencor"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 81,
    "question": "Which herbicide can also be used for mixed infestation of grass and broadleaf weeds?",
    "options": ["Atlantis 3.6 WDG", "Oxyfluorfen", "Pendimethalin", "Metribuzin"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 82,
    "question": "Which grass weed is specifically mentioned along with gulli danda under mixed infestation?",
    "options": ["Bathu", "Dila", "Wild oats", "Hirankhuri"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 83,
    "question": "Mixed infestation herbicides are recommended at which stage of wheat crop?",
    "options": ["15–20 DAS", "20–25 DAS", "30–35 DAS", "50–55 DAS"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 84,
    "question": "Button booti is classified as a:",
    "options": ["Grass weed", "Broadleaf weed", "Sedge", "Parasitic weed"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 85,
    "question": "Which sugarcane varieties produce the best quality gur and shakkar?",
    "options": ["CoPb 95, CoPb 96, CoPb 91 and CoPb 93", "CoPb 92, Co 118, CoJ 64 and CoJ 88", "Co 15023, CoPb 98, CoPb 94 and CoJ 85", "CoPb 95, Co 238, CoJ 88 and CoPb 93"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 86,
    "question": "Which material is added for clarification of sugarcane juice during gur and shakkar making?",
    "options": ["Lime water", "Gypsum solution", "Sukhlai emulsion", "Molasses"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 87,
    "question": "What is the striking temperature range for gur making?",
    "options": ["100–102°C", "108–110°C", "114–116°C", "120–122°C"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 88,
    "question": "What is the striking temperature range for shakkar making?",
    "options": ["110–112°C", "114–116°C", "118–120°C", "120–122°C"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 89,
    "question": "Sukhlai is a shrub mainly found in which area?",
    "options": ["Malwa region", "Doaba region", "Shivalik Hills (Hoshiarpur)", "Kandi belt of Bathinda"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 90,
    "question": "To obtain about 10.5% sugar recovery, the area under early and mid-late sugarcane varieties should be maintained in which ratio?",
    "options": ["1:1", "2:1", "3:2", "4:1"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 91,
    "question": "The recommended area ratio of early to mid-late sugarcane varieties is:",
    "options": ["3:2", "2:3", "1:1", "4:3"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 92,
    "question": "Under early sugarcane varieties, the Spring : Autumn planting ratio should be:",
    "options": ["1:1", "1:2", "2:1", "3:2"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 93,
    "question": "For achieving higher sugar recovery, ratoon crop and plant crop should be maintained in which ratio?",
    "options": ["1:1", "2:1", "3:2", "4:1"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 94,
    "question": "Early sowing of sugarcane helps in reducing damage caused by:",
    "options": ["Top borer", "Root borer", "Early shoot borer", "Pyrilla"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 95,
    "question": "What is recommended for the biological control of borers in sugarcane?",
    "options": ["Light traps", "Tricho-cards", "Pheromone traps", "Sticky traps"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 96,
    "question": "For control of red rot disease, sugarcane should not be planted in diseased fields for:",
    "options": ["6 months", "1 year", "2 years", "3 years"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 97,
    "question": "For control of wilt disease, sugarcane should not be planted in diseased fields for:",
    "options": ["1 year", "2 years", "3 years", "4 years"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 98,
    "question": "In diseased fields, sugarcane planting should be avoided for one year in case of:",
    "options": ["Wilt", "Red rot", "Smut", "Pyrilla"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 99,
    "question": "In diseased fields, sugarcane planting should be avoided for three years in case of:",
    "options": ["Red rot", "Smut", "Wilt", "Top borer"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 100,
    "question": "What is the optimum time of sowing for sugarbeet in Punjab?",
    "options": ["September to October", "Whole of October to mid-November", "December to January", "February to March"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 101,
    "question": "What is the optimum plant population of sugarbeet?",
    "options": ["20,000 plants/acre", "30,000 plants/acre", "40,000 plants/acre", "50,000 plants/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 102,
    "question": "Which statement about sugarbeet varieties is correct?",
    "options": ["Tropical sugarbeet hybrids yield 100–150 q roots/acre", "Tropical sugarbeet hybrids yield 240–320 q roots/acre with 13–15% sucrose", "Tropical sugarbeet hybrids contain 20–25% sucrose", "No hybrids are recommended for Punjab"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
  },
  {
        title: "Medicinal and Aromatic Crops",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 1800,
    
        totalMarks: 40,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "What is the seed rate of celery?",
    "options": ["200 g/acre", "300 g/acre", "400 g/acre", "500 g/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "What is the recommended time of nursery sowing for celery?",
    "options": ["August 1–31", "September 15–October 15", "October 15–November 15", "November 1–30"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "Which variety of celery is recommended by PAU?",
    "options": ["Punjab Celery 2", "Punjab Celery 1", "Ajmer Celery 1", "PC 101"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "At what age should celery seedlings be transplanted?",
    "options": ["30–40 days", "45–50 days", "60–70 days", "80–90 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "When should celery be harvested to avoid shattering losses?",
    "options": ["When seeds are green", "When most umbels turn light brown", "At flowering stage", "At pod formation stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "What is the recommended seed rate of coriander?",
    "options": ["4–5 kg/acre", "6–7 kg/acre", "8–10 kg/acre", "12–15 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "What is the recommended sowing time of coriander?",
    "options": ["First week of October", "Last week of October to first week of November", "December", "January"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Why are coriander capsules rubbed before sowing?",
    "options": ["To increase seed size", "To reduce diseases", "To break capsules into 2–4 parts for better germination", "To improve colour"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Which variety of fennel is recommended?",
    "options": ["Gujarat Fennel 1", "Ajmer Fennel 1", "Ajmer Fennel 2", "Punjab Saunf 1"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "What is the recommended seed rate of fennel?",
    "options": ["2 kg/acre", "3 kg/acre", "4 kg/acre", "5 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "What is the recommended sowing time of fennel?",
    "options": ["September", "Last week of October to first week of November", "December", "January"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "For table-purpose quality seeds, fennel should be harvested at:",
    "options": ["Flowering stage", "Milk stage", "Dough stage", "Full maturity"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "What is the recommended seed rate of dill seed (Soe)?",
    "options": ["1 kg/acre", "2 kg/acre", "4 kg/acre", "6 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "What is the recommended sowing time of dill seed?",
    "options": ["First fortnight of October", "Second fortnight of October", "November", "December"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "At what stage should dill seed be harvested?",
    "options": ["Green umbel stage", "Umbel changes from green to light yellow", "Flowering stage", "Pod formation stage"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "What is the nursery sowing time of honey plant?",
    "options": ["August", "Whole of September", "October", "November"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "What is the seed requirement for one acre of honey plant?",
    "options": ["200 g", "300 g", "400 g", "500 g"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "At what spacing are honey plant seedlings transplanted?",
    "options": ["45 × 25 cm", "45 × 30 cm", "60 × 30 cm", "60 × 45 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Which improved variety of fenugreek is recommended?",
    "options": ["Pusa Early", "ML-150", "HM-57", "Kasuri 1"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "What is the recommended seed rate of fenugreek?",
    "options": ["8 kg/acre", "10 kg/acre", "12 kg/acre", "15 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  }
        ]
  },
  {
        title: "Fodder Crops",
    
        testSeriesId: "6a296dfd99dd14ee9f0c7883",
    
        durationSeconds: 7200,
    
        totalMarks: 134,
    
        negativeMarkingEnabled: true,
    
        shuffleQuestions: false,

        questions : [
  {
    "id": 1,
    "question": "Berseem is mainly grown for which purpose?",
    "options": ["Oil production", "Grain production", "Fodder production", "Fiber production"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 2,
    "question": "Berseem is cultivated mostly from:",
    "options": ["July to September", "November to mid-June", "March to May", "January to March"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 3,
    "question": "The best time of sowing of berseem is:",
    "options": ["June–July", "August–September", "Last week of September to first week of October", "November–December"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 4,
    "question": "Recommended seed rate of berseem per acre is:",
    "options": ["5 kg", "6 kg", "8 kg", "10 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 5,
    "question": "Berseem seed should be broadcasted in:",
    "options": ["Dry soil", "Standing water", "Deep furrows", "Raised beds"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 6,
    "question": "Which crop is commonly mixed with berseem for better fodder quality?",
    "options": ["Wheat", "Rice", "Mustard", "Cotton"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 7,
    "question": "Quantity of mustard seed mixed with berseem is:",
    "options": ["250 g/acre", "500 g/acre", "750 g/acre", "1.5 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 8,
    "question": "Oats are mixed with berseem at the rate of:",
    "options": ["5 kg/acre", "10 kg/acre", "12 kg/acre", "15 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 9,
    "question": "Ryegrass is used in berseem mixture at:",
    "options": ["0.5–1 kg/acre", "2–3 kg/acre", "5–6 kg/acre", "10 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 10,
    "question": "Berseem + ryegrass combination is used for:",
    "options": ["Oil yield", "High quality fodder production", "Fiber production", "Grain yield"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 11,
    "question": "Which method is used for sowing berseem?",
    "options": ["Line sowing", "Dibbling", "Broadcasting", "Transplanting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 12,
    "question": "In calm weather, berseem seed is sown in:",
    "options": ["Dry soil", "Standing water", "Ploughed furrows", "Irrigated ridges"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 13,
    "question": "If wind is high during sowing, berseem is sown by:",
    "options": ["Transplanting", "Broadcasting in dry field followed by irrigation", "Drilling only", "Ridge planting"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 14,
    "question": "The seed of berseem should be free from:",
    "options": ["Wheat grains", "Chicory (Kashni) seeds", "Rice grains", "Maize seeds"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 15,
    "question": "In berseem + oats system, oats are first:",
    "options": ["Removed", "Broadcast and mixed in soil", "Sown in nursery", "Transplanted"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 16,
    "question": "Berseem sowing is generally done in:",
    "options": ["Spring season", "Summer season", "Autumn season", "Rainy season"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 17,
    "question": "Which combination improves fodder quality in berseem?",
    "options": ["Berseem + wheat", "Berseem + rice", "Berseem + ryegrass", "Berseem + maize only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 18,
    "question": "Berseem is mainly known for:",
    "options": ["Single cutting fodder", "Repeated cuttings", "No regrowth", "One-time harvest"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 19,
    "question": "Reddening of berseem leaves can be checked by:",
    "options": ["Excess irrigation", "Using poor quality seed", "Using fit tubewell water for irrigation", "Late sowing"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 20,
    "question": "Berseem seed should be treated with:",
    "options": ["Urea solution", "Fungicide only", "Rhizobium culture", "Insecticide"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 21,
    "question": "Rhizobium treatment in berseem is done to:",
    "options": ["Control weeds", "Increase forage yield", "Reduce irrigation", "Control insects"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 22,
    "question": "For better growth, berseem should be grown using:",
    "options": ["Saline water", "Well rotten farmyard manure", "Fresh green manure only", "Chemical fertilizer only"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 23,
    "question": "Manganese deficiency in berseem is controlled by spraying:",
    "options": ["1% urea solution", "0.5% manganese sulphate solution", "2% salt solution", "1% zinc solution"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 24,
    "question": "Manganese sulphate spray is applied at:",
    "options": ["2% concentration", "0.5% concentration", "5% concentration", "10% concentration"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 25,
    "question": "Stem rot disease in berseem can be managed by:",
    "options": ["Increasing irrigation", "Sowing in infested fields repeatedly", "Avoiding infested fields for 3–4 years", "Using more nitrogen"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 26,
    "question": "For higher seed yield in berseem, spray crop with:",
    "options": ["Salt solution", "Potassium nitrate or salicylic acid", "Lime water", "Sugar solution"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 27,
    "question": "Which practice helps improve nutrient uptake in berseem?",
    "options": ["Using fresh manure", "Rhizobium seed inoculation", "Dry sowing", "Late harvesting"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 28,
    "question": "Poor irrigation water in berseem mainly causes:",
    "options": ["Higher yield", "Leaf reddening", "More tillering", "Early flowering"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 29,
    "question": "Kent is a variety of which crop?",
    "options": ["Berseem", "Oats", "Senji", "None of these"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 30,
    "question": "The optimum time of sowing of oats is:",
    "options": ["First week of September", "Second week to last week of October", "November to December", "January to February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 31,
    "question": "Recommended seed rate of oats per acre is:",
    "options": ["10 kg", "15 kg", "20 kg", "25 kg"],
    "correctAnswer": 3,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 32,
    "question": "Row spacing in oats is:",
    "options": ["10 cm", "15 cm", "20 cm", "30 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 33,
    "question": "Bi-directional sowing in oats increases fodder yield by:",
    "options": ["5–10%", "10–15%", "20–25%", "30–40%"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 34,
    "question": "Oats can be sown after rice harvesting using:",
    "options": ["Broadcasting method", "Zero till drill", "Dibbling", "Transplanting"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 35,
    "question": "Zero till drilling of oats mainly helps in:",
    "options": ["Delayed sowing", "Timely sowing after basmati", "Weed increase", "Higher irrigation use"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 36,
    "question": "PAU Happy Seeder is used for:",
    "options": ["Harvesting wheat", "Sowing with straw mulch application", "Fertilizer spraying", "Irrigation"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 37,
    "question": "Happy Seeder helps in:",
    "options": ["Straw burning", "Straw removal", "Avoiding straw burning after combine harvesting", "Weed removal only"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 38,
    "question": "In oats + raya mixture, raya seed rate is:",
    "options": ["0.5 kg/acre", "1.0 kg/acre", "2.0 kg/acre", "5.0 kg/acre"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 39,
    "question": "Oats + raya mixture is sown to obtain:",
    "options": ["Oil yield", "Fiber yield", "High quality fodder in lean period", "Grain production"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 40,
    "question": "First cut in oats + raya mixture is obtained after:",
    "options": ["20–30 days", "35–45 days", "55–65 days", "80–90 days"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 41,
    "question": "Second cut of oats can be used for:",
    "options": ["Only oil extraction", "Only fiber", "Fodder or seed purpose", "No use"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 42,
    "question": "Bi-directional sowing in oats is done to increase:",
    "options": ["Seed cost", "Weed growth", "Fodder yield", "Disease incidence"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 43,
    "question": "Oats sowing after rice is mainly done to:",
    "options": ["Delay crop", "Save water only", "Ensure timely sowing of next crop", "Increase soil salinity"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 44,
    "question": "Ryegrass is a:",
    "options": ["Legume fodder", "Oil crop", "Non-legume fodder", "Pulse crop"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 45,
    "question": "Ryegrass is mainly used as:",
    "options": ["Grain crop", "Multicut fodder crop", "Fiber crop", "Oilseed crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 46,
    "question": "Ryegrass is considered a:",
    "options": ["Single cut crop", "Multicut non-legume fodder crop", "Seasonal fruit crop", "Permanent crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 47,
    "question": "Optimum time of sowing of ryegrass is:",
    "options": ["First week of September", "Last week of September to first week of October", "November to December", "January to February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 48,
    "question": "Recommended seed rate of ryegrass per acre is:",
    "options": ["1 kg", "2 kg", "3 kg", "5 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 49,
    "question": "Ryegrass seed is sown by:",
    "options": ["Line sowing", "Dibbling", "Broadcasting", "Transplanting"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 50,
    "question": "Shaftal is commonly known as:",
    "options": ["Berseem", "Chhattala or Bhukal", "Ryegrass", "Oats"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 51,
    "question": "The optimum time of sowing of Shaftal is:",
    "options": ["First week of September", "Last week of September to first week of October", "Mid November to December", "January to February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 52,
    "question": "Recommended seed rate of Shaftal per acre is:",
    "options": ["2–3 kg", "3–4 kg", "4–5 kg", "6–7 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 53,
    "question": "Lucerne is a:",
    "options": ["Non-leguminous crop", "Oilseed crop", "Leguminous crop", "Fibre crop"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 54,
    "question": "The best time of sowing of lucerne is:",
    "options": ["September", "Mid-October", "November", "December"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 55,
    "question": "Recommended seed rate of lucerne per acre is:",
    "options": ["2–4 kg", "4–6 kg", "6–8 kg", "10–12 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 56,
    "question": "Lucerne is sown at a row spacing of:",
    "options": ["10 cm", "20 cm", "30 cm", "40 cm"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 57,
    "question": "Lucerne seed is sown at a depth of:",
    "options": ["1–2 cm", "2–4 cm", "5–6 cm", "6–8 cm"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 58,
    "question": "Lucerne seed should be free from:",
    "options": ["Rice grains", "Cuscuta (Amarbel)", "Wheat seeds", "Maize seeds"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 59,
    "question": "Oats seed mixed with lucerne for higher first cutting yield is:",
    "options": ["5 kg/acre", "10 kg/acre", "15 kg/acre", "20 kg/acre"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 60,
    "question": "Mustard seed mixed with lucerne per acre is:",
    "options": ["250 g", "500 g", "750 g", "1 kg"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 61,
    "question": "Lucerne sowing is generally done in:",
    "options": ["Early June", "Mid-October", "Late January", "March"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 62,
    "question": "Lucerne is mainly used as:",
    "options": ["Grain crop", "Fodder crop", "Oil crop", "Fiber crop"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 63,
    "question": "The main weed of lucerne is:",
    "options": ["Amarbel", "Dodder", "Chenopodium", "None of these"],
    "correctAnswer": 0,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 64,
    "question": "Senji (Sweet clover) is mainly grown as a:",
    "options": ["Grain crop", "Oilseed crop", "Forage legume", "Fibre crop"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 65,
    "question": "Recommended varieties of Senji are:",
    "options": ["BL 44 and BL 43", "YSL 106 and Senji Safed 76", "LL Composite 5 and BL 42", "Ryegrass and Oats"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 66,
    "question": "Senji Safed 76 has:",
    "options": ["Yellow flowers", "Red flowers", "White flowers", "Pink flowers"],
    "correctAnswer": 2,
    "marks": 2,
    "negativeMarks": 0.25
  },
  {
    "id": 67,
    "question": "Senji YSL 106 is sown from:",
    "options": ["Early September", "End of September to end of October", "November to December", "January to February"],
    "correctAnswer": 1,
    "marks": 2,
    "negativeMarks": 0.25
  }
]
  }

]
// const seedData = async() => {
//     try{
//         await TestSeries.deleteMany();
//         await TestSeries.insertMany(testSeriesData);
//         console.log("data uploaded");
//     }
//     catch(error){
//         console.log(error);
//     }
// }

const seedTestData = async() => {
    try{
        // await TestPapers.deleteMany();
        // await TestPapers.insertMany(testPapersDataNemraj);
        console.log("data uploaded for nemraj papers");
        
    }
    catch(error){
        console.log("error you faced " ,error);
    }
}
// module.exports = seedTestData ;
// module.exports = seedData ;