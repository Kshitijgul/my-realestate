import React from "react";
// Ensure this path is correct: "../assets/whatsapp.png"
import whatsapp from "../assets/whatsapp.png";

const WHATSAPP_ICON_URL = whatsapp;

// You can customize the message inside the bubble here
const BUBBLE_MESSAGE = "Have a question? Chat with us!";
// const BUTTON_TEXT = "Inquire Now"; // 🎯 UNCOMMENTED: Added the constant back

/**
 * A floating button component with a text call-to-action and a chat bubble prompt.
 */
const FloatingWhatsAppButton = ({
  phoneNumber = "918856037620",
  preFilledMessage = "Hello, I have reached from your Website. Looking for Property in Nagpur. Please Share details!",
}) => {
  const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(preFilledMessage);
  const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

  return (
    // Outer container fixed on screen
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* 🎯 The Chat Bubble / Tooltip */}
      <div
        className="
          relative mb-2 p-3 
          bg-[#EE4C01] text-white text-lg font-medium 
          rounded-xl rounded-br-none shadow-xl 
          max-w-xs cursor-default
          transition duration-300 ease-in-out transform hover:scale-105
        "
      >
        {BUBBLE_MESSAGE}

        {/* The little arrow/tail to make it look like a speech bubble */}
        <div
          className="
            absolute bottom-0 right-0 
            w-0 h-0 
            border-l-[10px] border-l-transparent 
            border-t-[10px] border-t-white 
            border-r-[10px] border-r-transparent
            transform translate-y-full -translate-x-full
          "
        ></div>
      </div>

      {/* The original WhatsApp Button (Inquire Now) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-500 hover:bg-green-600 
          text-white 
          py-3 px-3 sm:py-4 sm:px-4 
          rounded-full 
          shadow-lg 
          transition duration-300 ease-in-out 
          transform hover:scale-105
          flex items-center space-x-2 
          text-base sm:text-lg font-semibold
        "
        // aria-label={`Chat on WhatsApp: ${BUTTON_TEXT}`}
      >
        <img
          src={WHATSAPP_ICON_URL}
          alt="WhatsApp Icon"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        {/* 🎯 UNCOMMENTED: Re-enabling the button text */}
        {/* <span>{BUTTON_TEXT}</span>  */}
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;