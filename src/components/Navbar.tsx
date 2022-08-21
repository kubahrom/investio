import Image from 'next/image';
import React from 'react';
import Container from './Container';

const Navbar = () => {
  return (
    <Container>
      <div className="mb-2 flex items-center pt-4 md:mb-4 md:pt-6">
        <div className="flex-1">
          <p className="text-2xl font-medium text-primary md:text-3xl">
            Invest<span className="text-neutral">IO</span>
          </p>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar btn btn-ghost btn-circle">
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
