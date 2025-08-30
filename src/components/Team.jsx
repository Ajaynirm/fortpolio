import React from "react";

const Team = () => {
  return (
    <>
      <div className="text-center">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
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

            {/* Teammate - Frontend */}
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
              <td>Solution Architect</td>
            </tr>

            {/* ChatGPT */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/024/558/807/non_2x/openai-chatgpt-logo-icon-free-png.png"
                        alt="AI R&D Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">ChatGPT</div>
                    <div className="text-sm opacity-50">Virtual</div>
                  </div>
                </div>
              </td>
              <td>AI Research & Documentation Writing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Team;
