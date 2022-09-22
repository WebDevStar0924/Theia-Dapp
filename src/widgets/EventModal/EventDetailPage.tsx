import { Flex } from "components/Flex";
import { useRef, useState } from "react";
import { useToast } from "../../hooks/useToast";
import boldSvg from "./wysiwyg/bold.svg";
import italicSvg from "./wysiwyg/italic.svg";
import imageSvg from "./wysiwyg/image.svg";
import linkSvg from "./wysiwyg/link.svg";
import orderedSvg from "./wysiwyg/ordered.svg";
import { TextView } from "components/TextView";
import { Button } from "components/Button";
import subscriptSvg from "./wysiwyg/subscript.svg";
import superscriptSvg from "./wysiwyg/superscript.svg";
import unorderedSvg from "./wysiwyg/unordered.svg";
import UploadSvg from "../../assets/svg/upload.svg";
import { Editor } from "react-draft-wysiwyg";
import { ModalBodyWrapper } from "./styles";
import { useEffect } from "react";
interface iProps { }

export default function EventDetailPage(this: any, props: iProps) {
  const photoRef = useRef<HTMLInputElement>(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [photoImg, setPhotoImg] = useState<any>();
  const { toastWarning } = useToast();
  const [summary, setSummary] = useState("");
  // const [description, setDescription] = useState(EditorState.createEmpty());
  const [isActiveButton, activePostButton] = useState(false);

  const photoChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 1024 * 1024) {
        toastWarning("Max image size is 1MB!", "");
        setPhotoFile(null);
      } else {
        setPhotoImg(URL.createObjectURL(file));
        setPhotoFile(file);
      }
    }
  };
  function validationCheck() {
    let validation = true;
    if (photoFile === null) validation = false;
    if (summary === "") validation = false;
    // if (description.getCurrentContent().getPlainText() === "")
    // validation = false;
    activePostButton(validation);
  }

  useEffect(() => {
    validationCheck();
  });

  return (
    <ModalBodyWrapper>
      <Flex
        flexDirection="column"
        style={{ marginTop: "42px", gap: "24px", marginRight: "28px" }}
      >
        <div className="pageTitle">Details</div>
        <Flex flexDirection="column" style={{ gap: "8px" }}>
          <Flex justifyContent="space-between" alignItems="center">
            <p className="fieldTitle">Event Image</p>
          </Flex>
          <div
            className="uploadForm"
            onClick={() => {
              photoRef.current && photoRef.current.click();
            }}
          >
            <input
              ref={photoRef}
              className="form-control"
              type="file"
              style={{ display: "none" }}
              accept="image/png, image/jpeg"
              required
              name="banner"
              onChange={photoChange}
            />
            {photoFile === null ? (
              <>
                <div className="uploadArea">
                  <img src={UploadSvg} alt="upload" />
                </div>
                <p className="addPhoto">Add photo</p>
                <p className="dragAndDrop">or drag and drop</p>
              </>
            ) : (
              <>
                <img
                  src={photoImg}
                  alt="Banner"
                  className="uploadImageContainer"
                />
              </>
            )}
          </div>
        </Flex>
        <Flex flexDirection="column" style={{ gap: "8px" }}>
          <Flex justifyContent="space-between" alignItems="center">
            <p className="fieldTitle">Description</p>
          </Flex>
          <TextView
            label={""}
            placeholder=" Summary
            Write a short event summary to get attendees excited"
            value={summary}
            onUserInput={(val) => {
              setSummary(val);
            }}
            rows={0}
          ></TextView>

          <Flex justifyContent="flex-end" alignItems="center">
            <p className="characterLimit">0/140</p>
          </Flex>
        </Flex>
        <div className="eventDescription">
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            // initialContentState={description}
            placeholder={"Write a short description of the event."}
            toolbar={{
              options: ["inline", "link", "image", "list"],
              inline: {
                inDropdown: false,
                options: ["bold", "italic", "superscript", "subscript"],
                bold: { icon: boldSvg },
                italic: { icon: italicSvg },
                superscript: { icon: superscriptSvg },
                subscript: { icon: subscriptSvg },
              },
              link: { options: ["link"], link: { icon: linkSvg } },
              image: {
                icon: imageSvg,
              },
              list: {
                options: ["unordered", "ordered"],
                unordered: { icon: unorderedSvg },
                ordered: { icon: orderedSvg },
              },
            }}
          />
        </div>
        <Flex justifyContent="center" style={{ marginTop: "52px" }}>
          {isActiveButton === true ? (
            <Button className="postButton">POST</Button>
          ) : (
            <Button className="postButton" disabled>
              POST
            </Button>
          )}
        </Flex>
      </Flex>
    </ModalBodyWrapper>
  );
}
