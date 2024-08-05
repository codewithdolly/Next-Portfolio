import React from 'react';

function Layout({ children }) {
  return (
    <>
      <div>Inner layout</div>
      {children}
    </>
  );
}

export default Layout;