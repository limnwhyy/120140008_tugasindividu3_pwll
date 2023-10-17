import React from "react";
import Footer from "../layouts/Footer";
import * as AiIcon from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { EmailInput, TextAreaInput, TextInput } from "../components/Input";
import { SendButton } from "../components/Buttons";
import { useState } from "react";

const Kontak = () => {
  const [input, setInput] = useState({
    nama: "",
    email: "",
    pesan: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const dbUrl = "https://sheetdb.io/api/v1/ay0yz9v5p8b54";

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    toast
      .promise(
        axios.post(dbUrl, input),
        {
          loading: "Sending...",
          success: "Success",
          error: "Can't send messages, try again",
        },
        {
          style: {
            minWidth: "200px",
          },
        }
      )
      .then(() => {
        console.log(input);
        setInput({
          nama: "",
          email: "",
          pesan: "",
        });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="container col">
      <main
        className="row"
        style={{
          flex: 1,
        }}
      >
        <div
          style={{
            gap: 30,
            padding: 30,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>Find me on: </h2>
          <div
            className="social-group"
            style={{
              paddingLeft: 50,
            }}
          >
            <a
              className="social-link"
              href="https://web.facebook.com/muslimnwhyy"
              target="_blank"
              rel="noreferrer"
            >
              <AiIcon.AiFillFacebook size={32} />
              Muhammad Muslim Nur Wahyudi
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/muslimnwhyy/"
              target="_blank"
              rel="noreferrer"
            >
              <AiIcon.AiFillInstagram size={32} />
              muslimnwhyy
            </a>
            <a
              className="social-link"
              href="https://github.com/limnwhyy"
              target="_blank"
              rel="noreferrer"
            >
              <AiIcon.AiFillGithub size={32} />
              limnwhyy
            </a>
          </div>
        </div>
        <div
          style={{
            gap: 30,
            flex: 1,
            padding: 30,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>Contact me</h2>
          <div
            className="social-group"
            style={{
              flex: 1,
              display: "flex",
              paddingLeft: 50,
              paddingRight: 100,
            }}
          >
            <TextInput
              placeholder={"Name"}
              name={"nama"}
              id={"nama"}
              value={input.nama}
              onChange={handleOnChange}
            />
            <EmailInput
              placeholder={"Email(example@gmail.com)"}
              name={"email"}
              id={"email"}
              value={input.email}
              onChange={handleOnChange}
            />
            <TextAreaInput
              placeholder={"Text here"}
              name={"pesan"}
              id={"pesan"}
              value={input.pesan}
              onChange={handleOnChange}
            />
            <SendButton
              name={"Send"}
              actions={handleSubmit}
              conditions={isLoading}
              styles={isLoading ? "disabled" : "send"}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontak;
