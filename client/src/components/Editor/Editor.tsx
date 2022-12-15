import React, { LegacyRef, useRef } from "react";
import { Editor as ToastEditor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

interface EditorProps {
  placeholder?: string;
  initialValue?: string;
}

const Editor: React.FC<EditorProps> = ({ placeholder, initialValue }) => {
  const editorRef: LegacyRef<ToastEditor> = useRef(null);

  const onClick = () => {
    const data = editorRef.current?.getInstance();
    const html = editorRef.current?.getInstance().getHTML();
    console.log(data); // editor의 속성을 모두 가져옴
    console.log(html); // 작성한 내용을 가져옴
  };

  return (
    <div>
      <ToastEditor
        ref={editorRef}
        placeholder={placeholder || "내용을 작성해주세요."}
        initialValue={initialValue || " "}
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        language="ko-KR"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["ul", "ol", "task"],
          ["link"],
        ]}
      />
      <button onClick={onClick}>가져오기</button>
    </div>
  );
};

export default Editor;
