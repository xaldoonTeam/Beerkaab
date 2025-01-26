import Nav from "@/DashComponents/Nav";
import SideParsm from "@/DashComponents/SideParsm";
import { createToolFn, resetToolState } from "@/Redux/Slice/tools/createToolSlice";
import { AppDispatch, RootState } from "@/Redux/Store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";

function ToolCreate() {
  const [toolName, setToolName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [organizationId, setOrganizationId] = useState(1);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, isSuccess, errorMsg } = useSelector(
    (state: RootState) => state.createTool
  );
  const navigate = useNavigate();

  const handleImageUpload = () => {
    if (!imageFile) return;

    const storageRef = ref(storage, `tools/${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Optional: Add progress tracking
      },
      (error) => {
        console.error("Error uploading image:", error);
        toast.error("Image upload failed.");
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUrl(url);
        toast.success("Image uploaded successfully.");
      }
    );
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      toast.error("Please upload an image.");
      return;
    }

    const data = {
      name: toolName,
      description,
      price,
      location,
      category,
      organization_id: organizationId,
      image: imageUrl,
    };

    dispatch(createToolFn(data));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Tool created successfully", { id: "toolToast" });
      navigate("/"); // Redirect to home or another relevant page
    }

    if (isError) {
      toast.error(errorMsg, { id: "toolToast" });
      dispatch(resetToolState());
    }
    dispatch(resetToolState());
  }, [isSuccess, isError, errorMsg, isLoading]);

  return (
    <div className="min-h-screen">
      <div className="p-3 flex justify-between">
        <h1 className="lg:hidden">
          <SideParsm />
        </h1>
        <div className="navhome p-0 flex w-full justify-end">
          <Nav />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-lg">Create Tools</h1>
        <form
          onSubmit={submitHandler}
          className="bg-white dark:text-black my-2 p-4 rounded-[8px] w-full flex flex-col"
        >
          <div>
            <div className="formdiv flex flex-col gap-4">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="toolName">Tool Name</label>
                  <input
                    type="text"
                    id="toolName"
                    className="border border-gray-400 rounded-[10px] p-2"
                    value={toolName}
                    onChange={(e) => setToolName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    className="border border-gray-400 rounded-[10px] p-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    className="border border-gray-400 rounded-[10px] p-2"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    className="border border-gray-400 rounded-[10px] p-2"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    id="category"
                    className="border border-gray-400 rounded-[10px] p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="organizationId">Organization ID</label>
                  <input
                    type="number"
                    id="organizationId"
                    className="border border-gray-400 rounded-[10px] p-2"
                    value={organizationId}
                    onChange={(e) => setOrganizationId(Number(e.target.value))}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="image">Image</label>
                  <input
                        type="file"
                        id="image"
                        className="border border-gray-400 rounded-[10px] p-2"
                        onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            setImageFile(file);
                            console.log("Selected file:", file);
                        }}
                        />

                  <button
                    type="button"
                    onClick={handleImageUpload}
                    className="bg-[#605BFF] rounded-[8px] text-white p-2 mt-2"
                  >
                    Upload Image
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end my-4">
            <button
              type="submit"
              className="bg-[#605BFF] rounded-[8px] shadow-[0_4px_23.5px_rgba(96,91,255,1)] flex justify-center w-[14%] text-white p-2"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Create Tool"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToolCreate;
