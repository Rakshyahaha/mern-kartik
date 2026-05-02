

// export default function Practice() {
//        const personName = 'rakshya';
//    const age = 25;
//    const islogin = true;

// import GreetCard from "../components/GreetCard";

   
//    const person = {
//     name: 'Rakshya',
//     age: 23
//    };
//   return (
//     <div className="p-5">
//         <div className="h-80 w-70 bg-lime-400 my-3 rounded-2xl shadow-2xl overflow-hidden">

//         </div>
//         <h1 className = "text-orange-500 text-4xl font-bold">{person.age}</h1>
//     </div>
//   )
// }


// export default function App() {
//   const personName = 'ram';
//   const age = 900;
//   const isLogin = true;

//   const person = {
//     name: 'Ram',
//     age: 90
//   };

//   const movieData = {
//     "id": "20fce5d2-35ac-4d56-9883-418f33bac54f",
//     "movie_id": 238215,
//     "original_title": "The Cobbler",
//     "original_language": "en",
//     "overview": "Max Simkin repairs shoes in the same New York shop that has been in his family for generations. Disenchanted with the grind of daily life, Max stumbles upon a magical heirloom that allows him to step into the lives of his customers and see the world in a new way. Sometimes walking in another man's shoes is the only way one can discover who they really are.",
//     "popularity": 15.75,
//     "poster_path": "https://image.tmdb.org/t/p/original/k6CYisrf2J2FXzvSXVJSscHc7Kj.jpg",
//     "backdrop_path": "https://image.tmdb.org/t/p/original/ysSUDoBeG5oIz7e4vkTtsuGBXfe.jpg",
//     "release_date": "Thu, 09/11/2014",
//     "vote_average": 5.9,
//     "vote_count": 1542,
//     "adult": 0,
//   };

//   return (
//     <div className="p-5">

//      <div className="w-100 border p-5 space-y-3">
//         <h1 className="text-2xl font-semibold underline underline-offset-4">{movieData.original_title}</h1>
//         <img src={movieData.poster_path} alt="" />
        
//         </div>   
    
//     </div>
//   )}


// reuse of component

// export default function practice() {
//   return (
//     <div className="p-5">
// <GreetCard title={'hello jee'}/>
// <GreetCard title={'sello jee'}/>
// <GreetCard title={'fello jee'}/>
//     </div>
//   )}

//for color 
// export default function practice() {
//   return (
//     <div className="p-5 grid grid-cols-4 gap-2">

//   <div className="col-span-2">
//     <GreetCard
//  title={'hello jee'}
//  color={'bg-red-500'}/>
//   </div>

// <GreetCard
//  title={'sello jee'}
//  color={'bg-blue-500'}/>
// <GreetCard
//  title={'fello jee'}
// color={'bg-yellow-500'}/>
//     </div>
//   )}

//function call
// export default function practice() {
//   const handleClick = (name) => {
//     // console.log(`hello jee ${name}`);

//     alert(`hello jee ${name}`)
//   }
//   return (
//     <div className="p-5">

// <button 
// onClick={() => handleClick('leo')}
// // onClick={(e) => {
// //   console.log(e);          }}


// className="bg-black text-white rounded-lg p-3 
// cursor-pointer">Click Me</button>

// <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//   Impedit veritatis consequuntur aperiam, 
//   sunt maiores laborum labore explicabo hic assumenda consequatur!</p>
//     </div>
//   )
// }

//class assignment 
// export default function practice() {
//    const handleCopy = () => {
//        alert(`Donot copy`)
//    }

//   return (
//     <div className= "p-5">
//       <p   onCopy={ handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
//          Eligendi architecto, dolor qui repudiandae, quos temporibus amet assumenda eum ipsum unde illo voluptas 
//         ab quasi facilis! Ea optio beatae dolore consequatur!</p>
//     </div>
//   )
// }



// export default function practice() {
//   const handleEvenOdd = () => {
//     const number = prompt('what is the number ?');
//     console.log(number);
  
//     // Check if user didn't enter anything
//     if (number === null || number.trim() === "") {
//       alert("Please provide a number!");
//       return;
//     }
//      const num = Number(number);
    
// // Even or Odd check
//     if (num % 2 === 0) {
//       alert(`${num} is an Even number`);
//     } else {
//       alert(`${num} is an Odd number`);
//     }
// };

//   return (
//     <div className="p-5">
// <button
// onClick = {handleEvenOdd}
// className="bg-black text-white rounded-lg p-3 cursor-pointer">Click me</button>
//     </div>
//   );
// }
