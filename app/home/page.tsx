import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-5'>

      <div>
      <h1 style={{ color: "#f3de8a" }} className="text-3xl">
          Pushan Mukhopadhyay
        </h1>
        <h2 className="text-center border-b-1 mt-2">Full Stack dev</h2>
      </div>

      <div className='w-2/3 flex flex-col gap-5 mt-5'>
      <div className='flex flex-col gap-4'>
          <h2 className='leading-relaxed text-1xl'>
            Hi, I am Pushan Mukhopadhyay, a full stack web developer. I build
            elegant, responsive web applications with modern technologies. I am
            currently learning Next.js and started exploring Blockchain domain.
          </h2>
          <h2 className='leading-relaxed text-1xl'>
            I am a passionate developer who loves to learn new technologies and
            build projects that make a difference. I am focused on clean code
            and intuitive user experiences.
          </h2>

      </div>


      <div className='flex flex-col gap-3'>
      <h1 style={{ color: "#f3de8a" }} className="text-3xl">
            Experience
          </h1>
          <h2 className='leading-relaxed text-1xl ml-5'>
            I have worked as a Teaching Assistant at <span style={{color: "#f3de8a"}}>Coding Ninja</span>.
          </h2>
          <div className='ml-10'>
          <span>&#x2022; I solved 500+ DSA doubts</span>
            <br />
            <span>
              &#x2022; I helped more than 200 students to resolved their doubt
            </span>
            <br />
            <span>
              &#x2022; I helped Coding Ninja to make coding contest in their
              platform
            </span>
          </div>
      </div>


      <div className='flex flex-col gap-3'>
      <h1 style={{ color: "#f3de8a" }} className="text-3xl">
            Writing
          </h1>
          <h2 className='leading-relaxed text-1xl ml-5'>
            I have written articles on various topics related to web
            development, programming languages, and technology trends. You can
            find my articles on
            <a
              href="https://medium.com/@mukhopadhyaypushan42"
              className="underline underline-offset-8"
            >
              {" "}
              Medium
            </a>
          </h2>
      </div>

      <div className='flex flex-col gap-3'>
        <h1 style={
          {
            color: "#f3de8a",
          }
        } className='text-3xl'>Free Time</h1>
        <h2 className='leading-relaxed text-1xl ml-5'>
          In my leasure time, I love to play games, watch movies. And one day I want to travel India in bike.
        </h2>
      </div>
      </div>

    </div>
  )
}

export default page