/** ~~~~~~~ REMEMBER ~~~~~~~
 * 1. boolean value/state cannot be directly displayed, rather need to convert toString() first. E.g.
 *  > const [hide, setHide] = useState(true);
 *  > function App() {     return (    <div>   {hide.toString()}   </div>     );  }
 *  - In JSX, expressions inside curly braces {} are evaluated as JavaScript.
 *  - { hide }              => variable hide,
 *  - {{ hide }.toString()} => an object with the key hide, tried to convert it to a string, which is incorrect.
 *  - Simply use hide.toString() directly within the curly braces.
 *  - SIMILARLY, numbers and objects may need such change:
 *      - const num = 42;                   num.toString();
 *      - const obj = { key: "value" };     JSON.stringify(obj);
 * 
 * 2. Parent Component is the one that imports & calls another component called Child Component.
 */
