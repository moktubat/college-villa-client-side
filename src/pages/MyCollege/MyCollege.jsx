import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";

const MyCollege = () => {
    useTitle("My College");
    useTitle("My College");
  const { user } = useContext(AuthContext);

  const [myColleges, setMyColleges] = useState([]);

  useEffect(() => {
    fetch(`https://college-villa-server-side.vercel.app/myCollege?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyColleges(data));
  }, []);

  let count = 1;
  return (
    <div className="max-w-[1240px] mx-auto mt-10">
      <table className="table">
        <thead className="text-center text-white bg-slate-600 mb-6 uppercase">
          <tr>
            <th>SL.No</th>
            <th>College Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Phone No.</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th>Admission Process</th>
          </tr>
        </thead>
        <tbody>
          {myColleges.map((college, index) => (
            <>
              <tr className="bg-sky-100 text-center mb-6">
                <td>{count++}</td>
                <td>{college.name}</td>
                <td>{college.email}</td>
                <td>{college.subject}</td>
                <td>{college.phone}</td>
                <td>{college.dateOfBirth}</td>
                <td>{college.address}</td>
                <td>
                  <button className="border  p-3  font-bold duration-300 bg-[#05b6d1] hover:text-white rounded-md">
                    <Link to="/success">Feedback</Link>
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCollege;
