import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import MainCopy from '../maincopy/MainCopy';

function HomePage() {
  const [modalDisplayFlag, setModalDisplayFlag] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    modalDisplayFlag
      ? document.addEventListener("mousedown", handleOutsideClick)
      : document.removeEventListener("mousedown", handleOutsideClick);
  })

  const handleOutsideClick = e => {
    if (!modalRef.current || modalRef.current.contains(e.target)) {
      return;
    }
    setModalDisplayFlag(false);
  }

  function toggleModal() {
    setModalDisplayFlag(!modalDisplayFlag);
  }

  return (
    <div>
      <div className="masthead-image"></div>
      <div className="mainbody-content">
        <MainCopy />
        <button className="learn-more-cta" disabled={modalDisplayFlag} onClick={toggleModal}>Learn More</button>
      </div>
      {modalDisplayFlag &&
        <div class="modal-container">
          <div class="inner-modal">
            <div class="modal-content">
              <iframe title="Call of Duty Zombies" class="embeded-video" ref={modalRef} width="560" height="315" src="https://www.youtube.com/embed/neao27bSRW0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
              <div class="modalExitButton">X</div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default HomePage;
