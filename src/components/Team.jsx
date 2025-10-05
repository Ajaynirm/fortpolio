import React from "react";

const Team = () => {
  return (
    <>
      <div className="text-center">
        <table className="table">
          
          <tbody>
            {/* You */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-20 w-20">
                      <div className="avatar avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-14 rounded-full">
                          <span className="text-3xl">AJ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Ajay C</div>
                    <div className="text-sm opacity-50">India</div>
                  </div>
                </div>
              </td>
              <td>Software Development Engineer</td>
            </tr>

            
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Team;
