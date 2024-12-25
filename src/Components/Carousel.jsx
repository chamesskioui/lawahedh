import React from 'react'

function Carouselle() {
  return (
    <div>
      <section className="bg-dark">
 
 <div className="mx-6 pt-24 pb-96 pt-xl-52 bg-warning position-relative overflow-hidden" style={{height:"700px"}}>
   <div className="position-absolute bottom-0 start-0 w-100 ps-10 pt-14">
     <img
       className="d-block img-fluid mx-auto me-sm-0 ms-xl-0 mw-lg-none h-100 col-10 col-sm-8 col-md-6"
       src="https://shuffle.dev/vendia-assets/images/header/woman-white-circle.png"
       alt=""
       style={{ objectFit: "contain", objectPosition: "bottom" }}
     />
   </div>
   <div className="container position-relative">
     <div className="mw-2xl me-xl-0 me-xl-20" style={{marginLeft:"50%",marginTop:"10%"}}>
       <h1 className="d-none d-sm-inline-block h2 mb-16" >NEW COLLECTION</h1>
       <h1 className="d-sm-none h2 text-break mb-12">SUMMER COLLECTION</h1>
       <div className="mw-lg mx-auto">
         <p className="fs-7 fw-medium mb-5">
           Lorem ipsum dolor sit amet, consectetur adipiscing a elit. Nullam to
           dictum aliquet accumsan porta lectus ridiculus in these mattis.
         </p>
         <a className="d-inline-fex align-items-center fs-7 fw-bold" href="#">
           <span className="me-3">Explore Collections</span>
           <svg
             width={11}
             height={12}
             viewBox="0 0 11 12"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427"
               stroke="black"
               strokeWidth={2}
               strokeLinecap="round"
               strokeLinejoin="round"
             />
           </svg>
         </a>
       </div>
     </div>
   </div>
 </div>
 <div
   className="d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs"
   style={{ zIndex: 9999 }}
 >
   <div
     className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark"
     style={{ opacity: "75%" }}
   />
   <nav className="position-relative h-100 w-100 d-flex flex-column justify-content-between py-8 px-8 bg-white overflow-auto">
     <div className="d-flex align-items-center">
       <a className="me-auto h4 mb-0 text-decoration-none" href="#">
         <img
           className="img-fluid"
           src="https://shuffle.dev/vendia-assets/logos/vendia-dark.svg"
           alt=""
         />
       </a>
       <a className="navbar-close" href="#">
         <svg
           width={24}
           height={24}
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M6 18L18 6M6 6L18 18"
             stroke="#111827"
             strokeWidth={2}
             strokeLinecap="round"
             strokeLinejoin="round"
           />
         </svg>
       </a>
     </div>
     <div className="py-12">
       <ul className="nav flex-column">
         <li className="nav-item mb-6">
           <a className="nav-link text-dark" href="#">
             Shop
           </a>
         </li>
         <li className="nav-item mb-6">
           <a className="nav-link text-dark" href="#">
             Product
           </a>
         </li>
         <li className="nav-item mb-6">
           <a className="nav-link text-dark" href="#">
             Blog
           </a>
         </li>
         <li className="nav-item">
           <a className="nav-link text-dark" href="#">
             Support
           </a>
         </li>
       </ul>
     </div>
     <div>
       <a className="btn w-100" href="#">
         Login
       </a>
       <a className="btn w-100 btn-primary" href="#">
         Sign in
       </a>
     </div>
   </nav>
 </div>

</section>
    </div>
  )
}

export default Carouselle