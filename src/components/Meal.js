import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Meal = () => {
  const [food, setFood] = useState([])

  const getFood = async () => {
    try {
      const res = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      )
      console.log(res.data.meals)
      setFood(res.data.meals)
    } catch (err) {
      console.log(err)
    }
  }

  //const res = await axios.get('www.themealdb.com/api/json/v1/1/random.php')
  //  console.log(res.data.meals)
  // setFood(res.data.meals)
  //}

  useEffect(() => {
    getFood()
  }, [])

  return (
    <section className="meals">
      <div className="button">
        <button onClick={() => getFood()} className="btn">
          Generate Meal
        </button>
      </div>

      {food.map((foods) => {
        const {
          idMeal,
          strMeal,
          strInstructions,
          strMealThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strYoutube
        } = foods

        return (
          <article key={idMeal}>
            <div>
              <h2>{strMeal}</h2>
              <img src={strMealThumb} alt={strMeal}></img>
            </div>
            <div>
              <h3> Ingredients Needed: </h3>
              <p>
                {' '}
                {strIngredient1}
                {','} {strIngredient2}
                {','} {strIngredient3}{' '}
              </p>
              <h3>Cooking Instructions: </h3>
              <p>{strInstructions}</p>
              <a href={strYoutube}> Watch Video </a>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Meal
