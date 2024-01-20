import githubIcon from '../assets/github.svg';

const Header = () => {
  return (
    <header className="w-full py-5 px-4 lg:px-2 xl:px-0 mb-16 border-b border-neutral-200">
      <div className="mx-auto container flex justify-between">
        <nav>
          <h4 className="text-xl font-[500] text-neutral-800"><strong>Google</strong> Translate</h4>
        </nav>
        <nav>
          <div className="w-[25px] hover:scale-105 transition-all duration-200 ease-in-out">
            <a href={import.meta.env.VITE_LINK_GITHUB} target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="" />
            </a>
          </div>
        </nav>
      </div >
    </header >
  );
};

export { Header };
