import { RiRocketFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className='nav-container'>
        <RiRocketFill className='nav-logo' />
        <h4>SpaceTours</h4>
        <RiRocketFill className='nav-logo' />
      </div>
    </>
  );
};

export default Navbar;
