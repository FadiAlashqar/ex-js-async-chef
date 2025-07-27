async function fetchObj(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

async function getChefBirthday(id) {
    let recipe;
    try {
        recipe = await fetchObj(`https://dummyjson.com/recipes/${id}`)
    }
    catch (error) {
        throw new Error(`C'è stato un problema nel recuperare la ricetta: ${error}`)
    }
    const userId = recipe.userId;
    const chefInfo = await fetchObj(`https://dummyjson.com/users/${userId}`)
    const ChefDate = chefInfo.birthDate
    return ChefDate
}

(async () => {
    try {
        const ChefDate = await getChefBirthday(2)
        const formattedDate = dayjs(ChefDate).format("DD/MM/YYYY")
        console.log(`La data di nascita è : ${formattedDate}`)
    }
    catch (error) {
        console.error(error)
    }

})();