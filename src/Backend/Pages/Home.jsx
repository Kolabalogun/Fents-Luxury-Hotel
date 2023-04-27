import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { Editor } from "@tinymce/tinymce-react";
import { useGlobalContext } from "../../Function/Context";
import { db, storage } from "../../Utils/Firebase";
import Loader from "../../Components/Loader";
import Navbar from "../Components/Navbar";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const initialState = {
  homepageCaptionTitle: "",
  homepageCaption: "",
  aboutCaptionTitle: "",
  aboutCaption: "",
  aboutHistory: "",
  aboutHistoryImg: "",
  aboutMoreInfo: "",
  aboutMoreInfoImg: "",
  roomsCaptionTitle: "",
  roomsCaption: "",
  roomsHeader: "",
  roomsHeaderCaption: "",
};

const Home = () => {
  const { user, navigate, loader, setloader } = useGlobalContext();

  const [form, setform] = useState(initialState);
  const [file, setfile] = useState(null);
  const [otherfile, setotherfile] = useState(null);

  const [progress, setprogress] = useState(null);
  const [dateId, setdateId] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
    const dateId = new Date().getTime();
    setdateId(dateId);
  }, []);

  useEffect(() => {
    getHomepageDetails();
  }, []);

  const getHomepageDetails = async () => {
    setloader(true);

    const docRef = doc(db, "Homepage", "r6rmpJdjIO6MRhv8yWOU");
    const blogDetail = await getDoc(docRef);
    setform(blogDetail.data());

    setloader(false);
  };

  const {
    homepageCaptionTitle,
    homepageCaption,

    aboutCaptionTitle,
    aboutCaption,
    aboutHistory,
    aboutHistoryImg,
    aboutMoreInfo,
    aboutMoreInfoImg,
    roomsCaptionTitle,
    roomsCaption,
    roomsHeader,
    roomsHeaderCaption,
  } = form;

  useEffect(() => {
    const uploadFile = () => {
      setloader(true);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.ceil(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          toast("Upload is " + progress + "% done");

          setprogress(progress);
          switch (snapshot.state) {
            case "paused":
              toast("Upload is paused");
              break;
            case "running":
              // toast("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.error(error);
          toast.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image Uploaded");

            setform((prev) => ({ ...prev, aboutHistoryImg: downloadUrl }));
          });
        }
      );
      setloader(false);
    };

    file && uploadFile();
  }, [file]);

  useEffect(() => {
    const uploadFile = () => {
      setloader(true);
      const storageRef = ref(storage, otherfile.name);
      const uploadTask = uploadBytesResumable(storageRef, otherfile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.ceil(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          toast("Upload is " + progress + "% done");

          setprogress(progress);
          switch (snapshot.state) {
            case "paused":
              toast("Upload is paused");
              break;
            case "running":
              // toast("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.error(error);
          toast.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image Uploaded");

            setform((prev) => ({ ...prev, aboutMoreInfoImg: downloadUrl }));
          });
        }
      );
      setloader(false);
    };

    otherfile && uploadFile();
  }, [otherfile]);

  const editorRefaboutHistory = useRef(null);
  const editorRefaboutMoreInfo = useRef(null);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (aboutCaption) {
      if (homepageCaptionTitle) {
        try {
          await updateDoc(doc(db, "Homepage", "r6rmpJdjIO6MRhv8yWOU"), {
            ...form,
            aboutMoreInfo: editorRefaboutMoreInfo.current.getContent(),
            aboutHistory: editorRefaboutHistory.current.getContent(),
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Update successful");
        } catch (err) {
          console.log(err);
        }
      } else {
        return toast.error("All fields must be filled");
      }
      // navigate("/");
    } else {
      return toast.error("All fields must be filled");
    }
  };

  if (loader) {
    return (
      <div className="bg-[#f5f6f7] w-full  min-h-[100vh] px-4 py-1 pb-4 h-full dashboard">
        <Navbar />
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-[#f5f6f7] w-full ml-[17%] min-h-[100vh] px-4 py-1 pb-4 h-full dashboard">
      <Navbar />

      <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
        <div
          className="flex flex-col p-3
            "
        >
          <h6 className="text-[#0d1727] text-2xl leading-relaxed font-semibold mb-1">
            Home
          </h6>
          <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="m-3">
          <div className="flex  flex-col  my-[30px]  text-[14px]">
            <h6 className="text-[#0d1727] text-base leading-relaxed font-semibold ">
              Hero Section
            </h6>

            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <input
                type="text"
                name="homepageCaptionTitle"
                value={homepageCaptionTitle}
                onChange={handleChange}
                placeholder="homepageCaptionTitle"
                required
                className="border bg-white py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <textarea
                placeholder="homepageCaption"
                name="homepageCaption"
                value={homepageCaption}
                onChange={handleChange}
                required
                className="border bg-white py-[18px] px-[25px] text-[14px]  
                    "
                rows="10"
              />
            </div>
          </div>
        </div>
        <div className="mx-3">
          <div className="flex  flex-col  my-[10px]  text-[14px]">
            <h6 className="text-[#0d1727] text-2xl leading-relaxed font-semibold ">
              About Section
            </h6>

            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <input
                type="text"
                name="aboutCaptionTitle"
                value={aboutCaptionTitle}
                onChange={handleChange}
                placeholder="aboutCaptionTitle"
                required
                className="border bg-white py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <textarea
                placeholder="aboutCaption"
                name="aboutCaption"
                value={aboutCaption}
                onChange={handleChange}
                required
                className="border bg-white py-[18px] px-[25px] text-[14px]  
                    "
                rows="10"
              />
            </div>

            <h6 className="text-[#0d1727] text-xl leading-relaxed font-semibold ">
              History
            </h6>

            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <Editor
                apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
                onInit={(evt, editor) =>
                  (editorRefaboutHistory.current = editor)
                }
                initialValue={aboutHistory}
                init={{
                  height: 350,
                  menu: {
                    file: {
                      title: "File",
                      items:
                        "newdocument restoredraft | preview | export print | deleteallconversations",
                    },
                    edit: {
                      title: "Edit",
                      items:
                        "undo redo | cut copy paste pastetext | selectall | searchreplace",
                    },
                    view: {
                      title: "View",
                      items:
                        "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
                    },
                    insert: {
                      title: "Insert",
                      items:
                        "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
                    },
                    format: {
                      title: "Format",
                      items:
                        "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
                    },
                    tools: {
                      title: "Tools",
                      items:
                        "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
                    },
                    table: {
                      title: "Table",
                      items:
                        "inserttable | cell row column | advtablesort | tableprops deletetable",
                    },
                    help: { title: "Help", items: "help" },
                  },
                  plugins: ["link"],
                  mobile: {
                    menubar: true,
                    plugins: "autosave lists autolink",
                    toolbar: "undo bold italic styles",
                  },
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>

            <h6 className="text-[#0d1727] text-xl leading-relaxed font-semibold ">
              History Image
            </h6>
            <div className="flex items-start">
              {aboutHistoryImg && (
                <div className="rounded-[10%] h-[250px]  flex justify-center items-center w-[350px] mr-[20px] relative border">
                  <img
                    className="rounded-[10%] object-cover absolute  w-[100%] h-full"
                    src={aboutHistoryImg}
                    alt="faji"
                  />
                </div>
              )}
              <input
                type="file"
                name="file"
                onChange={(e) => setfile(e.target.files[0])}
                placeholder="Enter Image"
                required
                className="border py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>
            <h6 className="text-[#0d1727] text-xl leading-relaxed font-semibold ">
              More Information
            </h6>

            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <Editor
                apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
                onInit={(evt, editor) =>
                  (editorRefaboutMoreInfo.current = editor)
                }
                initialValue={aboutMoreInfo}
                init={{
                  height: 350,
                  menu: {
                    file: {
                      title: "File",
                      items:
                        "newdocument restoredraft | preview | export print | deleteallconversations",
                    },
                    edit: {
                      title: "Edit",
                      items:
                        "undo redo | cut copy paste pastetext | selectall | searchreplace",
                    },
                    view: {
                      title: "View",
                      items:
                        "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments",
                    },
                    insert: {
                      title: "Insert",
                      items:
                        "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime",
                    },
                    format: {
                      title: "Format",
                      items:
                        "bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat",
                    },
                    tools: {
                      title: "Tools",
                      items:
                        "spellchecker spellcheckerlanguage | a11ycheck code wordcount",
                    },
                    table: {
                      title: "Table",
                      items:
                        "inserttable | cell row column | advtablesort | tableprops deletetable",
                    },
                    help: { title: "Help", items: "help" },
                  },
                  plugins: ["link"],
                  mobile: {
                    menubar: true,
                    plugins: "autosave lists autolink",
                    toolbar: "undo bold italic styles",
                  },
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>

            <h6 className="text-[#0d1727] text-xl leading-relaxed font-semibold ">
              More Image
            </h6>
            <div className="flex items-start">
              {aboutMoreInfoImg && (
                <div className="rounded-[10%] h-[250px]  flex justify-center items-center w-[350px] mr-[20px] relative border">
                  <img
                    className="rounded-[10%] object-cover absolute  w-[100%] h-full"
                    src={aboutMoreInfoImg}
                    alt="faji"
                  />
                </div>
              )}
              <input
                type="file"
                name="file"
                onChange={(e) => setotherfile(e.target.files[0])}
                placeholder="Enter Image"
                required
                className="border py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>

            <h6 className="text-[#0d1727] text-xl leading-relaxed font-semibold ">
              Rooms
            </h6>

            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <input
                type="text"
                name="roomsCaptionTitle"
                value={roomsCaptionTitle}
                onChange={handleChange}
                placeholder="roomsCaptionTitle"
                required
                className="border bg-white py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <input
                type="text"
                name="roomsCaption"
                value={roomsCaption}
                onChange={handleChange}
                placeholder="roomsCaption"
                required
                className="border bg-white py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <input
                type="text"
                name="roomsHeader"
                value={roomsHeader}
                onChange={handleChange}
                placeholder="roomsHeader"
                required
                className="border bg-white py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 my-[10px]">
              <input
                type="text"
                name="roomsHeaderCaption"
                value={roomsHeaderCaption}
                onChange={handleChange}
                placeholder="roomsHeaderCaption"
                required
                className="border bg-white py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white"
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
