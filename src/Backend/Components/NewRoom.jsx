import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useGlobalContext } from "../../Function/Context";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../Utils/Firebase";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const initialState = {
  RoomName: "",
  RoomImage: "",
  RoomDetails: "",
  PricePerNight: "",
  OtherImages: [],
};

const NewRoom = ({ handleState }) => {
  const { setloader, user, navigate, pageStateF, notification, notificationF } =
    useGlobalContext();

  const { id } = useParams();

  const [form, setform] = useState(initialState);
  const [file, setfile] = useState(null);
  const [otherfile, setotherfile] = useState(null);
  const [progress, setprogress] = useState(null);
  const [dateId, setdateId] = useState("");

  const { RoomName, RoomImage, RoomDetails, PricePerNight, OtherImages } = form;

  const editorRefRoomDescription = useRef(null);

  // to set timeId
  useEffect(() => {
    window.scroll(0, 0);
    const dateId = new Date().getTime();
    setdateId(dateId);
  }, []);

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

            setform((prev) => ({ ...prev, RoomImage: downloadUrl }));
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

            setform((prev) => ({
              ...prev,
              OtherImages: [...OtherImages, downloadUrl],
            }));
          });
        }
      );
      setloader(false);
    };

    if (OtherImages.length < 4) {
      otherfile && uploadFile();
    }
  }, [otherfile]);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      RoomName &&
      file &&
      editorRefRoomDescription.current.getContent().length > 1
    ) {
      setloader(true);
      try {
        await addDoc(collection(db, "Rooms"), {
          ...form,
          OtherImages: [],
          RoomDetails: editorRefRoomDescription.current.getContent(),
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
          dateId: dateId,
        });
        setloader(false);
        toast.success("Room added");
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    } else {
      return toast.error("All fields must be filled");
    }
  };

  useEffect(() => {
    id && getRoomDetail();
    id && pageStateF("rooms");
  }, [id]);

  const getRoomDetail = async () => {
    const docRef = doc(db, "Rooms", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setform({ ...snapshot.data() });
    }
  };

  const updateRoom = async (e) => {
    e.preventDefault();

    if (RoomName && editorRefRoomDescription.current.getContent().length > 1) {
      setloader(true);

      try {
        await updateDoc(doc(db, "Rooms", id), {
          ...form,
          RoomDetails: editorRefRoomDescription.current.getContent(),
          timestamp: serverTimestamp(),
          author: user.displayName,
          userId: user.uid,
        });
        toast.success("Room updated");
        setloader(false);
      } catch (err) {
        console.log(err);
        notificationF(err);
      }
    } else {
      return toast.error("All fields must be filled");
    }
  };

  return (
    <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
      <div
        className="flex flex-col p-3 justify-between
"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[#0d1727] text-3xl leading-relaxed font-semibold mb-1">
            Add New Room
          </h1>

          <Link to={"/admin"} onClick={pageStateF("rooms")}>
            <button
              onClick={handleState}
              className="btn btn-active btn-accent uppercase "
            >
              See rooms
            </button>
          </Link>
        </div>

        <p className="text-[13px]">Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="m-3">
        <div className="flex  flex-col  my-[10px]  text-[14px]">
          <div className="grid grid-cols-2 gap-3 my-[10px]">
            <div className="flex  flex-col   ">
              <h6 className="text-[#0d1727] text-xl leading-relaxed font-semibold ">
                Room Name
              </h6>

              <input
                type="text"
                placeholder="Room Name"
                name="RoomName"
                value={RoomName}
                onChange={handleChange}
                required
                className="border bg-white py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>
            <div className="flex  flex-col   ">
              <h6 className="text-[#0d1727] text-xl leading-relaxed font-semibold ">
                Price per Night
              </h6>
              <input
                type="number"
                placeholder="Price per Night"
                name="PricePerNight"
                value={PricePerNight}
                onChange={handleChange}
                required
                className="border bg-white py-[18px] px-[25px] text-[14px] w-full"
              />
            </div>
          </div>

          <h6 className="text-[#0d1727] text-xl leading-relaxed font-semibold ">
            Room Image
          </h6>
          <div className="flex items-start">
            {RoomImage && (
              <div className="rounded-[10%] h-[250px]  flex justify-center items-center w-[350px] mr-[20px] relative border">
                <img
                  className="rounded-[10%] object-cover absolute  w-[100%] h-full"
                  src={RoomImage}
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
        </div>
        <h6 className="text-[#0d1727] text-xl leading-relaxed font-semibold ">
          Other Images
        </h6>

        <div className="grid gap-6 grid-cols-5">
          {OtherImages &&
            OtherImages?.map((img, index) => (
              <div className="rounded-[10%] h-[250px]  flex justify-center items-center w-full mr-[20px] relative border">
                <img
                  className="rounded-[10%] object-cover absolute  w-[100%] h-full"
                  src={img}
                  alt="imgs"
                />
              </div>
            ))}
          <input
            type="file"
            name="file"
            onChange={(e) => setotherfile(e.target.files[0])}
            placeholder="Enter Image"
            required
            className="border py-[18px] px-[25px] text-[14px]  rounded-[10%]"
          />
        </div>
      </div>

      <div className="mx-3">
        <div className="flex  flex-col  my-[10px]  text-[14px]">
          <h6 className="text-[#0d1727] text-xl leading-relaxed mb-3 font-semibold ">
            Room Details
          </h6>
          <Editor
            apiKey="09ki2fwskph5jnq8sg8t19u4u84hosicu07j73ckr2n5sja2"
            onInit={(evt, editor) =>
              (editorRefRoomDescription.current = editor)
            }
            initialValue={RoomDetails}
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

        <p className="text-red-600 text-[14px]">{notification}</p>

        {id ? (
          <button
            onClick={updateRoom}
            disabled={progress !== null && progress < 100}
            className="text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white"
          >
            UPDATE
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={progress !== null && progress < 100}
            className="text-[13px] bg-transparent m-auto my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black font-poppins w-[200px] hover:bg-black hover:text-white"
          >
            SAVE
          </button>
        )}
      </div>
    </div>
  );
};

export default NewRoom;
