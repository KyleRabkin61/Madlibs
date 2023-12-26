let name1 = prompt('Enter a name for the kid:')
let name2 = prompt('Enter a name for the mom:')
let name3 = prompt('Enter a name for the robber:')
let pet = prompt('Enter a pet:')
let place = prompt('Enter a vacation spot:')
let adjective = prompt('Enter a adjective:')
let verb = prompt('Enter a verb:')
let traversalverb = prompt('Enter a traversal verb:')
let adverb = prompt('Enter an adverb:')
let food1 = prompt('Enter your first food:')
let food2 = prompt('Enter your second food:')
let drink = prompt('Enter your drink:')
let vehicle = prompt('Enter a vehicle:')
let number = prompt('Pick a number:')
let job = prompt('Enter a job for the robber:')
let trap = prompt('Enter a trap:')

let story = `Once upon a time, a ${adjective} young kid named ${name1} woke up from his ${adjective} dream. He ${traversalverb} out of his room and realized that his family was gone! He and his family were supposed to go to ${place} for vacation, however, they seemed to have forgotten all about ${name1}! His family consisted of ${number} of siblings, a mother, a father, and a grandmother. He had a pet ${pet} who he loved ${adverb}. Out of everyone, only his mother liked him. Her name was ${name2}. Despite his mom liking him, she still forgot ${name1}. At first he was upset, but once he realized that the rest of his family did not care about hime, he was happy to be alone. He decided to cook his very own breakfast, which consisted of ${food1}, ${food2}, and ${drink}. He rode his ${vehicle} down the stairs and ${verb} out of the door into his snowy front lawn. ${name1} was having so much fun being alone, but eventually grew tired. He was sitting with his pet ${pet} on the couch when he overheard robbers talking outside his house. He recognized the robbers voice, as he was the ${job} who was watching over the house the day that ${name1} and his family were packing for ${place}. ${name1} also remebered the robber's name, ${name3}. ${name1} knew that he was the one who had to protect his house. He ${traversalverb} around the house and set up traps. His favorite trap was the ${trap}. The robbers felt confident going into the house, but after they faced the traps, they were filled with fear and arrested by the police. In the end, ${name1} felt accomplished for the work he did to protect his house. ${name2} grew worried for ${name1}, so she ${traversalverb} back home. When she came home, ${name1} gave her a big hug, and everything went happily ever after.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`