import React, { useEffect, useState } from "react";

const MyModal = () => {
  const [show, setShow] = useState(false);
  const [emoji, setEmoji] = useState("😎");
  const emojis = ["🧠", "😂", "😎", "🥺", "🤔", "😍", "🐼"];

  useEffect(() => {
    setShow(true);

    setInterval(() => {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      setEmoji(randomEmoji);
    }, 300);
  }, []);

  const handlePlay = () => setShow(false);

  return (
    <div>
      {/* Modal */}
      {show && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-3">Welcome Explorer {emoji}</h5>
              </div>
              <div className="modal-body">
                <p className="text-warning">
                    A demon Lord has captured some pokemons and they need our help in
                    rescuing them. Let's proceed shall we? Click on images only once to save the pokemons.
                  Goodluck!!
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handlePlay}
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
