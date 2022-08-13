import Image from 'next/image';
import React from 'react';
import Container from './Container';

const Navbar = () => {
  return (
    <Container>
      <div className="flex mb-2 md:mb-4 pt-4 md:pt-6 items-center">
        <div className="flex-1">
          <p className="text-2xl md:text-3xl font-medium text-primary">
            Invest<span className="text-neutral">IO</span>
          </p>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="https://placeimg.com/80/80/people"
                  width="80"
                  height="80"
                  alt="avatar image"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
