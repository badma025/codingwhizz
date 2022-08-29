// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from '../../utils/firebase'

// const Comments = () => {
//   const [user] = useAuthState(auth)
//   return (
//     <section className="mt-20 text-lg md:text-xl">
//       <section className="mt-10">
//         <div className="text-start -ml-10 flex flex-col items-center justify-center text-xl font-semibold tracking-wider md:text-2xl">
//           <h2>Enjoyed this article?</h2>
//           <h2>Leave a comment below!</h2>
//         </div>

//         {user ? (
//           <form className="mx-20 flex flex-col items-center justify-center ">
//             <textarea
//               id="message"
//               rows={4}
//               className="text-md ring-none mx-10 mt-10 block w-full max-w-[600px] rounded-lg border    border-[#3a6aff] bg-[#181f30] p-4 text-white  outline-none dark:placeholder-gray-500"
//               placeholder="Leave a comment..."
//             ></textarea>
//             <button className="mt-10 mb-10 rounded-xl bg-[#1F283D] p-7 transition duration-300 hover:scale-110">
//               Submit comment
//             </button>
//           </form>
//         ) : (
//           <div className="flex items-center justify-center mt-10  ">
//             <h2 className="text-[#3a6aff]">
//               You must be logged in to submit a comment.
//             </h2>
//           </div>
//         )}
//       </section>

//       <section className="border-1 mx-auto mb-10 mt-8 flex  max-w-[500px] flex-col items-center justify-center rounded-2xl  border border-[#3a6aff] p-7">
//         <div className="flex flex-col space-y-5  ">
//           <div
//             className="
//       text-lg font-semibold text-[#3A6AFF]"
//           >
//             <h1>Comments</h1>
//           </div>

//           <div className="space-y-1">
//             <h2 className="">mn31: Great blog!</h2>
//             <h2 className="text-[#3a6aff]">Alim: Thanks!</h2>
//           </div>
//           <div className="space-y-1">
//             <h2>johnpaul1: Do you like typescript?</h2>
//             <h2 className="text-[#3a6aff]">
//               Alim: Yes, it’s much better than Javascript because of its type
//               definitions.
//             </h2>
//             <h2>johnpaul1: Would you recommend typescript with React?</h2>
//           </div>
//         </div>
//       </section>
//     </section>
//   )
// }

// export default Comments

export {}
