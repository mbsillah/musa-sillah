'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
// @ts-ignore
import { UilLinkedin, UilGithub } from '@iconscout/react-unicons';

const HeroSection = () => {
  const openFile = () => {
    window.open('/files/Musa_Resume.pdf');
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-5 place-self-center mt-4 mb-4 lg:mt-0">
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYS7WigJugPtYc5zH09_ZG5t2RRYnBZw3aQP-66xL38Yk_xCIhsYkG19hyxfoNGBHfzsV0HFijGxiKjQTngGwj3Z3fzS4Q=s1600"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{' '}
            </span>
            <TypeAnimation
              sequence={['Musa', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a full stack software engineer with experience in tech
            consulting, automations, and medical technology fields. My skills in
            particular curve to the front end with a focus on React, Next.js, &
            Typescript. Always willing learn more!
          </p>
          <div className="mb-6">
            <Link
              href="mailto:mbsillah92@gmail.com"
              className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Let's Connect!
            </Link>
            <button
              onClick={openFile}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Resume
              </span>
            </button>
          </div>
          <div className="flex flex-row justify-around lg:justify-start">
            <Link href="https://www.linkedin.com/in/mbsillah/">
              <UilLinkedin size="50" />
            </Link>
            <Link href="https://github.com/mbsillah">
              <UilGithub size="50" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
