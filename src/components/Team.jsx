import React from 'react'

const Team = () => {
  return (
    <>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Job</th>
        <th>Role</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Ajay</div>
              <div className="text-sm opacity-50">India</div>
            </div>
          </div>
        </td>
        <td>
          Software Engineer
          <br />
          <span className="badge badge-ghost badge-sm">Tech Lead</span>
        </td>
        <td>fullstack</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Abishek</div>
              <div className="text-sm opacity-50">India</div>
            </div>
          </div>
        </td>
        <td>
          Big
          <br />
          <span className="badge badge-ghost badge-sm">frontend developer</span>
        </td>
        <td>ui/ux</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Kabilan</div>
              <div className="text-sm opacity-50">India</div>
            </div>
          </div>
        </td>
        <td>
          Big
          <br />
          <span className="badge badge-ghost badge-sm">cyber security expert</span>
        </td>
        <td>Hacker</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
     
    </tbody>
   
  </table>
</div>
    </>
  )
}

export default Team