// Create a function that tests the post route handler [2 pts]

// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

async function test ( , data){
  const response= await fetch({
    method:"POST",
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(potionSchema.label.effect.ingredients.color.isexplosive)
})
const data= await response.json

}

test()