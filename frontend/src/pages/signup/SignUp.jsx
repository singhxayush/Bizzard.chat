import React, { useEffect } from 'react';
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {

  useEffect(() => {
    // Add class when component mounts
    // document.body.classList.add("backgroundAuthLayer");
    document.body.classList.add("backgroundAuth");

    // Remove class when the component unmounts
    return () => {
      // document.body.classList.add("backgroundAuthLayer");
      document.body.classList.remove("backgroundAuth");
    };
  }, []);

  return (
    <>
    
      <div className="relative w-[63%] h-full">
        {/* <div className="absolute h  inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/authPageLayer.png')`, backgroundPosition: '0% ' }}></div> */}
        <div className="relative flex items-center justify-center h-full transition duration-700 ease-in-out hover:backdrop-blur-md bg-white bg-opacity-25 opacity-0 hover:opacity-100">
          <div>
            <img src="/logo1.png" alt="LOGO" className="w-72 opacity-65" />
          </div>
        </div>
      </div>


      <div className='flex ml-auto mr-[110px] w-[400px] md:w-[440px]'>
        <div className='w-full p-6 rounded-lg 
        shadow-md bg-gray-50 bg-clip-padding 
        backdrop-filter backdrop-blur-sm 
        bg-opacity-5 pb-10
        border border-slate-300'>

          <h1 className='text-3xl text-center text-gray-500 font-sans font-bold mb-4'>
            Sign up
          </h1>

          <form className='flex flex-col w-full'>

            {/* NAME FIELD */}
            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-gray-500">Enter your name</span>
                </div>
                <input type="text" placeholder="Full Name" className="input input-bordered" />
              </label>
            </div>


            {/* USER ID FIELD */}
            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-gray-500">Enter your user ID</span>
                </div>
                <input type="text" placeholder="Username, Email" className="input input-bordered" />
              </label>
            </div>


            {/* PASSWORD FIELD */}
            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-gray-500">Create password</span>
                </div>
                <input type="password" placeholder="New Password" className="input input-bordered"/>
                <input type="password" placeholder="Confirm Password" className="input input-bordered mt-4" />
              </label>
            </div>


            {/* GENDER CHECKBOX */}
            <div className="label">
              <span className="label-text text-gray-500">Gender</span>
            <GenderCheckBox/>
            </div>

            <div>
              <a class='auth_btn btn'>
                Sign up
              </a>
            </div>

          </form>
          <p class="text-sm text-gray-500 mt-2 ">
            Already have an account? 
            <a href="#" 
            class="font-sm font-bold text-primary-600 
            hover:underline hover:text-blue-400 
            hover:cursor-pointer dark:text-primary-500"> {' '}
              Sign in
            </a>
          </p>

          {/* Sign in with Google */}
            <div>
              <div class="flex items-center mb-2 mt-2">
                <hr class="h-0 border-b border-solid border-grey-500 grow" />
                <p class="mx-4 text-grey-600">or</p>
                <hr class="h-0 border-b border-solid border-grey-500 grow" />
              </div>

              <a class="auth_btn mb-2">
                <img class="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="Google" />
                Sign up with Google
              </a>
              <a class="auth_btn">
                <img class="h-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" />
                Sign up with LinkedIn
              </a>
            </div>

        </div>
      </div>

    </>
  )
}

export default SignUp