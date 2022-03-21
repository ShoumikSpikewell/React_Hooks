import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";

export default function Profile() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");

    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h2>List of Users</h2>
      <div className="container-fluid mt-5">
        <div className="grid text-center">
            {
                users.map((currentElement) =>
                {
                    return(
                        <div className="g-col-4 g-col-md-4 mt-5 ">
            <div className="d-flex align-items-center">
              <div className="image">
                <img src={currentElement.avatar_url} alt="Hel" className="rounded" width="155" />
              </div>
              <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0 textLeft">{currentElement.login} <FcApproval /></h4>
                {/* <span className="text-left">{type }</span> */}
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                  <div className="d-flex flex-column">
                    <span className="articles">Articles</span>{" "}
                    <span className="number1">38</span>{" "}
                  </div>
                  <div className="d-flex flex-column">
                    <span className="followers">Followers</span>{" "}
                    <span className="number2">980</span>{" "}
                  </div>
                  <div className="d-flex flex-column">
                    <span className="rating">Rating</span>{" "}
                    <span className="number3">8.9</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
                    )
                })
            }
        </div>
      </div>
    </>
  );
}
