// ===============================
// AAMANTRAN MENU DATA
// ===============================


// NORTH INDIAN
const northIndian = [
    ["Aloo Jeera", 80, 140],
    ["Seasonal Veg", 90, 160],
    ["Aloo Gobhi Matar", 100, 180],
    ["Dal Tadka", 90, 160],
    ["Dal Makhani", 140, 240],
    ["Chana Masala", 120, 200],
    ["Rajma Masala", 120, 200],
    ["Kadhi Pakoda", 120, 200],
    ["Mix Veg", 130, 220],
    ["Matar Paneer", 140, 240],
    ["Shahi Paneer", 160, 280],
    ["Kadhai Paneer", 160, 240],
    ["Paneer Butter Masala", 160, 280],
    ["Paneer Do Pyaza", 160, 280],
    ["Paneer Handi", 160, 280],
    ["Paneer Lababdar", 160, 280],
    ["Paneer Bhurji", 160, 280],
    ["Palak Paneer", 160, 280],
    ["Matar Mushroom", 160, 280],
    ["Kadhai Mushroom", 160, 280],
    ["Malai Kofta", 180, 320],
    ["Kaju Matar Paneer", 180, 320],
    ["Paneer Pasanda", 180, 320],
    ["Paneer Kesariya", 180, 320],
    ["Palak Kofta", 180, 320],
    ["Malai Methi Matar", 170, 300]
];


// SOUTH INDIAN
const southIndian = [
    ["Plain Dosa", 120],
    ["Masala Dosa", 160],
    ["Butter Masala Dosa", 180],
    ["Mysore Masala Dosa", 180],
    ["Paneer Dosa", 220],
    ["Onion Dosa", 160],
    ["Rava Dosa", 160],
    ["Masala Rava Dosa", 180],
    ["Idli Sambhar", 100],
    ["Fried Idli", 140],
    ["Medu Vada", 120],
    ["Vada Sambhar", 140],
    ["Plain Uttapam", 140],
    ["Onion Uttapam", 160],
    ["Masala Uttapam", 180],
    ["South Indian Thali", 280],
    ["Curd Rice", 140],
    ["Lemon Rice", 140],
    ["Tomato Rice", 150],
    ["Masala Vada", 120]
];


// STARTERS
const starters = [
    ["Paneer Tikka", 180, 320],
    ["Achari Paneer Tikka", 190, 340],
    ["Malai Paneer Tikka", 200, 360],
    ["Hara Bhara Kebab", 160, 280],
    ["Veg Seekh Kebab", 160, 280],
    ["Dahi Kebab", 180, 320],
    ["Crispy Corn", 140, 240],
    ["Chilli Paneer", 160, 280],
    ["Honey Chilli Potato", 140, 240],
    ["Veg Spring Roll", 120, 220],
    ["French Fries", 100, 180]
];


// CHINESE
const chinese = [
    ["Veg Hakka Noodles", 120, 220],
    ["Chilli Garlic Noodles", 130, 240],
    ["Schezwan Noodles", 140, 250],
    ["Veg Fried Rice", 120, 220],
    ["Schezwan Fried Rice", 140, 250],
    ["Veg Manchurian", 140, 240],
    ["Chilli Paneer", 160, 280],
    ["Chilli Mushroom", 160, 280],
    ["Honey Chilli Potato", 140, 240],
    ["American Chopsuey", 160, 280],
    ["Chinese Bhel", 120, 220]
];


// ROTI / NAAN / PARATHA
const roti = [
    ["Tandoori Roti", 25],
    ["Butter Tandoori Roti", 40],
    ["Plain Naan", 50],
    ["Butter Naan", 60],
    ["Garlic Naan", 80],
    ["Cheese Garlic Naan", 120],
    ["Laccha Paratha", 70],
    ["Pudina Paratha", 70],
    ["Aloo Paratha", 90],
    ["Paneer Paratha", 120],
    ["Missi Roti", 60],
    ["Roomali Roti", 30]
];


// RICE / BIRYANI
const rice = [
    ["Plain Rice", 80, 140],
    ["Jeera Rice", 90, 160],
    ["Veg Pulao", 110, 190],
    ["Peas Pulao", 110, 190],
    ["Veg Biryani", 140, 240],
    ["Paneer Biryani", 160, 280],
    ["Hyderabadi Veg Biryani", 160, 280],
    ["Kashmiri Pulao", 150, 260]
];


// DRINKS
const drinks = [
    ["Fresh Lime Water", 60],
    ["Fresh Lime Soda", 80],
    ["Sweet Lassi", 100],
    ["Salted Lassi", 100],
    ["Mango Lassi", 120],
    ["Masala Chaas", 70],
    ["Cold Coffee", 140],
    ["Cold Coffee with Ice Cream", 180],
    ["Fresh Orange Juice", 120],
    ["Fresh Watermelon Juice", 120],
    ["Mineral Water", 30],
    ["Soft Drink", 50]
];


// DESSERTS
const desserts = [
    ["Gulab Jamun", 80],
    ["Rasmalai", 120],
    ["Kesar Rasmalai", 140],
    ["Gajar Ka Halwa", 120],
    ["Moong Dal Halwa", 120],
    ["Brownie", 150],
    ["Brownie with Ice Cream", 200],
    ["Vanilla Ice Cream", 100],
    ["Chocolate Ice Cream", 120],
    ["Butterscotch Ice Cream", 120],
    ["Kulfi", 100],
    ["Matka Kulfi", 140]
];


// ===============================
// CREATE MENU
// ===============================

function createSection(title, foods) {

    const menu = document.getElementById("menu");

    const section = document.createElement("section");
    section.className = "section";

    const heading = document.createElement("h2");
    heading.className = "section-title";
    heading.textContent = title;

    section.appendChild(heading);


    // Check if Half + Full prices exist

    const hasHalfFull = foods.some(food => food.length === 3);


    if (hasHalfFull) {

        const priceHead = document.createElement("div");
        priceHead.className = "price-head";

        priceHead.innerHTML = `
            <span>FOOD</span>
            <span>HALF</span>
            <span>FULL</span>
        `;

        section.appendChild(priceHead);


        foods.forEach(food => {

            const item = document.createElement("div");
            item.className = "item";

            item.innerHTML = `
                <h3>${food[0]}</h3>
                <strong>₹${food[1]}</strong>
                <strong>₹${food[2]}</strong>
            `;

            section.appendChild(item);
        });

    } else {

        const priceHead = document.createElement("div");
        priceHead.className = "price-head single";

        priceHead.innerHTML = `
            <span>FOOD</span>
            <span>PRICE</span>
        `;

        section.appendChild(priceHead);


        foods.forEach(food => {

            const item = document.createElement("div");
            item.className = "single-item";

            item.innerHTML = `
                <h3>${food[0]}</h3>
                <strong>₹${food[1]}</strong>
            `;

            section.appendChild(item);
        });
    }


    menu.appendChild(section);
}


// ===============================
// DISPLAY ALL SECTIONS
// ===============================

createSection("NORTH INDIAN", northIndian);

createSection("SOUTH INDIAN", southIndian);

createSection("STARTERS", starters);

createSection("CHINESE", chinese);

createSection("ROTI / NAAN / PARATHA", roti);

createSection("RICE / BIRYANI", rice);

createSection("DRINKS", drinks);

createSection("DESSERTS", desserts);
