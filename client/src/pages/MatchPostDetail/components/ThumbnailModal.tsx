import React from "react";
import styled from "styled-components";
import Modal from "./../../../styles/Modal";

const ThumbnailModal: React.FC<{ onToggleThumbnail: () => void }> = ({
  onToggleThumbnail,
}) => {
  return (
    <Modal onClick={() => onToggleThumbnail && onToggleThumbnail()}>
      <Thumbnail
        src={
          "https://res.klook.com/image/upload/Mobile/City/g9ynzkjz1nsrvhrjml4j.jpg"
        }
        onClick={(e) => e.stopPropagation()}
      />
    </Modal>
  );
};

export default ThumbnailModal;

const Thumbnail = styled.img`
  max-width: 1000px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
