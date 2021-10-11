const governmentForms = [{
  name: "Plutocracy",
  definition: "Rule by the wealthy"
},
{
  name: "Oligarchy",
  definition: "Rule by a small number of people"
},
{
  name: "Kleptocracy",
  definition: "Rule by the thieves"
},
{
  name: "Theocracy",
  definition: "Rule by a religious elite"
},
{
  name: "Democracy",
  definition: "Rule by the people"
},
{
  name: "Autocracy",
  definition: "Rule by a single person"
}];
function endCy(governmentForms) {
  //TODO: Return the names of political forms ending with 'cy'
  return governmentForms.filter(forms => forms.name[forms.length - 1] === 'y' ).map(forms => forms.name);
}
var prueba = "que pedo";
var array = prueba.split("");
console.log(array.length);
console.log(prueba);
console.log(array);
console.log(governmentForms[i].name);
//console.log(endCy(governmentForms));
