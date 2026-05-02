
//o/p comes in object form
// export default function GreetCard(props) {
//     console.log(props);
//   return (
//    <div className="h-50 w-50 bg-red-300 border rounded-2xl p-5">
//       <h1 className="text-2xl font-bold underline decoration-2">Hello jee</h1>
//       <p>Lorem ipsum dolor sit amet consectetur </p>
// </div>
//   )}

//to destruct title
// export default function GreetCard({title}) {
//   return (
//    <div className="h-50 w-50 bg-red-300 border rounded-2xl p-5">
//       <h1 className="text-2xl font-bold underline decoration-2">{title}</h1>
//       <p>Lorem ipsum dolor sit amet consectetur </p>
// </div>
//   )}

//for color
export default function GreetCard({title,color}) {
  console.log(color);
  return (
   <div className={`h-50  ${color} border rounded-2xl p-5`}>
      <h1 className="text-2xl font-bold underline decoration-2">{title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur </p>
</div>
  )}