import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaUserCircle } from "react-icons/fa";


const MyProfile = () => {
  const { user } = use(AuthContext);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
      setImageError(false);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "photoURL") {
      setImageError(false);
    }
  };
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

      toast.success("Profile updated successfully!");
      setShowUpdateForm(false);
      setImageError(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelUpdate = () => {
    setFormData({
      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
    });
    setShowUpdateForm(false);
    setImageError(false);
  };
  const handleImageError = () => {
    setImageError(true);
  };
  if (!user) {
    return (
      <div>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-3xl font-extrabold text-pink-700">
            Please Login to see Your Profile
          </p>
        </div>
        <Footer></Footer>
      </div>
    );
  }
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center p-4">
        <div className="card bg-base-100 w-full max-w-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>
          {!showUpdateForm ? (
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                {!user.photoURL || imageError ? (
                  <FaUserCircle className="w-32 h-32 text-gray-400 mb-4"></FaUserCircle>
                ) : (
                  <img
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary mb-4"
                    src={user.photoURL}
                    alt=""
                    onError={handleImageError}
                  />
                )}
              </div>
              <div className="space-y-3">
                <div className="bg-base-200 p-4 rounded-lg">
                  <h2 className="text-sm text-gray-500 font-medium">Name</h2>
                  <p className="text-xl font-semibold">
                    {user.displayName || "Not Set"}
                  </p>
                </div>
                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="text-sm text-gray-500 font-medium">Email</h3>
                  <p className="text-xl">{user.email}</p>
                </div>
                <div className="bg-base-200 p-4 rounded-lg">
                  <h3 className="text-sm text-gray-500 font-medium">
                    Profile Image URL
                  </h3>
                  <p className="text-sm break-all">
                    {user.photoURL || "Not Set"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowUpdateForm(true)}
                className="btn btn-primary w-full"
              >
                Update Profile
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-center">
                Update Your Profile
              </h2>
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <fieldset className="fieldset">
                  <label className="label">
                    <span className="label-text font-medium">Display Name</span>
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    required
                  />

                  <label className="label mt-4">
                    <span className="label-text font-medium">
                      Profile Image URL
                    </span>
                  </label>
                  <input
                    type="url"
                    name="photoURL"
                    className="input input-bordered w-full"
                    placeholder="Enter image URL"
                    value={formData.photoURL}
                    onChange={handleInputChange}
                    required
                  />
                  {formData.photoURL && (
                    <div className="mt-4 flex justify-center">
                        <div>
                            <p className="text-sm text-gray-500 mb-2 text-center">Preview:</p>
                            {imageError && formData.photoURL === user.photoURL ? ( <FaUserCircle className="w-24 h-24 text-gray-400"></FaUserCircle>) : (
                                <img src={formData.photoURL} alt="" className="w-24 h-24 rounded-full object-cover border-2 border-primary" onError={handleImageError} />
                            )}
                        </div>
                    </div>
                  )}
                  <div className="flex gap-4 mt-6">
                    <button type="submit" className="btn btn-primary flex-1" disabled={loading}>
                        {loading ? "Updating..." : "Save Changes"}
                    </button>
                    <button type="button" onClick={handleCancelUpdate} className="btn btn-outline flex-1" disabled={loading}>Cancel</button>
                  </div>
                </fieldset>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
