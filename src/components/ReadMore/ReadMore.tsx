import { forwardRef, useImperativeHandle, useState } from "react";
import { ReadMoreWrapper } from "./styles";

interface iProps {
  children: string;
  length: number;
  itemClick: () => void;
  // overClicked : any;
}

const ReadMore = forwardRef(
  ({ children, length = 150, itemClick }: iProps, ref) => {
    const text: string = children;
    const [isReadMore, setIsReadMore] = useState(true);
    // React.useEffect(() => {
    // 	overClicked.current = toggleReadMore();
    // }, [])
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    useImperativeHandle(ref, () => ({
      toggleRead() {
        toggleReadMore();
      },
    }));

    return (
      <ReadMoreWrapper
        onClick={() => {
          toggleReadMore();
          itemClick();
        }}
      >
        <div className={isReadMore && text.length > length ? "blur" : ""}>
          {isReadMore ? text.slice(0, length) : text}
        </div>
      </ReadMoreWrapper>
    );
  }
);

export default ReadMore;
