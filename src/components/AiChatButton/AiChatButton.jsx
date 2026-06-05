import React, { useState, useEffect } from "react";
import "./AiChatButton.css";

const AiChatButton = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [hint, setHint] = useState(false);
  const [typing, setTyping] = useState(false);

  // count user messages
  const [msgCount, setMsgCount] = useState(0);

  //  welcome message on load
  useEffect(() => {
    setTimeout(() => {
      setMessages([
        { text: "👋 Welcome! How can we help you ?", type: "bot" },
      ]);
    }, 1000);
  }, []);

  //  5 sec hint popup
  useEffect(() => {
    const interval = setInterval(() => {
      setHint(true);
      setTimeout(() => setHint(false), 2500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const playSound = () => {
    const audio = new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3"
    );
    audio.play();
  };

  const handleSend = () => {
    if (!message.trim()) return;

    const userMsg = { text: message, type: "user" };

    setMessages((prev) => [...prev, userMsg]);
    setMessage("");

    setTyping(true);

    // increase message count
    const newCount = msgCount + 1;
    setMsgCount(newCount);

    setTimeout(() => {
      setTyping(false);

      let botMsg;

      //  FIRST MESSAGE
      if (newCount === 1) {
        botMsg = {
          text: "✅ Thanks for your message! How can we help you more?",
          type: "bot",
        };
      }

      //  SECOND MESSAGE (YOUR REQUIREMENT)
      else {
        botMsg = {
          text:
            "🙏 Thank you for your message. Team will contact you as soon as possible.",
          type: "bot",
        };
      }

      setMessages((prev) => [...prev, botMsg]);
      playSound();
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      <button className="ai-fab" onClick={() => setOpen(true)}>
        🤖
      </button>

      {/* Hint */}
      {hint && !open && (
        <div className="ai-hint"> How can I help you 🤔</div>
      )}

      {/* Chat Box */}
      {open && (
        <div className="ai-box">

          {/* Header */}
          <div className="ai-header">


<span className="hero-badge">
  
  
<img src={`${import.meta.env.BASE_URL}ab_logo.png`} alt="AB Marketing Wings" className="hero-badge-logo" />
  <strong>AB Marketing Wings</strong>
</span>

         <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="ai-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.type === "user" ? "msg user" : "msg bot"}
              >
                {msg.text}
              </div>
            ))}

            {/* typing indicator */}
            {typing && (
              <div className="msg bot typing">
                typing<span>...</span>
              </div>
            )}
          </div>

          {/* Input */}
        <div className="ai-input">
  <input
    type="text"
    placeholder="Type message..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSend()}
  />

  <button onClick={handleSend} className="send-btn">
    ➜
  </button>
</div>
        </div>
      )}
    </>
  );
};

export default AiChatButton;