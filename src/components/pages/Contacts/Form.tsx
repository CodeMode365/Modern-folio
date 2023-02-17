import React from 'react'

const Form = () => {
  return (
    <div className="right-contact">
            <form
              action=""
              className="contact-form"
            >
              <div className="input-control i-c-2">
                <input
                  type="text"
                  required
                  placeholder="YOUR NAME"
                  id="username"
                  name="username"
                />
                <input
                  type="email"
                  required
                  placeholder="YOUR EMAIL"
                  id="email"
                  name="email"
                />
              </div>
              <div className="input-control">
                <input
                  type="text"
                  required
                  placeholder="ENTER SUBJECT"
                  id="subject"
                  name="subject"
                />
              </div>
              <div className="input-control">
                <textarea
                  name="message"
                  cols={15}
                  rows={8}
                  placeholder="Message Here..."
                  id="message"
                ></textarea>
              </div>
              <div className="submit-btn">
                <button
                  id="submit-btn"
                  className="submit-btn main-btn"
                  type="submit"
                >
                  <span className="btn-text">Send</span>
                  <span className="btn-icon">
                    <i className="fas fa-mail-bulk"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
  )
}

export default Form