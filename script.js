const renderMEal = (meal = {}) => {
  const { strMeal, strMealThumb, strInstructions, strCategory, strArea } = meal;
  document.getElementById("app").innerHTML = `<div
        class="w-[768px] bg-white border border-gray-200 rounded-lg shadow mb-4"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-full"
            src="${strMealThumb}"
            src="${strMeal}"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-3">
                ${strMeal}
            </h5>
            <span class="bg-blue-100 text-blue-800 rounded-md px-2 py-1 mr-2">
                ${strCategory}
            </span>
            <span class="bg-blue-100 text-blue-800 rounded-md px-2 py-1 mr-2">
               ${strArea}
            </span>
          </a>
          <p class="mb-3 font-normal text-gray-700"></p>
          ${strInstructions}
        </div>
      </div>`;
};
axios
  .get("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((res) => renderMEal(res.data.meals[0]));
