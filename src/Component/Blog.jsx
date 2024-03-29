import React, { PureComponent } from "react";
import "../css/blog.css";
import chatGPTImg from "../Images/ChatGPT.jpg";
import linuxImg from "../Images/linux-kernel-6.0.jpg";

export default class Blog extends PureComponent {
  render() {
    return (
      <>
        <div id="blogMainContainer" className="blogMainContainer">
          <section className="main">
            <div className="blogcontainer cards-container">
              <h1>Latest News from Blog</h1>
              <div className="flex-container">
                <div className="card-box">
                  <img
                    href="https://www.omgubuntu.co.uk/2022/10/linux-kernel-6-released-new-features"
                    alt="img"
                    src={chatGPTImg}
                    className="card-img"
                  />
                  <div className="card-text">
                    <div className="card-data">
                      <p className="data-text">January 21, 2023</p>
                    </div>
                    <a
                      href="https://openai.com/blog/chatgpt/"
                      className="card-title"
                    >
                      ChatGPT: Optimizing Language Models for Dialogue
                    </a>
                    <p className="card-description">
                      ChatGPT is an AI-powered chatbot developed by the
                      Artificial Intelligence (AI) research company OpenAI. The
                      chatbot uses a field of machine learning known as natural
                      language processing (NLP) to generate responses to users'
                      questions and prompts. As defined by ChatGPT- "Its 'AI is
                      trained on a dataset of internet text and is able to
                      generate human-like text in response to prompts. It can be
                      used for a variety of natural language processing tasks
                      such as language translation, text summarization, and
                      question answering.".
                    </p>
                  </div>
                </div>

                <div className="card-box">
                  <img
                    href="https://www.omgubuntu.co.uk/2022/10/linux-kernel-6-released-new-features"
                    alt="img"
                    src={linuxImg}
                    className="card-img"
                  />

                  <div className="card-data">
                    <p className="data-text">January 21, 2023</p>
                  </div>
                  <a
                    href="https://www.omgubuntu.co.uk/2022/10/linux-kernel-6-released-new-features"
                    className="card-title"
                  >
                    linux: What’s new with Linux Kernel 6.0 version ?
                  </a>
                  <p className="card-description">
                    The Linux Foundation released kernel version 6.0 on October
                    2nd, packed with awesome features. It introduced support for
                    AArch64 (ARM 64 processors) and big changes for server-class
                    processors. Improved NUMA balancing and CPU scheduler
                    changes made impressive performance gains for server CPUs.
                    Server administrators improve performance with a software
                    upgrade
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
