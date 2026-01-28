// 1. keyword ব্যবহার করা যাবে না
var isFalse = 45;
var myVar = 50;


// 2. variable name এ space দেওয়া যাবে না
var isHappy = false;
var isHappyYes = true;


// 3. variable name এ quote দেওয়া যাবে না
var address = "kochu khet";


// 4. number দিয়ে শুরু করা যাবে না
var money = 45;
var money2 = 55;
// var 3money = 88; ❌ invalid
var money3 = 88; // ✅ valid


// 5. name is case sensitive
var address1 = "Dhaka";
var Address1 = "Chittagong";
// address1 !== Address1


// 6. long variable name লেখার সঠিক পদ্ধতি

// ❌ ভুল
// var my current home address = "kharnoy";

// ✅ সঠিক পদ্ধতিগুলো
var my_current_home_address = "kharnoy";  // snake_case
var myCurrentHomeAddress = "kharnoy";     // camelCase (Most used in JS)
var MyCurrentHomeAddress = "kharnoy";     // PascalCase (Class এর জন্য)
