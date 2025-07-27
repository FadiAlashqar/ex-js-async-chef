async function fetchObj(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

async function getChefBirthday(id) {
    const recipe = await fetchObj(`https://dummyjson.com/recipes/${id}`)
    const userId = await recipe.userId;
    const chefInfo = await fetchObj(`https://dummyjson.com/users/${userId}`)
    const ChefDate = chefInfo.birthDate
    return ChefDate
}

(async () => {
    const ChefDate = await getChefBirthday(1)
    console.log(`La data di nascita è : ${ChefDate}`)
})();