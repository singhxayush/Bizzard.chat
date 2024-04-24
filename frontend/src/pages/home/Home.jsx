import React, { useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Lefttoolbar from '../../components/lefttoolbar/Lefttoolbar';
import MessageContainer from '../../components/playarea/Chats/MessageContainer';
import TopBar from './TopBar';

const Home = () => {

  useEffect(() => {
    // Add class when component mounts
    document.body.classList.add("backgroundHomePage");

    // Remove class when the component unmounts
    return () => {
      document.body.classList.remove("backgroundHomePage");
    };
  }, []);

  return (
    <>
      <div className='flex flex-col flex-1 h-full w-full'>

        {/* <div className='m-4 mb-2 mt-0'>
          <TopBar />
        </div> */}

        <div class='flex flex-1 justify-start h-full gap-5 p-4'>

          <div className='border border-slate-800 w-0 min-w-20 rounded-2xl bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 transition-shadow hover:shadow-glow'>        
            <Lefttoolbar />
          </div>

          <div className='flex overflow-hidden rounded-2xl 
          p-1 m-t min-w-fit
          border border-slate-800 bg-slate-700 bg-clip-padding bg-opacity-10
          backdrop-filter backdrop-blur-sm 
          transition-shadow duration-300 hover:shadow-glow'>
            <Sidebar />
          </div>  

          {/* <div className='w-full border border-slate-800 min-w-min rounded-2xl overflow-hidden bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 transition-shadow duration-300 hover:shadow-glow'>
            <MessageContainer />
          </div> */}

          <div className='flex w-full overflow-hidden rounded-2xl 
          border border-slate-800 bg-slate-700 bg-clip-padding bg-opacity-10
          backdrop-filter backdrop-blur-sm 
          transition-shadow duration-300 hover:shadow-glow'>
            <MessageContainer />
          </div>

          <div className='border border-slate-800 w-0 min-w-20 rounded-2xl p-4 overflow-hidden bg-slate-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 transition-shadow hover:shadow-glow'>        
            <div className='flex flex-col gap-10'>
              <text align='center'>tab1</text>
              <text align='center'>tab2</text>
              <text align='center'>tab3</text>
              <text align='center'>tab4</text>
              <text align='center'>tab5</text>
              <text align='center'>tab6</text>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
