// to display objects in array

// import DisplaySection from "./displaysection";

// const persons = [
//   { id:1, name: 'ram', age:90 },
//      { id:2, name: 'laxman', age:80 },
//        { id:3, name: 'bharat', age:70 }

// ];
// const movies = [
//   {
//     "id": 1,
//     "title": "Inception",
//     "genre": "Sci-Fi",
//     "releaseYear": 2010,
//     "rating": 8.8,
//     "durationMinutes": 148,
//     "director": "Christopher Nolan"
//   },
//   {
//     "id": 2,
//     "title": "The Dark Knight",
//     "genre": "Action",
//     "releaseYear": 2008,
//     "rating": 9.0,
//     "durationMinutes": 152,
//     "director": "Christopher Nolan"
//   },
//   {
//     "id": 3,
//     "title": "Interstellar",
//     "genre": "Sci-Fi",
//     "releaseYear": 2014,
//     "rating": 8.6,
//     "durationMinutes": 169,
//     "director": "Christopher Nolan"
//   },
//   {
//     "id": 4,
//     "title": "Parasite",
//     "genre": "Thriller",
//     "releaseYear": 2019,
//     "rating": 8.6,
//     "durationMinutes": 132,
//     "director": "Bong Joon-ho"
//   },
//   {
//     "id": 5,
//     "title": "Avengers: Endgame",
//     "genre": "Superhero",
//     "releaseYear": 2019,
//     "rating": 8.4,
//     "durationMinutes": 181,
//     "director": "Anthony Russo, Joe Russo"
//   }
// ]

// export default function Home() {
//   return (
//     <div>
//       {
//         persons.map((person) =>{
//           return <div key={person.id}>
//             <h1>{person.name}</h1>
//             <p>{person.age}</p>
//           </div>
//       })}
//       <div>
// {
// movies.map((movie) =>{
//   return <div key={movie.id}>
   
// <h2>{movie.title}</h2>
// <h3>{movie.genre}</h3>
// <p>{movie.releaseYear}</p>
// <p>{movie.rating}</p>
//   </div>
// })}

//       </div>

//     {/* <DisplaySection/> */}
//     </div>
//   ) }
//Above code if for practice while below one is of task


import Header from "../../components/Header";
import Colorsection from "./Colorsection";
import DisplaySection from "./DisplaySection";
import { DiApple, DiCss3, DiRedis } from "react-icons/di";


const res = [
  {
    id: 1,
    label: 'Responsive',
    icon: <DiApple size={170} />,
    properties: [
      'Built-in responsiveness',
      'Mobile first fluid grid',
      'Fits any screen sizes',
      'PC Tablet and Mobile'
    ]
  },
  {
    id: 2,
    label: 'Standard CSS',
    icon: <DiCss3 size={170} />,
    properties: [
      'Standard CSS only',
      'Easy to learn',
      'No need for jQuery',
      'No JavaScript library'
    ]
  },
  {
    id: 3,
    label: 'Design',
    icon: <DiRedis size={170} />,
    properties: [
      'Paper like design',
      'Bold colors and shadows',
      'Equal across platforms',
      'Equal across devices'
    ]
  }

];

export default function Home() {
  return (
    <div >

<Header/>

{/* <button className="cursor-pointer">Hello</button> */}


{/* 
<textarea name="caret-amber-500 focus:border-gray-700
focus:border-2 p-5" name="" id=""></textarea> */}

      <DisplaySection />

      <div className="grid grid-cols-3 p-5 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {res.map((item) => {
          return <div key={item.id} className="  flex flex-col
           justify-center items-center gap-5 pt-2 pb-7 shadow-lg ">

            <h1 className="animate-somes">{item.label}</h1>

           <div className="transition-all ease-in-out  hover:scale-120 
           duration-300 hover:-translate-y-4"> {item.icon}</div>

            {item.properties.map((property) => {
              return <p key={property}>{property}</p>
            })}


          </div>

        })}
      </div>
<Colorsection/>

    </div>
  )
}

