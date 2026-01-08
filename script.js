// 狗糧數據 (原50款 + Orijen 所有款式，每100g 營養值，近似；新增微量元素字段，單位見註)
const dogFoods = [
    // 原有 50 款 (為簡化，只顯示 Orijen 原有的一款；其他保持，但添加 0 for new fields)
    {name: "Royal Canin Medium Adult", calories: 350, protein: 25, fat: 15, carbs: 40, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    // ... (其他原有 49 款類似，添加 0 for new fields)
    {name: "Ziwi Peak Air-Dried Beef", calories: 550, protein: 38, fat: 30, carbs: 15, fiber: 0, calcium: 0, phosphorus: 0, omega3: 0, omega6: 0, dha: 0, epa: 0, glucosamine: 0, chondroitin: 0, vitaminE: 0},
    // 新增 Orijen 款式 (calories = ME/10 per 100g, protein 等 = % = g/100g, glucosamine 等 = mg/kg)
    {name: "Orijen Original", calories: 394, protein: 38, fat: 18, carbs: 20, fiber: 4, calcium: 1.4, phosphorus: 1.1, omega3: 1, omega6: 3, dha: 0.3, epa: 0.2, glucosamine: 1400, chondroitin: 1200, vitaminE: 0}, // Vitamin E not min in guaranteed, set 0
    {name: "Orijen Puppy", calories: 400, protein: 38, fat: 20, carbs: 16, fiber: 6, calcium: 1.2, phosphorus: 0.9, omega3: 0.8, omega6: 3, dha: 0.2, epa: 0.2, glucosamine: 700, chondroitin: 600, vitaminE: 750},
    {name: "Orijen Puppy Large", calories: 372, protein: 38, fat: 16, carbs: 23, fiber: 6, calcium: 1.3, phosphorus: 1.0, omega3: 0.8, omega6: 3, dha: 0.2, epa: 0.2, glucosamine: 700, chondroitin: 600, vitaminE: 750},
    {name: "Orijen Senior", calories: 363, protein: 38, fat: 15, carbs: 28, fiber: 8, calcium: 1.3, phosphorus: 1.1, omega3: 0.8, omega6: 2.6, dha: 0.3, epa: 0.2, glucosamine: 1400, chondroitin: 1200, vitaminE: 0},
    {name: "Orijen Six Fish", calories: 394, protein: 38, fat: 18, carbs: 18, fiber: 5, calcium: 1.5, phosphorus: 1.1, omega3: 2.2, omega6: 2.2, dha: 0.7, epa: 0.5, glucosamine: 1250, chondroitin: 1000, vitaminE: 0},
    {name: "Orijen Regional Red", calories: 386, protein: 38, fat: 18, carbs: 20, fiber: 4, calcium: 1.7, phosphorus: 1.3, omega3: 1.1, omega6: 2, dha: 0.3, epa: 0.2, glucosamine: 400, chondroitin: 400, vitaminE: 0},
    {name: "Orijen Tundra", calories: 386, protein: 40, fat: 18, carbs: 18, fiber: 5, calcium: 1.8, phosphorus: 1.3, omega3: 1, omega6: 2.5, dha: 0.4, epa: 0.3, glucosamine: 600, chondroitin: 800, vitaminE: 0},
    {name: "Orijen Fit & Trim", calories: 353, protein: 42, fat: 13, carbs: 17, fiber: 8, calcium: 1.3, phosphorus: 1.1, omega3: 0.9, omega6: 2.7, dha: 0.25, epa: 0.15, glucosamine: 1000, chondroitin: 900, vitaminE: 0},
    {name: "Orijen Small Breed", calories: 390, protein: 39, fat: 18, carbs: 20, fiber: 4, calcium: 1.3, phosphorus: 1.0, omega3: 0.5, omega6: 2.5, dha: 0.5, epa: 0.2, glucosamine: 800, chondroitin: 700, vitaminE: 0},
    {name: "Orijen Amazing Grains Original", calories: 390, protein: 38, fat: 18, carbs: 20, fiber: 4, calcium: 1.4, phosphorus: 1.1, omega3: 1, omega6: 3, dha: 0.3, epa: 0.2, glucosamine: 500, chondroitin: 500, vitaminE: 0} // Grains version, similar to Original but with grains
];

// 新鮮食物數據 (無變更)

// ... (其他變數無變更)

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
            totalCalories += (food.calories / 100) * amount; // 原邏輯，calories 已 per 100g
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
            totalGlucosamine += food.glucosamine * (amount / 1000) || 0; // mg
            totalChondroitin += food.chondroitin * (amount / 1000) || 0; // mg
            totalVitaminE += food.vitaminE * (amount / 1000) || 0; // IU
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

// ... (其他函數無變更)