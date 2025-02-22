import React from "react";

function CompnainForm() {
  return (
    <form action="" className="w-full rounded-lg  relative h-auto border p-6 ">
      <span className="w-full relative h-auto flex flex-col gap-3">
        <h2 className="text-3xl font-medium text-primary ">
          Complaint Form
        </h2>
        <p className="text-base font-medium text-fontprimary">
        Please use the form below to share your concern with us and we will come back to you with the right solution.
        </p>
      </span>
      <div className="w-full flex items-start flex-col gap-2 relative">

        <h2 className="text-foreground font-4xl font-medium mt-5">
          Please tell the type of complaint you want to report*
        </h2>

        <ul className="w-full relative h-auto grid grid-cols-2  gap-4 ">
          <li className="w-full relative h-auto flex items-center gap-2 ">
            <input type="checkbox" id="category" />
            <label
              htmlFor="category"
              className="text-base font-medium text-fontprimary"
            >
              Category
            </label>
          </li>
          <li className="w-full relative h-auto flex items-center gap-2 ">
            <input type="checkbox" id="category" />
            <label
              htmlFor="category"
              className="text-base font-medium text-fontprimary"
            >
              Category
            </label>
          </li>
          <li className="w-full relative h-auto flex items-center gap-2 ">
            <input type="checkbox" id="category" />
            <label
              htmlFor="category"
              className="text-base font-medium text-fontprimary"
            >
              Category
            </label>
          </li>
          <li className="w-full relative h-auto flex items-center gap-2 ">
            <input type="checkbox" id="category" />
            <label
              htmlFor="category"
              className="text-base font-medium text-fontprimary"
            >
              Category
            </label>
          </li>
          <li className="w-full relative h-auto flex items-center gap-2 ">
            <input type="checkbox" id="category" />
            <label
              htmlFor="category"
              className="text-base font-medium text-fontprimary"
            >
              Category
            </label>
          </li>
        </ul>

        <div className="w-full relative h-auto grid grid-cols-2 mt-5 gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-md text-fontprimary font-medium flex items-center gap-2 pl-2"
            >
              Complaint Title*
            </label>
            <input
              type="text"
              id="name"
              placeholder="Provide a short title to you complaint"
              className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
              //   {...register("name")}
            />
            {/* {errors.name && (
              <span className="text-red-500 text-xs pt-1">
                {errors.name.message}
              </span>
            )} */}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Communication Email*
            </label>
            <input
              type="text"
              id="email"
              placeholder="Provide email for communication"
              className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
              //   {...register("name")}
            />
            {/* {errors.name && (
              <span className="text-red-500 text-xs pt-1">
                {errors.name.message}
              </span>
            )} */}
          </div>

          <div className="flex flex-col gap-2 col-start-1 col-end-2">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Buyer Name*
            </label>
            <input
              type="text"
              id="email"
              placeholder="Provide Buyer’s Name"
              className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
              //   {...register("name")}
            />
            {/* {errors.name && (
              <span className="text-red-500 text-xs pt-1">
                {errors.name.message}
              </span>
            )} */}
          </div>

          <div className="flex flex-col gap-2 col-start-2 col-end-3">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Buyer Contact Details*
            </label>
            <input
              type="text"
              id="email"
              placeholder="Provide Mobile Number of the Buyer"
              className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
              //   {...register("name")}
            />
            {/* {errors.name && (
              <span className="text-red-500 text-xs pt-1">
                {errors.name.message}
              </span>
            )} */}
          </div>

          <div className="flex flex-col gap-2  col-start-1 col-end-2">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Communication Proof
            </label>
            <input
              type="file"
              id="email"
              className={`border-2 items-center justify-center rounded-lg px-3 py-[7px] placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
            />
          </div>
          <div className="flex flex-col gap-2  col-start-2 col-end-3">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Communication Proof
            </label>
            <input
              type="file"
              id="email"
              className={`border-2 items-center justify-center rounded-lg px-3 py-[7px] placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
            />
          </div>
          <div className="flex flex-col gap-2  col-start-1 col-end-2">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Communication Proof
            </label>
            <input
              type="file"
              id="email"
              className={`border-2 items-center justify-center rounded-lg px-3 py-[7px] placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
            />
          </div>
          <div className="flex flex-col gap-2  col-start-2 col-end-3">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Communication Proof
            </label>
            <input
              type="file"
              id="email"
              className={`border-2 items-center justify-center rounded-lg px-3 py-[7px] placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Dispute amount*
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Amount"
              className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
              //   {...register("name")}
            />
            {/* {errors.name && (
              <span className="text-red-500 text-xs pt-1">
                {errors.name.message}
              </span>
            )} */}
          </div>

          <div className="flex flex-col gap-2 col-start-2 col-end-3">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Product Delivery Address*
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Product Delivery Address"
              className={`border-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary outline-none  
       focus:ring-0 `}
              //   {...register("name")}
            />
            {/* {errors.name && (
              <span className="text-red-500 text-xs pt-1">
                {errors.name.message}
              </span>
            )} */}
          </div>

          <div className="flex flex-col gap-2 col-start-1 col-end-3">
            <label
              htmlFor="email"
              className="text-md text-fontprimary  font-medium flex items-center gap-2 pl-2"
            >
              Complaint Description*
            </label>
            <textarea
              name=""
              className={`border-2 bg-transparent py-2 rounded-lg px-3 h-12 placeholder:text-[0.95rem] 
            border-gray-200 focus:border-primary  outline-none  
       focus:ring-0 `}
              id=""
              rows={4}
              placeholder="Complaint Description"
            ></textarea>
            {/* {errors.name && (
              <span className="text-red-500 text-xs pt-1">
                {errors.name.message}
              </span>
            )} */}
          </div>
        </div>

        <button className="w-full relative h-auto px-5 py-1 text-white bg-primary rounded-md cursor-pointer hover:bg-transparent hover:text-primary border border-transparent  hover:border-primary">
          Submit Complaint
        </button>

      </div>


    </form>
  )
}

export default CompnainForm;
