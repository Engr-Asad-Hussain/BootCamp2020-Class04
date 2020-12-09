# Conclusion

## React Tutorial 3

#### - What is Boiler Plat?
 - This is the basic stucture of any application.
 - Or in other words we can say that by default what is already present in react folder is boiler plat.

#### - We will make statefull components. What is state?
 - State is just like a memory storage. 
 - Whenever we make any variable in javascript, so corresponding to that variable it reserves some storage. So in React that storage is known as state.
 - Whenever there is a change in state. React will not refresh the whole page. For example in the whole page we have a component at the end of page and we change the state of that component then react will only refresh that component.
 - As we have discussed that react maintains VDOM, so it just updated single component. It will not refresh the complete html page.

#### - Difference between export and export default?
 - Whenever we use export default, then importing in another file we can import will different name as well. Example, We have created function App() and exported default
 ```
 import Apple from './App'
 ```
 - Now, whenever we just export we cannot use another name while importing also we have to use {}. Example; export function App() {} then,
 ```
 import {App} from './App'
 ````

#### - What is Hook?
 - Whatever is in shadow DOM will be render on DOM, so how and when this shadow DOM will render to original DOM? For this we have some Hooks.
 - It is like an event. After this even render to the DOM. We always works on shadow DOM.
 - useState is one of the Hook of React.
 - **Functional components are no more stateless component after React Hooks**

#### - Sin in react?
 - On refresh all the varaibles are set to inital value. It means that useState is not persistant. 
 - And whenever you are using react, react is a SPA (single page application),  we donot refresh the complete page, the VDOM of react will refresh only that component which has changed. We called it as a sin in react.

#### - Post increment and Pre increment?
 - ++Count
 - Count++

#### - class in CSS file?
 - "class" is a keyword used in normal CSS but in react we use "className"
    and in App.css file we declare using .box{}
    
#### - ternary Operator?
 - {isMorning ? 'DayLight' : 'Night'}
 - here isMorning is an statement; can be true or flase
 - If true then print "DayLight" else print "Night"

#### - Condition in CSS classes?
 - <div className={`box ${isMorning ? 'dayColor' : 'nightColor'}`}
 - It means that class is box and dayColor if isMorning is true
 - or class will be box and nightColor if isMorning is false
 - If you look in inspect then you will find that this statement means it appends box with dayColor or nightColor.
 - <class="box nightColor">
 