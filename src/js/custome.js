// const skinTypeDesc = {
//     normal: "Normal skin type typically doesn't feel tight nor oily. When dryness & oiliness condition are present, it could easily be resolved.",
//     dry: "People who have dry skin usually experience tightness in their skin. In some cases, skin may have scaly patches or even flaking.",
//     combination: "Combination skin type features two or more skin types on the face. The skin may have dry & oily portion in some areas of the face, it is mostly on T zone where oily areas are present.",
//     oily: "The skin feels oily all over the face. People with oily skin usually have a great deal of shiny area on their face.",
//     acne_prone: "In Acne-Prone skin, breakouts usually happen more easily & more often.",
//     sensitive: "There's a great deal of redness, itch, irritation, or flaking in sensitive skin.",
//     other: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
// }
//
// const skinConcernDesc = {
//     opt1: "Acne is a result of excessive oil on skin, dirt, bacteria, hormones, and lifestyle. To reduce acne, make sure to clean your skin twice a day, exfoliate 2-3 times a week, get enough sleep, and avoid foods high in oil & glycemic index.",
//     opt2: "To reduce excessive oil on your skin. This is caused by low hydration & unmoisturized skin. So to tackle these conditions your skin overcompensate by producing excessive oil to hydrate itself.",
//     opt3: "To reduce pores and clean comedoes. With this condition the skin pores will look bigger because the comedoes clog the skin. It may have been caused by bacteria, oil & dirt.",
//     opt4: "Aging lines on skin may happen because of several reasons: too much sugar, smoking, sun exposure, lack of sleep, & stress.",
//     opt5: "Skin with rough textures usually caused by the accumulation of dry skin & dirt. Weekly exfoliating & daily hydration could help reducing the uneven skin textures.",
//     opt6: "There's dry skin, and then there's dehydrated skin, the two may sound similar but actually those two are entirely diferent in definition. Dehydrated skin lacks water, while dry skin lacks natural oils (sebum).",
//     opt7: "Sun exposure, dirt, pollution, hormones, & hyperpigmentation can cause uneven skin tone. This condition can be repaired by using sunscreen on daily basis, & use gentle exfoliator with anti pigmentation ingredients to brighten the skin.",
//     opt8: "If you want to have a longer lasting & smooth make up, make sure to take care of your skin first! Skin is where our make up sits in, so if you want to have healthier looking skin underneath your makeup, please always take care of your skin with the proper care & correct treatment according to your skin condition.",
// }
//
// const anecdotes = {
//     smoking: "Tobacco smoke leads to the degradation of collagen, elastic fibers, and proteoglycans. The effects of smoking on the epidermis and dermis are similar to those resulting from chronic UV radiation exposure.",
//     lackOfSleep: "If we compare people with a normal night sleep with the same persons but sleep deprived, the sleep deprived ones look more fatigued, with hanging eyelids, redder eyes, more swollen eyes, darker circles under the eyes. "
// }
//
// const tipsTrick = {
//     upTeen: "Product recommendation: 1% Encapsulated Retinol + Peptide Slow Aging Signs Serum",
//     notPregnant: "Can use 1% Encapsulated Retinol + Peptide Slow Aging Signs Serum",
//     pregnant: "Not recommendation use 1% Encapsulated Retinol + Peptide Slow Aging Signs Serum",
// }
//
// const dataProduct = {
//     product1: "1% Encapsulated Retinol + Peptide Slow Aging Signs Serum",
//     product2: "5% Natural PHA + BHA Retexture Toner",
//     product3: "10% Niacinamide + Zinc Acne Treatment Serum",
//     product4: "Urban Shield 3 in 1 Super Fine Mist",
// }
//
//
// window.addEventListener('DOMContentLoaded', (event) => {
//     const skin_type = {
//         skin_type: "kosong",
//     }
//
//     const skin_concern = {
//         skin_concert: "kosong",
//     }
//
//     const daily_activities = "kosong";
//     const smoke = "kosong";
//     const pregnant = "kosong";
//     const sleep_duration = "kosong";
//     const age = "kosong";
//
//     const name = "kosong";
//     const email = "kosong";
//
//
//     window.localStorage.setItem('skin_type', JSON.stringify(skin_type));
//     window.localStorage.setItem('skin_concern', JSON.stringify(skin_concern));
//     window.localStorage.setItem('daily_activities', JSON.stringify(daily_activities));
//     window.localStorage.setItem('smoke', JSON.stringify(smoke));
//     window.localStorage.setItem('pregnant', JSON.stringify(pregnant));
//     window.localStorage.setItem('sleep_duration', JSON.stringify(sleep_duration));
//     window.localStorage.setItem('age', JSON.stringify(age));
//     window.localStorage.setItem('name', name);
//     window.localStorage.setItem('email', email);
//
// });
//
//
// function setLocalStorageChecked(btnTrigger, targetCheckbox, targetLs) {
//     document.getElementById(btnTrigger).addEventListener("click", function () {
//         let target = document.querySelectorAll(`input[name=${targetCheckbox}]:checked`);
//         let answerArr = []
//
//         for (let i = 0; i < target.length; i++) {
//             answerArr.push(target[i].value)
//         }
//
//         localStorage.setItem(targetLs, JSON.stringify(answerArr));
//     })
// }
//
// setLocalStorageChecked("next-quiz1", "option-quiz1", "skin_type")
// setLocalStorageChecked("next-quiz2", "option-quiz2", "skin_concern")
// setLocalStorageChecked("next-quiz3", "option-quiz3", "daily_activities")
// setLocalStorageChecked("next-quiz4", "option-quiz4", "smoke")
// setLocalStorageChecked("next-quiz5", "option-quiz5", "pregnant")
// setLocalStorageChecked("next-quiz6", "option-quiz6", "sleep_duration")
// setLocalStorageChecked("next-quiz7", "option-quiz7", "age")
//
//
// document.getElementById("see-result").addEventListener("click", function () {
//     let name = document.getElementById("name-quiz").value
//     let email = document.getElementById("email-quiz").value
//
//     window.localStorage.setItem('name', name);
//     window.localStorage.setItem('email', email);
//
//     let imgResult = document.getElementById("img-result-quiz")
//     let skinResult = document.querySelectorAll(".skin-result-desc")
//
//     let descResult1P1 = document.getElementById("desc-result1-p1")
//     let descResult1P2 = document.getElementById("desc-result1-p2")
//
//     let descResult2P1 = document.getElementById("desc-result2-p1")
//     let descResult2P2 = document.getElementById("desc-result2-p2")
//
//     let descResult3P1 = document.getElementById("desc-result3-p1")
//     let descResult3P2 = document.getElementById("desc-result3-p2")
//
//
//     /**
//      * SKIN TYPE
//      */
//     let dataSkin = JSON.parse(localStorage.getItem("skin_type"))
//     let skinType = dataSkin[0]
//     if (skinType === "normal") {
//         for (let i = 0; i < skinResult.length; i++) {
//             skinResult[i].innerText = "Normal"
//         }
//         imgResult.src = "./images/content/skin-normal.jpg"
//         descResult1P1.innerText = skinTypeDesc.normal
//     } else if (skinType === "oily") {
//         for (let i = 0; i < skinResult.length; i++) {
//             skinResult[i].innerText = "Oily"
//         }
//         imgResult.src = "./images/content/skin-oily.jpg"
//         descResult1P1.innerText = skinTypeDesc.oily
//     } else if (skinType === "combination") {
//         for (let i = 0; i < skinResult.length; i++) {
//             skinResult[i].innerText = "Combination"
//         }
//         imgResult.src = "./images/content/skin-combination.jpg"
//         descResult1P1.innerText = skinTypeDesc.combination
//     } else if (skinType === "acne") {
//         for (let i = 0; i < skinResult.length; i++) {
//             skinResult[i].innerText = "Acne"
//         }
//         imgResult.src = "./images/content/skin-acne.jpg"
//         descResult1P1.innerText = skinTypeDesc.acne_prone
//     } else if (skinType === "sensitive") {
//         for (let i = 0; i < skinResult.length; i++) {
//             skinResult[i].innerText = "Sensitive"
//         }
//         imgResult.src = "./images/content/skin-sensitive.jpg"
//         descResult1P1.innerText = skinTypeDesc.sensitive
//     } else if (skinType === "dry") {
//         for (let i = 0; i < skinResult.length; i++) {
//             skinResult[i].innerText = "Dry"
//         }
//         imgResult.src = "./images/content/skin-dry.jpg"
//         descResult1P1.innerText = skinTypeDesc.dry
//     } else {
//         imgResult.src = "./images/content/result-banner.jpg"
//         descResult1P1.innerText = skinTypeDesc.other
//     }
//
//
//     /**
//      * SKIN CONCERN
//      */
//     let dataConcern = JSON.parse(localStorage.getItem("skin_concern"))
//     let skinConcern = dataConcern[0]
//
//     if (skinConcern === "option-val1") {
//         descResult1P2.innerText = skinConcernDesc.opt1
//     } else if (skinConcern === "option-val2") {
//         descResult1P2.innerText = skinConcernDesc.opt2
//
//     } else if (skinConcern === "option-val3") {
//         descResult1P2.innerText = skinConcernDesc.opt3
//
//     } else if (skinConcern === "option-val4") {
//         descResult1P2.innerText = skinConcernDesc.opt4
//
//     } else if (skinConcern === "option-val5") {
//         descResult1P2.innerText = skinConcernDesc.opt5
//
//     } else if (skinConcern === "option-val6") {
//         descResult1P2.innerText = skinConcernDesc.opt6
//
//     } else if (skinConcern === "option-val7") {
//         descResult1P2.innerText = skinConcernDesc.opt7
//
//     } else if (skinConcern === "option-val8") {
//         descResult1P2.innerText = skinConcernDesc.opt8
//     }
//
//
//     descResult2P1.innerText = anecdotes.smoking
//     descResult2P2.innerText = anecdotes.lackOfSleep
//
//     let dataPregnant = JSON.parse(localStorage.getItem("pregnant"))
//     let resultPregnant = dataPregnant[0]
//
//     let dataSleep = JSON.parse(localStorage.getItem("sleep_duration"))
//     let resultSleep = dataSleep[0]
//
//     let dataAge = JSON.parse(localStorage.getItem("age"))
//     let resultAge = dataAge[0]
//
//     if (resultPregnant === "yes") {
//         descResult3P1.innerText = tipsTrick.pregnant
//     } else if (resultPregnant === "no") {
//         descResult3P1.innerText = tipsTrick.notPregnant
//     }
//
//
//     if (resultAge === "23-30" || resultAge === "30-40" || resultAge === ">40+") {
//         if (resultPregnant === "yes") {
//             descResult3P2.innerText = ""
//         } else {
//             descResult3P2.innerText = tipsTrick.upTeen
//         }
//     } else {
//         descResult3P2.innerText = ""
//     }
//
//
// })
//
//
