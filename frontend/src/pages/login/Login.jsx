import React, { useEffect } from 'react';

const Login = () => {

  useEffect(() => {
    // Add class when component mounts
    document.body.classList.add("backgroundAuth");

    // Remove class when the component unmounts
    return () => {
      document.body.classList.remove("backgroundAuth");
    };
  }, []);

  return (
    <>
      <div className='absolute top-0 left-0 p-6'>
        <img src="/logowhite.png" alt="Logo" className='w-40' />
      </div>

      {/* Main content centered */}
      <div className='flex flex-col  items-center justify-center min-w-96 mx-auto pt-20'>
        <div className='w-full p-6 rounded-lg shadow-md bg-slate-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 pb-10'>

          <h1 className='text-3xl font-semibold text-center text-violet-50 font-mono mb-4'>
            Login
          </h1>

          <form>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-neutral-200">Enter your user ID</span>
                </div>
                <input type="text" placeholder="username, email" className="input input-bordered w-full max-w-xs" />
              </label>
            </div>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-neutral-200">Enter your password</span>
                </div>
                <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
              </label>
            </div>

            <div class='text-right mr-4'>
              <a href="#" class="text-sm text-neutral-200 hover:underline hover:text-blue-400 hover:cursor-pointer">Forgot password?</a>
            </div>

            <div>
              <button className="btn btn-sm w-full max-w-xs mt-4">login</button>
            </div>

            <p class="text-sm text-neutral-200 mt-2 ">
              Don't have an account yet? <a href="#" class="font-sm font-bold text-primary-600 hover:underline hover:text-blue-400 hover:cursor-pointer dark:text-primary-500">Sign up</a>
            </p>

            <div>
              <div class="flex items-center mb-2 mt-2">
                <hr class="h-0 border-b border-solid border-grey-500 grow" />
                <p class="mx-4 text-grey-600">or</p>
                <hr class="h-0 border-b border-solid border-grey-500 grow" />
              </div>
              <a class="btn flex items-center justify-center w-full text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-slate-800 hover:bg-grey-400 hover:cursor-pointer hover:ring-4 focus:ring-neutral-200">
                <img class="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
                Sign in with Google
              </a>
            </div>

          </form>
        </div>
      </div>

    </>
  )
}


export default Login