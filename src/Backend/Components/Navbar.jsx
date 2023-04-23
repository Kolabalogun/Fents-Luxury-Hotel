import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Navbar = () => {
  const { handleLogout, user } = useGlobalContext();

  return (
    <div className="py-3 px-5 flex justify-between items-center bg-[#fafbfc] shadow-lg">
      <div className="avatar online placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
          <span className="text-xl">{user?.displayName?.charAt(0)}</span>
        </div>
      </div>

      <button onClick={handleLogout} className="btn btn-secondary">
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
