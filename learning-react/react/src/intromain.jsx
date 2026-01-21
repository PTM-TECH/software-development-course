import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React components: Functions
//Small section of a UI:<>
//Function:<html, css, js>

//Rules for creating react components

/*
1. Name of the function/component should start with
a capital letter.
2. The functions should return null or valid html/jsx. 
3. Valid html/jsx. You should only return a single html
element.
4. If you want to return multiple elements, you should use
a react fragment.
*/

/*
Rules exercise: 1 and 2
-Create a component with name AboutMe
-Have the component return null:
-Have your component return <div>{name}<div/>
-Render a componet: just like html

1.  renae the componeny with small letter: break rule
make observations
2. Break rule 2 by not returning anything
3. return invalid jsx eg. Garbage
4. Return multiple html elements
*/
function AboutMe() {
  const user = [{ fname: "Patrick", lname: "Mutua", age: 26 }];
  return (
    <>
      <h1>{user[0].fname + " " + user[0].lname}</h1>
      <h1>{user[0].age}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
        nihil modi, temporibus deserunt consequatur quis vero nemo rerum nulla
        blanditiis.
      </p>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>Hello World</h1>
    <AboutMe />
  </StrictMode>
);
