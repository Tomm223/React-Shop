import React from "react";
/*
async function BigFilterCataloge(state, products) {

   const MassCataloge = new Promise((resolve, reject) => {

      let mass = products

      if (state.catelogy.length) {
         state.catelogy.map((item) => {
            mass = mass.filter((item) => item.filter_name == item)
         })
      }

      else if (state.brand.length) {
         state.brand.map((item) => {
            mass = mass.filter((item) => item.brand == item)
         })
      }
      else if (state.material.length) {
         state.material.map((item) => {
            mass = mass.filter((item) => item.material == item)
         })
      }
      else if (state.season.length) {
         state.season.map((item) => {
            mass = mass.filter((item) => item.season == item)
         })
      }
      else if (state.color.length) {
         state.color.map((item) => {
            mass = mass.filter((item) => item.color == item)
         })
      }




      resolve(mass)
   })
      .then(mass => {
         if (state.sales === true) {
            mass = mass.filter((prod) => {
               prod.sales == true
            })
         }
         else if (state.moda === true) {
            mass = mass.filter((prod) => {
               prod.moda == true
            })
         }
         else if (state.news === true) {
            mass = mass.filter((prod) => {
               prod.news == true
            })
         }
         return mass

      })




}

export default BigFilterCataloge*/