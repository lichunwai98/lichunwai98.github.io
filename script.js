// 狗糧數據 (完整 50 款 + Orijen 所有款式，每 100g 營養值，近似；新增微量元素字段，單位：calories kcal/100g, protein 等 g/100g, glucosamine 等 mg/kg, vitaminE IU/kg)
const dogFoods = [
    {name: "Royal Canin Medium Adult", calories: 350, protein: 25, fat: 15, carbs: 40, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Purina Pro Plan Adult Chicken", calories: 393, protein: 26, fat: 16, carbs: 42, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Hill's Science Diet Adult Lamb", calories: 373, protein: 20, fat: 13, carbs: 45, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Blue Buffalo Life Protection Chicken", calories: 377, protein: 24, fat: 14, carbs: 44, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Pedigree Adult Beef", calories: 340, protein: 21, fat: 10, carbs: 50, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Iams Proactive Health Adult", calories: 365, protein: 25, fat: 14, carbs: 43, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Eukanuba Adult Maintenance", calories: 380, protein: 25, fat: 15, carbs: 41, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Nutro Wholesome Essentials Chicken", calories: 355, protein: 23, fat: 13, carbs: 46, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Wellness Core Grain-Free", calories: 421, protein: 34, fat: 16, carbs: 30, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Orijen Original", calories: 390, protein: 38, fat: 18, carbs: 20, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0}, // 原有的一款，稍後會被新版替換，但為完整保留
    {name: "Acana Grasslands", calories: 381, protein: 35, fat: 17, carbs: 23, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Taste of the Wild Pacific Stream", calories: 360, protein: 25, fat: 15, carbs: 42, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Merrick Grain-Free Real Chicken", calories: 372, protein: 30, fat: 15, carbs: 35, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Fromm Family Adult Gold", calories: 418, protein: 25, fat: 16, carbs: 42, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Victor Hi-Pro Plus", calories: 406, protein: 30, fat: 20, carbs: 33, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Diamond Naturals Adult Beef", calories: 329, protein: 25, fat: 15, carbs: 40, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Rachael Ray Nutrish Real Chicken", calories: 326, protein: 26, fat: 14, carbs: 41, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Canidae All Life Stages Chicken", calories: 468, protein: 24, fat: 14.5, carbs: 50, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Kirkland Signature Adult Dog", calories: 393, protein: 26, fat: 16, carbs: 42, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Nature's Logic Canine Beef", calories: 417, protein: 36, fat: 15, carbs: 30, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Zignature Turkey Limited Ingredient", calories: 352, protein: 32, fat: 15, carbs: 32, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Earthborn Holistic Primitive Natural", calories: 400, protein: 38, fat: 20, carbs: 25, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Holistic Select Adult Health Lamb", calories: 403, protein: 23, fat: 15, carbs: 45, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Now Fresh Grain-Free Adult", calories: 409, protein: 27, fat: 16, carbs: 42, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Go! Solutions Carnivore Grain-Free", calories: 429, protein: 34, fat: 16, carbs: 35, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Stella & Chewy's Dinner Patties (dry equivalent)", calories: 450, protein: 38, fat: 30, carbs: 10, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Instinct Original Grain-Free Beef", calories: 499, protein: 36, fat: 30, carbs: 15, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Farmina N&D Ancestral Grain Chicken", calories: 400, protein: 30, fat: 18, carbs: 34, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Annamaet Original Adult", calories: 414, protein: 24, fat: 14, carbs: 48, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Blackwood Adult Dog Chicken", calories: 375, protein: 24.5, fat: 14, carbs: 45, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Dr. Tim's Pursuit Active Dog", calories: 416, protein: 30, fat: 20, carbs: 35, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Eagle Pack Original Adult Lamb", calories: 343, protein: 23, fat: 12, carbs: 48, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "FirstMate Australian Lamb", calories: 320, protein: 25, fat: 15, carbs: 40, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Gather Free Acres Organic Chicken", calories: 362, protein: 29, fat: 16, carbs: 35, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Horizon Legacy Adult Grain-Free", calories: 400, protein: 34, fat: 15, carbs: 36, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Innova Adult Dog Food", calories: 465, protein: 36, fat: 22, carbs: 28, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Lotus Wholesome Chicken Recipe", calories: 353, protein: 24, fat: 14, carbs: 43, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Natural Balance L.I.D. Sweet Potato & Fish", calories: 340, protein: 20, fat: 10, carbs: 55, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Nature's Variety Instinct Raw Boost Chicken", calories: 461, protein: 36, fat: 21, carbs: 28, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Newman's Own Organics Adult", calories: 393, protein: 23, fat: 12, carbs: 50, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Nulo Freestyle Adult Turkey", calories: 422, protein: 33, fat: 18, carbs: 32, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Open Farm Grass-Fed Beef", calories: 362, protein: 30, fat: 14, carbs: 38, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Party Animal California Chicken", calories: 460, protein: 30, fat: 20, carbs: 35, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Petcurean Summit Original Three Meat", calories: 325, protein: 26, fat: 15, carbs: 40, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Precise Holistic Complete Wild at Heart", calories: 380, protein: 27, fat: 15, carbs: 42, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Pure Vita Grain-Free Beef", calories: 446, protein: 28, fat: 18, carbs: 38, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Solid Gold Barking at the Moon", calories: 465, protein: 41, fat: 20, carbs: 18, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Sport Dog Food Elite Grain-Free", calories: 445, protein: 30, fat: 22, carbs: 30, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "The Honest Kitchen Whole Grain Chicken", calories: 446, protein: 24.5, fat: 8.5, carbs: 55, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "Ziwi Peak Air-Dried Beef", calories: 550, protein: 38, fat: 30, carbs: 15, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    // 新增 Orijen 款式 (calories = ME/10 per 100g, protein 等 = % = g/100g, glucosamine 等 = mg/kg)
    {name: "Orijen Original", calories: 394, protein: 38, fat: 18, carbs: 20, fiber: 4, calcium: 1.4, phosphorus: 1.1, omega3: 1, omega6: 3, dha: 0.3, epa: 0.2, glucosamine: 1400, chondroitin: 1200, vitaminE: 0},
    {name: "Orijen Puppy", calories: 400, protein: 38, fat: 20, carbs: 16, fiber: 6, calcium: 1.2, phosphorus: 0.9, omega3: 0.8, omega6: 3, dha: 0.2, epa: 0.2, glucosamine: 700, chondroitin: 600, vitaminE: 750},
    {name: "Orijen Puppy Large", calories: 372, protein: 38, fat: 16, carbs: 23, fiber: 6, calcium: 1.3, phosphorus: 1.0, omega3: 0.8, omega6: 3, dha: 0.2, epa: 0.2, glucosamine: 700, chondroitin: 600, vitaminE: 750},
    {name: "Orijen Senior", calories: 363, protein: 38, fat: 15, carbs: 28, fiber: 8, calcium: 1.3, phosphorus: 1.1, omega3: 0.8, omega6: 2.6, dha: 0.3, epa: 0.2, glucosamine: 1400, chondroitin: 1200, vitaminE: 0},
    {name: "Orijen Six Fish", calories: 394, protein: 38, fat: 18, carbs: 18, fiber: 5, calcium: 1.5, phosphorus: 1.1, omega3: 2.2, omega6: 2.2, dha: 0.7, epa: 0.5, glucosamine: 1250, chondroitin: 1000, vitaminE: 0},
    {name: "Orijen Regional Red", calories: 386, protein: 38, fat: 18, carbs: 20, fiber: 4, calcium: 1.7, phosphorus: 1.3, omega3: 1.1, omega6: 2, dha: 0.3, epa: 0.2, glucosamine: 400, chondroitin: 400, vitaminE: 0},
    {name: "Orijen Tundra", calories: 386, protein: 40, fat: 18, carbs: 18, fiber: 5, calcium: 1.8, phosphorus: 1.3, omega3: 1, omega6: 2.5, dha: 0.4, epa: 0.3, glucosamine: 600, chondroitin: 800, vitaminE: 0},
    {name: "Orijen Fit & Trim", calories: 353, protein: 42, fat: 13, carbs: 17, fiber: 8, calcium: 1.3, phosphorus: 1.1, omega3: 0.9, omega6: 2.7, dha: 0.25, epa: 0.15, glucosamine: 1000, chondroitin: 900, vitaminE: 0},
    {name: "Orijen Small Breed", calories: 390, protein: 39, fat: 18, carbs: 20, fiber: 4, calcium: 1.3, phosphorus: 1.0, omega3: 0.5, omega6: 2.5, dha: 0.5, epa: 0.2, glucosamine: 800, chondroitin: 700, vitaminE: 0},
    {name: "Orijen Amazing Grains Original", calories: 390, protein: 38, fat: 18, carbs: 20, fiber: 4, calcium: 1.4, phosphorus: 1.1, omega3: 1, omega6: 3, dha: 0.3, epa: 0.2, glucosamine: 500, chondroitin: 500, vitaminE: 0}
];

// 新鮮食物數據 (50 款，每 100g 生食營養值，近似；新增字段設為0)
const freshFoods = [
    {name: "雞胸肉 (生)", calories: 165, protein: 31, fat: 3.6, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "牛肉 (瘦, 生)", calories: 135, protein: 20, fat: 5, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "鮭魚 (生)", calories: 208, protein: 20, fat: 13, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "雞蛋 (生)", calories: 143, protein: 13, fat: 10, carbs: 1, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "紅蘿蔔 (生)", calories: 41, protein: 0.9, fat: 0.2, carbs: 10, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "蘋果 (生, 去核)", calories: 52, protein: 0.3, fat: 0.2, carbs: 14, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "香蕉 (生)", calories: 89, protein: 1.1, fat: 0.3, carbs: 23, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "藍莓 (生)", calories: 57, protein: 0.7, fat: 0.3, carbs: 14, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "菠菜 (生)", calories: 23, protein: 2.9, fat: 0.4, carbs: 3.6, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "南瓜 (生)", calories: 26, protein: 1, fat: 0.1, carbs: 7, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "甜薯 (生)", calories: 86, protein: 1.6, fat: 0.1, carbs: 20, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "西蘭花 (生)", calories: 34, protein: 2.8, fat: 0.4, carbs: 7, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "青豆 (生)", calories: 81, protein: 5.4, fat: 0.4, carbs: 14, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "黃瓜 (生)", calories: 16, protein: 0.7, fat: 0.1, carbs: 3.6, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "芹菜 (生)", calories: 16, protein: 0.7, fat: 0.2, carbs: 3, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "羊肉 (瘦, 生)", calories: 143, protein: 20, fat: 6, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "火雞肉 (生)", calories: 135, protein: 29, fat: 1.7, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "鴨肉 (生)", calories: 135, protein: 18, fat: 6, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "豬肉 (瘦, 生)", calories: 143, protein: 21, fat: 6, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "鯖魚 (生)", calories: 205, protein: 19, fat: 14, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "沙丁魚 (生)", calories: 208, protein: 25, fat: 11, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "雞肝 (生)", calories: 119, protein: 17, fat: 4.8, carbs: 0.7, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "牛肝 (生)", calories: 135, protein: 20, fat: 3.6, carbs: 4, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "雞心 (生)", calories: 153, protein: 16, fat: 9, carbs: 0.7, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "綠豆芽 (生)", calories: 30, protein: 3, fat: 0.2, carbs: 6, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "奇異果 (生, 去皮)", calories: 61, protein: 1.1, fat: 0.5, carbs: 15, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "草莓 (生)", calories: 32, protein: 0.7, fat: 0.3, carbs: 8, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "西瓜 (生, 去籽)", calories: 30, protein: 0.6, fat: 0.2, carbs: 8, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "梨 (生, 去核)", calories: 57, protein: 0.4, fat: 0.1, carbs: 15, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "菠蘿 (生)", calories: 50, protein: 0.5, fat: 0.1, carbs: 13, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "紅椒 (生)", calories: 31, protein: 1, fat: 0.3, carbs: 6, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "白菜 (生)", calories: 25, protein: 1.3, fat: 0.1, carbs: 6, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "生菜 (生)", calories: 15, protein: 1.4, fat: 0.2, carbs: 2.9, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "蘑菇 (生)", calories: 22, protein: 3.1, fat: 0.3, carbs: 3.3, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "茄子 (生)", calories: 25, protein: 1, fat: 0.2, carbs: 6, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "玉米 (生)", calories: 86, protein: 3.3, fat: 1.4, carbs: 19, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "薑黃 (生根)", calories: 354, protein: 7.8, fat: 10, carbs: 65, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "椰子 (生肉)", calories: 354, protein: 3.3, fat: 33, carbs: 15, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "優格 (無糖, 生奶製品)", calories: 61, protein: 3.5, fat: 3.3, carbs: 4.7, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "起司 (低脂, 生)", calories: 282, protein: 24, fat: 20, carbs: 1.9, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "牛奶 (生)", calories: 42, protein: 3.4, fat: 1, carbs: 5, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "鵝肝 (生)", calories: 133, protein: 16, fat: 7, carbs: 1, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "兔肉 (生)", calories: 136, protein: 21, fat: 5, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "鹿肉 (生)", calories: 120, protein: 23, fat: 2.4, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "鱈魚 (生)", calories: 82, protein: 18, fat: 0.7, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "比目魚 (生)", calories: 70, protein: 12, fat: 1.4, carbs: 0, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "綠藻 (粉, 生)", calories: 290, protein: 58, fat: 7.7, carbs: 24, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "亞麻籽 (生)", calories: 534, protein: 18, fat: 42, carbs: 29, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "奇亞籽 (生)", calories: 486, protein: 17, fat: 31, carbs: 42, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    {name: "花生 (生, 無鹽)", calories: 567, protein: 26, fat: 49, carbs: 16, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0}
];

let requiredMER = 0;
let foodItems = [];

// 計算 MER
function calculateMER() {
    const weight = parseFloat(document.getElementById('weight').value);
    const breed = document.getElementById('breed').value;
    const walkTime = parseFloat(document.getElementById('walk-time').value);

    if (!weight || !walkTime) {
        alert('請輸入所有資訊');
        return;
    }

    const rer = 70 * Math.pow(weight, 0.75);
    let activityFactor;

    if (walkTime < 30) {
        activityFactor = breed === 'small' ? 1.2 : breed === 'medium' ? 1.1 : 1.0;
    } else if (walkTime <= 60) {
        activityFactor = breed === 'small' ? 1.6 : breed === 'medium' ? 1.4 : 1.3;
    } else {
        activityFactor = breed === 'small' ? 2.0 : breed === 'medium' ? 1.8 : 1.6;
    }

    requiredMER = Math.round(rer * activityFactor);
    document.getElementById('mer-result').innerHTML = `每日所需熱量 (MER): ${requiredMER} kcal<br><small>這是估計值，請咨詢獸醫。</small>`;
}

// 添加食物項目
function addFoodItem() {
    const itemIndex = foodItems.length;
    const div = document.createElement('div');
    div.className = 'food-item';
    div.innerHTML = `
        <label>食物類型:</label>
        <select onchange="updateFoodOptions(${itemIndex})">
            <option value="dogFood">狗糧</option>
            <option value="fresh">新鮮食物</option>
        </select>
        <label>選擇食物:</label>
        <select id="food-select-${itemIndex}"></select>
        <label>份量 (g):</label>
        <input type="number" id="amount-${itemIndex}" min="1">
        <button onclick="removeFoodItem(this)">移除</button>
    `;
    document.getElementById('food-items').appendChild(div);
    foodItems.push({type: 'dogFood'});
    updateFoodOptions(itemIndex);
}

function updateFoodOptions(index) {
    const selectType = document.querySelectorAll('.food-item select')[index * 2]; // 類型 select
    const type = selectType.value;
    const selectFood = document.getElementById(`food-select-${index}`);
    selectFood.innerHTML = '';
    const foods = type === 'dogFood' ? dogFoods : freshFoods;
    foods.forEach(food => {
        const option = document.createElement('option');
        option.value = food.name;
        option.text = food.name;
        selectFood.appendChild(option);
    });
    foodItems[index].type = type;
}

function removeFoodItem(button) {
    const div = button.parentElement;
    const index = Array.from(div.parentElement.children).indexOf(div);
    foodItems.splice(index, 1);
    div.remove();
}

// 計算總營養
function calculateNutrition() {
    if (!requiredMER) {
        alert('請先計算所需熱量');
        return;
    }

    let totalCalories = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalCarbs = 0;
    let totalFiber = 0;
    let totalCalcium = 0;
    let totalPhosphorus = 0;
    let totalOmega3 = 0;
    let totalOmega6 = 0;
    let totalDha = 0;
    let totalEpa = 0;
    let totalGlucosamine = 0;
    let totalChondroitin = 0;
    let totalVitaminE = 0;

    foodItems.forEach((item, index) => {
        const foodName = document.getElementById(`food-select-${index}`).value;
        const amount = parseFloat(document.getElementById(`amount-${index}`).value) || 0;
        const foods = item.type === 'dogFood' ? dogFoods : freshFoods;
        const food = foods.find(f => f.name === foodName);
        if (food) {
            totalCalories += (food.calories / 100) * amount;
            totalProtein += (food.protein / 100) * amount;
            totalFat += (food.fat / 100) * amount;
            totalCarbs += (food.carbs / 100) * amount;
            totalFiber += (food.fiber / 100) * amount || 0;
            totalCalcium += (food.calcium / 100) * amount || 0;
            totalPhosphorus += (food.phosphorus / 100) * amount || 0;
            totalOmega3 += (food.omega3 / 100) * amount || 0;
            totalOmega6 += (food.omega6 / 100) * amount || 0;
            totalDha += (food.dha / 100) * amount || 0;
            totalEpa += (food.epa / 100) * amount || 0;
            totalGlucosamine += food.glucosamine * (amount / 1000) || 0; // mg/kg * (g/1000) = mg
            totalChondroitin += food.chondroitin * (amount / 1000) || 0;
            totalVitaminE += food.vitaminE * (amount / 1000) || 0; // IU/kg * (g/1000) = IU
        }
    });

    const isEnough = totalCalories >= requiredMER ? '足夠' : '不足';
    const color = isEnough === '足夠' ? 'green' : 'red';
    document.getElementById('nutrition-result').innerHTML = `
        總熱量: ${Math.round(totalCalories)} kcal (${isEnough}, <span style="color:${color};">與所需 ${requiredMER} kcal 比較</span>)<br>
        總蛋白質: ${Math.round(totalProtein)} g<br>
        總脂肪: ${Math.round(totalFat)} g<br>
        總碳水化合物: ${Math.round(totalCarbs)} g<br>
        總纖維: ${Math.round(totalFiber)} g<br>
        總鈣: ${totalCalcium.toFixed(2)} g<br>
        總磷: ${totalPhosphorus.toFixed(2)} g<br>
        總 Omega-3: ${totalOmega3.toFixed(2)} g<br>
        總 Omega-6: ${totalOmega6.toFixed(2)} g<br>
        總 DHA: ${totalDha.toFixed(2)} g<br>
        總 EPA: ${totalEpa.toFixed(2)} g<br>
        總葡萄糖胺: ${Math.round(totalGlucosamine)} mg<br>
        總軟骨素: ${Math.round(totalChondroitin)} mg<br>
        總維生素 E: ${Math.round(totalVitaminE)} IU
    `;
}